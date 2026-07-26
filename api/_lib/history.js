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
  const list = dedupeBy((members || []).filter(m => m && m.uid && m.name), m => String(m.uid));
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

// 한 INSERT … ON CONFLICT 문 안에 같은 충돌 키가 두 번 들어가면 PG 가
// "cannot affect row a second time" 오류를 낸다 — 배치 전에 반드시 dedupe.
function dedupeBy(list, keyFn, pickFn) {
  const map = new Map();
  for (const item of list) {
    const k = keyFn(item);
    const prev = map.get(k);
    map.set(k, prev === undefined ? item : (pickFn ? pickFn(prev, item) : item));
  }
  return [...map.values()];
}

// ── 캐릭터 extra jsonb (장비 옵션 + 큐브명) ─────────────────────
// 장비 옵션 변화 추적용 — 수집 시점부터의 데이터만 diff 가능하므로 가능한 한
// 일찍 적재를 시작한다. effect 명은 축약 코드로 저장해 용량을 줄인다
// (~3천 row/일 × 매일 적재 — Neon 무료 티어 저장량 배려). 게임 업데이트로
// 새 effect 가 오면 코드맵에 없어도 원문을 그대로 저장한다(손실 방지).
//
// 슬롯 위치 보존: equipSlots 의 부위별 배열은 항상 3칸 고정이고 빈 칸은 null 인데,
// 실데이터에 [옵션, null, 옵션] 처럼 중간이 빈 경우가 존재한다(전체 보유 부위의
// 약 15%). 빈 칸을 버리고 압축하면 "2번 칸이 새로 열림"과 "2번 칸이 리롤됨"을
// 구분할 수 없어 api/history.js 의 장비 옵션 상세 diff 가 어긋난다 — 그래서
// 빈 칸을 null 로 남긴다. 뒤쪽 빈 칸만 잘라내 저장량 증가를 최소화한다.
const EFFECT_CODE = {
  increaseElementDamage: 'elem',
  increaseAtk: 'atk',
  increaseDef: 'def',
  increaseHitRate: 'hit',
  increaseChargeSpeed: 'chgSpd',
  increaseChargeDamage: 'chgDmg',
  increaseCriticalRate: 'critRate',
  increaseCriticalDamage: 'critDmg',
  increaseMaxAmmunitionCapacity: 'ammo',
};
const EQUIP_PARTS = ['head', 'torso', 'arm', 'leg'];

// 캐릭터 1명의 extra 직렬화:
//   {"eq":{"head":[["ammo",68.93],null,["hit",11.81]],…},"cube":"큐브명"}
// 부위 배열의 인덱스 = 게임의 옵션 칸 번호, null = 빈 칸(뒤쪽 빈 칸은 잘라냄).
// 옵션이 하나도 없는 부위는 키 자체를 생략하고, 장비 옵션도 큐브명도 없으면
// null 반환 → 컬럼 NULL (미육성 캐릭터가 과반이라 저장량이 크게 준다).
function buildCharExtra(c) {
  const extra = {};
  const slots = c.equipSlots;
  if (slots && typeof slots === 'object') {
    const eq = {};
    for (const part of EQUIP_PARTS) {
      const arr = Array.isArray(slots[part]) ? slots[part] : [];
      const opts = [];
      let last = -1;
      for (let i = 0; i < arr.length; i++) {
        const o = arr[i];
        if (!o || typeof o.effect !== 'string' || !o.effect) { opts.push(null); continue; }
        const v = Number(o.value);
        opts.push([EFFECT_CODE[o.effect] || String(o.effect).slice(0, 40), Number.isFinite(v) ? v : null]);
        last = i;
      }
      if (last >= 0) eq[part] = opts.slice(0, last + 1); // 뒤쪽 빈 칸 제거
    }
    if (Object.keys(eq).length) extra.eq = eq;
  }
  const cube = strOrNull(c.harmonyCube);
  if (cube) extra.cube = cube;
  return Object.keys(extra).length ? JSON.stringify(extra) : null;
}

// 멤버 데일리 upsert. members = UNION 최신 시즌 members 배열, dateStr 미지정 시 KST 오늘.
async function upsertMemberDaily(members, dateStr) {
  const date = dateStr || kstToday();
  const list = dedupeBy((members || []).filter(m => m && m.uid), m => String(m.uid));
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
  let rows = [];
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
        buildCharExtra(c), // extra 는 맨 끝 고정 — 아래 dedupe 의 atk(r[10]) 인덱스 유지
      ]);
    }
  }
  // 표시명이 같은 별개 캐릭터가 실존한다 (예: subName 없는 '사쿠라' 2종 —
  // 전 멤버 공통). PK 가 (uid, 표시명, 날짜) 라 한 명만 남길 수 있으므로
  // 투자도가 높은 쪽(atk, 동률이면 레벨)을 남긴다.
  rows = dedupeBy(rows, r => r[0] + '\x00' + r[1],
    (a, b) => ((b[10] || 0) > (a[10] || 0) || ((b[10] || 0) === (a[10] || 0) && (b[2] || 0) > (a[2] || 0))) ? b : a);
  const COLS = 14; // union_id·date 제외한 per-row 파라미터 수 (마지막은 extra jsonb)
  for (let off = 0; off < rows.length; off += CHAR_BATCH) {
    const batch = rows.slice(off, off + CHAR_BATCH);
    const values = [];
    const params = [UNION_ID, date];
    batch.forEach((r, i) => {
      const base = i * COLS + 3;
      const ph = [];
      for (let k = 0; k < COLS; k++) ph.push('$' + (base + k));
      values.push('($1, ' + ph[0] + ', ' + ph[1] + ', $2, ' + ph.slice(2, COLS - 1).join(', ') +
        ', ' + ph[COLS - 1] + '::jsonb, now())');
      params.push(...r);
    });
    await query(
      'INSERT INTO character_daily (union_id, uid, char_name, snapshot_date, character_level, ' +
      'skill1, skill2, skill3, upgrade, item_grade, item_level, cube_level, atk, hp, def, extra, updated_at) VALUES ' +
      values.join(', ') +
      ' ON CONFLICT (union_id, uid, char_name, snapshot_date) DO UPDATE SET ' +
      'character_level = EXCLUDED.character_level, skill1 = EXCLUDED.skill1, skill2 = EXCLUDED.skill2, ' +
      'skill3 = EXCLUDED.skill3, upgrade = EXCLUDED.upgrade, item_grade = EXCLUDED.item_grade, ' +
      'item_level = EXCLUDED.item_level, cube_level = EXCLUDED.cube_level, ' +
      'atk = EXCLUDED.atk, hp = EXCLUDED.hp, def = EXCLUDED.def, extra = EXCLUDED.extra, updated_at = now()',
      params
    );
  }
  return rows.length;
}

module.exports = { syncRoster, upsertMemberDaily, upsertCharacterDaily, displayCharName };
