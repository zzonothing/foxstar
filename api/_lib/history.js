// api/_lib/history.js — 로스터 동기화 + 데일리 히스토리 upsert 공용 모듈 (CommonJS)
//
// scripts/seed.js(초기 백필)와 api/ingest.js(스크래퍼 주기 수집)가 공유한다.
//
// 데일리 모델: 멤버/캐릭터당 '하루 1 row'. 같은 KST 날짜의 재수집은 UPDATE,
// 날짜가 바뀌면 INSERT — INSERT … ON CONFLICT DO UPDATE 한 문장으로 처리되므로
// 호출부는 '오늘 첫 수집인지'를 판단할 필요가 없다. 각 row 는 그 날의 최종
// 상태를 담고, updated_at 이 마지막 수집 시각을 남긴다.
//
// 캐릭터 표시명: raid.js squad 의 name 표기와 동일하게 "이름" 또는
// "이름 : 서브명" — 페이지들의 이름 매칭·초상화(imgOf) 규칙과 맞춘다.

const { UNION_ID, query, kstToday } = require('./db');

function displayCharName(c) {
  return c.subName ? c.name + ' : ' + c.subName : c.name;
}

function intOrNull(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : null;
}

function strOrNull(v) {
  const s = v === null || v === undefined ? '' : String(v).trim();
  return s ? s.slice(0, 100) : null;
}

// 로스터 동기화: 최신 시즌 members 배열 기준으로 upsert(name/active 갱신),
// 목록에 없는 uid 는 active=false (행 삭제 금지 — 제출/응답 기록이 참조).
// PIN 관련 컬럼은 건드리지 않는다.
async function syncRoster(members) {
  const list = (members || []).filter(m => m && m.uid && m.name);
  if (!list.length) return { upserted: 0, deactivated: 0 };

  const values = [];
  const params = [UNION_ID];
  list.forEach((m, i) => {
    values.push('($1, $' + (i * 2 + 2) + ', $' + (i * 2 + 3) + ', true, now())');
    params.push(String(m.uid), String(m.name).slice(0, 50));
  });
  await query(
    'INSERT INTO members (union_id, uid, name, active, updated_at) VALUES ' + values.join(', ') +
    ' ON CONFLICT (union_id, uid) DO UPDATE SET name = EXCLUDED.name, active = true, updated_at = now()',
    params
  );

  const uidParams = [UNION_ID];
  const uidPh = list.map((m, i) => { uidParams.push(String(m.uid)); return '$' + (i + 2); });
  const deactivated = await query(
    'UPDATE members SET active = false, updated_at = now() ' +
    'WHERE union_id = $1 AND active AND uid NOT IN (' + uidPh.join(', ') + ') RETURNING uid',
    uidParams
  );
  return { upserted: list.length, deactivated: deactivated.length };
}

// 멤버 데일리 upsert. members = UNION 최신 시즌 members 배열, dateStr 미지정 시 KST 오늘.
async function upsertMemberDaily(members, dateStr) {
  const date = dateStr || kstToday();
  const list = (members || []).filter(m => m && m.uid);
  if (!list.length) return 0;

  const values = [];
  const params = [UNION_ID, date];
  list.forEach((m, i) => {
    const base = i * 3 + 3;
    values.push('($1, $' + base + ', $2, $' + (base + 1) + ', $' + (base + 2) + '::jsonb, now())');
    params.push(
      String(m.uid),
      intOrNull(m.syncroLevel),
      JSON.stringify({
        normal: m.normal ?? null,
        hard: m.hard ?? null,
        tribeTower: m.tribeTower ?? null,
        overclock: m.overclock ?? null,
        outpost: m.outpost ?? null,
        role: m.role ?? null,
      })
    );
  });
  await query(
    'INSERT INTO member_daily (union_id, uid, snapshot_date, syncro_level, fields, updated_at) VALUES ' +
    values.join(', ') +
    ' ON CONFLICT (union_id, uid, snapshot_date) DO UPDATE SET ' +
    'syncro_level = EXCLUDED.syncro_level, fields = EXCLUDED.fields, updated_at = now()',
    params
  );
  return list.length;
}

// 캐릭터 데일리 upsert. charsByUid = CHARACTERS 형태 { "<uid>": [ {char}, … ], "actionDate": … }.
// 행이 많아(멤버 32 × 캐릭터 ~100) 배치 INSERT 로 왕복을 줄인다.
const CHAR_BATCH = 150;

async function upsertCharacterDaily(charsByUid, dateStr) {
  const date = dateStr || kstToday();
  const rows = [];
  for (const uid of Object.keys(charsByUid || {})) {
    const arr = charsByUid[uid];
    if (!Array.isArray(arr)) continue; // "actionDate" 등 비배열 키 제외
    for (const c of arr) {
      if (!c || !c.name) continue;
      rows.push([
        String(uid), displayCharName(c).slice(0, 100),
        intOrNull(c.characterLevel),
        intOrNull(c.skill1), intOrNull(c.skill2), intOrNull(c.skill3),
        strOrNull(c.upgrade), strOrNull(c.itemGrade), intOrNull(c.itemLevel),
        intOrNull(c.harmonyCubeLevel),
        intOrNull(c.atk), intOrNull(c.hp), intOrNull(c.def),
      ]);
    }
  }
  const COLS = 13; // union_id·date 제외한 per-row 파라미터 수
  for (let off = 0; off < rows.length; off += CHAR_BATCH) {
    const batch = rows.slice(off, off + CHAR_BATCH);
    const values = [];
    const params = [UNION_ID, date];
    batch.forEach((r, i) => {
      const base = i * COLS + 3;
      const ph = [];
      for (let k = 0; k < COLS; k++) ph.push('$' + (base + k));
      values.push('($1, ' + ph[0] + ', ' + ph[1] + ', $2, ' + ph.slice(2).join(', ') + ', now())');
      params.push(...r);
    });
    await query(
      'INSERT INTO character_daily (union_id, uid, char_name, snapshot_date, character_level, ' +
      'skill1, skill2, skill3, upgrade, item_grade, item_level, cube_level, atk, hp, def, updated_at) VALUES ' +
      values.join(', ') +
      ' ON CONFLICT (union_id, uid, char_name, snapshot_date) DO UPDATE SET ' +
      'character_level = EXCLUDED.character_level, skill1 = EXCLUDED.skill1, skill2 = EXCLUDED.skill2, ' +
      'skill3 = EXCLUDED.skill3, upgrade = EXCLUDED.upgrade, item_grade = EXCLUDED.item_grade, ' +
      'item_level = EXCLUDED.item_level, cube_level = EXCLUDED.cube_level, ' +
      'atk = EXCLUDED.atk, hp = EXCLUDED.hp, def = EXCLUDED.def, updated_at = now()',
      params
    );
  }
  return rows.length;
}

module.exports = { syncRoster, upsertMemberDaily, upsertCharacterDaily, displayCharName };
