# ASIC Repair Knowledge Base — Tool Inventory

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

**Canonical purchase map (prices, Egypt vs Zeus/AliExpress, CAPEX roll-up):** project **`js/data.js`** + hub UI **`index.html`** (Mining Repair Hub). The ROI **CAPEX** card is computed from `purchases.fixedAssets` (+ `roi.capex.extraItems`), sorted high → low — keep this file aligned when you change shop data.

---

## TOOL INVENTORY — CONFIRMED AVAILABLE ✓

*Use ✓ for items you physically have on the bench. If an item exists only on the **purchase plan** in `js/data.js`, treat it as planned until received (see § Documented purchase plan below).*

### Diagnosis
- ✓ PicoBT Universal Tester + S19 Test File + M30/M50 Test File
- ✓ Antminer APW12 PSU (bench power — confirm **1215** letter matches hashboard/miner)
- ✓ ZOYI ZT-R01 Thermography Multimeter (thermal + voltage simultaneously)
- ✓ FNIRSI DSO-TC3 — **LCR / component tester** (caps, transistors, simple checks). **Not** hash CLK scope: oscilloscope mode bandwidth **≪ 1 MHz**; S19/M30 CLK **~25 MHz+** does not display.
- ⚠️ **Desktop oscilloscope ≥ 100 MHz** (e.g. Rigol DS1102Z-E / Siglent) — **required** for hash CLK / high-speed signals — *on purchase plan (EGP, local mall)*.
- ✓ Sugon 3005D Lab PSU 30V/5A (control-board circuits only — **not** full hash rail current for M30/M50)
- ✓ USB to TTL + **Dupont jumpers** (UART; PICkit / ICSP to test points on S19 hash — *on purchase plan in local supplies*)

### Rework
- ✓ Quick 861DW 1300W Hot Air Station
- ✓ PUHUI T-8280 IR Preheater 28×28 cm class
- ✓ Quick 205H 150W Soldering Iron + Tips (Chisel T10, Fine T2, Bevel K2)
- ✓ Andonstar AD207 Digital Microscope (7 inch) — *on purchase plan (EGP)*
- ✓ Ultrasonic Cleaner ~2L — *on purchase plan (EGP, العتبة)*

### Bench organization & workflow *(purchase plan — `js/data.js` fixed assets)*
- 📋 **Plastic drawer cabinet (40–60 drawers)** — 0402 / small parts + labels (العتبة / كماليات سيارات)
- 📋 **Anti-static storage boxes (ASIC)** — specialty import (AliExpress kit; Zeus rarely sells full ESD box sets)
- 📋 **Tool rack** (pliers / drivers vertical) — مول البستان
- 📋 **Push-down dispenser bottle** for IPA — mobile-repair supply shops
- 📋 **Empty syringes, metal tip** — flux dispensing under chips
- 📋 **Label maker** — drawers + board traceability (جرير / Amazon.eg / Noon)
- 📋 **Magnetic silicone heat-insulation mat** — screws + desk protection from hot air
- 📋 **Silicone adhesive cable clips** — PicoBT / bench power leads
- 📋 **Colored job bins** — WIP vs done boards, avoid mixing spares

### Materials & consumables
- ✓ Amtech NC-559-ASM Flux (10g original) + Mechanic 183 °C paste (Zeus / stock)
- ✓ S19 & M30 magnetic stencils + BGA reball platform / ASIC stencils
- ✓ HY234 thermal putty 1kg (dual-heatsink S19/M30 gaps)
- ✓ GD900 (general paste — **not** Zeus chip-surface spec)
- ✓ IPA 99% + Kapton + aluminum tape + solder wick + copper sponge
- 📋 **Board wash** (aqueous / flux cleaner) — *on purchase plan (EGP)*
- 📋 **Lead-free solder wire** (Alpha / Kester class) — *on purchase plan (EGP)* — S19 boards are lead-free process

### Spare parts stock *(+ specialty import list in hub)*
- ✓ BM1398 (S19) / KF1922 (M30/M50) ASIC chips
- ✓ LDOs 0.8V / 1.8V / 3.3V + PMIC; MOSFETs + PWM ICs; data cables; AWG6 + power wiring
- 📋 **0402 resistor kit** (0Ω, 51Ω, 10K, 4.7K) — AliExpress / Zeus path in `importedSpecialty`
- 📋 **0402 capacitor kit** (0.1µF, 1µF, **2.2µF**) — same
- 📋 **BGA solder balls 0.4 mm** — reball S19/M30
- 📋 **APW12 bench IIC/EN enable jig** — outputs on bench without full miner — Zeus / equivalent (`importedSpecialty`)
- 📋 **Industrial MicroSD** 8–16 GB × several — PicoBT/CB4 FPGA, S19 SD recovery (*per card ~$8 in data*)

