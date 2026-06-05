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
      },
      {
        uid: "00101643",
        nickname: "그게너의한계야",
        soloRank: "0.72%",
        totalScore: 37984846750,
        decks: [
          {
            deckScore: 8653930965,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 9,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 13441505,
                "atk": 440884,
                "def": 90017,
                "hp40": 1102607,
                "atk40": 29589,
                "def40": 7754,
                "hp400": 3775844,
                "atk400": 118696,
                "def400": 25576,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
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
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 730,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 52.45,
                "increaseAtk": 22.92,
                "increaseDef": 0,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 13.5,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 10641342,
                "atk": 460367,
                "def": 68304,
                "hp40": 1083904,
                "atk40": 35594,
                "def40": 7130,
                "hp400": 3154535,
                "atk400": 127621,
                "def400": 20382,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
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
                      "value": 19.35
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 84.4,
                "increaseAtk": 42.32,
                "increaseDef": 0,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 85.37,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 10911399,
                "atk": 471574,
                "def": 70113,
                "hp40": 1170163,
                "atk40": 38632,
                "def40": 7762,
                "hp400": 3280615,
                "atk400": 132430,
                "def400": 21269,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
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
                      "value": 19.35
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 60.85,
                "increaseAtk": 29.8,
                "increaseDef": 0,
                "increaseHitRate": 9.7,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 13.5,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 12297750,
                "atk": 532160,
                "def": 79051,
                "hp40": 1192741,
                "atk40": 38606,
                "def40": 7971,
                "hp400": 3598656,
                "atk400": 145536,
                "def400": 23369,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
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
                      "value": 10.4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    },
                    null
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 1,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 11339303,
                "atk": 372013,
                "def": 73008,
                "hp40": 719927,
                "atk40": 18036,
                "def40": 5038,
                "hp400": 3020628,
                "atk400": 94725,
                "def400": 19763,
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
              }
            ]
          },
          {
            deckScore: 10284147202,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "작열",
                "skill1": 4,
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
                "hp": 13319874,
                "atk": 436849,
                "def": 77740,
                "hp40": 980976,
                "atk40": 25555,
                "def40": 6900,
                "hp400": 3654213,
                "atk400": 114661,
                "def400": 22246,
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
                "name": "크라운",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 730,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 129.64,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 13908358,
                "atk": 338185,
                "def": 78821,
                "hp40": 1288046,
                "atk40": 32240,
                "def40": 8434,
                "hp400": 4022252,
                "atk400": 98523,
                "def400": 23683,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
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
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.61,
                "increaseAtk": 28.39,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 20.36,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10929842,
                "atk": 471574,
                "def": 62758,
                "hp40": 1188606,
                "atk40": 38632,
                "def40": 8217,
                "hp400": 3299058,
                "atk400": 132430,
                "def400": 20032,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 20.36
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 84.42,
                "increaseAtk": 0,
                "increaseDef": 7.59,
                "increaseHitRate": 9.7,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 15.46,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 12282350,
                "atk": 531679,
                "def": 81927,
                "hp40": 1177341,
                "atk40": 38125,
                "def40": 7889,
                "hp400": 3583256,
                "atk400": 145055,
                "def400": 23928,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    },
                    {
                      "effect": "increaseDef",
                      "value": 7.59
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 730,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 76,
                "increaseAtk": 17.28,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 9.72,
                "increaseCriticalDamage": 15.46,
                "increaseMaxAmmunitionCapacity": 154.3,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 12276421,
                "atk": 403368,
                "def": 71516,
                "hp40": 1236354,
                "atk40": 35367,
                "def40": 8134,
                "hp400": 3628198,
                "atk400": 115094,
                "def400": 21864,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.03
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
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
                      "value": 73.04
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5979913890,
            squad: [
              {
                "name": "목단",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "전격",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 23.56,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 110,
                "hp": 14874701,
                "atk": 361525,
                "def": 99125,
                "hp40": 1301913,
                "atk40": 32490,
                "def40": 8635,
                "hp400": 4242474,
                "atk400": 103775,
                "def400": 28238,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
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
                "name": "나유타",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 730,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 81.6,
                "increaseAtk": 28.4,
                "increaseDef": 14.47,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 12050894,
                "atk": 395971,
                "def": 70208,
                "hp40": 1227299,
                "atk40": 35186,
                "def40": 8068,
                "hp400": 3572244,
                "atk400": 113350,
                "def400": 21529,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseDef",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 84.41,
                "increaseAtk": 11.11,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 13,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 12336493,
                "atk": 532869,
                "def": 70739,
                "hp40": 1231484,
                "atk40": 39315,
                "def40": 8562,
                "hp400": 3637399,
                "atk400": 146245,
                "def400": 22031,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.51
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 67.86,
                "increaseAtk": 19.4,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 129.65,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 10708025,
                "atk": 462749,
                "def": 60841,
                "hp40": 1150587,
                "atk40": 37976,
                "def40": 7537,
                "hp400": 3221218,
                "atk400": 130003,
                "def400": 19084,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    null
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 9,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.62,
                "increaseAtk": 21.51,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 18.4,
                "increaseMaxAmmunitionCapacity": 157.49,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 10505722,
                "atk": 453847,
                "def": 59609,
                "hp40": 1132080,
                "atk40": 37242,
                "def40": 7330,
                "hp400": 3162892,
                "atk400": 127500,
                "def400": 18655,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 18.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null,
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
            deckScore: 8094987313,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 83.01,
                "increaseAtk": 7.59,
                "increaseDef": 4.77,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 9.48,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10470022,
                "atk": 452682,
                "def": 59582,
                "hp40": 1096380,
                "atk40": 36077,
                "def40": 7100,
                "hp400": 3127192,
                "atk400": 126335,
                "def400": 18469,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseDef",
                      "value": 4.77
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 730,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 91.41,
                "increaseAtk": 20.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 17.2,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 10284650,
                "atk": 444382,
                "def": 66814,
                "hp40": 1094805,
                "atk40": 35946,
                "def40": 7045,
                "hp400": 3085797,
                "atk400": 124434,
                "def400": 19993,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
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
                      "value": 6.18
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 10.94,
                "increaseAtk": 23.62,
                "increaseDef": 9,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 9.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 12934098,
                "atk": 425036,
                "def": 84292,
                "hp40": 1244615,
                "atk40": 35388,
                "def40": 8265,
                "hp400": 3777156,
                "atk400": 119806,
                "def400": 24737,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
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
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseDef",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    null
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
                    null
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 69.27,
                "increaseAtk": 25.58,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.67,
                "increaseCriticalDamage": 12.52,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 11600808,
                "atk": 381228,
                "def": 65733,
                "hp40": 1185651,
                "atk40": 34058,
                "def40": 7645,
                "hp400": 3442108,
                "atk400": 109273,
                "def400": 20228,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 730,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.8,
                "increaseAtk": 14.47,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 24.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 13661285,
                "atk": 332350,
                "def": 88973,
                "hp40": 1279092,
                "atk40": 32178,
                "def40": 8441,
                "hp400": 3961709,
                "atk400": 97210,
                "def400": 25888,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.18
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
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
                      "value": 8.29
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 4971867380,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 730,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.83,
                "increaseAtk": 35.43,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 182.14,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 11114915,
                "atk": 480530,
                "def": 63226,
                "hp40": 1178854,
                "atk40": 38929,
                "def40": 7809,
                "hp400": 3331515,
                "atk400": 134603,
                "def400": 19814,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 730,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 11074389,
                "atk": 363272,
                "def": 72258,
                "hp40": 863450,
                "atk40": 22909,
                "def40": 5848,
                "hp400": 3075663,
                "atk400": 96649,
                "def400": 20235,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
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
                      "value": 16.44
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 730,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 66.47,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 12354451,
                "atk": 533553,
                "def": 70835,
                "hp40": 1249442,
                "atk40": 39999,
                "def40": 8659,
                "hp400": 3655358,
                "atk400": 146929,
                "def400": 22128,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
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
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 48.25,
                "increaseAtk": 37.39,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 11875949,
                "atk": 513967,
                "def": 69232,
                "hp40": 1160589,
                "atk40": 37731,
                "def40": 7714,
                "hp400": 3482086,
                "atk400": 140909,
                "def400": 21041,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
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
                      "value": 8.29
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
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
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 730,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 11070839,
                "atk": 363782,
                "def": 62574,
                "hp40": 859900,
                "atk40": 23419,
                "def40": 5403,
                "hp400": 3072113,
                "atk400": 97159,
                "def400": 17788,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
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
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
              }
            ]
          }
        ]
      },
      {
        uid: "01553608",
        nickname: "여우로",
        soloRank: 149,
        totalScore: 43837162705,
        decks: [
          {
            deckScore: 6789666812,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "철갑",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 42.46,
                "increaseMaxAmmunitionCapacity": 136.95,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15272161,
                "atk": 503264,
                "def": 88899,
                "hp40": 1038850,
                "atk40": 28823,
                "def40": 7184,
                "hp400": 3712087,
                "atk400": 117929,
                "def400": 22530,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 11.54
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
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
                "increaseElementDamage": 70.66,
                "increaseAtk": 31.22,
                "increaseDef": 0,
                "increaseHitRate": 16.58,
                "increaseChargeSpeed": 9.55,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14073101,
                "atk": 609045,
                "def": 80507,
                "hp40": 1263119,
                "atk40": 39714,
                "def40": 8784,
                "hp400": 3669034,
                "atk400": 146644,
                "def400": 22253,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.51
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 81.62,
                "increaseAtk": 21.51,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 186.25,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 11711666,
                "atk": 507161,
                "def": 66334,
                "hp40": 1110887,
                "atk40": 36017,
                "def40": 7211,
                "hp400": 3101879,
                "atk400": 124505,
                "def400": 18314,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 766,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 87.2,
                "increaseAtk": 43.73,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 121.42,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 13991149,
                "atk": 460352,
                "def": 81823,
                "hp40": 1256081,
                "atk40": 35852,
                "def40": 8709,
                "hp400": 3647925,
                "atk400": 115579,
                "def400": 22439,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.82,
                "increaseAtk": 22.92,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.75,
                "increaseChargeDamage": 10.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 88.56,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 11628266,
                "atk": 504356,
                "def": 65777,
                "hp40": 1027487,
                "atk40": 33212,
                "def40": 6654,
                "hp400": 3018479,
                "atk400": 121700,
                "def400": 17757,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.75
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 12596136165,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 7,
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
                "hp": 15225032,
                "atk": 500785,
                "def": 88698,
                "hp40": 991721,
                "atk40": 26344,
                "def40": 6983,
                "hp400": 3664958,
                "atk400": 115450,
                "def400": 22329,
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
                "increaseElementDamage": 44.3,
                "increaseAtk": 9.7,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 11.54,
                "increaseMaxAmmunitionCapacity": 202.68,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 17026986,
                "atk": 413002,
                "def": 96813,
                "hp40": 1370343,
                "atk40": 33449,
                "def40": 9491,
                "hp400": 4310905,
                "atk400": 104734,
                "def400": 25891,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 11.54
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.21,
                "increaseAtk": 47.25,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 161.59,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14091059,
                "atk": 609871,
                "def": 80633,
                "hp40": 1281077,
                "atk40": 40540,
                "def40": 8910,
                "hp400": 3686993,
                "atk400": 147470,
                "def400": 22379,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 73.04
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
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
                "increaseElementDamage": 0,
                "increaseAtk": 38.79,
                "increaseDef": 6.88,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 13926994,
                "atk": 604789,
                "def": 93102,
                "hp40": 1117012,
                "atk40": 35458,
                "def40": 7697,
                "hp400": 3522927,
                "atk400": 142388,
                "def400": 23735,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    }
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 104.04,
                "increaseAtk": 45.14,
                "increaseDef": 0,
                "increaseHitRate": 20.1,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15543632,
                "atk": 511436,
                "def": 90821,
                "hp40": 1310320,
                "atk40": 36995,
                "def40": 9106,
                "hp400": 3983558,
                "atk400": 126102,
                "def400": 24452,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9208568995,
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
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 17.99,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 13.76,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 242.85,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 15330986,
                "atk": 505914,
                "def": 102453,
                "hp40": 1097675,
                "atk40": 31473,
                "def40": 7558,
                "hp400": 3770912,
                "atk400": 120579,
                "def400": 25380,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 42.9,
                "increaseAtk": 37.39,
                "increaseDef": 0,
                "increaseHitRate": 17.28,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 11857257,
                "atk": 514420,
                "def": 76090,
                "hp40": 1044462,
                "atk40": 33853,
                "def40": 6882,
                "hp400": 3075274,
                "atk400": 124111,
                "def400": 19879,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 32.63,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 129.64,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 12351339,
                "atk": 535740,
                "def": 79352,
                "hp40": 1114513,
                "atk40": 36327,
                "def40": 7430,
                "hp400": 3224965,
                "atk400": 130125,
                "def400": 20937,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
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
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 80.2,
                "increaseAtk": 5.47,
                "increaseDef": 0,
                "increaseHitRate": 17.99,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.37,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 121.42,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13939290,
                "atk": 605281,
                "def": 89642,
                "hp40": 1129308,
                "atk40": 35950,
                "def40": 7651,
                "hp400": 3535223,
                "atk400": 142880,
                "def400": 23049,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.37
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 13461714,
                "atk": 442944,
                "def": 86693,
                "hp40": 726646,
                "atk40": 18443,
                "def40": 5180,
                "hp400": 3118490,
                "atk400": 98170,
                "def400": 20488,
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
              }
            ]
          },
          {
            deckScore: 9090736844,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 112.44,
                "increaseAtk": 50.07,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 13.22,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 121.42,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 17026986,
                "atk": 413002,
                "def": 111376,
                "hp40": 1370343,
                "atk40": 33449,
                "def40": 9547,
                "hp400": 4310905,
                "atk400": 104734,
                "def400": 28671,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 13.22
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ]
                }
              },
              {
                "name": "네온 : 비전 아이",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 102.62,
                "increaseAtk": 31.92,
                "increaseDef": 0,
                "increaseHitRate": 14.63,
                "increaseChargeSpeed": 15.57,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 14091059,
                "atk": 609843,
                "def": 92263,
                "hp40": 1281077,
                "atk40": 40512,
                "def40": 8949,
                "hp400": 3686993,
                "atk400": 147442,
                "def400": 24595,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 14.63
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.83,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 104.99,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 14665087,
                "atk": 482458,
                "def": 95963,
                "hp40": 1180897,
                "atk40": 32986,
                "def40": 8264,
                "hp400": 3713438,
                "atk400": 117404,
                "def400": 24735,
                "equipSlots": {
                  "head": [
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
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                "increaseElementDamage": 87.2,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 10.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 92.67,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 12303618,
                "atk": 534031,
                "def": 80276,
                "hp40": 1066792,
                "atk40": 34618,
                "def40": 7194,
                "hp400": 3177244,
                "atk400": 128416,
                "def400": 20918,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
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
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 194.46,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15244789,
                "atk": 502241,
                "def": 86339,
                "hp40": 1261185,
                "atk40": 36123,
                "def40": 8349,
                "hp400": 3887523,
                "atk400": 123667,
                "def400": 22996,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
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
            deckScore: 6152053889,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.23,
                "increaseAtk": 45.13,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 219.12,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 14091059,
                "atk": 609843,
                "def": 80348,
                "hp40": 1281077,
                "atk40": 40512,
                "def40": 8903,
                "hp400": 3686993,
                "atk400": 147442,
                "def400": 22319,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
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
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
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
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 12808336,
                "atk": 422825,
                "def": 83404,
                "hp40": 1029693,
                "atk40": 30205,
                "def40": 6798,
                "hp400": 3241906,
                "atk400": 103945,
                "def400": 21185,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
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
                "increaseElementDamage": 87.22,
                "increaseAtk": 38.26,
                "increaseDef": 0,
                "increaseHitRate": 13.77,
                "increaseChargeSpeed": 4.63,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14091059,
                "atk": 609871,
                "def": 80633,
                "hp40": 1281077,
                "atk40": 40540,
                "def40": 8910,
                "hp400": 3686993,
                "atk400": 147470,
                "def400": 22379,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 766,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 7.59,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 129.64,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 14037401,
                "atk": 607855,
                "def": 82097,
                "hp40": 1227419,
                "atk40": 38524,
                "def40": 8555,
                "hp400": 3633334,
                "atk400": 145454,
                "def400": 22366,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
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
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
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
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 12789386,
                "atk": 422825,
                "def": 72201,
                "hp40": 1010743,
                "atk40": 30205,
                "def40": 6252,
                "hp400": 3222956,
                "atk400": 103945,
                "def400": 18637,
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
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "08621594",
        nickname: "최고다노지선",
        soloRank: "0.96%",
        totalScore: 37253786498,
        decks: [
          {
            deckScore: 7273017929,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 694,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.42,
                "increaseAtk": 29.64,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 11523857,
                "atk": 280756,
                "def": 75058,
                "hp40": 1244684,
                "atk40": 31565,
                "def40": 8204,
                "hp400": 3824124,
                "atk400": 94096,
                "def400": 24980,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
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
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 694,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 81.6,
                "increaseAtk": 15.18,
                "increaseDef": 9,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 6.02,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 9052224,
                "atk": 388954,
                "def": 58876,
                "hp40": 1118043,
                "atk40": 36326,
                "def40": 7273,
                "hp400": 3109035,
                "atk400": 124814,
                "def400": 20221,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 10.94,
                "increaseAtk": 18.7,
                "increaseDef": 9,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 5.51,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.94,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 11254804,
                "atk": 369648,
                "def": 73522,
                "hp40": 1162525,
                "atk40": 33241,
                "def40": 7883,
                "hp400": 3695066,
                "atk400": 117659,
                "def400": 24354,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.51
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    null
                  ]
                }
              },
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 80.2,
                "increaseAtk": 9,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 80.34,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9449257,
                "atk": 409758,
                "def": 53762,
                "hp40": 870821,
                "atk40": 28496,
                "def40": 5731,
                "hp400": 3023482,
                "atk400": 124170,
                "def400": 17783,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    null
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 66.21,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 10.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 10341268,
                "atk": 339964,
                "def": 58772,
                "hp40": 1172881,
                "atk40": 34353,
                "def40": 7638,
                "hp400": 3473582,
                "atk400": 111042,
                "def400": 20468,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5050568977,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 694,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.63,
                "increaseAtk": 40.91,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 6.73,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 96.77,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 9774969,
                "atk": 419885,
                "def": 56139,
                "hp40": 1196532,
                "atk40": 38623,
                "def40": 8294,
                "hp400": 3349193,
                "atk400": 134297,
                "def400": 20299,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 6.73
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
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
                "characterLevel": 694,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 23.62,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 9681907,
                "atk": 317681,
                "def": 63205,
                "hp40": 866150,
                "atk40": 23824,
                "def40": 5869,
                "hp400": 3078363,
                "atk400": 97564,
                "def400": 20256,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 7,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 84.4,
                "increaseAtk": 13.22,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.69,
                "increaseCriticalDamage": 17.2,
                "increaseMaxAmmunitionCapacity": 27.84,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 10051784,
                "atk": 432343,
                "def": 58888,
                "hp40": 1136939,
                "atk40": 36130,
                "def40": 7707,
                "hp400": 3374018,
                "atk400": 135556,
                "def400": 20549,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 6.64
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 7,
                "skill2": 7,
                "skill3": 4,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 9618024,
                "atk": 315889,
                "def": 54593,
                "hp40": 802267,
                "atk40": 22032,
                "def40": 5234,
                "hp400": 3014480,
                "atk400": 95772,
                "def400": 17619,
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
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
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
                "characterLevel": 694,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 67.86,
                "increaseAtk": 38.8,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 85.37,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10752852,
                "atk": 463905,
                "def": 61965,
                "hp40": 1165187,
                "atk40": 37789,
                "def40": 8283,
                "hp400": 3571103,
                "atk400": 144719,
                "def400": 21753,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6224126065,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 694,
                "element": "철갑",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 11562147,
                "atk": 379500,
                "def": 67553,
                "hp40": 909187,
                "atk40": 24404,
                "def40": 6394,
                "hp400": 3582424,
                "atk400": 113510,
                "def400": 21739,
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
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 83.01,
                "increaseAtk": 25.04,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 8.37,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10799850,
                "atk": 465089,
                "def": 61748,
                "hp40": 1212186,
                "atk40": 38973,
                "def40": 8066,
                "hp400": 3618101,
                "atk400": 145903,
                "def400": 21535,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 6.09
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
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.8,
                "increaseAtk": 12.52,
                "increaseDef": 9,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 18.4,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 9048536,
                "atk": 388979,
                "def": 51393,
                "hp40": 1114355,
                "atk40": 36351,
                "def40": 7142,
                "hp400": 3105347,
                "atk400": 124839,
                "def400": 18245,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 18.4
                    },
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 77.15
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 6,
                "increaseElementDamage": 85.81,
                "increaseAtk": 15.88,
                "increaseDef": 12.52,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 154.3,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8868182,
                "atk": 382377,
                "def": 50320,
                "hp40": 934001,
                "atk40": 29749,
                "def40": 6069,
                "hp400": 2924993,
                "atk400": 118237,
                "def400": 17172,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseDef",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
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
                "name": "나유타",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 694,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 97.03,
                "increaseAtk": 34.74,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.22,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 10361760,
                "atk": 340664,
                "def": 60966,
                "hp40": 1193373,
                "atk40": 35053,
                "def40": 8331,
                "hp400": 3494074,
                "atk400": 111742,
                "def400": 21538,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 6.64
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8636283619,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 10.94,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.65,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 218.2,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 11575008,
                "atk": 379763,
                "def": 77582,
                "hp40": 1108942,
                "atk40": 30896,
                "def40": 7805,
                "hp400": 3735280,
                "atk400": 118440,
                "def400": 25314,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    }
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 694,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 58.05,
                "increaseAtk": 24.33,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.03,
                "increaseCriticalDamage": 19.16,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 10051784,
                "atk": 432343,
                "def": 64797,
                "hp40": 1136939,
                "atk40": 36130,
                "def40": 7738,
                "hp400": 3374018,
                "atk400": 135556,
                "def400": 22055,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.03
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    }
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 27.15,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 88.55,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 9598088,
                "atk": 412918,
                "def": 62237,
                "hp40": 1187856,
                "atk40": 39132,
                "def40": 8407,
                "hp400": 3298308,
                "atk400": 132930,
                "def400": 21914,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
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
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 694,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 16.55,
                "increaseAtk": 35.97,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 125.53,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 9320680,
                "atk": 401477,
                "def": 60064,
                "hp40": 1069132,
                "atk40": 34744,
                "def40": 7250,
                "hp400": 3139763,
                "atk400": 126771,
                "def400": 20502,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
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
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 4,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 10138954,
                "atk": 333340,
                "def": 65352,
                "hp40": 794252,
                "atk40": 21852,
                "def40": 5540,
                "hp400": 3139197,
                "atk400": 100016,
                "def400": 20548,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
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
              }
            ]
          },
          {
            deckScore: 10069789908,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 694,
                "element": "작열",
                "skill1": 4,
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
                "hp": 11132249,
                "atk": 365152,
                "def": 65213,
                "hp40": 1039970,
                "atk40": 28745,
                "def40": 7273,
                "hp400": 3572511,
                "atk400": 113163,
                "def400": 21811,
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
                "name": "크라운",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 694,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 62.26,
                "increaseAtk": 20.1,
                "increaseDef": 0,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 11760606,
                "atk": 286592,
                "def": 67430,
                "hp40": 1275850,
                "atk40": 32417,
                "def40": 8955,
                "hp400": 3906879,
                "atk400": 96198,
                "def400": 23628,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 40.92,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9419828,
                "atk": 405109,
                "def": 54363,
                "hp40": 1168280,
                "atk40": 38376,
                "def40": 8163,
                "hp400": 3238911,
                "atk400": 130403,
                "def400": 19755,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 694,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 34.5,
                "increaseAtk": 10.24,
                "increaseDef": 0,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 10799850,
                "atk": 465089,
                "def": 72041,
                "hp40": 1212186,
                "atk40": 38973,
                "def40": 8120,
                "hp400": 3618101,
                "atk400": 145903,
                "def400": 24158,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    }
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
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 694,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 84.42,
                "increaseAtk": 29.09,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 4.04,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 48.39,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 10754782,
                "atk": 353595,
                "def": 63338,
                "hp40": 1223186,
                "atk40": 35877,
                "def40": 8617,
                "hp400": 3615030,
                "atk400": 115604,
                "def400": 22348,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "00066676",
        nickname: "지금부터",
        soloRank: "0.23%",
        totalScore: 41282780986,
        decks: [
          {
            deckScore: 12100856459,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "작열",
                "skill1": 7,
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
                "hp": 16299413,
                "atk": 534513,
                "def": 94425,
                "hp40": 1030841,
                "atk40": 25562,
                "def40": 6765,
                "hp400": 3704078,
                "atk400": 114669,
                "def400": 22111,
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
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 19.35,
                "increaseAtk": 8.29,
                "increaseDef": 0,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 47.36,
                "increaseMaxAmmunitionCapacity": 198.57,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 18166628,
                "atk": 441492,
                "def": 103312,
                "hp40": 1371198,
                "atk40": 34332,
                "def40": 9639,
                "hp400": 4311760,
                "atk400": 105618,
                "def400": 26039,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.22,
                "increaseAtk": 47.25,
                "increaseDef": 0,
                "increaseHitRate": 17.29,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13777390,
                "atk": 597489,
                "def": 78935,
                "hp40": 1241088,
                "atk40": 40323,
                "def40": 8744,
                "hp400": 3435958,
                "atk400": 137872,
                "def400": 21031,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 69.26,
                "increaseAtk": 43.73,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.63,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 15011675,
                "atk": 650198,
                "def": 100414,
                "hp40": 1269959,
                "atk40": 39457,
                "def40": 8798,
                "hp400": 3675874,
                "atk400": 146387,
                "def400": 24836,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 91.42,
                "increaseAtk": 32.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.28,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 81.26,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 16561820,
                "atk": 546829,
                "def": 96386,
                "hp40": 1293248,
                "atk40": 37878,
                "def40": 8726,
                "hp400": 3966486,
                "atk400": 126985,
                "def400": 24072,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
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
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8959616583,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 22.92,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 4.69,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 16369667,
                "atk": 541875,
                "def": 109678,
                "hp40": 1101095,
                "atk40": 32924,
                "def40": 7881,
                "hp400": 3774332,
                "atk400": 122031,
                "def400": 25703,
                "equipSlots": {
                  "head": [
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
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
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
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 63.66,
                "increaseAtk": 13.93,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.96,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 104.99,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 14815158,
                "atk": 644033,
                "def": 95525,
                "hp40": 1073442,
                "atk40": 33292,
                "def40": 7568,
                "hp400": 3479357,
                "atk400": 140222,
                "def400": 22966,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
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
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.22,
                "increaseAtk": 29.11,
                "increaseDef": 10.4,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 85.37,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13174650,
                "atk": 572839,
                "def": 84750,
                "hp40": 1120513,
                "atk40": 37102,
                "def40": 7595,
                "hp400": 3230965,
                "atk400": 130900,
                "def400": 21102,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 784,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 67.86,
                "increaseAtk": 20.81,
                "increaseDef": 0,
                "increaseHitRate": 11.11,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 158.41,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13492431,
                "atk": 584795,
                "def": 86600,
                "hp40": 1197211,
                "atk40": 38343,
                "def40": 7902,
                "hp400": 3349872,
                "atk400": 134017,
                "def400": 21679,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 77.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 23.62,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 14751446,
                "atk": 485488,
                "def": 94902,
                "hp40": 822223,
                "atk40": 21182,
                "def40": 5745,
                "hp400": 3260965,
                "atk400": 102472,
                "def400": 21353,
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
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
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
            deckScore: 8481362582,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 84.42,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 10.06,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14597522,
                "atk": 635378,
                "def": 82913,
                "hp40": 855806,
                "atk40": 24638,
                "def40": 5972,
                "hp400": 3261721,
                "atk400": 131568,
                "def400": 19441,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 39.67,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 28.96,
                "increaseMaxAmmunitionCapacity": 100.88,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 18166628,
                "atk": 440409,
                "def": 118714,
                "hp40": 1371198,
                "atk40": 33249,
                "def40": 9478,
                "hp400": 4311760,
                "atk400": 104535,
                "def400": 28603,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 8,
                "skill2": 10,
                "skill3": 9,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 15595885,
                "atk": 513132,
                "def": 101927,
                "hp40": 1130922,
                "atk40": 30968,
                "def40": 7848,
                "hp400": 3663463,
                "atk400": 115386,
                "def400": 24320,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 784,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.82,
                "increaseAtk": 27.69,
                "increaseDef": 0,
                "increaseHitRate": 13.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 13412511,
                "atk": 584249,
                "def": 87873,
                "hp40": 1117291,
                "atk40": 37797,
                "def40": 7907,
                "hp400": 3269952,
                "atk400": 133471,
                "def400": 21906,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 56.65,
                "increaseAtk": 4.77,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 80.34,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15158769,
                "atk": 499482,
                "def": 85725,
                "hp40": 1229546,
                "atk40": 35176,
                "def40": 8038,
                "hp400": 3668288,
                "atk400": 116466,
                "def400": 21638,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5660887954,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 43.73,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 146.08,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 15029633,
                "atk": 650996,
                "def": 85505,
                "hp40": 1287917,
                "atk40": 40255,
                "def40": 8863,
                "hp400": 3693833,
                "atk400": 147185,
                "def400": 22279,
                "equipSlots": {
                  "head": [
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
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 784,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 23.62,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 13684734,
                "atk": 450213,
                "def": 89240,
                "hp40": 1049371,
                "atk40": 29036,
                "def40": 7061,
                "hp400": 3261584,
                "atk400": 102776,
                "def400": 21448,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 83.01,
                "increaseAtk": 10.4,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 2.28,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 25.04,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14946233,
                "atk": 649384,
                "def": 85486,
                "hp40": 1204517,
                "atk40": 38644,
                "def40": 8546,
                "hp400": 3610433,
                "atk400": 145574,
                "def400": 22015,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
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
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 41.5,
                "increaseAtk": 47.24,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 17.42,
                "increaseMaxAmmunitionCapacity": 117.32,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 14829912,
                "atk": 646986,
                "def": 86624,
                "hp40": 1088196,
                "atk40": 36245,
                "def40": 7732,
                "hp400": 3494111,
                "atk400": 143175,
                "def400": 21543,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 17.42
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 73.04
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 13673305,
                "atk": 450097,
                "def": 77531,
                "hp40": 1037942,
                "atk40": 28920,
                "def40": 6785,
                "hp400": 3250155,
                "atk400": 102660,
                "def400": 19170,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
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
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6080057408,
            squad: [
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 784,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 29.1,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15176972,
                "atk": 501154,
                "def": 88351,
                "hp40": 1247749,
                "atk40": 36848,
                "def40": 8381,
                "hp400": 3686492,
                "atk400": 118139,
                "def400": 22381,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    null
                  ]
                }
              },
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "철갑",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 38.71,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 16332699,
                "atk": 538041,
                "def": 94984,
                "hp40": 1064127,
                "atk40": 29090,
                "def40": 7325,
                "hp400": 3737364,
                "atk400": 118197,
                "def400": 22671,
                "equipSlots": {
                  "head": [
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
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 85.82,
                "increaseAtk": 0,
                "increaseDef": 12.52,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.04,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 77.15,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14913312,
                "atk": 649652,
                "def": 85195,
                "hp40": 1171596,
                "atk40": 38911,
                "def40": 8254,
                "hp400": 3577511,
                "atk400": 145841,
                "def400": 21723,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseDef",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 77.15
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 69.27,
                "increaseAtk": 29.8,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 5.21,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 12.52,
                "increaseMaxAmmunitionCapacity": 150.19,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13260740,
                "atk": 573969,
                "def": 75536,
                "hp40": 1206603,
                "atk40": 38232,
                "def40": 8306,
                "hp400": 3317055,
                "atk400": 132030,
                "def400": 20075,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.21
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 784,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 72.06,
                "increaseAtk": 7.59,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.62,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 157.48,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13078977,
                "atk": 570668,
                "def": 74499,
                "hp40": 1024840,
                "atk40": 34931,
                "def40": 7269,
                "hp400": 3135292,
                "atk400": 128729,
                "def400": 19038,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "07364473",
        nickname: "보름달",
        soloRank: "0.84%",
        totalScore: 37573815057,
        decks: [
          {
            deckScore: 9245556164,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 641,
                "element": "작열",
                "skill1": 4,
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
                "hp": 8670064,
                "atk": 285580,
                "def": 51781,
                "hp40": 712702,
                "atk40": 20336,
                "def40": 6097,
                "hp400": 3104546,
                "atk400": 100064,
                "def400": 19827,
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
                "upgrade": "1코",
                "characterLevel": 641,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.61,
                "increaseAtk": 45.84,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 14.63,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9150931,
                "atk": 299820,
                "def": 53741,
                "hp40": 1193569,
                "atk40": 34577,
                "def40": 8058,
                "hp400": 3585413,
                "atk400": 114304,
                "def400": 21788,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
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
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 87.2,
                "increaseAtk": 37.39,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 7931131,
                "atk": 339959,
                "def": 45555,
                "hp40": 1042405,
                "atk40": 33795,
                "def40": 6986,
                "hp400": 3113036,
                "atk400": 125822,
                "def400": 18578,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
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
                      "value": 52.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 23.56,
                "increaseAtk": 6.18,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 2.57,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 9058459,
                "atk": 389948,
                "def": 60317,
                "hp40": 1054289,
                "atk40": 34208,
                "def40": 6953,
                "hp400": 3460204,
                "atk400": 141138,
                "def400": 22991,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
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
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 641,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 56.65,
                "increaseAtk": 28.39,
                "increaseDef": 20.81,
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
                "hp": 8575688,
                "atk": 280633,
                "def": 50329,
                "hp40": 1068743,
                "atk40": 30403,
                "def40": 7231,
                "hp400": 3325200,
                "atk400": 105618,
                "def400": 20184,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9094173754,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 47.12,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 9975839,
                "atk": 327982,
                "def": 66426,
                "hp40": 1082317,
                "atk40": 31533,
                "def40": 7132,
                "hp400": 3755554,
                "atk400": 120640,
                "def400": 24954,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
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
                  "arm": [
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
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 641,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 55.25,
                "increaseAtk": 25.57,
                "increaseDef": 0,
                "increaseHitRate": 9.7,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 17.42,
                "increaseMaxAmmunitionCapacity": 80.34,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 9106451,
                "atk": 391506,
                "def": 58592,
                "hp40": 1102281,
                "atk40": 35765,
                "def40": 7360,
                "hp400": 3508196,
                "atk400": 142695,
                "def400": 22758,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 17.42
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    }
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 102.63,
                "increaseAtk": 42.33,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 109.1,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 7799374,
                "atk": 333889,
                "def": 50337,
                "hp40": 1043123,
                "atk40": 33612,
                "def40": 7093,
                "hp400": 3073935,
                "atk400": 123870,
                "def400": 20090,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 641,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 32.62,
                "increaseDef": 6.18,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 6.99,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 44.28,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 8068212,
                "atk": 346655,
                "def": 51895,
                "hp40": 1047010,
                "atk40": 34602,
                "def40": 6955,
                "hp400": 3157462,
                "atk400": 128400,
                "def400": 20462,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null,
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    }
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 4,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 8351007,
                "atk": 272697,
                "def": 53695,
                "hp40": 696867,
                "atk40": 17561,
                "def40": 4703,
                "hp400": 2997568,
                "atk400": 94250,
                "def400": 19428,
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
              }
            ]
          },
          {
            deckScore: 6485355070,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 641,
                "element": "철갑",
                "skill1": 10,
                "skill2": 4,
                "skill3": 10,
                "itemGrade": "R",
                "itemLevel": 0,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9716124,
                "atk": 318704,
                "def": 56800,
                "hp40": 822602,
                "atk40": 22255,
                "def40": 5742,
                "hp400": 3495839,
                "atk400": 111362,
                "def400": 21087,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 641,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 35.9,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 10364810,
                "atk": 251935,
                "def": 59448,
                "hp40": 1268453,
                "atk40": 31419,
                "def40": 8715,
                "hp400": 4002659,
                "atk400": 97702,
                "def400": 23964,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
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
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 87.2,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 9.55,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 17.42,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9124894,
                "atk": 391534,
                "def": 52632,
                "hp40": 1120724,
                "atk40": 35794,
                "def40": 7816,
                "hp400": 3526639,
                "atk400": 142724,
                "def400": 21285,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 17.42
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    null
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 11.65,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 202.68,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8086655,
                "atk": 346580,
                "def": 46553,
                "hp40": 1065453,
                "atk40": 34527,
                "def40": 7394,
                "hp400": 3175905,
                "atk400": 128325,
                "def400": 19163,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 45.71,
                "increaseAtk": 26.28,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 210.9,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 7599512,
                "atk": 327341,
                "def": 43357,
                "hp40": 975737,
                "atk40": 32952,
                "def40": 6415,
                "hp400": 2966729,
                "atk400": 121440,
                "def400": 17518,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5150436581,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 641,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 104.03,
                "increaseAtk": 51.48,
                "increaseDef": 0,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 113.21,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8483078,
                "atk": 362986,
                "def": 48912,
                "hp40": 1181028,
                "atk40": 38451,
                "def40": 8186,
                "hp400": 3375898,
                "atk400": 136000,
                "def400": 20426,
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
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 1,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 939038,
                "atk": 27988,
                "def": 5771,
                "hp40": 969788,
                "atk40": 29013,
                "def40": 5971,
                "hp400": 3182001,
                "atk400": 102753,
                "def400": 20358,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 9,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.22,
                "increaseAtk": 22.22,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 8303620,
                "atk": 355821,
                "def": 48744,
                "hp40": 1141994,
                "atk40": 37527,
                "def40": 7629,
                "hp400": 3294655,
                "atk400": 133201,
                "def400": 19986,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
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
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 1,
                "element": "수냉",
                "skill1": 7,
                "skill2": 9,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 819899,
                "atk": 22336,
                "def": 5552,
                "hp40": 850649,
                "atk40": 23361,
                "def40": 5724,
                "hp400": 3062862,
                "atk400": 97101,
                "def400": 18109,
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
                "name": "레드 후드",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 641,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 73.47,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 165.7,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9077618,
                "atk": 388435,
                "def": 52407,
                "hp40": 1213871,
                "atk40": 38936,
                "def40": 8377,
                "hp400": 3577578,
                "atk400": 143989,
                "def400": 21610,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 7598293488,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 8,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 70.66,
                "increaseAtk": 9.7,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 7.07,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 72.12,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 8231286,
                "atk": 352990,
                "def": 47453,
                "hp40": 1069660,
                "atk40": 34696,
                "def40": 7355,
                "hp400": 3222321,
                "atk400": 130370,
                "def400": 19406,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 7.07
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    null
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 641,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.23,
                "increaseAtk": 35.44,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 9991707,
                "atk": 243464,
                "def": 65247,
                "hp40": 1238609,
                "atk40": 31269,
                "def40": 8318,
                "hp400": 3869638,
                "atk400": 95051,
                "def400": 25430,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 18.7,
                "increaseChargeSpeed": 7.78,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 17.42,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 9186006,
                "atk": 301214,
                "def": 60368,
                "hp40": 1072618,
                "atk40": 30770,
                "def40": 7600,
                "hp400": 3511360,
                "atk400": 112060,
                "def400": 23461,
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
                      "effect": "increaseCriticalDamage",
                      "value": 17.42
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 641,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 71.79,
                "increaseAtk": 11.11,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 132.84,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 7718568,
                "atk": 330365,
                "def": 50188,
                "hp40": 1094793,
                "atk40": 35976,
                "def40": 7108,
                "hp400": 3085785,
                "atk400": 124464,
                "def400": 20056,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 641,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 13.75,
                "increaseAtk": 21.51,
                "increaseDef": 6.88,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 9296729,
                "atk": 304814,
                "def": 53284,
                "hp40": 1183341,
                "atk40": 34370,
                "def40": 8032,
                "hp400": 3622083,
                "atk400": 115660,
                "def400": 21632,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
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
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "05611831",
        nickname: "히르메",
        soloRank: "0.50%",
        totalScore: 39021350429,
        decks: [
          {
            deckScore: 10888371930,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "작열",
                "skill1": 4,
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
                "hp": 10645485,
                "atk": 348846,
                "def": 62261,
                "hp40": 889301,
                "atk40": 23642,
                "def40": 6251,
                "hp400": 3562538,
                "atk400": 112749,
                "def400": 21596,
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
                "name": "크라운",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 29.8,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 133.75,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 10657335,
                "atk": 258987,
                "def": 61063,
                "hp40": 1243473,
                "atk40": 30774,
                "def40": 8560,
                "hp400": 3822913,
                "atk400": 93305,
                "def400": 22946,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.24,
                "increaseAtk": 43.73,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 85.37,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9032937,
                "atk": 387485,
                "def": 52119,
                "hp40": 1176642,
                "atk40": 38317,
                "def40": 8132,
                "hp400": 3329303,
                "atk400": 133991,
                "def400": 20184,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
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
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 66.46,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.28,
                "increaseChargeDamage": 6.18,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 9782611,
                "atk": 420602,
                "def": 65593,
                "hp40": 1002046,
                "atk40": 30356,
                "def40": 7053,
                "hp400": 3407961,
                "atk400": 137286,
                "def400": 23091,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
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
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 45.13,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 76.23,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9656194,
                "atk": 316590,
                "def": 56741,
                "hp40": 1098138,
                "atk40": 31323,
                "def40": 7609,
                "hp400": 3443083,
                "atk400": 109487,
                "def400": 21070,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
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
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8417459888,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 37.3,
                "increaseAtk": 6.18,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 7.49,
                "increaseChargeDamage": 4.77,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 12.52,
                "increaseMaxAmmunitionCapacity": 92.67,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 10960439,
                "atk": 360148,
                "def": 73052,
                "hp40": 1204255,
                "atk40": 34944,
                "def40": 8008,
                "hp400": 3877492,
                "atk400": 124051,
                "def400": 25830,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "작열",
                "skill1": 10,
                "skill2": 4,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 57.78,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 13.76,
                "increaseCriticalRate": 5.37,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 145.16,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 9818267,
                "atk": 424378,
                "def": 63459,
                "hp40": 1037702,
                "atk40": 34132,
                "def40": 7258,
                "hp400": 3443617,
                "atk400": 141062,
                "def400": 22656,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.37
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.21,
                "increaseAtk": 29.1,
                "increaseDef": 0,
                "increaseHitRate": 13.76,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 88.55,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 8368672,
                "atk": 358610,
                "def": 53937,
                "hp40": 1102398,
                "atk40": 35666,
                "def40": 7429,
                "hp400": 3093390,
                "atk400": 124154,
                "def400": 20171,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "작열",
                "skill1": 7,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 15.18,
                "increaseDef": 0,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 5.8,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 10.06,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 96.77,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 8843953,
                "atk": 379368,
                "def": 57224,
                "hp40": 1141703,
                "atk40": 37047,
                "def40": 7925,
                "hp400": 3252155,
                "atk400": 130845,
                "def400": 21432,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.8
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    null
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 4,
                "itemGrade": "",
                "itemLevel": "",
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 8564357,
                "atk": 280780,
                "def": 54983,
                "hp40": 490719,
                "atk40": 11660,
                "def40": 3307,
                "hp400": 2702932,
                "atk400": 85400,
                "def400": 17465,
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
              }
            ]
          },
          {
            deckScore: 8428769442,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 102.64,
                "increaseAtk": 52.19,
                "increaseDef": 0,
                "increaseHitRate": 13.93,
                "increaseChargeSpeed": 5.73,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 12054266,
                "atk": 292785,
                "def": 79032,
                "hp40": 1322463,
                "atk40": 32622,
                "def40": 9233,
                "hp400": 4263025,
                "atk400": 103908,
                "def400": 28358,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ]
                }
              },
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.82,
                "increaseAtk": 41.62,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9321153,
                "atk": 404768,
                "def": 53785,
                "hp40": 1002723,
                "atk40": 35061,
                "def40": 7211,
                "hp400": 3282012,
                "atk400": 136363,
                "def400": 19972,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
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
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 13.75,
                "increaseAtk": 11.81,
                "increaseDef": 22.21,
                "increaseHitRate": 20.1,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.01,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 10908431,
                "atk": 357614,
                "def": 71494,
                "hp40": 1152247,
                "atk40": 32410,
                "def40": 8041,
                "hp400": 3825484,
                "atk400": 121517,
                "def400": 25427,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseDef",
                      "value": 10.4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 17.13,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 10729540,
                "atk": 351750,
                "def": 61392,
                "hp40": 1144517,
                "atk40": 32251,
                "def40": 7934,
                "hp400": 3770855,
                "atk400": 119795,
                "def400": 22580,
                "equipSlots": {
                  "head": [
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
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 668,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 97.02,
                "increaseAtk": 25.58,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 64.82,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 8443675,
                "atk": 363881,
                "def": 55204,
                "hp40": 1032076,
                "atk40": 34478,
                "def40": 7001,
                "hp400": 3062888,
                "atk400": 124736,
                "def400": 20208,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5076839096,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 668,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 44.44,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 259.29,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 9032937,
                "atk": 387459,
                "def": 51942,
                "hp40": 1176642,
                "atk40": 38292,
                "def40": 8126,
                "hp400": 3329303,
                "atk400": 133966,
                "def400": 20130,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 73.04
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 668,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "",
                "itemLevel": "",
                "increaseElementDamage": 47.12,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 35.43,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 8839866,
                "atk": 290791,
                "def": 57386,
                "hp40": 604756,
                "atk40": 16289,
                "def40": 3826,
                "hp400": 2861213,
                "atk400": 91504,
                "def400": 18501,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
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
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 27.49,
                "increaseAtk": 36.85,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 141.05,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10006922,
                "atk": 429675,
                "def": 57655,
                "hp40": 1226357,
                "atk40": 39429,
                "def40": 8493,
                "hp400": 3632273,
                "atk400": 146359,
                "def400": 21963,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 35.9,
                "increaseAtk": 31.92,
                "increaseDef": 7.59,
                "increaseHitRate": 25.74,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 113.21,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 9697764,
                "atk": 419523,
                "def": 56835,
                "hp40": 917199,
                "atk40": 29277,
                "def40": 6426,
                "hp400": 3323114,
                "atk400": 136207,
                "def400": 20237,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseDef",
                      "value": 7.59
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 12.52
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
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "",
                "itemLevel": "",
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 8558093,
                "atk": 280846,
                "def": 48487,
                "hp40": 484455,
                "atk40": 11726,
                "def40": 3283,
                "hp400": 2696668,
                "atk400": 85466,
                "def400": 15668,
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
              }
            ]
          },
          {
            deckScore: 6209910073,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "철갑",
                "skill1": 10,
                "skill2": 5,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 23.62,
                "increaseDef": 11.81,
                "increaseHitRate": 35.43,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 10700631,
                "atk": 351069,
                "def": 62612,
                "hp40": 944447,
                "atk40": 25865,
                "def40": 6602,
                "hp400": 3617684,
                "atk400": 114972,
                "def400": 21947,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 45.84,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.11,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 15.46,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9746197,
                "atk": 319593,
                "def": 57338,
                "hp40": 1188141,
                "atk40": 34326,
                "def40": 8206,
                "hp400": 3533086,
                "atk400": 112490,
                "def400": 21667,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 91.41,
                "increaseAtk": 45.85,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9988964,
                "atk": 428848,
                "def": 57529,
                "hp40": 1208399,
                "atk40": 38602,
                "def40": 8368,
                "hp400": 3614314,
                "atk400": 145532,
                "def400": 21837,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
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
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 60.86,
                "increaseAtk": 20.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 161.59,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8563653,
                "atk": 370564,
                "def": 49001,
                "hp40": 861403,
                "atk40": 28243,
                "def40": 6044,
                "hp400": 2971855,
                "atk400": 122041,
                "def400": 17813,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
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
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 668,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 73.2,
                "increaseAtk": 17.99,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 109.1,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8648500,
                "atk": 371582,
                "def": 49569,
                "hp40": 946250,
                "atk40": 29261,
                "def40": 6612,
                "hp400": 3056702,
                "atk400": 123059,
                "def400": 18381,
                "equipSlots": {
                  "head": [
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
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "09209660",
        nickname: "진섯",
        soloRank: "0.33%",
        totalScore: 40164422401,
        decks: [
          {
            deckScore: 11419709764,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 704,
                "element": "작열",
                "skill1": 7,
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
                "hp": 11649336,
                "atk": 381419,
                "def": 67770,
                "hp40": 906096,
                "atk40": 23312,
                "def40": 6092,
                "hp400": 3438637,
                "atk400": 107730,
                "def400": 20630,
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
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 13.75,
                "increaseAtk": 22.21,
                "increaseDef": 9,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 141.05,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 13694892,
                "atk": 333155,
                "def": 77741,
                "hp40": 1220796,
                "atk40": 30754,
                "def40": 8169,
                "hp400": 4161358,
                "atk400": 102040,
                "def400": 24569,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 97.02,
                "increaseAtk": 40.92,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 13.93,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 10385314,
                "atk": 450626,
                "def": 59380,
                "hp40": 1074505,
                "atk40": 36815,
                "def40": 7249,
                "hp400": 3269375,
                "atk400": 134364,
                "def400": 19537,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 80.2,
                "increaseAtk": 6.88,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.37,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 11198720,
                "atk": 483958,
                "def": 74966,
                "hp40": 992641,
                "atk40": 30356,
                "def40": 6921,
                "hp400": 3398556,
                "atk400": 137286,
                "def400": 22960,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.37
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 704,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.61,
                "increaseAtk": 10.94,
                "increaseDef": 11.11,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.01,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 12296526,
                "atk": 405478,
                "def": 71743,
                "hp40": 1155388,
                "atk40": 34108,
                "def40": 7781,
                "hp400": 3781727,
                "atk400": 121652,
                "def400": 22857,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.11
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
            deckScore: 8694858737,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 23.62,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 12483811,
                "atk": 410554,
                "def": 83150,
                "hp40": 1143725,
                "atk40": 32553,
                "def40": 7545,
                "hp400": 3816962,
                "atk400": 121659,
                "def400": 25367,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 84.41,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 11261426,
                "atk": 487379,
                "def": 72458,
                "hp40": 1055347,
                "atk40": 33778,
                "def40": 7132,
                "hp400": 3461262,
                "atk400": 140708,
                "def400": 22530,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
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
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 91.41,
                "increaseAtk": 11.11,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 64.82,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 10010964,
                "atk": 434298,
                "def": 64463,
                "hp40": 1058263,
                "atk40": 36402,
                "def40": 7160,
                "hp400": 3168715,
                "atk400": 130200,
                "def400": 20667,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 704,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.83,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 9.37,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 10078611,
                "atk": 435303,
                "def": 64695,
                "hp40": 1125910,
                "atk40": 37407,
                "def40": 7392,
                "hp400": 3236362,
                "atk400": 131205,
                "def400": 20899,
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
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
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
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 1,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 10848175,
                "atk": 356033,
                "def": 69861,
                "hp40": 701782,
                "atk40": 17822,
                "def40": 4917,
                "hp400": 3093626,
                "atk400": 97549,
                "def400": 20225,
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
              }
            ]
          },
          {
            deckScore: 8280512278,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 704,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 97.04,
                "increaseAtk": 36.14,
                "increaseDef": 0,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 24.06,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 12102723,
                "atk": 293699,
                "def": 78713,
                "hp40": 1160534,
                "atk40": 28435,
                "def40": 7547,
                "hp400": 3739974,
                "atk400": 90966,
                "def400": 24323,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "네온 : 비전 아이",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 704,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.23,
                "increaseAtk": 21.35,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 18.2,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 48.39,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 10572489,
                "atk": 457784,
                "def": 68872,
                "hp40": 1082626,
                "atk40": 36014,
                "def40": 7152,
                "hp400": 3319705,
                "atk400": 135440,
                "def400": 21700,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.21
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 6.09
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 12567211,
                "atk": 413191,
                "def": 81813,
                "hp40": 1227125,
                "atk40": 35190,
                "def40": 8060,
                "hp400": 3900362,
                "atk400": 124297,
                "def400": 25446,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 704,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 16.59,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 9995211,
                "atk": 432523,
                "def": 65071,
                "hp40": 1042510,
                "atk40": 34627,
                "def40": 6845,
                "hp400": 3152962,
                "atk400": 128425,
                "def400": 20569,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 12483811,
                "atk": 410411,
                "def": 70702,
                "hp40": 1143725,
                "atk40": 32410,
                "def40": 7456,
                "hp400": 3816962,
                "atk400": 121517,
                "def400": 22364,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6225486231,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "철갑",
                "skill1": 10,
                "skill2": 4,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 12.34,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 22.21,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 12314356,
                "atk": 404492,
                "def": 71840,
                "hp40": 974270,
                "atk40": 26491,
                "def40": 6736,
                "hp400": 3647507,
                "atk400": 115597,
                "def400": 22081,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    null
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 704,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 91.41,
                "increaseAtk": 38.96,
                "increaseDef": 0,
                "increaseHitRate": 6.18,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 5.47,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 11332832,
                "atk": 373780,
                "def": 66195,
                "hp40": 1186439,
                "atk40": 35568,
                "def40": 7944,
                "hp400": 3578283,
                "atk400": 115295,
                "def400": 21674,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 80.21,
                "increaseAtk": 4.77,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 8.08,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 158.41,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 9707543,
                "atk": 419163,
                "def": 55025,
                "hp40": 1092680,
                "atk40": 36282,
                "def40": 6978,
                "hp400": 3123492,
                "atk400": 126540,
                "def400": 18303,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.75
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 73.04
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    {
                      "effect": "increaseDef",
                      "value": 11.81
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
                      "value": 4.77
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 83.02,
                "increaseAtk": 25.58,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 11.82,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 11343762,
                "atk": 490860,
                "def": 64688,
                "hp40": 1137683,
                "atk40": 37258,
                "def40": 7544,
                "hp400": 3543598,
                "atk400": 144188,
                "def400": 21013,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 71.81,
                "increaseAtk": 0,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 4.77,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 10035743,
                "atk": 434084,
                "def": 57110,
                "hp40": 1083042,
                "atk40": 36188,
                "def40": 7178,
                "hp400": 3193494,
                "atk400": 129986,
                "def400": 18947,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 5543855391,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 704,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.82,
                "increaseAtk": 39.51,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 178.03,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 10457814,
                "atk": 451928,
                "def": 59434,
                "hp40": 1147005,
                "atk40": 38117,
                "def40": 7505,
                "hp400": 3341875,
                "atk400": 135666,
                "def400": 19744,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 77.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 704,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 10287848,
                "atk": 339884,
                "def": 66473,
                "hp40": 903466,
                "atk40": 27073,
                "def40": 5439,
                "hp400": 3115679,
                "atk400": 100813,
                "def400": 19826,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
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
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "leg": [
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 7,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 70.68,
                "increaseAtk": 22.21,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 11147066,
                "atk": 481668,
                "def": 65089,
                "hp40": 1120041,
                "atk40": 36025,
                "def40": 7523,
                "hp400": 3483747,
                "atk400": 141078,
                "def400": 21092,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
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
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 704,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 10277446,
                "atk": 339218,
                "def": 57907,
                "hp40": 893064,
                "atk40": 26407,
                "def40": 5364,
                "hp400": 3105277,
                "atk400": 100147,
                "def400": 17749,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
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
                    null,
                    null,
                    null
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 704,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 41.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 11.54,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 11224957,
                "atk": 485703,
                "def": 64609,
                "hp40": 1197931,
                "atk40": 40060,
                "def40": 8468,
                "hp400": 3561638,
                "atk400": 145113,
                "def400": 21700,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null
                  ],
                  "torso": [
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
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 11.54
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "09551077",
        nickname: "채아",
        soloRank: 124,
        totalScore: 44265264806,
        decks: [
          {
            deckScore: 6553922021,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.22,
                "increaseAtk": 52.19,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 132.83,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13990213,
                "atk": 605689,
                "def": 79349,
                "hp40": 1245485,
                "atk40": 39258,
                "def40": 8268,
                "hp400": 3651401,
                "atk400": 146188,
                "def400": 21684,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 762,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 38.71,
                "increaseAtk": 16.59,
                "increaseDef": 6.18,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 9.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 48.39,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 12741346,
                "atk": 419941,
                "def": 82654,
                "hp40": 1022703,
                "atk40": 29321,
                "def40": 6438,
                "hp400": 3234916,
                "atk400": 103061,
                "def400": 20825,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
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
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
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
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 7,
                "skill2": 7,
                "skill3": 9,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.63,
                "increaseAtk": 20.11,
                "increaseDef": 0,
                "increaseHitRate": 10.94,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 84.45,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 13849509,
                "atk": 601241,
                "def": 80468,
                "hp40": 1104781,
                "atk40": 34810,
                "def40": 7300,
                "hp400": 3510696,
                "atk400": 141740,
                "def400": 21111,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 44.43,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13910501,
                "atk": 604476,
                "def": 79486,
                "hp40": 1165773,
                "atk40": 38045,
                "def40": 8128,
                "hp400": 3571689,
                "atk400": 144975,
                "def400": 21598,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
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
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 47.12,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 35.43,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 12741346,
                "atk": 419941,
                "def": 72009,
                "hp40": 1022703,
                "atk40": 29321,
                "def40": 6396,
                "hp400": 3234916,
                "atk400": 103061,
                "def400": 18781,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 8453399031,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "철갑",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 21.51,
                "increaseDef": 0,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15148217,
                "atk": 498705,
                "def": 87739,
                "hp40": 987410,
                "atk40": 26680,
                "def40": 6441,
                "hp400": 3660647,
                "atk400": 115786,
                "def400": 21786,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 66.46,
                "increaseAtk": 39.5,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.28,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13881477,
                "atk": 602282,
                "def": 78516,
                "hp40": 1136749,
                "atk40": 35851,
                "def40": 7434,
                "hp400": 3542664,
                "atk400": 142781,
                "def400": 20851,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    null
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 98.42,
                "increaseAtk": 19.4,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 11.11,
                "increaseCriticalRate": 10.39,
                "increaseCriticalDamage": 20.14,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13972255,
                "atk": 604891,
                "def": 79506,
                "hp40": 1227527,
                "atk40": 38460,
                "def40": 8149,
                "hp400": 3633442,
                "atk400": 145390,
                "def400": 21618,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 7.07
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.11
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.61,
                "increaseAtk": 46.54,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 12336996,
                "atk": 534251,
                "def": 69823,
                "hp40": 1157410,
                "atk40": 37382,
                "def40": 7471,
                "hp400": 3267862,
                "atk400": 131180,
                "def400": 19240,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
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
                      "value": 13.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 20.75,
                "increaseAtk": 42.32,
                "increaseDef": 11.81,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 16899739,
                "atk": 411353,
                "def": 95928,
                "hp40": 1322851,
                "atk40": 33734,
                "def40": 9051,
                "hp400": 4263413,
                "atk400": 105019,
                "def400": 25451,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9302552917,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 33.1,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 15406565,
                "atk": 507187,
                "def": 102578,
                "hp40": 1245758,
                "atk40": 35162,
                "def40": 8166,
                "hp400": 3918995,
                "atk400": 124268,
                "def400": 25988,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null,
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 9.54
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 76.28,
                "increaseAtk": 9.7,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 12.52,
                "increaseCriticalRate": 6.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13919385,
                "atk": 602818,
                "def": 89362,
                "hp40": 1174657,
                "atk40": 36387,
                "def40": 7787,
                "hp400": 3580572,
                "atk400": 143317,
                "def400": 23185,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
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
                      "value": 9.7
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 76.28,
                "increaseAtk": 42.33,
                "increaseDef": 9.7,
                "increaseHitRate": 14.63,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 18.4,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 13962535,
                "atk": 606576,
                "def": 89866,
                "hp40": 1217807,
                "atk40": 40145,
                "def40": 8291,
                "hp400": 3623723,
                "atk400": 147075,
                "def400": 23689,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 14.63
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 18.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseDef",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 762,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 62.27,
                "increaseAtk": 19.4,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 29.94,
                "increaseMaxAmmunitionCapacity": 92.66,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 12759247,
                "atk": 552175,
                "def": 81892,
                "hp40": 1132478,
                "atk40": 35432,
                "def40": 7473,
                "hp400": 3327348,
                "atk400": 132981,
                "def400": 21520,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 19.38
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 5.47,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 14003194,
                "atk": 460330,
                "def": 90062,
                "hp40": 1084563,
                "atk40": 29711,
                "def40": 7373,
                "hp400": 3523305,
                "atk400": 111001,
                "def400": 22982,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
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
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
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
            deckScore: 10866109974,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "작열",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 34.5,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.08,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15202944,
                "atk": 499738,
                "def": 88366,
                "hp40": 1042137,
                "atk40": 27713,
                "def40": 7068,
                "hp400": 3715374,
                "atk400": 116819,
                "def400": 22414,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 762,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 88.62,
                "increaseAtk": 45.13,
                "increaseDef": 11.65,
                "increaseHitRate": 8.29,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 13615555,
                "atk": 449288,
                "def": 79489,
                "hp40": 1193794,
                "atk40": 35231,
                "def40": 8175,
                "hp400": 3538739,
                "atk400": 113395,
                "def400": 21636,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
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
                    {
                      "effect": "increaseDef",
                      "value": 5.47
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 41.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 104.99,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 13261819,
                "atk": 576135,
                "def": 75559,
                "hp40": 1187867,
                "atk40": 39516,
                "def40": 7958,
                "hp400": 3467155,
                "atk400": 140818,
                "def400": 20718,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 48.39
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 69.27,
                "increaseAtk": 10.4,
                "increaseDef": 5.47,
                "increaseHitRate": 10.4,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 13919385,
                "atk": 602704,
                "def": 92748,
                "hp40": 1174657,
                "atk40": 36273,
                "def40": 7778,
                "hp400": 3580572,
                "atk400": 143203,
                "def400": 23816,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 10.4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
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
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.82,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 9.7,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 6.64,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 15414416,
                "atk": 508625,
                "def": 89920,
                "hp40": 1253608,
                "atk40": 36600,
                "def40": 8622,
                "hp400": 3926846,
                "atk400": 125707,
                "def400": 23968,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 6.64
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9089280863,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "1코",
                "characterLevel": 762,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.02,
                "increaseAtk": 45.85,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 6.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 27.84,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 15187574,
                "atk": 368587,
                "def": 98975,
                "hp40": 1250358,
                "atk40": 30717,
                "def40": 8329,
                "hp400": 3881387,
                "atk400": 94498,
                "def400": 25440,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              },
              {
                "name": "네온 : 비전 아이",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 762,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 83,
                "increaseAtk": 47.26,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 5.14,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 96.77,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 12808200,
                "atk": 554514,
                "def": 83516,
                "hp40": 1181431,
                "atk40": 37771,
                "def40": 7898,
                "hp400": 3376301,
                "atk400": 135320,
                "def400": 22171,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 73.47,
                "increaseAtk": 9,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 5.8,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 6.39,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 96.78,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 15350745,
                "atk": 506211,
                "def": 100099,
                "hp40": 1189938,
                "atk40": 34186,
                "def40": 7999,
                "hp400": 3863175,
                "atk400": 123292,
                "def400": 25385,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 6.39
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 5.8
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 762,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 87.22,
                "increaseAtk": 6.88,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 169.81,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15394462,
                "atk": 506393,
                "def": 87144,
                "hp40": 1233655,
                "atk40": 34368,
                "def40": 8166,
                "hp400": 3906892,
                "atk400": 123474,
                "def400": 23074,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
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
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    null
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 762,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 44.31,
                "increaseAtk": 42.33,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.28,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 6.64,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 11644584,
                "atk": 503940,
                "def": 75450,
                "hp40": 1097805,
                "atk40": 35196,
                "def40": 6855,
                "hp400": 3088797,
                "atk400": 123684,
                "def400": 19803,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.28
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 6.64
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "00332840",
        nickname: "팡팡",
        soloRank: "0.53%",
        totalScore: 38805920226,
        decks: [
          {
            deckScore: 11163339027,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "작열",
                "skill1": 4,
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
                "hp": 18611950,
                "atk": 612545,
                "def": 107898,
                "hp40": 1054213,
                "atk40": 27290,
                "def40": 7099,
                "hp400": 3727450,
                "atk400": 116396,
                "def400": 22445,
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
                "upgrade": "2코",
                "characterLevel": 822,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 105.43,
                "increaseAtk": 33.33,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 17269234,
                "atk": 572585,
                "def": 100666,
                "hp40": 1251649,
                "atk40": 38668,
                "def40": 8709,
                "hp400": 3690392,
                "atk400": 119959,
                "def400": 22708,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
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
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 109.64,
                "increaseAtk": 46.55,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 37.56,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 17095866,
                "atk": 745727,
                "def": 97942,
                "hp40": 1293902,
                "atk40": 43419,
                "def40": 9468,
                "hp400": 3699818,
                "atk400": 150349,
                "def400": 22937,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
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
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 40.11,
                "increaseAtk": 22.76,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 16964791,
                "atk": 738181,
                "def": 113417,
                "hp40": 1162827,
                "atk40": 35873,
                "def40": 8065,
                "hp400": 3568742,
                "atk400": 142803,
                "def400": 24104,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 822,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.83,
                "increaseAtk": 27.7,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 8,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 18220850,
                "atk": 604111,
                "def": 106197,
                "hp40": 1279174,
                "atk40": 39391,
                "def40": 8935,
                "hp400": 3858613,
                "atk400": 125372,
                "def400": 23742,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
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
            deckScore: 8923148773,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 9,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.11,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 15.18,
                "increaseCriticalRate": 13.8,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 193.55,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 18719184,
                "atk": 616660,
                "def": 125048,
                "hp40": 1161447,
                "atk40": 31405,
                "def40": 7991,
                "hp400": 3834684,
                "atk400": 120511,
                "def400": 25812,
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
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.11
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 6.73
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 7.07
                    },
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 822,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.83,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 14189067,
                "atk": 615677,
                "def": 90864,
                "hp40": 1112301,
                "atk40": 34489,
                "def40": 7165,
                "hp400": 3103293,
                "atk400": 122977,
                "def400": 19907,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
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
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 102.64,
                "increaseAtk": 20.11,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 165.7,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 17077423,
                "atk": 745727,
                "def": 110160,
                "hp40": 1275459,
                "atk40": 43419,
                "def40": 9018,
                "hp400": 3681375,
                "atk400": 150349,
                "def400": 24416,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
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
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 17.95,
                "increaseAtk": 24.16,
                "increaseDef": 6.18,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 125.53,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 17059465,
                "atk": 741680,
                "def": 109390,
                "hp40": 1257501,
                "atk40": 39372,
                "def40": 8249,
                "hp400": 3663416,
                "atk400": 146302,
                "def400": 23646,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
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
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    }
                  ]
                }
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 1,
                "skill3": 1,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 23.56,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 15660612,
                "atk": 515915,
                "def": 100489,
                "hp40": 840278,
                "atk40": 21906,
                "def40": 5630,
                "hp400": 3096735,
                "atk400": 97121,
                "def400": 20072,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
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
              }
            ]
          },
          {
            deckScore: 7764630051,
            squad: [
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 822,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.22,
                "increaseAtk": 35.44,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 27,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 19269278,
                "atk": 467747,
                "def": 125309,
                "hp40": 1311101,
                "atk40": 32399,
                "def40": 8512,
                "hp400": 4045307,
                "atk400": 98682,
                "def400": 26295,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 12.52
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
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
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ]
                }
              },
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 87.21,
                "increaseAtk": 41.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 14789423,
                "atk": 642461,
                "def": 83802,
                "hp40": 1189587,
                "atk40": 38026,
                "def40": 7658,
                "hp400": 3260218,
                "atk400": 130053,
                "def400": 19250,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
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
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "3코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 38.71,
                "increaseAtk": 13.77,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 4.35,
                "increaseCriticalDamage": 29.94,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 17451763,
                "atk": 574900,
                "def": 113911,
                "hp40": 1126148,
                "atk40": 30715,
                "def40": 7732,
                "hp400": 3611789,
                "atk400": 113569,
                "def400": 23898,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 35.43,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 29.94,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 18835307,
                "atk": 621215,
                "def": 106217,
                "hp40": 1277570,
                "atk40": 35960,
                "def40": 8293,
                "hp400": 3950807,
                "atk400": 125066,
                "def400": 23201,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 822,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.82,
                "increaseAtk": 27.68,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 15054782,
                "atk": 654142,
                "def": 97954,
                "hp40": 1193410,
                "atk40": 38082,
                "def40": 7802,
                "hp400": 3303862,
                "atk400": 131880,
                "def400": 21526,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
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
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6041791512,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "철갑",
                "skill1": 10,
                "skill2": 5,
                "skill3": 10,
                "itemGrade": "",
                "itemLevel": "",
                "increaseElementDamage": 19.35,
                "increaseAtk": 5.47,
                "increaseDef": 12.52,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 6.91,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 8.69,
                "increaseCriticalDamage": 44.42,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 18470599,
                "atk": 608747,
                "def": 107036,
                "hp40": 912862,
                "atk40": 23492,
                "def40": 6237,
                "hp400": 3586099,
                "atk400": 112598,
                "def400": 21583,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.75
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 19.38
                    },
                    {
                      "effect": "increaseDef",
                      "value": 12.52
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 47.12,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 16.58,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 194.46,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 20684710,
                "atk": 504531,
                "def": 117686,
                "hp40": 1371198,
                "atk40": 36327,
                "def40": 9970,
                "hp400": 4311760,
                "atk400": 107613,
                "def400": 26370,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
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
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 94.22,
                "increaseAtk": 0,
                "increaseDef": 11.11,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 13.93,
                "increaseCriticalRate": 4.69,
                "increaseCriticalDamage": 22.1,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 17059465,
                "atk": 741680,
                "def": 96683,
                "hp40": 1257501,
                "atk40": 39372,
                "def40": 8209,
                "hp400": 3663416,
                "atk400": 146302,
                "def400": 21678,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 11.54
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.11
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
                "upgrade": "1코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 22.06,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 4.77,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 15359608,
                "atk": 666647,
                "def": 87169,
                "hp40": 1221009,
                "atk40": 38266,
                "def40": 8315,
                "hp400": 3373670,
                "atk400": 133940,
                "def400": 20319,
                "equipSlots": {
                  "head": [
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
                      "value": 5.47
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 91.43,
                "increaseAtk": 14.63,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 27.84,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 14929578,
                "atk": 649175,
                "def": 84386,
                "hp40": 1068206,
                "atk40": 33115,
                "def40": 7078,
                "hp400": 3178658,
                "atk400": 126913,
                "def400": 18847,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                      "value": 20.75
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 4913010863,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 101.23,
                "increaseAtk": 31.75,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 190.35,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 17077423,
                "atk": 742478,
                "def": 96458,
                "hp40": 1275459,
                "atk40": 40170,
                "def40": 8327,
                "hp400": 3681375,
                "atk400": 147100,
                "def400": 21744,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 822,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 11.81,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 15994750,
                "atk": 527542,
                "def": 103862,
                "hp40": 1174416,
                "atk40": 33533,
                "def40": 7473,
                "hp400": 3430873,
                "atk400": 108748,
                "def400": 22148,
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
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15494693,
                "atk": 515131,
                "def": 87997,
                "hp40": 964953,
                "atk40": 30808,
                "def40": 6645,
                "hp400": 3177166,
                "atk400": 104548,
                "def400": 19030,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ],
                  "torso": [
                    null,
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 78.81,
                "increaseAtk": 8.29,
                "increaseDef": 15.17,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 27.84,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 16944097,
                "atk": 738681,
                "def": 98384,
                "hp40": 1142133,
                "atk40": 36373,
                "def40": 7663,
                "hp400": 3548048,
                "atk400": 143303,
                "def400": 21475,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseDef",
                      "value": 4.77
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 10.4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    }
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 822,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.02,
                "increaseAtk": 7.59,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 16.58,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 17095866,
                "atk": 745727,
                "def": 97942,
                "hp40": 1293902,
                "atk40": 43419,
                "def40": 9468,
                "hp400": 3699818,
                "atk400": 150349,
                "def400": 22937,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "08911414",
        nickname: "벙슨",
        soloRank: 151,
        totalScore: 43802241390,
        decks: [
          {
            deckScore: 8846315314,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 84.4,
                "increaseAtk": 10.4,
                "increaseDef": 0,
                "increaseHitRate": 6.88,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.18,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 6.64,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 15852096,
                "atk": 690417,
                "def": 89894,
                "hp40": 1146741,
                "atk40": 36848,
                "def40": 7560,
                "hp400": 3552656,
                "atk400": 143778,
                "def400": 21029,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.18
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
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 6.64
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 6.88
                    }
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.61,
                "increaseAtk": 42.31,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 81.26,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 19224788,
                "atk": 466267,
                "def": 125115,
                "hp40": 1251576,
                "atk40": 30555,
                "def40": 8219,
                "hp400": 4192138,
                "atk400": 101840,
                "def400": 27344,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 81.26
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "5코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 10.94,
                "increaseAtk": 34.02,
                "increaseDef": 11.81,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 182.14,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 16936705,
                "atk": 560864,
                "def": 110688,
                "hp40": 1170730,
                "atk40": 35333,
                "def40": 8148,
                "hp400": 3750170,
                "atk400": 121314,
                "def400": 24924,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 10.94
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
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
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ]
                }
              },
              {
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 69,
                "increaseAtk": 9,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.98,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 17598042,
                "atk": 580686,
                "def": 99348,
                "hp40": 1258760,
                "atk40": 36045,
                "def40": 8219,
                "hp400": 3931997,
                "atk400": 125152,
                "def400": 23127,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 801,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 30.51,
                "increaseDef": 0,
                "increaseHitRate": 4.77,
                "increaseChargeSpeed": 4.04,
                "increaseChargeDamage": 10.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 9.58,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 13921508,
                "atk": 607863,
                "def": 90964,
                "hp40": 1022074,
                "atk40": 34557,
                "def40": 7069,
                "hp400": 3132526,
                "atk400": 128355,
                "def400": 20793,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 4.77
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 9.58
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.04
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 9925708434,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 8.29,
                "increaseDef": 6.18,
                "increaseHitRate": 8.29,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 178.03,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 17438137,
                "atk": 575963,
                "def": 116411,
                "hp40": 1098855,
                "atk40": 31323,
                "def40": 7476,
                "hp400": 3772092,
                "atk400": 120429,
                "def400": 25298,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 8.29
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
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
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 801,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 80.21,
                "increaseAtk": 8.29,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 17.28,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 14538237,
                "atk": 633565,
                "def": 93543,
                "hp40": 1122826,
                "atk40": 37327,
                "def40": 7675,
                "hp400": 3317696,
                "atk400": 134876,
                "def400": 21723,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
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
                      "value": 15.15
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 5.47
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.82,
                "increaseAtk": 32.61,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 30.92,
                "increaseMaxAmmunitionCapacity": 100.88,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 15939708,
                "atk": 695297,
                "def": 103049,
                "hp40": 1234353,
                "atk40": 41728,
                "def40": 8925,
                "hp400": 3640269,
                "atk400": 148658,
                "def400": 24323,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 20.36
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
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 80.2,
                "increaseAtk": 17.99,
                "increaseDef": 14.47,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 113.2,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 15887544,
                "atk": 692133,
                "def": 102150,
                "hp40": 1182189,
                "atk40": 38564,
                "def40": 8026,
                "hp400": 3588104,
                "atk400": 145494,
                "def400": 23424,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseDef",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
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
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 4,
                "skill3": 4,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 17080004,
                "atk": 565088,
                "def": 109767,
                "hp40": 1027375,
                "atk40": 30002,
                "def40": 7021,
                "hp400": 3653713,
                "atk400": 117546,
                "def400": 23830,
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
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseHitRate",
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
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6211842325,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 106.84,
                "increaseAtk": 52.18,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 125.53,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 15971897,
                "atk": 693824,
                "def": 90702,
                "hp40": 1266542,
                "atk40": 40255,
                "def40": 8686,
                "hp400": 3672458,
                "atk400": 147185,
                "def400": 22103,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
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
                      "value": 13.22
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
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
                "upgrade": "풀돌",
                "characterLevel": 801,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 9.84,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 15.46,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 15496480,
                "atk": 512551,
                "def": 101091,
                "hp40": 1163776,
                "atk40": 34796,
                "def40": 7873,
                "hp400": 3508721,
                "atk400": 112960,
                "def400": 23124,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 15.46
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
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
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ]
                }
              },
              {
                "name": "퀀시 : 이스케이프 퀸",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.02,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 17.28,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 72.12,
                "orgMaxAmmo": 120,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 78,
                "hp": 15875028,
                "atk": 692057,
                "def": 92360,
                "hp40": 1169673,
                "atk40": 38488,
                "def40": 7935,
                "hp400": 3575588,
                "atk400": 145418,
                "def400": 21746,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
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
                      "value": 31.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 0,
                "increaseAtk": 23.62,
                "increaseDef": 0,
                "increaseHitRate": 23.62,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 15467980,
                "atk": 511601,
                "def": 87888,
                "hp40": 1135276,
                "atk40": 33846,
                "def40": 7640,
                "hp400": 3480221,
                "atk400": 112010,
                "def400": 20768,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseHitRate",
                      "value": 11.81
                    }
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
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "레드 후드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 99.83,
                "increaseAtk": 34.73,
                "increaseDef": 6.18,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 88.56,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 15939708,
                "atk": 695297,
                "def": 91219,
                "hp40": 1234353,
                "atk40": 41728,
                "def40": 8885,
                "hp400": 3640269,
                "atk400": 148658,
                "def400": 22354,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
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
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 44.28
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseDef",
                      "value": 6.18
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6755088258,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 5,
                "increaseElementDamage": 0,
                "increaseAtk": 6.18,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 22.21,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 32.88,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 17293118,
                "atk": 569867,
                "def": 100120,
                "hp40": 953836,
                "atk40": 25227,
                "def40": 6315,
                "hp400": 3627073,
                "atk400": 114333,
                "def400": 21661,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
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
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.18
                    },
                    null
                  ]
                }
              },
              {
                "name": "나유타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 83.01,
                "increaseAtk": 32.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 6.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 17589496,
                "atk": 582823,
                "def": 102462,
                "hp40": 1250213,
                "atk40": 38182,
                "def40": 8657,
                "hp400": 3923451,
                "atk400": 127289,
                "def400": 24003,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.64
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 88.61,
                "increaseAtk": 17.99,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 6.32,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 12.52,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 15903528,
                "atk": 692424,
                "def": 90346,
                "hp40": 1198173,
                "atk40": 38855,
                "def40": 8012,
                "hp400": 3604088,
                "atk400": 145785,
                "def400": 21481,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.75
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 12.52
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.57
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.82,
                "increaseAtk": 48.67,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 14068844,
                "atk": 611613,
                "def": 79620,
                "hp40": 1169410,
                "atk40": 38307,
                "def40": 7676,
                "hp400": 3279862,
                "atk400": 132105,
                "def400": 19445,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
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
                      "value": 13.93
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    null
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.21,
                "increaseAtk": 11.11,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 4,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 13985444,
                "atk": 608858,
                "def": 79073,
                "hp40": 1086010,
                "atk40": 35552,
                "def40": 7129,
                "hp400": 3196462,
                "atk400": 129350,
                "def400": 18898,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 12063287059,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "작열",
                "skill1": 4,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 11.42,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 17521537,
                "atk": 579182,
                "def": 101888,
                "hp40": 1182255,
                "atk40": 34541,
                "def40": 8083,
                "hp400": 3855492,
                "atk400": 123648,
                "def400": 23429,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null,
                    {
                      "effect": "increaseDef",
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
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 44.3,
                "increaseAtk": 32.62,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 6.88,
                "increaseCriticalRate": 6.05,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 19330730,
                "atk": 471299,
                "def": 110006,
                "hp40": 1357518,
                "atk40": 35586,
                "def40": 9764,
                "hp400": 4298080,
                "atk400": 106872,
                "def400": 26164,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
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
                      "value": 22.15
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
                      "effect": "increaseCriticalRate",
                      "value": 6.05
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.01,
                "increaseAtk": 46.55,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.33,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.64,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 15924954,
                "atk": 695297,
                "def": 90827,
                "hp40": 1219599,
                "atk40": 41728,
                "def40": 8493,
                "hp400": 3625515,
                "atk400": 148658,
                "def400": 21962,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
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
                  "torso": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 78.8,
                "increaseAtk": 34.02,
                "increaseDef": 0,
                "increaseHitRate": 5.47,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 13.76,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 15906996,
                "atk": 692076,
                "def": 105983,
                "hp40": 1201641,
                "atk40": 38507,
                "def40": 7942,
                "hp400": 3607556,
                "atk400": 145437,
                "def400": 23981,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
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
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 5.47
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    },
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 801,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.02,
                "increaseAtk": 24.33,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 9.7,
                "increaseCriticalRate": 8.69,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 17589496,
                "atk": 582823,
                "def": 102462,
                "hp40": 1250213,
                "atk40": 38182,
                "def40": 8657,
                "hp400": 3923451,
                "atk400": 127289,
                "def400": 24003,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    null
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        uid: "00021785",
        nickname: "케빈",
        soloRank: "2.12%",
        totalScore: 35692040195,
        decks: [
          {
            deckScore: 7871072991,
            squad: [
              {
                "name": "토브",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 23.56,
                "increaseAtk": 0,
                "increaseDef": 23.62,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.92,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 137.86,
                "orgMaxAmmo": 60,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 100,
                "hp": 10636387,
                "atk": 350641,
                "def": 71326,
                "hp40": 1096775,
                "atk40": 32655,
                "def40": 7726,
                "hp400": 3723113,
                "atk400": 120199,
                "def400": 25235,
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
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
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
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    },
                    null
                  ]
                }
              },
              {
                "name": "아르카나 : 포츈 메이트",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 665,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 70.4,
                "increaseAtk": 13.22,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 14.48,
                "increaseMaxAmmunitionCapacity": 60.71,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 8167006,
                "atk": 352084,
                "def": 52552,
                "hp40": 790520,
                "atk40": 24242,
                "def40": 5338,
                "hp400": 2821332,
                "atk400": 114500,
                "def400": 18335,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 60.71
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 14.48
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
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
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 12.34
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    },
                    null
                  ]
                }
              },
              {
                "name": "도로시 : 세렌디피티",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 90.02,
                "increaseAtk": 22.92,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 3.32,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 104.07,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 8234304,
                "atk": 354335,
                "def": 52622,
                "hp40": 1002455,
                "atk40": 32921,
                "def40": 6334,
                "hp400": 2993447,
                "atk400": 121409,
                "def400": 19076,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
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
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null
                  ]
                }
              },
              {
                "name": "드레이크",
                "subName": "",
                "upgrade": "6코",
                "characterLevel": 665,
                "element": "작열",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 91.42,
                "increaseAtk": 33.32,
                "increaseDef": 0,
                "increaseHitRate": 21.51,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 40.17,
                "orgMaxAmmo": 9,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 86,
                "hp": 9639729,
                "atk": 414385,
                "def": 62137,
                "hp40": 1054078,
                "atk40": 32802,
                "def40": 7183,
                "hp400": 3417784,
                "atk400": 137855,
                "def400": 22311,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    }
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
              },
              {
                "name": "솔린 : 프로스트 티켓",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 9,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 96,
                "hp": 9138091,
                "atk": 300638,
                "def": 59060,
                "hp40": 620580,
                "atk40": 16722,
                "def40": 4543,
                "hp400": 2965525,
                "atk400": 94886,
                "def400": 19551,
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
              }
            ]
          },
          {
            deckScore: 8659782096,
            squad: [
              {
                "name": "미란다",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 665,
                "element": "작열",
                "skill1": 7,
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
                "hp": 10588148,
                "atk": 346993,
                "def": 61859,
                "hp40": 878186,
                "atk40": 23329,
                "def40": 6114,
                "hp400": 3551423,
                "atk400": 112435,
                "def400": 21460,
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
                "upgrade": "1코",
                "characterLevel": 665,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 95.62,
                "increaseAtk": 18.7,
                "increaseDef": 9,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 4.63,
                "increaseChargeDamage": 4.77,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 27.84,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9717515,
                "atk": 320444,
                "def": 57078,
                "hp40": 1029654,
                "atk40": 30850,
                "def40": 7201,
                "hp400": 3421498,
                "atk400": 110577,
                "def400": 20931,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 27.84
                    },
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 4.77
                    }
                  ]
                }
              },
              {
                "name": "스노우 화이트 : 헤비암즈",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.43,
                "increaseAtk": 32.62,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 31.95,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 8291406,
                "atk": 355938,
                "def": 47467,
                "hp40": 914920,
                "atk40": 28096,
                "def40": 6167,
                "hp400": 2945732,
                "atk400": 118354,
                "def400": 17536,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 31.95
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 24.96
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    null
                  ]
                }
              },
              {
                "name": "프리바티",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 76,
                "increaseAtk": 8.29,
                "increaseDef": 0,
                "increaseHitRate": 7.59,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 60,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 90,
                "hp": 9330834,
                "atk": 401047,
                "def": 62629,
                "hp40": 1051813,
                "atk40": 33092,
                "def40": 7434,
                "hp400": 3331102,
                "atk400": 134394,
                "def400": 22628,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 15.15
                    },
                    null,
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null,
                    null
                  ]
                }
              },
              {
                "name": "리틀 머메이드",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 665,
                "element": "풍압",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 92.81,
                "increaseAtk": 36.68,
                "increaseDef": 4.77,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 9260338,
                "atk": 303555,
                "def": 54214,
                "hp40": 1064243,
                "atk40": 30353,
                "def40": 7161,
                "hp400": 3320700,
                "atk400": 105568,
                "def400": 20114,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
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
                      "value": 20.75
                    },
                    {
                      "effect": "increaseDef",
                      "value": 4.77
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 14.63
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 6510075445,
            squad: [
              {
                "name": "리타",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 665,
                "element": "철갑",
                "skill1": 10,
                "skill2": 4,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 0,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 35.43,
                "increaseCriticalRate": 8.69,
                "increaseCriticalDamage": 16.44,
                "increaseMaxAmmunitionCapacity": 64.82,
                "orgMaxAmmo": 120,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 86,
                "hp": 10643294,
                "atk": 349130,
                "def": 62193,
                "hp40": 933332,
                "atk40": 25466,
                "def40": 6448,
                "hp400": 3606569,
                "atk400": 114573,
                "def400": 21793,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.98
                    },
                    null,
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null
                  ]
                }
              },
              {
                "name": "크라운",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 665,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 16.55,
                "increaseAtk": 16.58,
                "increaseDef": 9,
                "increaseHitRate": 13.93,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 18.69,
                "increaseCriticalRate": 5.03,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 109.1,
                "orgMaxAmmo": 300,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 92,
                "hp": 10212219,
                "atk": 248485,
                "def": 58308,
                "hp40": 1196513,
                "atk40": 29924,
                "def40": 8026,
                "hp400": 3678616,
                "atk400": 90096,
                "def400": 21869,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 4.77
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseDef",
                      "value": 9
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 40.17
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.03
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ]
                }
              },
              {
                "name": "헬름",
                "subName": "",
                "upgrade": "풀코",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SSR",
                "itemLevel": 3,
                "increaseElementDamage": 85.8,
                "increaseAtk": 26.29,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 4.63,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 13.5,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9853705,
                "atk": 423906,
                "def": 56614,
                "hp40": 1114739,
                "atk40": 35509,
                "def40": 7685,
                "hp400": 3520654,
                "atk400": 142439,
                "def400": 21154,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
                    }
                  ],
                  "arm": [
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
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ]
                }
              },
              {
                "name": "루드밀라 : 윈터 오너",
                "subName": "",
                "upgrade": "2돌",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 98.42,
                "increaseAtk": 30.51,
                "increaseDef": 6.88,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 52.5,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 8549223,
                "atk": 367472,
                "def": 48874,
                "hp40": 1028101,
                "atk40": 33202,
                "def40": 6928,
                "hp400": 3098732,
                "atk400": 125229,
                "def400": 18475,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 52.5
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseDef",
                      "value": 6.88
                    }
                  ]
                }
              },
              {
                "name": "일레그 : 붐 앤 쇼크",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 91.42,
                "increaseAtk": 9.7,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 5.71,
                "increaseCriticalDamage": 8.6,
                "increaseMaxAmmunitionCapacity": 36.06,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 7921994,
                "atk": 342260,
                "def": 44896,
                "hp40": 690145,
                "atk40": 20846,
                "def40": 4563,
                "hp400": 2681137,
                "atk400": 109334,
                "def400": 15666,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 8.6
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
                      "value": 23.56
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    null,
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 36.06
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    }
                  ]
                }
              }
            ]
          },
          {
            deckScore: 4959619266,
            squad: [
              {
                "name": "라피 : 레드 후드",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 665,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 94.23,
                "increaseAtk": 45.14,
                "increaseDef": 0,
                "increaseHitRate": 26.29,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 300,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 75,
                "hp": 9064558,
                "atk": 389738,
                "def": 51978,
                "hp40": 1092168,
                "atk40": 35411,
                "def40": 7515,
                "hp400": 3287038,
                "atk400": 132960,
                "def400": 19754,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 7.59
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.22
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9.7
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 19.35
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "민트",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 665,
                "element": "철갑",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 20.1,
                "increaseDef": 11.81,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 3.16,
                "increaseChargeDamage": 18.69,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 8801138,
                "atk": 289252,
                "def": 56978,
                "hp40": 765750,
                "atk40": 21407,
                "def40": 4718,
                "hp400": 2977963,
                "atk400": 95147,
                "def400": 19105,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.16
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 6.88
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseDef",
                      "value": 11.81
                    }
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
                "characterLevel": 665,
                "element": "작열",
                "skill1": 10,
                "skill2": 4,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.81,
                "increaseAtk": 19.4,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 8.08,
                "increaseChargeDamage": 8.29,
                "increaseCriticalRate": 3.66,
                "increaseCriticalDamage": 10.56,
                "increaseMaxAmmunitionCapacity": 85.37,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9937105,
                "atk": 426686,
                "def": 57166,
                "hp40": 1198139,
                "atk40": 38289,
                "def40": 8237,
                "hp400": 3604054,
                "atk400": 145219,
                "def400": 21706,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 8.29
                    },
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 26.36
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 85.37
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 8.29
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.63
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.66
                    }
                  ]
                }
              },
              {
                "name": "프리카",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 7,
                "skill3": 7,
                "itemGrade": "SR",
                "itemLevel": 0,
                "increaseElementDamage": 0,
                "increaseAtk": 29.8,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 11.81,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 29.94,
                "increaseMaxAmmunitionCapacity": 68.93,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 8801138,
                "atk": 289252,
                "def": 49666,
                "hp40": 765750,
                "atk40": 21407,
                "def40": 4676,
                "hp400": 2977963,
                "atk400": 95147,
                "def400": 17061,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 13.5
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
                      "effect": "increaseAtk",
                      "value": 11.81
                    },
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 68.93
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseAtk",
                      "value": 11.81
                    }
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
                "upgrade": "1코",
                "characterLevel": 665,
                "element": "철갑",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 73.2,
                "increaseAtk": 43.03,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 1.98,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 56.6,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 8939237,
                "atk": 383919,
                "def": 51470,
                "hp40": 1120162,
                "atk40": 36406,
                "def40": 7692,
                "hp400": 3272823,
                "atk400": 132080,
                "def400": 19743,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 13.93
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 13.75
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 56.6
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ],
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 9.7
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 1.98
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 12.52
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    null
                  ]
                }
              }
            ]
          },
          {
            deckScore: 7691490397,
            squad: [
              {
                "name": "브래디",
                "subName": "",
                "upgrade": "2코",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 85.8,
                "increaseAtk": 4.77,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 2.86,
                "increaseChargeDamage": 7.59,
                "increaseCriticalRate": 5.62,
                "increaseCriticalDamage": 7.62,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 76,
                "hp": 9008622,
                "atk": 386324,
                "def": 51778,
                "hp40": 1036232,
                "atk40": 31997,
                "def40": 7141,
                "hp400": 3231102,
                "atk400": 129546,
                "def400": 19429,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 7.59
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
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
                      "effect": "increaseChargeSpeed",
                      "value": 2.86
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 7.62
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 3.32
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 20.75
                    }
                  ]
                }
              },
              {
                "name": "아니스 : 스타",
                "subName": "",
                "upgrade": "1돌",
                "characterLevel": 665,
                "element": "전격",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 102.63,
                "increaseAtk": 34.57,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 10.4,
                "increaseCriticalRate": 0,
                "increaseCriticalDamage": 11.54,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 16500,
                "orgAtk": 400,
                "orgDef": 107,
                "hp": 10212219,
                "atk": 248510,
                "def": 66715,
                "hp40": 1196513,
                "atk40": 29949,
                "def40": 8078,
                "hp400": 3678616,
                "atk400": 90121,
                "def400": 24221,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 11.54
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    }
                  ],
                  "torso": [
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
                  "arm": [
                    {
                      "effect": "increaseAtk",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseChargeDamage",
                      "value": 10.4
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    }
                  ],
                  "leg": [
                    {
                      "effect": "increaseAtk",
                      "value": 5.47
                    },
                    null,
                    {
                      "effect": "increaseElementDamage",
                      "value": 23.56
                    }
                  ]
                }
              },
              {
                "name": "앵커 : 이노센트 메이드",
                "subName": "",
                "upgrade": "풀돌",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 7,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 26.09,
                "increaseAtk": 0,
                "increaseDef": 0,
                "increaseHitRate": 11.81,
                "increaseChargeSpeed": 0,
                "increaseChargeDamage": 23.62,
                "increaseCriticalRate": 8.01,
                "increaseCriticalDamage": 27,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 6,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 98,
                "hp": 9668807,
                "atk": 317719,
                "def": 62924,
                "hp40": 1151296,
                "atk40": 33803,
                "def40": 7528,
                "hp400": 3496241,
                "atk400": 111967,
                "def400": 22779,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseChargeDamage",
                      "value": 11.81
                    },
                    null,
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 16.44
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 9.54
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseCriticalDamage",
                      "value": 10.56
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 16.55
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 5.71
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
                "name": "마스트 : 로망틱 메이드",
                "subName": "",
                "upgrade": "4코",
                "characterLevel": 665,
                "element": "수냉",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 27.49,
                "increaseAtk": 29.1,
                "increaseDef": 13.22,
                "increaseHitRate": 9,
                "increaseChargeSpeed": 3.45,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 6.99,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 0,
                "orgMaxAmmo": 300,
                "orgHP": 15000,
                "orgAtk": 500,
                "orgDef": 84,
                "hp": 10317439,
                "atk": 338266,
                "def": 58996,
                "hp40": 1118527,
                "atk40": 31636,
                "def40": 7691,
                "hp400": 3651068,
                "atk400": 116054,
                "def400": 21815,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseAtk",
                      "value": 6.88
                    },
                    {
                      "effect": "increaseDef",
                      "value": 13.22
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    }
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 11.11
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 9.54
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
                      "effect": "increaseChargeSpeed",
                      "value": 3.45
                    },
                    {
                      "effect": "increaseCriticalRate",
                      "value": 4.69
                    },
                    {
                      "effect": "increaseHitRate",
                      "value": 9
                    }
                  ]
                }
              },
              {
                "name": "디젤 : 윈터 스위츠",
                "subName": "",
                "upgrade": "명함",
                "characterLevel": 665,
                "element": "작열",
                "skill1": 10,
                "skill2": 10,
                "skill3": 10,
                "itemGrade": "SR",
                "itemLevel": 15,
                "increaseElementDamage": 97.02,
                "increaseAtk": 7.59,
                "increaseDef": 0,
                "increaseHitRate": 0,
                "increaseChargeSpeed": 9.25,
                "increaseChargeDamage": 0,
                "increaseCriticalRate": 2.3,
                "increaseCriticalDamage": 0,
                "increaseMaxAmmunitionCapacity": 64.82,
                "orgMaxAmmo": 6,
                "orgHP": 13500,
                "orgAtk": 600,
                "orgDef": 88,
                "hp": 8213194,
                "atk": 351674,
                "def": 53602,
                "hp40": 981345,
                "atk40": 30260,
                "def40": 6568,
                "hp400": 2972337,
                "atk400": 118748,
                "def400": 19516,
                "equipSlots": {
                  "head": [
                    {
                      "effect": "increaseElementDamage",
                      "value": 27.76
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.92
                    },
                    null
                  ],
                  "torso": [
                    {
                      "effect": "increaseAtk",
                      "value": 7.59
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 22.15
                    },
                    null
                  ],
                  "arm": [
                    {
                      "effect": "increaseMaxAmmunitionCapacity",
                      "value": 64.82
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 29.16
                    },
                    null
                  ],
                  "leg": [
                    {
                      "effect": "increaseCriticalRate",
                      "value": 2.3
                    },
                    {
                      "effect": "increaseElementDamage",
                      "value": 17.95
                    },
                    {
                      "effect": "increaseChargeSpeed",
                      "value": 4.33
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
