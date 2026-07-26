-- scripts/schema.sql — foxstar Neon Postgres 스키마 (멱등: IF NOT EXISTS)
-- 실행: npm run seed (scripts/seed.js 가 이 파일을 문장 단위로 실행)
-- ★ 문장 분리는 '세미콜론 + 줄바꿈' 기준이다. 따라서 한 문장 안에 세미콜론을 두면
--   중간에서 잘려 실행이 깨진다 — DO $$ … $$ 블록·함수 본문·문자열 리터럴 안의
--   세미콜론 모두 금지. 조건부 마이그레이션이 필요하면 반복 실행해도 안전한
--   단일 문장(IF NOT EXISTS / 같은 타입으로의 ALTER 등)으로 표현할 것.
-- 규칙: 표준 PostgreSQL 만 사용. 트리거 없음 — updated_at 은 쿼리에서 명시 갱신.
-- 다중 유니온 대비: 모든 테이블에 union_id (기본 1 = 여우별).

-- 게이트 문서: 기존 api/_data/* 파일 원문을 그대로 저장 (서빙 계약 불변)
CREATE TABLE IF NOT EXISTS data_docs (
  key          text PRIMARY KEY,
  content      text NOT NULL,
  content_hash text NOT NULL,
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- 멤버 로스터 + 개인 PIN (닉네임 클레임 방식; pin_hash NULL = 미등록)
-- 탈퇴는 active=false 로 표시 — 제출/응답 기록이 참조하므로 행은 삭제하지 않는다.
-- pin_hash/pin_salt 는 hex 문자열 (scrypt 64바이트 / salt 16바이트 — HTTP 드라이버의
-- bytea 왕복 변환을 피하기 위해 text 로 저장).
-- is_admin: 이 멤버로 로그인하면 관리자 세션 발급 (시드가 ADMIN_NAMES env 로 지정).
CREATE TABLE IF NOT EXISTS members (
  union_id   smallint NOT NULL DEFAULT 1,
  uid        text NOT NULL,
  name       text NOT NULL,
  active     boolean NOT NULL DEFAULT true,
  is_admin   boolean NOT NULL DEFAULT false,
  pin_hash   text,
  pin_salt   text,
  claimed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (union_id, uid)
);

-- 기존 배포 DB 마이그레이션 (신규 생성 시엔 no-op)
ALTER TABLE members ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;

-- 앱 설정 (관리자가 웹에서 변경; 'member_epoch' = 이 시각(ms) 이전 발급 멤버 쿠키 무효)
CREATE TABLE IF NOT EXISTS app_settings (
  union_id   smallint NOT NULL DEFAULT 1,
  key        text NOT NULL,
  value      text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (union_id, key)
);

-- 멤버 데일리 히스토리: 하루 1 row (그 날의 최종 상태).
-- 수집(ingest)이 KST 날짜로 upsert — 같은 날 재수집은 update, 새 날짜는 insert.
CREATE TABLE IF NOT EXISTS member_daily (
  union_id      smallint NOT NULL DEFAULT 1,
  uid           text NOT NULL,
  snapshot_date date NOT NULL,
  syncro_level  integer,
  fields        jsonb,
  updated_at    timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (union_id, uid, snapshot_date)
);

CREATE INDEX IF NOT EXISTS member_daily_date_idx
  ON member_daily (union_id, snapshot_date);

-- 캐릭터 데일리 히스토리: 멤버×캐릭터×날짜당 1 row.
-- char_name 은 표시명("이름" 또는 "이름 : 서브명") — raid.js squad 표기와 동일.
-- extra 는 장비 옵션·큐브명 JSON 문자열: {"eq":{"head":[["ammo",68.93],…],…},"cube":"큐브명"}
--   (api/_lib/history.js buildCharExtra — effect 축약 코드는 그 파일의 EFFECT_CODE).
--   장비 옵션·큐브 둘 다 없으면 NULL. 적재 시작 시점부터의 변화만 diff 가능.
--   타입이 jsonb 가 아니라 text 인 이유: 같은 내용을 jsonb 는 365B, text 는 194B 로
--   담는다(실측 1.88배). 이 테이블이 저장량의 대부분이라 차이가 크다.
CREATE TABLE IF NOT EXISTS character_daily (
  union_id        smallint NOT NULL DEFAULT 1,
  uid             text NOT NULL,
  char_name       text NOT NULL,
  snapshot_date   date NOT NULL,
  character_level integer,
  skill1          smallint,
  skill2          smallint,
  skill3          smallint,
  upgrade         text,
  item_grade      text,
  item_level      smallint,
  cube_level      smallint,
  atk             bigint,
  hp              bigint,
  def             bigint,
  extra           text,
  updated_at      timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (union_id, uid, char_name, snapshot_date)
);

CREATE INDEX IF NOT EXISTS character_daily_date_idx
  ON character_daily (union_id, snapshot_date);

-- 기존 배포 DB 마이그레이션: extra 를 jsonb → text 로.
-- USING 절 없이 변환되고, 이미 text 면 아무 일도 하지 않으므로 반복 실행해도 안전하다.
-- 주의: 변환된 값은 jsonb 의 직렬화 형태라 공백이 들어간다
-- ({"eq": {"head": …}}). 새로 적재되는 행은 JSON.stringify 의 압축 형태라 문자열이
-- 다른데, api/history.js 의 diff 는 ::jsonb 로 파싱해 비교하므로 영향이 없다.
ALTER TABLE character_daily ALTER COLUMN extra TYPE text;

-- 유니온 레이드 덱/모의전 점수 제출 (멤버당 시즌당 슬롯 1~3)
CREATE TABLE IF NOT EXISTS raid_submissions (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  union_id   smallint NOT NULL DEFAULT 1,
  season     text NOT NULL,
  uid        text NOT NULL,
  slot       smallint NOT NULL DEFAULT 1 CHECK (slot BETWEEN 1 AND 3),
  deck       jsonb NOT NULL,
  damage     bigint,
  note       text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (union_id, season, uid, slot)
);

CREATE INDEX IF NOT EXISTS raid_submissions_season_idx
  ON raid_submissions (union_id, season);

-- 일정/참여 폴 (관리자 생성)
CREATE TABLE IF NOT EXISTS polls (
  id         bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  union_id   smallint NOT NULL DEFAULT 1,
  title      text NOT NULL,
  kind       text NOT NULL DEFAULT 'schedule',
  options    jsonb NOT NULL,
  multi      boolean NOT NULL DEFAULT true,
  is_open    boolean NOT NULL DEFAULT true,
  created_by text,
  closes_at  timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS poll_responses (
  poll_id    bigint NOT NULL REFERENCES polls(id) ON DELETE CASCADE,
  uid        text NOT NULL,
  response   jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (poll_id, uid)
);
