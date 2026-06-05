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
                "atk400": 114061,
                "atk40": 24954,
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
                "atk400": 105846,
                "atk40": 34560,
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
                "atk400": 146615,
                "atk40": 39685,
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
                "atk400": 129723,
                "atk40": 37696,
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
                "atk400": 131425,
                "atk40": 37627,
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
                "atk400": 114860,
                "atk40": 25753,
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
                "atk400": 121893,
                "atk40": 37476,
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
                "atk400": 133200,
                "atk40": 39402,
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
                "atk400": 146615,
                "atk40": 39685,
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
                "atk400": 123667,
                "atk40": 37686,
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
                "atk400": 125323,
                "atk40": 36216,
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
                "atk400": 134354,
                "atk40": 36804,
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
                "atk400": 126464,
                "atk40": 37976,
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
                "atk400": 143778,
                "atk40": 36848,
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
                "atk400": 98620,
                "atk40": 21931,
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
                "atk400": 131796,
                "atk40": 24866,
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
                "atk400": 131475,
                "atk40": 37677,
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
                "atk400": 112153,
                "atk40": 32426,
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
                "atk400": 123639,
                "atk40": 36095,
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
                "atk400": 95691,
                "atk40": 31909,
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
                "atk400": 141174,
                "atk40": 39872,
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
                "atk400": 95250,
                "atk40": 21510,
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
                "atk400": 143921,
                "atk40": 36991,
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
                "atk400": 88407,
                "atk40": 14667,
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
                "atk400": 145802,
                "atk40": 38872,
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
      }
    ]
  }
};
