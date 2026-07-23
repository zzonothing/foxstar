// api/auth.js — 로그인 엔드포인트 (닉네임+개인 PIN 이 기본, 공용 비밀번호는 비상/등록 게이트)
//
// 모드 (POST body 의 mode 필드):
//   member-login  { name, pin }             — 닉네임 + 개인 PIN 로그인.
//                                             성공 시 fstar_session(관리자 여부는 members.is_admin)
//                                             + fstar_member 두 쿠키를 함께 발급한다.
//   member-claim  { name, accessKey, pin }  — 최초 1회 PIN 등록(클레임). 아무나 URL 만 알면
//                                             등록하는 것을 막기 위해 공용 비밀번호(ACCESS_KEY)를
//                                             게이트로 요구한다. 성공 시 두 쿠키 발급.
//   refresh       {}                        — 자동 로그인: 유효한 fstar_member 쿠키가 있으면
//                                             입력 없이 fstar_session 을 재발급 (30일 멤버 쿠키
//                                             덕에 한 달에 한 번만 접속해도 무입력 통과).
//   (mode 없음)   { password }              — 기존 공용 비밀번호 입장(비상용).
//                                             ADMIN_KEY 일치 → 관리자 세션, ACCESS_KEY → 일반 세션.
//                                             멤버 신원은 발급하지 않는다.
//
// 관리자 = members.is_admin (시드의 ADMIN_NAMES, 기본 'SUM,유화') 인 멤버로 로그인.
// ADMIN_KEY 는 비상 입장과 Bearer API(admin-data/ingest)용으로 유지된다.

const crypto = require('crypto');
const { sessionCookie, memberCookie, verifyMemberRequest } = require('./_lib/session');
const { UNION_ID, query } = require('./_lib/db');
const { PIN_RE, hashPin, timingSafeHexEqual, RENEW_AFTER_MS } = require('./_lib/member');

// 타이밍 공격 방지: 해시 후 고정 길이 비교 (문자열 길이 정보도 새지 않음)
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// 브루트포스 감속: 실패 응답을 350~650ms 지연
function delay() {
  return new Promise(r => setTimeout(r, 350 + Math.floor(Math.random() * 300)));
}

function memberRow(name) {
  return query(
    'SELECT uid, name, active, is_admin, pin_hash, pin_salt FROM members WHERE union_id = $1 AND name = $2',
    [UNION_ID, name]);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const mode = String(body.mode || '');

  try {
    // ── 닉네임 + 개인 PIN 로그인 ─────────────────────────────────
    if (mode === 'member-login') {
      const name = String(body.name || '').trim().slice(0, 50);
      const pin = String(body.pin || '');
      if (!name || !PIN_RE.test(pin)) {
        await delay();
        return res.status(401).json({ error: '닉네임 또는 PIN 이 올바르지 않습니다' });
      }
      const rows = await memberRow(name);
      const row = rows[0];
      // 존재/활성/등록/PIN 을 한 경로로 검증해 실패 사유가 응답 시간으로 새지 않게 한다
      const ok = row && row.active && row.pin_hash &&
        timingSafeHexEqual(hashPin(pin, row.pin_salt || '00'), row.pin_hash);
      if (!ok) {
        await delay();
        return res.status(401).json({ error: '닉네임 또는 PIN 이 올바르지 않습니다' });
      }
      res.setHeader('Set-Cookie', [sessionCookie(!!row.is_admin), memberCookie(row.uid)]);
      return res.status(200).json({ ok: true, admin: !!row.is_admin, me: { uid: row.uid, name: row.name } });
    }

    // ── 최초 PIN 등록 (공용 비밀번호 게이트) ─────────────────────
    if (mode === 'member-claim') {
      const name = String(body.name || '').trim().slice(0, 50);
      const pin = String(body.pin || '');
      if (!process.env.ACCESS_KEY || !body.accessKey || !safeEqual(body.accessKey, process.env.ACCESS_KEY)) {
        await delay();
        return res.status(401).json({ error: '공용 비밀번호가 올바르지 않습니다' });
      }
      if (!PIN_RE.test(pin)) return res.status(400).json({ error: 'PIN 은 숫자 4~8자리여야 합니다' });

      const rows = await memberRow(name);
      const row = rows[0];
      if (!row || !row.active) return res.status(404).json({ error: '로스터에 없는 닉네임입니다. 게임 내 닉네임 그대로 입력해 주세요.' });
      if (row.pin_hash) return res.status(409).json({ error: '이미 등록된 닉네임입니다. 본인이라면 운영진에게 초기화를 요청하세요.' });

      // WHERE pin_hash IS NULL 가드로 동시 등록 경쟁을 원자적으로 차단
      const salt = crypto.randomBytes(16).toString('hex');
      const updated = await query(
        'UPDATE members SET pin_hash = $3, pin_salt = $4, claimed_at = now(), updated_at = now() ' +
        'WHERE union_id = $1 AND uid = $2 AND active AND pin_hash IS NULL RETURNING uid',
        [UNION_ID, row.uid, hashPin(pin, salt), salt]);
      if (!updated.length) return res.status(409).json({ error: '이미 등록된 닉네임입니다. 본인이라면 운영진에게 초기화를 요청하세요.' });

      res.setHeader('Set-Cookie', [sessionCookie(!!row.is_admin), memberCookie(row.uid)]);
      return res.status(200).json({ ok: true, admin: !!row.is_admin, me: { uid: row.uid, name: row.name } });
    }

    // ── 자동 로그인 (멤버 쿠키 → 세션 재발급) ────────────────────
    if (mode === 'refresh') {
      const m = verifyMemberRequest(req);
      if (!m.valid) return res.status(401).json({ error: 'no member cookie' });
      const rows = await query(
        "SELECT m.name, m.active, m.is_admin, " +
        "(SELECT value FROM app_settings WHERE union_id = $1 AND key = 'member_epoch') AS epoch " +
        'FROM members m WHERE m.union_id = $1 AND m.uid = $2',
        [UNION_ID, m.uid]);
      const row = rows[0];
      if (!row || !row.active) return res.status(401).json({ error: 'inactive' });
      if (m.issued < parseInt(row.epoch || '0', 10)) return res.status(401).json({ error: 'reauth required' });

      const cookies = [sessionCookie(!!row.is_admin)];
      if (Date.now() - m.issued > RENEW_AFTER_MS) cookies.push(memberCookie(m.uid)); // 슬라이딩 갱신
      res.setHeader('Set-Cookie', cookies);
      return res.status(200).json({ ok: true, admin: !!row.is_admin, me: { uid: m.uid, name: row.name } });
    }

    // ── 공용 비밀번호 입장 (비상용 — 멤버 신원 없음) ─────────────
    const { password } = body;
    const adminKey = process.env.ADMIN_KEY;
    let isAdmin;
    if (adminKey && password && safeEqual(password, adminKey)) {
      isAdmin = true;
    } else if (process.env.ACCESS_KEY && password && safeEqual(password, process.env.ACCESS_KEY)) {
      isAdmin = false;
    } else {
      await delay();
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.setHeader('Set-Cookie', sessionCookie(isAdmin));
    return res.status(200).json({ ok: true, admin: isAdmin });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
