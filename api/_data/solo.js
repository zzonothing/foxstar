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
      }
    ]
  }
};