### Additional specs from Zeus guides *(not always in shop JSON — acquire to match FILE text)*
- ⚠️ **Fujipoly SPG-30B** (or equivalent Zeus chip-surface thermal gel) — **not** GD900 on ASIC top
- ⚠️ **Thermal paste spec 2500** — APW12 MOSFET ↔ heatsink (≠ GD900 for that interface)
- ⚠️ **704 silicone** — APW12 PCBA cover re-glue after repair

> Until these three match your Zeus procedure, flag **spec mismatch** on hash/PSU jobs that cite them.

### Software installed ✓
- ✓ MobaXterm, WhatsMinerTools, Putty-class access (MobaXterm acceptable per FILE 5 note)
- ⚠️ **MPLAB IPE** (or MPLAB X) + **PICkit 3/4 drivers** — PIC16F1704 on S19 hash; programmer *on purchase plan (EGP)* — **install before claiming PIC path ready**

### Acquired small items ✓
- ✓ Discharge resistor 25Ω / 100W cement (bench safety)
- ✓ UV solder mask Mechanic UVH900-LY
- ✓ Jumper / enameled wire ~0.1 mm

---

## Documented purchase plan vs this checklist

When you **receive** an item from `js/data.js`, move its bullets from 📋 to ✓ above. Sections **① fixed assets** (USD + EGP groups) and **② imported specialty** are the source of truth for tools, bench extras, and consumable stock lines that have URLs/prices.

---

## Gaps vs repair guides — verify / add (مقارنة بالدلائل)

Cross-check [FILE 1](repair_s19_hashboard.md), [FILE 2](repair_whatsminer_m30s_hashboard.md), [FILE 4](repair_whatsminer_test_fixture.md), [FILE 7](repair_apw12_psu.md).

| Item | Status | Why |
|------|--------|-----|
| **Adjustable hashboard PSU ≥ 10 A** at set voltage | ⚠️ **Gap risk** | FILE 2 — hash rail **10 A+**. **Sugon 3005D = 5 A max** — OK for control, **not** full M30/M50 hash bench. |
| **Oscilloscope ≥ 100 MHz** | ⚠️ **Must acquire** | CLK diagnosis; TC3 invalid for ~25 MHz — **in `data.js` (البستان)**. |
| **Electronic load ~3.6 kW / 0–50 V** or resistive dummy | ⚠️ Missing | FILE 7 — APW12 load test. |
| **AC variac / 200–250 V limited** OR **100 W bulb in series** | ⚠️ Missing | FILE 7 — safe AC bring-up. |
| **ESD wrist strap** | 📋 In **`data.js`** (البستان) | Required with mat — FILE 7. |
| **Steel needle probes** | 📋 In **`data.js`** | FILE 1 — tight TPs / ASIC legs. |
| **PICkit + MPLAB IPE** | 📋 Hardware in **`data.js`**; ⚠️ **install SW** | S19 PIC firmware path. |
| **MicroSD industrial × several** | 📋 In **`data.js`** (`importedSpecialty`) | PicoBT / recovery images. |
| **IIC/EN APW12 bench jig** | 📋 In **`data.js`** | FILE 7 — bench output enable. |
| **Board wash** | 📋 In **`data.js`** | Complements IPA / flux residue. |
| **4× fans + duct** (or miner shell) S19 signal test | ⚠️ Missing | FILE 1 — mandatory for signal measurements. |
| **M1 shell + fan** (or equivalent) Whatsminer | ⚠️ Missing | FILE 2 — cooled hash on bench. |
| **Hand tools** — pliers, cutters, Phillips | ⚠️ Missing | FILE 7 + general tear-down. |
| **Knife-shaped iron tip** (optional) | ⚠️ Optional | FILE 7 — large through-hole on APW12. |
| **USB–Ethernet adapter** | ⚠️ Optional | FILE 4 — if no RJ45 on laptop. |
| **Ethernet patch cables** | ⚠️ Optional | PicoBT / miner LAN. |
| **PSU test card / ZJ0001000001** | ⚠️ Unclear | FILE 7 vs PicoBT capability — see [knowledge_in_progress](knowledge_in_progress.md) `psu_output_tester`. |
| **Zeus paste column M705** | ⚠️ Optional | FILE 1 vs your **Mechanic 183 °C** — validate process. |

> **Summary:** Strongest remaining **process** gaps = **≥10 A hash bench supply** (Whatsminer), **electronic load / variac** for APW12, **fan/duct or shell** for guided signal tests, plus **install MPLAB IPE** when PICkit arrives. Purchase-plan items (ESD strap, scope, jig, 0402 kits, etc.) are already in **`js/data.js`** — track receipt here by flipping 📋 → ✓.

> Treat this section as a **pre-flight checklist** before claiming “fully equipped” for every FILE.
