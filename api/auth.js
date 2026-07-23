// api/auth.js — 로그인 엔드포인트 (닉네임 선택 + 개인 PIN 전용)
//
// 공용 비밀번호·관리자 키 로그인은 폐지되었다. 지정 인원끼리 공유하는
// 사이트라는 전제에서, 로그인은 오직 "로스터의 닉네임 + 각자 등록한 PIN".
// 도용 가능성은 커뮤니티 합의로 무시한다(관리자 PIN 초기화·scripts/reset-pin.js
// 로 재정리 가능). ADMIN_KEY 는 웹 로그인이 아니라 Bearer API(admin-data/ingest)
// 전용으로만 남는다.
//
// 메서드:
//   GET  /api/auth                          — 공개 로스터: { members: [{name, claimed}] }
//                                             (로그인 페이지 콤보박스용. uid 는 노출하지 않음.
//                                              이름 ABC(코드포인트) 순 정렬)
//   POST { mode:'member-login', name, pin } — 로그인. 성공 시 fstar_session(관리자 여부는
//                                             members.is_admin) + fstar_member 두 쿠키 발급.
//   POST { mode:'member-claim', name, pin } — 최초 1회 PIN 등록(미등록 닉네임만). 게이트 없음.
//   POST { mode:'refresh' }                 — 자동 로그인: 유효한 fstar_member 쿠키가 있으면
//                                             입력 없이 fstar_session 재발급.
//
// 관리자 = members.is_admin (시드의 ADMIN_NAMES, 기본 'SUM,유화') 인 멤버로 로그인.
// 주의: 토큰 서명 키는 SESSION_SECRET(미설정 시 ACCESS_KEY 폴백 — api/_lib/session.js).
// ACCESS_KEY 를 env 에서 제거하려면 SESSION_SECRET 을 먼저 설정할 것.

const crypto = require('crypto');
const { sessionCookie, memberCookie, verifyMemberRequest } = require('./_lib/session');
const { UNION_ID, query } = require('./_lib/db');
const { PIN_RE, hashPin, timingSafeHexEqual, RENEW_AFTER_MS } = require('./_lib/member');

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
  try {
    // ── 공개 로스터 (로그인/등록 콤보박스용) ─────────────────────
    if (req.method === 'GET') {
      res.setHeader('Cache-Control', 'no-store');
      const rows = await query(
        'SELECT name, (pin_hash IS NOT NULL) AS claimed FROM members ' +
        'WHERE union_id = $1 AND active ORDER BY name',
        [UNION_ID]);
      return res.status(200).json({ members: rows.map(r => ({ name: r.name, claimed: !!r.claimed })) });
    }

    if (req.method !== 'POST') return res.status(405).end();
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const mode = String(body.mode || '');

    // ── 닉네임 + 개인 PIN 로그인 ─────────────────────────────────
    if (mode === 'member-login') {
      const name = String(body.name || '').trim().slice(0, 50);
      const pin = String(body.pin || '');
      if (!name || !PIN_RE.test(pin)) {
        await delay();
        return res.status(401).json({ error: 'PIN 이 올바르지 않습니다' });
      }
      const rows = await memberRow(name);
      const row = rows[0];
      // 존재/활성/등록/PIN 을 한 경로로 검증해 실패 사유가 응답 시간으로 새지 않게 한다
      const ok = row && row.active && row.pin_hash &&
        timingSafeHexEqual(hashPin(pin, row.pin_salt || '00'), row.pin_hash);
      if (!ok) {
        await delay();
        return res.status(401).json({ error: 'PIN 이 올바르지 않습니다' });
      }
      res.setHeader('Set-Cookie', [sessionCookie(!!row.is_admin), memberCookie(row.uid)]);
      return res.status(200).json({ ok: true, admin: !!row.is_admin, me: { uid: row.uid, name: row.name } });
    }

    // ── 최초 PIN 등록 (미등록 닉네임 선택) ───────────────────────
    if (mode === 'member-claim') {
      const name = String(body.name || '').trim().slice(0, 50);
      const pin = String(body.pin || '');
      if (!PIN_RE.test(pin)) return res.status(400).json({ error: 'PIN 은 숫자 4~8자리여야 합니다' });

      const rows = await memberRow(name);
      const row = rows[0];
      if (!row || !row.active) return res.status(404).json({ error: '로스터에 없는 닉네임입니다' });
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

    return res.status(400).json({ error: '알 수 없는 mode' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
