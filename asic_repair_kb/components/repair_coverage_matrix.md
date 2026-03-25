# Repair coverage matrix (this knowledge base)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Knowledge

Repair **documentation** in this repo: which miner lines have written guides (power / control / hashboard).

### Column definitions

| Column | `true` means | `false` means |
|--------|--------------|---------------|
| **Power** | Step-by-step **PSU board repair** (schematics, stages, safety) — here: [FILE 7 — APW12](repair_apw12_psu.md) only. | No dedicated PSU **electronics** repair file; KB still covers **diagnosis, error codes, swap/replace**, cabling, and **mechanical** PSU removal where noted (e.g. FILE 6). |
| **Control** | Dedicated control-board **repair / ops / triage** doc in this KB. | — |
| **Hashboard** | Dedicated hashboard **repair workflow** (bench, signals, cases) in this KB. | — |

### Miner × subsystem (true / false)

| Miner model | Power | Control | Hashboard |
|-------------|:-----:|:-------:|:---------:|
| **Antminer S19** (and S19-class miners using APW12 per FILE 7 compatibility table) | true | true | true |
| **Whatsminer M30S / M30S+ / M30S++** | false | true | true |
| **Whatsminer M31S / M31S+** | false | true | true |
| **Whatsminer M32** | false | true | true |
| **Whatsminer M50 / M50S / M50S+ / M50S++** (air-cooled) | false | true | true |

### Knowledge files (quick map)

| Area | Antminer S19 | Whatsminer (rows above) |
|------|--------------|-------------------------|
| Power (repair) | [repair_apw12_psu.md](repair_apw12_psu.md) | — (use hub + hash/control for **swap / diagnose**) |
| Control | [repair_s19_control_board.md](repair_s19_control_board.md) | [repair_whatsminer_control_board.md](repair_whatsminer_control_board.md) |
| Hashboard | [repair_s19_hashboard.md](repair_s19_hashboard.md) | [repair_whatsminer_m30s_hashboard.md](repair_whatsminer_m30s_hashboard.md) |
| Test fixture (hash) | PicoBT / S19 flow in FILE 1 | [repair_whatsminer_test_fixture.md](repair_whatsminer_test_fixture.md) |
| Triage / errors | — | [repair_whatsminer_m30_m50_hub.md](repair_whatsminer_m30_m50_hub.md) |

### Knowledge notes

1. **Whatsminer `Power = false`:** integrated PSU is **not** documented here like APW12 (no mirrored Zeus PSU schematic guide in this repo). Field workflow: **log codes → verify delivery → replace module / unit**; plus **physical** steps in FILE 6.
2. **Whatsminer M50 `Hashboard = true`:** primary Zeus mirror is **M30S/M31S/M32** ([FILE 2](repair_whatsminer_m30s_hashboard.md)); **M50** on **CB4-V10** ([FILE 4](repair_whatsminer_test_fixture.md)). Confirm **group count × 0.31 V** and chip count for your revision.
3. **Hub-only models** (M20, M21, …) in [FILE 3](repair_whatsminer_m30_m50_hub.md) are **links/triage only** — not full `true` rows without matching repair files.

---

## Tools

Physical **bench capability** tracked in this project (what you own / must acquire for the guides). **Canonical list:** [tool_inventory.md](tool_inventory.md).

### Tool areas (documented = listed in `tool_inventory.md`)

| Tool area | Documented | Notes |
|-----------|:----------:|-------|
| Diagnosis (tester, scope, thermal, lab PSU, UART) | true | PicoBT + APW12 bench, UNI-T UTD2102CEX+ (أو ≥100 MHz), UT136C+ + أطراف Zeus، WANPTEK KPS، PICKit 3.5، كابل EEPROM، USB–TTL |
| Rework (hot air, preheater, iron, microscope, ultrasonic) | true | Quick 861DW, Quick 707D+ (حديد+هواء), PUHUI T-8280, AD207, ultrasonic |
| Consumables (flux, paste, putty, IPA, bridge jumpers) | true | Amtech, Mechanic 183 °C, HY234, GD900؛ أسلاك جسر مغطاة قصدير كمستهلكات في خطة الاستيراد الربعية |
| Fixed assets (tin stencil, tin tool, BGA 90×90 tinning platform) | true | قوالب Tin ومنصة التنقيط في **① قائمة الأصول** بـ `js/data.js` |
| Spares (ASIC, LDO, MOSFET, cables, copper) | true | BM1362 / BM1366BS + KF1950–KF1973, LDO/PMIC kit, AWG6, data cables |
| Guide-required extras (⚠️ / 📎 in inventory) | yes | كرات 0.4 mm، wick، IIC/EN، 2500/704، حمل إلكتروني، ESD — انظر [tool_inventory.md](tool_inventory.md) (وسيلة الإيضاح + أولويات النواقص) |

### Tool × repair file (where guides mention requirements)

| Repair doc | Typical tools / spares called out in KB |
|------------|----------------------------------------|
| [repair_s19_hashboard.md](repair_s19_hashboard.md) | APW12, PicoBT V2.2010, 4 fans, 25 Ω discharge, scope (CLK), 0402 kit, SPG-30B, 0.4 mm balls, PICkit3 |
| [repair_whatsminer_m30s_hashboard.md](repair_whatsminer_m30s_hashboard.md) | CB4-V10, 12 V + adjustable hash supply, **100 MHz scope**, M1 shell + fan, HY234, شرائح KF1950–KF1973 + tin stencil المطابق |
| [repair_whatsminer_test_fixture.md](repair_whatsminer_test_fixture.md) | CB4-V10, 13 V / 31 A PSU, Ethernet/USB dongle, MobaXterm |
| [repair_apw12_psu.md](repair_apw12_psu.md) | 80 W+ iron, heat gun 260 °C, AC variac or bulb, electronic load, scope, paste **2500**, **704 silicone** |
| [repair_s19_control_board.md](repair_s19_control_board.md) | UART, PuTTY, fine soldering, LDO/PMIC spares |
| [repair_whatsminer_control_board.md](repair_whatsminer_control_board.md) | WhatsMinerTools, MobaXterm, cable/polarity checks |

> **Tools** here = inventory + procurement checklist. **Knowledge** above = whether a written repair path exists per miner subsystem.

---

*Update this file when you add repair docs or change `tool_inventory.md`.*
