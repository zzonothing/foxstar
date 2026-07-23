// api/member-auth.js — 멤버 신원: 닉네임 클레임 + 개인 PIN
//
// 회원가입이 아니라 '로스터의 자기 닉네임을 찾아가는' 방식:
//   최초 1회  : 닉네임 선택 + 본인 PIN(4~8자리) 설정 (claim)
//   새 기기   : 닉네임 + 본인 PIN 입력 (login)
//   이후      : fstar_member 쿠키(30일 + 15일 경과 시 슬라이딩 재발급)로 자동 인식
//   PIN 분실  : 관리자 reset → 다시 claim
//
// 사칭 방지: 등록된 닉네임으로의 쓰기는 본인 PIN 없이 불가. 미등록 닉네임을
// 남이 선점해도 진짜 주인이 claim 시도 시 409 로 발각 → 관리자 reset 복구.
//
// 모든 메서드는 유효한 fstar_session(공용 비밀번호 로그인)을 전제한다.
//
// 메서드:
//   GET  /api/member-auth → { admin, me: {uid,name}|null, roster: [{uid,name,claimed}] }
//   POST /api/member-auth   body: { action, … }
//     action=claim {uid, pin}   — 미등록 닉네임에 PIN 설정 + 쿠키 발급 (등록됨=409)
//     action=login {uid, pin}   — PIN 검증 + 쿠키 발급
//     action=logout             — 쿠키 제거
//     action=reset {uid}        — [관리자] PIN 초기화 (분실/선점 사고 복구)
//     action=forceReauth        — [관리자] member_epoch 갱신 → 전 멤버 쿠키 무효화

const crypto = require('crypto');
const { verifyRequest, sessionCookie, memberCookie, clearMemberCookie } = require('./_lib/session');
const { UNION_ID, query, setSetting } = require('./_lib/db');
const { verifyMemberIdentity, PIN_RE, hashPin, timingSafeHexEqual } = require('./_lib/member');

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

function delay() {
  return new Promise(r => setTimeout(r, 350 + Math.floor(Math.random() * 300)));
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const auth = verifyRequest(req);
  if (!auth.valid) return res.status(401).json({ error: 'auth required' });

  try {
    if (req.method === 'GET') {
      const me = await verifyMemberIdentity(req);
      if (me && me.renewCookie) res.setHeader('Set-Cookie', me.renewCookie); // 슬라이딩 갱신
      const roster = await query(
        'SELECT uid, name, (pin_hash IS NOT NULL) AS claimed FROM members ' +
        'WHERE union_id = $1 AND active ORDER BY name',
        [UNION_ID]
      );
      return res.status(200).json({
        admin: !!auth.admin,
        me: me ? { uid: me.uid, name: me.name } : null,
        roster,
      });
    }

    if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
    const b = readBody(req);
    const action = String(b.action || '');

    if (action === 'claim') {
      const uid = String(b.uid || '');
      const pin = String(b.pin || '');
      if (!PIN_RE.test(pin)) return res.status(400).json({ error: 'PIN 은 숫자 4~8자리여야 합니다' });

      const rows = await query('SELECT name, active, is_admin, pin_hash FROM members WHERE union_id = $1 AND uid = $2', [UNION_ID, uid]);
      if (!rows.length || !rows[0].active) return res.status(404).json({ error: '로스터에 없는 닉네임입니다' });
      if (rows[0].pin_hash) return res.status(409).json({ error: '이미 등록된 닉네임입니다. 본인이라면 운영진에게 초기화를 요청하세요.' });

      // WHERE pin_hash IS NULL 가드로 동시 클레임 경쟁을 원자적으로 차단
      const salt = crypto.randomBytes(16).toString('hex');
      const updated = await query(
        'UPDATE members SET pin_hash = $3, pin_salt = $4, claimed_at = now(), updated_at = now() ' +
        'WHERE union_id = $1 AND uid = $2 AND active AND pin_hash IS NULL RETURNING name',
        [UNION_ID, uid, hashPin(pin, salt), salt]
      );
      if (!updated.length) return res.status(409).json({ error: '이미 등록된 닉네임입니다. 본인이라면 운영진에게 초기화를 요청하세요.' });

      // 세션도 함께 재발급 — 관리자 멤버(is_admin)면 즉시 관리자 권한 반영
      res.setHeader('Set-Cookie', [memberCookie(uid), sessionCookie(!!rows[0].is_admin)]);
      return res.status(200).json({ ok: true, me: { uid, name: updated[0].name } });
    }

    if (action === 'login') {
      const uid = String(b.uid || '');
      const pin = String(b.pin || '');
      const rows = await query('SELECT name, active, is_admin, pin_hash, pin_salt FROM members WHERE union_id = $1 AND uid = $2', [UNION_ID, uid]);
      const row = rows[0];
      // 존재/등록/PIN 을 한 경로로 검증해 실패 사유가 응답 시간으로 새지 않게 한다
      const ok = row && row.active && row.pin_hash && PIN_RE.test(pin) &&
        timingSafeHexEqual(hashPin(pin, row.pin_salt || '00'), row.pin_hash);
      if (!ok) {
        await delay(); // 브루트포스 감속 (api/auth.js 와 동일 패턴)
        return res.status(401).json({ error: '닉네임 또는 PIN 이 올바르지 않습니다' });
      }
      // 세션도 함께 재발급 — 관리자 멤버(is_admin)면 즉시 관리자 권한 반영
      res.setHeader('Set-Cookie', [memberCookie(uid), sessionCookie(!!row.is_admin)]);
      return res.status(200).json({ ok: true, me: { uid, name: row.name } });
    }

    if (action === 'logout') {
      res.setHeader('Set-Cookie', clearMemberCookie());
      return res.status(200).json({ ok: true });
    }

    if (action === 'reset') {
      if (!auth.admin) return res.status(403).json({ error: 'admin only' });
      const uid = String(b.uid || '');
      const rows = await query(
        'UPDATE members SET pin_hash = NULL, pin_salt = NULL, claimed_at = NULL, updated_at = now() ' +
        'WHERE union_id = $1 AND uid = $2 RETURNING name',
        [UNION_ID, uid]
      );
      if (!rows.length) return res.status(404).json({ error: '해당 멤버 없음' });
      return res.status(200).json({ ok: true, reset: rows[0].name });
    }

    if (action === 'forceReauth') {
      if (!auth.admin) return res.status(403).json({ error: 'admin only' });
      // 이후 발급 쿠키만 유효 — 기존 멤버 쿠키는 전부 재인증 필요
      await setSetting('member_epoch', String(Date.now()));
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: '알 수 없는 action' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
