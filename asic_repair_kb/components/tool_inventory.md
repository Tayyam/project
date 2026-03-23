# ASIC Repair Knowledge Base — Tool Inventory

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## TOOL INVENTORY — CONFIRMED AVAILABLE ✓

### Diagnosis
- ✓ PicoBT Universal Tester + S19 Test File + M30/M50 Test File
- ✓ Antminer APW12 PSU (bench power — confirm version matches miner)
- ✓ ZOYI ZT-R01 Thermography Multimeter (thermal + voltage simultaneously)
- ✓ FNIRSI DSO-TC3 — **use as LCR/component tester** (caps, transistors, simple checks). **Not** a substitute for hash CLK: in oscilloscope mode real bandwidth is often **≪ 1 MHz**; S19/M30 CLK is **~25 MHz+** → invisible on TC3.
- ⚠️ **Desktop oscilloscope ≥ 100 MHz analog bandwidth** (e.g. Rigol DS1102Z-E / Siglent) — **required** for hash CLK and related high-speed signals on S19/M30.
- ✓ Sugon 3005D Lab PSU 30V/5A (control board circuits only — NOT hashboard)
- ✓ USB to TTL (UART for control board)

### Rework
- ✓ Quick 861DW 1300W Hot Air Station
- ✓ PUHUI T-8280 IR Preheater 28×27cm
- ✓ Quick 205H 150W Soldering Iron
- ✓ Tips: Chisel T10 + Fine Point T2 + Bevel K2
- ✓ Andonstar AD207 Digital Microscope (7 inch)
- ✓ Ultrasonic Cleaner ~2L

### Materials & Consumables
- ✓ Amtech NC-559-ASM Flux (10g original)
- ✓ Mechanic Solder Paste 183°C
- ✓ S19 & M30 Stencils (magnetic)
- ✓ BGA Reballing Kit (magnetic platform + ASIC stencils)
- ✓ HY234 Thermal Putty 1kg (M30/S19 dual heatsink models)
- ✓ GD900 Thermal Paste (general use)
- ✓ IPA 99%
- ✓ Kapton Tape + Aluminum Tape
- ✓ Solder wick + copper sponge for iron

### Spare Parts Stock
- ✓ BM1398 ASIC Chips (Antminer S19)
- ✓ KF1922 ASIC Chips (Whatsminer M30/M50)
- ✓ LDOs: 0.8V / 1.8V / 3.3V + PMIC
- ✓ MOSFETs + PWM ICs
- ✓ Data Cables 10-pin / 12-pin (×40)
- ✓ AWG6 Copper Wire + power cables

### Additional Spare Parts Required by Source Guides
- ⚠️ **0402 Resistors: 0Ω, 51Ω, 10KΩ, 4.7KΩ** — needed for S19 hashboard repair (source Section I.5)
- ⚠️ **0402 Capacitors: 0.1µF, 1µF** — needed for S19 hashboard repair (source Section I.5)
- ⚠️ **Solder balls 0.4mm diameter** — for BGA reballing (S19 + M30)
- ⚠️ **Thermal gel: Fujipoly SPG-30B** — required spec for S19 chip surface after replacement (NOT GD900 for chips)
- ⚠️ **Thermal paste spec 2500** — for APW12 MOS ↔ heatsink (different from GD900 general use)
- ⚠️ **704 Silicone** — for APW12 PCBA cover re-gluing after repair
- ⚠️ **PICkit3 programmer** — for S19 PIC reprogramming (with MPLAB IPE software)
- ⚠️ **Lead-free solder wire** — for APW12 and general PCB repair

> Items marked ⚠️ are required by source guides but not listed in original inventory — acquire before starting hashboard or PSU repair.

### Missing — Must Acquire Before Proceeding
- ✓ Discharge Resistor 25Ω / 100W cement (acquired)
- ✓ UV Solder Mask — Mechanic UVH900-LY (acquired)
- ✓ Jumper Wire 0.1mm enameled (acquired)
- ✓ MobaXterm Software (installed)
- ✓ WhatsMinerTools Software (installed)
- ✓ Putty Software (installed)

---

## Gaps vs repair guides — verify / add (مقارنة بالدلائل)

Cross-check against [FILE 1](repair_s19_hashboard.md), [FILE 2](repair_whatsminer_m30s_hashboard.md), [FILE 4](repair_whatsminer_test_fixture.md), [FILE 7](repair_apw12_psu.md). Items below are **not** listed as ✓ above or conflict with a spec.

