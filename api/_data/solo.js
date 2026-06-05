// data/solo.js — 솔로레이드 시즌별 멤버 점수 및 덱 스냅샷
// ※ 새 시즌 추가 시 SOLO 객체에 "S<번호>" 키로 추가하세요.
// ※ 덱 안의 캐릭터 정보는 솔로레이드 당시의 시프티패드 스냅샷이며,
//    이후 시프티패드 데이터가 갱신되어도 이 값은 그대로 유지됩니다.
//
// soloRank 표기 규칙:
//   - 1 ~ 200위: 숫자 (예: 137)
//   - 201위 이하: 문자열 "N.NN%" (예: "0.40%", "1.01%", "3.23%")

const SOLO = {
  "S37": {
    season: "S37",
    bossName: "울트라",
    element: "수냉",
    members: [
      {
        uid: "00235254",
        nickname: "유화",
        soloRank: "0.28%",
        totalScore: 40536317565,
        decks: [
          {
            deckScore: 6624206116,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "철갑",
                "skill1": 10,
                "skill2": 6,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 16.55,
                "increaseAtk": 23.62,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15179541,
                "atk": 499396,
                "def": 88342,
                "hp40": 946230,
                "atk40": 24954,
                "def40": 6626,
                "hp400": 3619467,
                "atk400": 114061,
                "def400": 21972,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 37.3,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.18,
                "increaseCriticalRate": 12.35,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 17022711,
                "atk": 414113,
                "def": 97006,
                "hp40": 1366068,
                "atk40": 34560,
                "def40": 9685,
                "hp400": 4306630,
                "atk400": 105846,
                "def400": 26085,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 69.26,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 13.93,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14031573,
                "atk": 609016,
                "def": 79858,
                "hp40": 1221591,
                "atk40": 39685,
                "def40": 8135,
                "hp400": 3627506,
                "atk400": 146615,
                "def400": 21604,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 13.93
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 60.86,
                "increaseAtk": 22.22,
                "increaseDef": 10.4,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 22.1,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 12162597,
                "atk": 527685,
                "def": 68960,
                "hp40": 1137787,
                "atk40": 37696,
                "def40": 7472,
                "hp400": 3208418,
                "atk400": 129723,
                "def400": 19019,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseDef",
                      "value": 10.4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 65.07,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 8.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 96.78,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 12378436,
                "atk": 537040,
                "def": 70222,
                "hp40": 1141610,
                "atk40": 37627,
                "def40": 7551,
                "hp400": 3252062,
                "atk400": 131425,
                "def400": 19320,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 10823807004,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 5,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15213563,
                "atk": 500195,
                "def": 88466,
                "hp40": 980252,
                "atk40": 25753,
                "def40": 6751,
                "hp400": 3653489,
                "atk400": 114860,
                "def400": 22096,
                "equipSlots": {
                  "head": [
                    null,
                    null,
                    null
                  ],
                  "torso": [
                    null,
                    null,
                    null
                  ],
                  "arm": [
                    null,
                    null,
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 766,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.24,
                "increaseAtk": 34.73,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 14769010,
                "atk": 486947,
                "def": 86543,
                "hp40": 1284821,
                "atk40": 37476,
                "def40": 9129,
                "hp400": 3817361,
                "atk400": 121893,
                "def400": 23667,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.82,
                "increaseAtk": 33.88,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 12401566,
                "atk": 538815,
                "def": 70983,
                "hp40": 1164740,
                "atk40": 39402,
                "def40": 8068,
                "hp400": 3275192,
                "atk400": 133200,
                "def400": 19883,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 95.63,
                "increaseAtk": 32.62,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 14031573,
                "atk": 609016,
                "def": 93593,
                "hp40": 1221591,
                "atk40": 39685,
                "def40": 8188,
                "hp400": 3627506,
                "atk400": 146615,
                "def400": 24227,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 766,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 47.96,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 6.09,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15007296,
                "atk": 495481,
                "def": 87502,
                "hp40": 1273399,
                "atk40": 37686,
                "def40": 8654,
                "hp400": 3852838,
                "atk400": 123667,
                "def400": 23461,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 6.09
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8991168513,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 35.9,
                "increaseAtk": 8.29,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 19.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 100.89,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 15504896,
                "atk": 510658,
                "def": 103362,
                "hp40": 1271585,
                "atk40": 36216,
                "def40": 8468,
                "hp400": 3944822,
                "atk400": 125323,
                "def400": 26289,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 59.45,
                "increaseAtk": 11.11,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 8.01,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 12820580,
                "atk": 556194,
                "def": 82474,
                "hp40": 1134281,
                "atk40": 36804,
                "def40": 7675,
                "hp400": 3329151,
                "atk400": 134354,
                "def400": 21723,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 36.69,
                "increaseDef": 4.77,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 121.43,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 11734450,
                "atk": 509120,
                "def": 75581,
                "hp40": 1133671,
                "atk40": 37976,
                "def40": 7730,
                "hp400": 3124663,
                "atk400": 126464,
                "def400": 20472,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseDef",
                      "value": 4.77
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 23.56,
                "increaseAtk": 30.51,
                "increaseDef": 6.18,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 64.82,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13948173,
                "atk": 606179,
                "def": 89602,
                "hp40": 1138191,
                "atk40": 36848,
                "def40": 7611,
                "hp400": 3544106,
                "atk400": 143778,
                "def400": 23009,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 13100194,
                "atk": 430255,
                "def": 84737,
                "hp40": 850406,
                "atk40": 21931,
                "def40": 6330,
                "hp400": 3151107,
                "atk400": 98620,
                "def400": 21055,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8775588260,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 80.21,
                "increaseAtk": 33.32,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.11,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13635863,
                "atk": 594197,
                "def": 77576,
                "hp40": 825881,
                "atk40": 24866,
                "def40": 5853,
                "hp400": 3231796,
                "atk400": 131796,
                "def400": 19322,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.01,
                "increaseAtk": 32.62,
                "increaseDef": 6.18,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 117.32,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 12378436,
                "atk": 537090,
                "def": 80684,
                "hp40": 1141610,
                "atk40": 37677,
                "def40": 7602,
                "hp400": 3252062,
                "atk400": 131475,
                "def400": 21326,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 45.71,
                "increaseAtk": 35.43,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 13891426,
                "atk": 456926,
                "def": 90903,
                "hp40": 1156358,
                "atk40": 32426,
                "def40": 8076,
                "hp400": 3548202,
                "atk400": 112153,
                "def400": 23632,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 47.11,
                "increaseAtk": 26.28,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 9.03,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15258764,
                "atk": 502213,
                "def": 86672,
                "hp40": 1275160,
                "atk40": 36095,
                "def40": 8682,
                "hp400": 3901498,
                "atk400": 123639,
                "def400": 23328,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 766,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 105.43,
                "increaseAtk": 44.44,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 28.96,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 15225776,
                "atk": 371509,
                "def": 99544,
                "hp40": 1217201,
                "atk40": 31909,
                "def40": 8433,
                "hp400": 3848230,
                "atk400": 95691,
                "def400": 25545,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 20.36
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5321547672,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.24,
                "increaseAtk": 34.73,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 178.03,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13367242,
                "atk": 579238,
                "def": 76234,
                "hp40": 1231470,
                "atk40": 39872,
                "def40": 8549,
                "hp400": 3510758,
                "atk400": 141174,
                "def400": 21260,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 766,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 12569929,
                "atk": 414130,
                "def": 81617,
                "hp40": 791286,
                "atk40": 21510,
                "def40": 5011,
                "hp400": 3003499,
                "atk400": 95250,
                "def400": 19398,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "앨리스",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 6,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 59.46,
                "increaseAtk": 25.03,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 11.89,
                "increaseChargeDamage": 15.17,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 104.99,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13966616,
                "atk": 606322,
                "def": 79813,
                "hp40": 1156634,
                "atk40": 36991,
                "def40": 8090,
                "hp400": 3562549,
                "atk400": 143921,
                "def400": 21559,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 6.09
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.8
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 7,
                "skill2": 7,
                "skill3": 4,
                "itemGrade": "",
                "itemLevel": "",
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 12334059,
                "atk": 407287,
                "def": 69537,
                "hp40": 555416,
                "atk40": 14667,
                "def40": 3588,
                "hp400": 2767629,
                "atk400": 88407,
                "def400": 15973,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    null,
                    null,
                    null
                  ],
                  "arm": [
                    null,
                    null,
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 65.05,
                "increaseAtk": 31.91,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 5.51,
                "increaseChargeDamage": 6.18,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13984574,
                "atk": 608203,
                "def": 80149,
                "hp40": 1174592,
                "atk40": 38872,
                "def40": 8426,
                "hp400": 3580508,
                "atk400": 145802,
                "def400": 21895,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.18
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.51
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "00194471",
        nickname: "SUM",
        soloRank: 53,
        totalScore: 48238326298,
        decks: [
          {
            deckScore: 14238444925,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "작열",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15357624,
                "atk": 507865,
                "def": 89302,
                "hp40": 1069935,
                "atk40": 31611,
                "def40": 7276,
                "hp400": 3743172,
                "atk400": 120718,
                "def400": 22622,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    null,
                    null,
                    null
                  ],
                  "arm": [
                    null,
                    null,
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 275.72,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 17095352,
                "atk": 417986,
                "def": 97910,
                "hp40": 1378893,
                "atk40": 36983,
                "def40": 10255,
                "hp400": 4319455,
                "atk400": 108268,
                "def400": 26655,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 37.55,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 28.96,
                "increaseMaxAmmunitionCapacity": 96.77,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14108731,
                "atk": 615580,
                "def": 81038,
                "hp40": 1249809,
                "atk40": 44074,
                "def40": 9041,
                "hp400": 3655725,
                "atk400": 151004,
                "def400": 22510,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 98.43,
                "increaseAtk": 45.84,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 14090773,
                "atk": 611476,
                "def": 94045,
                "hp40": 1231851,
                "atk40": 39970,
                "def40": 8313,
                "hp400": 3637766,
                "atk400": 146900,
                "def400": 24352,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 769,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 52.45,
                "increaseAtk": 18.7,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 7.32,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 59.79,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15023421,
                "atk": 499385,
                "def": 88265,
                "hp40": 1237054,
                "atk40": 39842,
                "def40": 9116,
                "hp400": 3816493,
                "atk400": 125822,
                "def400": 23923,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 10614494873,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 34.5,
                "increaseAtk": 6.88,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 15456069,
                "atk": 509747,
                "def": 102675,
                "hp40": 1168380,
                "atk40": 33493,
                "def40": 7417,
                "hp400": 3841617,
                "atk400": 122600,
                "def400": 25239,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 769,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.03,
                "increaseAtk": 0,
                "increaseDef": 7.59,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 6.18,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 12601567,
                "atk": 547369,
                "def": 80997,
                "hp40": 1096216,
                "atk40": 36022,
                "def40": 7355,
                "hp400": 3248877,
                "atk400": 131696,
                "def400": 21133,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseDef",
                      "value": 7.59
                    }
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.83,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 14025331,
                "atk": 612800,
                "def": 90834,
                "hp40": 1166409,
                "atk40": 41294,
                "def40": 8529,
                "hp400": 3572325,
                "atk400": 148224,
                "def400": 23927,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 58.05,
                "increaseAtk": 23.63,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 10.24,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 14007373,
                "atk": 608411,
                "def": 89997,
                "hp40": 1148451,
                "atk40": 36905,
                "def40": 7691,
                "hp400": 3554366,
                "atk400": 143835,
                "def400": 23089,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 1,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 37.31,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 13383549,
                "atk": 442150,
                "def": 86106,
                "hp40": 1086961,
                "atk40": 32266,
                "def40": 7400,
                "hp400": 3387662,
                "atk400": 108955,
                "def400": 22125,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9245242654,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.83,
                "increaseAtk": 50.78,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 16989410,
                "atk": 411786,
                "def": 110695,
                "hp40": 1272951,
                "atk40": 30783,
                "def40": 8476,
                "hp400": 4213513,
                "atk400": 102068,
                "def400": 27600,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null
                  ]
                }
              },
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 87.21,
                "increaseAtk": 6.18,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14090773,
                "atk": 611362,
                "def": 80234,
                "hp40": 1231851,
                "atk40": 39856,
                "def40": 8237,
                "hp400": 3637766,
                "atk400": 146786,
                "def400": 21706,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 46.84,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 125.53,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 14520955,
                "atk": 478660,
                "def": 94663,
                "hp40": 1235911,
                "atk40": 35827,
                "def40": 8259,
                "hp400": 3721552,
                "atk400": 118680,
                "def400": 24425,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 44.43,
                "increaseDef": 0,
                "increaseHitRate": 11.11,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 4.77,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 14007373,
                "atk": 608696,
                "def": 91385,
                "hp40": 1148451,
                "atk40": 37190,
                "def40": 7754,
                "hp400": 3554366,
                "atk400": 144120,
                "def400": 23399,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15039687,
                "atk": 495736,
                "def": 85231,
                "hp40": 1253320,
                "atk40": 36192,
                "def40": 8341,
                "hp400": 3832760,
                "atk400": 122173,
                "def400": 22726,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6475135535,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.23,
                "increaseAtk": 44.43,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 121.43,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 14025331,
                "atk": 609494,
                "def": 79544,
                "hp40": 1166409,
                "atk40": 37988,
                "def40": 7826,
                "hp400": 3572325,
                "atk400": 144918,
                "def400": 21243,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 769,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 23.62,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 206.79,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 13707337,
                "atk": 452763,
                "def": 89556,
                "hp40": 1174276,
                "atk40": 34996,
                "def40": 8043,
                "hp400": 3519221,
                "atk400": 113160,
                "def400": 23294,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 206.79,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 12955246,
                "atk": 427934,
                "def": 73679,
                "hp40": 1131603,
                "atk40": 33814,
                "def40": 7478,
                "hp400": 3343816,
                "atk400": 107554,
                "def400": 19863,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 32.62,
                "increaseDef": 0,
                "increaseHitRate": 13.22,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 11.11,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 14090773,
                "atk": 611191,
                "def": 82034,
                "hp40": 1231851,
                "atk40": 39685,
                "def40": 8210,
                "hp400": 3637766,
                "atk400": 146615,
                "def400": 22021,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 13.22
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.62,
                "increaseAtk": 22.92,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14127174,
                "atk": 615580,
                "def": 81528,
                "hp40": 1268252,
                "atk40": 44074,
                "def40": 9531,
                "hp400": 3674168,
                "atk400": 151004,
                "def400": 23000,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 7665008311,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "철갑",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 19.35,
                "increaseAtk": 0,
                "increaseDef": 12.52,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15160754,
                "atk": 501924,
                "def": 87825,
                "hp40": 873065,
                "atk40": 25670,
                "def40": 5799,
                "hp400": 3546302,
                "atk400": 114777,
                "def400": 21145,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseDef",
                      "value": 12.52
                    }
                  ],
                  "torso": [
                    null,
                    null,
                    null
                  ],
                  "arm": [
                    null,
                    null,
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 92.82,
                "increaseAtk": 35.44,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 6.09,
                "increaseChargeDamage": 17.28,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14090773,
                "atk": 611476,
                "def": 80257,
                "hp40": 1231851,
                "atk40": 39970,
                "def40": 8260,
                "hp400": 3637766,
                "atk400": 146900,
                "def400": 21729,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 6.09
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 84.41,
                "increaseAtk": 6.18,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 161.6,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 12450666,
                "atk": 539828,
                "def": 70696,
                "hp40": 1170910,
                "atk40": 38507,
                "def40": 7786,
                "hp400": 3281362,
                "atk400": 132305,
                "def400": 19555,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 769,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.6,
                "increaseAtk": 15.87,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.69,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 88.55,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 14090773,
                "atk": 611191,
                "def": 79919,
                "hp40": 1231851,
                "atk40": 39685,
                "def40": 8202,
                "hp400": 3637766,
                "atk400": 146615,
                "def400": 21618,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    }
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 769,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 80.21,
                "increaseAtk": 43.03,
                "increaseDef": 0,
                "increaseHitRate": 8.29,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 14020076,
                "atk": 465136,
                "def": 82194,
                "hp40": 1236354,
                "atk40": 39014,
                "def40": 8802,
                "hp400": 3628198,
                "atk400": 118741,
                "def400": 22532,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 8.29
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  }
};