| Item | Status | Why |
|------|--------|-----|
| **Adjustable hashboard PSU ≥ 10 A** at set voltage | ⚠️ **Gap risk** | [FILE 2](repair_whatsminer_m30s_hashboard.md) requires **10 A+** for hash rail. **Sugon 3005D = 5 A max** — OK for control only, **not** for full M30/M50 hash bench current. |
| **Oscilloscope analog bandwidth ≥ 100 MHz** | ⚠️ **Acquire desktop scope** | FILE 2 mandates **100 MHz minimum** for CLK. **DSO-TC3 is not valid** for ~25 MHz CLK — buy **Rigol/Siglent-class ≥100 MHz** (local mall). |
| **Electronic load ~3.6 kW / 0–50 V** or matched resistive dummy | ⚠️ Missing | [FILE 7](repair_apw12_psu.md) — APW12 load test (or documented DIY resistor bank). |
| **AC variac / regulator 200–250 V, current-limited** OR **100 W bulb in series** | ⚠️ Missing | [FILE 7](repair_apw12_psu.md) — safe AC bring-up after repair. |
| **ESD wrist strap** (grounded) | ⚠️ **On purchase list** (local) | FILE 7 **required**; mat alone is not enough — strap ties body to ground. |
| **Fine DMM probing** — steel needle / pin + heat-shrink “T-bush” | ⚠️ **On purchase list** (steel needle probes) | [FILE 1](repair_s19_hashboard.md) (Zeus §I) — small TPs / ASIC legs. |
| **MPLAB IPE** (or MPLAB X) installed + PICkit drivers | ⚠️ Partial | PICkit3 is ⚠️ spare; **software** for PIC16F1704 not listed as installed. |
| **MicroSD cards** (industrial / high-endurance, 8–16 GB, ×5–10) | ⚠️ **On purchase list** | PicoBT / CB4 **FPGA update**, S19 **SD recovery**, test images — avoid cheap phone cards for production images. |
| **4× cooling fans + duct** (or miner shell) for S19 signal work | ⚠️ Missing | [FILE 1](repair_s19_hashboard.md) — **mandatory** for signal measurements during test. |
| **M1 miner shell + fan** (or equivalent) | ⚠️ Missing | [FILE 2](repair_whatsminer_m30s_hashboard.md) — cooled hash test on bench. |
| **Hand tools** — long-nose pliers, diagonal cutters, Phillips drivers | ⚠️ Missing | [FILE 7](repair_apw12_psu.md) (1215A manual photos) + general disassembly. |
| **Knife-shaped soldering tip** (optional) | ⚠️ Optional | FILE 7 — large **through-hole** on APW12; you have chisel/fine/bevel — add knife if plugs stay hard to clear. |
| **IIC/EN bench adapter** (APW12 data socket jig — enable output on bench) | ⚠️ **On purchase list** (Zeus / equivalent) | FILE 7 — APW12 does not output 12–15 V on bench without miner I²C / EN handling; jig **forces** bench operation. |
| **USB–Ethernet adapter** | ⚠️ Optional | [FILE 4](repair_whatsminer_test_fixture.md) — if laptop has no RJ45. |
| **Ethernet patch cables** | ⚠️ Optional | PicoBT / CB4 / miner LAN — not explicitly listed. |
| **PuTTY** | Optional | [FILE 5](repair_s19_control_board.md) — **MobaXterm** can replace. |
| **PSU test card / ZJ0001000001 + PSU firmware** | ⚠️ Unclear | FILE 7 mentions **hashboard tester + PSU test card** — confirm whether your **PicoBT** stack includes **APW12 PSU test** mode or add dedicated jig later ([knowledge_in_progress](knowledge_in_progress.md): `psu_output_tester`). |
| **Board wash** (aqueous/flux cleaner) | ⚠️ **Recommended** | FILE 1 — complements **IPA**; fewer white flux residues in some workflows. |
| **Zeus solder paste column M705** | ⚠️ Optional | FILE 1 names **M705** — you use **Mechanic 183 °C**; keep if results match process. |

> **Summary:** أقوى فجوة عملية = **مصدر تيار للهاش ≥10 أ** (واتسماينر) + **حمل إلكتروني/مقاومة** و**فارياك/لمبة أمان** لـ APW12 + **تأكيد عرض نطاق الأوسيلوسكوب 100 MHz** + **ESD strap** + **مراوح/دكت** لاختبار S19 حسب الدليل.

> Core rework/diagnosis list above is strong; treat this section as a **pre-flight checklist** before claiming “fully equipped” for every FILE.
