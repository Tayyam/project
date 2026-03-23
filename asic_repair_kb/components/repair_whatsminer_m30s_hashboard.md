# ASIC Repair Knowledge Base — Whatsminer M30S / M31S / M32 Hashboard (FILE 2)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Whatsminer M3x-series hashboard |
| Models covered | M30S, M30S+, M30S++, M31S, M31S+, M32 |
| ASIC chip | KF1922 (M30S family) / HP5A03 (M31S) |
| Chips per board | 105 (M31S) · 117 (M32/M31P) · varies by model |
| Main input voltage | **0.31–0.32 V × number of groups** (e.g. 37 groups → ~11.5 V) |
| LDO output per group | 1.8 V (pins 7/8/13/14) + 0.9 V (pins 6/15) |
| Boost rail | 17 V → last 8 groups (M31S) or 9 groups (M30S) |
| 3.3 V rail | Temperature sensor (UP36) + EEPROM / memory (UP37) |
| CLK measurement | **Oscilloscope only** — not DMM; ~0.15 V amplitude when healthy |
| Crystal oscillators | **One** (M3x) vs two (M20S) |

**Cross-references:**
- Test fixture setup: [FILE 4 — Test Fixture](repair_whatsminer_test_fixture.md)
- Hub / triage: [FILE 3 — M30/M50 Hub](repair_whatsminer_m30_m50_hub.md)
- Control board: [FILE 6 — Control Board](repair_whatsminer_control_board.md)

---

## Hardware Architecture

**Signal flow (from controller to chips):**
- CLK, RXD, RST: U1 → chip 1 → chip 2 → … → chip last (forward direction)
- TXD: chip last → … → chip 1 → U1 (reverse / return path)
- U1 performs frequency conversion
- M31S and M30S have **different signal routing** — use the correct PCB diagram from the local mirror (images 4–6)

**Block diagram summary:**
- Group chipset (each group has 1 ASIC)
- LDO per group: 2× 1.8 V + 1× 0.9 V
- 17 V boost → last 8–9 groups (version-dependent — red-marked on PCB silk)
- 3.3 V → temperature sensor (UP36) + EEPROM/memory (UP37)
- Level converter: 3.3 V ↔ 1.8 V for signal translation
- Single crystal oscillator (CLK source)
- EEPROM: 24C02RP

**M31S vs M30S LDO placement (image 7 in local mirror):**

| Board | LDO refdes examples | Notes |
|-------|--------------------|----|
| M31S | UP5, UP7, UP8, UP9 | Distributed both top/bottom edges |
| M30S | UP2, UP37, UP38 | Also top-edge LDO bank |

**Boost-fed LDO domains:**

| Model | Boost voltage | LDOs fed | Distribution |
|-------|--------------|---------|-------------|
| M31S | 17 V | Last 8 | 4 top + 4 bottom of ASIC array |
| M30S | 17 V | Last 9 | 4 top + 5 bottom of ASIC array |

---

## Tools Required

| # | Tool | Spec |
|---|------|------|
| 1 | Electric screwdriver | — |
| 2 | Soldering iron | 936A class |
| 3 | IR preheater / hot plate | — |
| 4 | Test fixture | CB4-V10 class (see FILE 4) |
| 5 | TF card | Test firmware loaded |
| 6 | DC supply (fixture) | 12 V separate |
| 7 | DC supply (hashboard) | **Adjustable, 10 A+**, set to 0.31 V × groups |
| 8 | **Oscilloscope** | **100 MHz minimum — mandatory for CLK** |
| 9 | Multimeter | Fluke or equivalent |
| 10 | Gloves | ESD-safe |
| 11 | Solder materials | Tin paste + solder paste |
| 12 | Cables | Power + network |
| 13 | Tweezers | — |
| 14 | Computer | For SSH/log access |
| 15 | ESD mat | — |
| 16 | M1 miner shell + fan | For cooled testing |

> **CLK rule:** always use an oscilloscope for CLK — a DMM will show misleading values. Healthy CLK amplitude ≈ 0.15 V (per source).

---

## Bench Setup

| Parameter | Value |
|-----------|-------|
| Hashboard main supply | 0.31 V × number of groups (e.g. 37 groups → ~11.47 V; set ~11.5 V) |
| Fixture / control board supply | Separate 12 V DC |
| Cooling | M1 miner shell with fan during all tests |
| CLK probing | Oscilloscope only |

**Bench wiring (image 3 in local mirror):**
- Separate 12 V supply → control board (~12.0 V / 0.11 A)
- Main adjustable DC → hashboard
- Red = positive, black = negative on high-current leads
- Ethernet between laptop and control board
- Ribbon / test cable between control board and hashboard

---

## Fault Diagnosis Protocol

**Suggested signal check order:** RST → CLK → RXD → TXD

```
Step 1 — Confirm input voltage
  └─ Measure main rail = 0.31–0.32 V × groups
  └─ If voltage too low → PSU / delivery fault (see error 202 in daily log)

Step 2 — Walk domain voltages group by group
  └─ Each group: 1.8 V (LDO) + 0.9 V (LDO)
  └─ Domain below 0.31 V → "Insufficient power to chip" → LDO or short fault

Step 3 — Check 3.3 V rail
  └─ Feeds UP36 (temp sensor) + UP37 (EEPROM / memory)
  └─ If missing: check components in that area

Step 4 — Oscilloscope CLK each group
  └─ ~0.15 V = healthy
  └─ CLK stops at group N → check series resistor at boundary N/N+1

Step 5 — Trace RST chain (level shifters)
  └─ RST ~1.8 V at each group output = healthy
  └─ RST ~0.5 V = abnormal → failed level shifter at that group
  └─ Force RST via fixture SSH (see commands below)

Step 6 — Trace RXD / TXD for opens
  └─ TXD travels reverse (last chip → U1)

Step 7 — Check 17 V boost (last 8–9 groups)
  └─ If last groups fail but earlier groups pass → boost circuit fault
```

**RST drive commands (fixture SSH):**
```bash
# Drive RST high (1.8 V) to probe chain while RST is active
echo 1 > /sys/class/gpio/gpio99/value
# or
echo 1 > /sys/class/gpio/gpio197/value

# Drive RST low (0 V)
echo 0 > /sys/class/gpio/gpio99/value
```

---

## Case Studies (§IV)

| Case | Error / Symptom | Root Cause | Key Action |
|------|-----------------|------------|------------|
| 1 | Error 542, RST fail on SM2 | RST chain open; level shifter fault | Probe RST group by group; `echo 1 gpio99/197`; find low (~0.5 V) at level shifter; check LDO / group short (pin 8 → GND low Ω) |
| 2 | Error 542, 104/105 ASICs (missing U9) | Single chip solder / damage | Reflow or replace U9; verify chip order vs silkscreen |
| 3 | Errors 561/562 on SM1/SM2 | PSU fault (error 202 in daily log) | Export daily log → find error 202 → replace PSU |
| 4 | Error 540, SM0, U109/U110/U111 read fail | 1.8 V short on group around U110 | Measure 1.8 V domain → find short → replace U110 |
| 5 | Error 530 (SM0 not found) | Fan seizure or cable loose | Check fan + cable for slot 0 |
| 6 | Errors 236, 255, 268 (over-power / over-current) | PSU failure | Replace PSU |
| 7 | Errors 250/25 + 540–542 | PSU undervoltage + chain errors | Export log → find error 202 → replace PSU |
| 8 | Error 257 + 540–542 | PSU failure (power unknown) | Export log first → replace PSU |

---

## Error Code Reference

| Error Code | Meaning | Primary Action |
|------------|---------|----------------|
| 530 | Slot not found (SM0) | Check fan + data cable |
| 235, 258 | PSU over-current protection / warning (LuCI: `0x80040008`) | PSU / load / cabling before hashboard debug |
| 236, 255, 268 | PSU over-power / failure | Replace PSU or fix delivery |
| 250, 25 + 540–542 | PSU undervoltage + chain | Export log, check error 202, replace PSU |
| 257 + 540–542 | PSU power unknown | Export log first |
| 540 | Slot0 reading chip ID error | RST/CLK/ASIC chain fault → Case Study table |
| 541 | Slot1 reading chip ID error | Same |
| 542 | Slot2 reading chip ID error | Same |
| 561, 562 | Slot1/Slot2 loss balance | Export log → check error 202 → PSU |
| 202 | Power voltage error (`voltage: 0 / current: 0`) | PSU / delivery fault — fix PSU before board work |
| 2010 | Pools disabled | Check network / pool configuration |

> **Rule:** always export the miner daily log and look for **error 202** before deep hashboard rework. Most M30S field failures are PSU, not chip-level.

---

## Component Reference

### Level shifters / key ICs

| Refdes | Function | Normal output | Abnormal signal |
|--------|----------|---------------|----------------|
| U1 | Frequency conversion + signal hub | CLK/RXD/RST forward; TXD reverse | See images 4–5 |
| U6 (RST chain) | RST level shifter, early group | ~1.73–1.8 V | — |
| U7 (RST chain) | RST level shifter, next group | ~1.8 V when healthy | ~0.52 V = abnormal (Case 1) |
| UP36 | Temperature sensor | 3.3 V supply | — |
| UP37 | EEPROM / memory | 3.3 V supply | 24C02RP |
| UP39 | Level conversion (3.3 V ↔ 1.8 V) | RXD1 signal | — |

### Key test points and voltages

| Test point / Node | Expected voltage | Notes |
|-------------------|-----------------|-------|
| Main hashboard input | 0.31 × groups V | Adjustable supply |
| Each group LDO | 1.8 V + 0.9 V | Domain voltage |
| 3.3 V rail (UP36/UP37) | 3.3 V | Sensor + memory |
| 17 V boost (last groups) | ~17 V | Last 8 (M31S) / 9 (M30S) groups |
| CLK signal (scope) | ~0.15 V amplitude | Only measurable with oscilloscope |
| RST at healthy level shifter | ~1.8 V | DMM readable |
| RST at failed level shifter | ~0.5 V | Abnormal signature |
| Domain probe (image 30 / image 24) | ~0.259 V = "insufficient power" | Normal ~0.31 V per group |

### PCB version identifiers (images 10, 16)

| Field | Value |
|-------|-------|
| Board revision (M30S) | 20S REV1.0.2019.04.28 |
| Connector | J3 |
| EEPROM | 24C02RP |
| Crystal oscillators | Y17, Y21 |
| Voltage test point | V3P3 |
| I2C signals | SDA, SCL (to UP36/UP37) |
| Serial signals | RXD1, CB_TXD1 |
| Reset signals | RST1, PLUG, RST_DET |

---

## M30 Specific — Thermal Putty (Critical)

- Dual heatsink design has a gap between heatsink and chip
- Must use **HY234 thermal putty (gel)** — liquid paste cannot fill the gap
- Dried or missing HY234 → overheating → chip failure
- **Primary cause of hashrate imbalance across all 3 boards** in field cases
- Replace HY234 on all boards when investigating unexplained hashrate drops

---

## Image Reference

| # | Description | Local file |
|---|-------------|------------|
| 1 | M30S++ product photo — integrated PSU, dual fans, 112T/31 J/TH spec label | [16611561735808134.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561735808134.jpg) |
| 2 | M31S+ product photo — 80T/42 J/TH, dual fans, integrated PSU | [16611561812374631.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561812374631.jpg) |
| 3 | Bench wiring — separate 12 V for control board (12.02 V / 0.110 A); adjustable main DC for hashboard; red+/black−; laptop terminal | [16611562471122327.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562471122327.jpg) |
| 4 | Signal flow diagram — CLK/RXD/RST forward (U1→last chip); TXD reverse (last→U1); frequency conversion at U1 | [16611562653100004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562653100004.jpg) |
| 5 | Signal flow detail — TXD purple (reverse serpentine); CLK/RXD/RST blue (forward); U1 as hub | [16611562846294828.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562846294828.jpg) |
| 6 | M31S vs M30S signal routing comparison — 5 signals (CLK/RST/BO/RI/CO); key nodes U1/UP1/UP3/UP4/UP43/UP36 | [16611563272593809.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563272593809.jpg) |
| 7 | LDO placement — M31S (UP5/UP7/UP8/UP9) vs M30S (UP2/UP37/UP38); 1.8 V and 0.9 V annotations | [16611563433857374.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563433857374.jpg) |
| 8 | M31S 17 V boost — feeds last 8 LDOs (4 top + 4 bottom), red-outlined on PCB | [16611563714120084.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563714120084.jpg) |
| 9 | M30S 17 V boost — feeds last 9 LDOs (4 top + 5 bottom), right edge of board | [16611563979463560.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563979463560.jpg) |
| 10 | M30S board PCB details — UP36 (temp sensor), UP37 (memory), J3 connector, I2C/UART signals, 3.3 V test point | [16611564244693571.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564244693571.jpg) |
| 11 | Level conversion circuit — 3.3 V ↔ 1.8 V; TAR test points; RXD1 at UP39; EEPROM 24C02RP | [16611564381264325.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564381264325.jpg) |
| 12 | LuCI Miner Log — error 542 (Slot2 chip ID), E005 (no cgminer), E013 (pool password change), IP 192.168.2.169 | [16611564618015287.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564618015287.jpg) |
| 13 | Fixture log — M31SV10, Error_code 540, Reset FAILED, 0/105 effective chips, eeprom2/3 open error | [16611564882443570.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564882443570.jpg) |
| 14 | RST level probe — U6 output 1.733 V (normal ≈1.8 V) vs U7 output 0.523 V (abnormal); Fluke DMM | [16611565089470289.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565089470289.jpg) |
| 15 | LDO output 0.562 V (low) + pin 8 short (1.7 Ω) → replace LDO; 8-pin SMD IC shown | [16611565336577726.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565336577726.jpg) |
| 16 | Reference readings — 1.781 V domain (good); 58.2 °C board temp; M31SV10 105/105 PASS log | [16611565609524260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565609524260.jpg) |
| 17 | LuCI CGMiner Status — SM0/SM1/SM2 shown; SM2 EffectiveChips=0, temp 31 vs 56/58; error 542 | [16611566047063597.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566047063597.jpg) |
| 18 | Fixture log — M31SV10, 104/105 chips, missing U9, Reset PASSED, eeprom2/3 open, Chip_level0=1:U9 | [16611566183029004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566183029004.jpg) |
| 19 | LuCI — all 3 boards EffectiveChips=0; errors 561/562 (loss balance), 205 (current 0 A); temp ~43–45 °C | [16611566507411863.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566507411863.jpg) |
| 20 | LuCI Miner Log path — Status → Miner Log; Pools Change log + Miner State Log tabs; CGMiner freq=0 | [16611566859587294.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566859587294.jpg) |
| 21 | (No structured data — use mirror HTML) | [16611566954682172.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566954682172.jpg) |
| 22 | LuCI — SM0 EffectiveChips=0 (UpfreqCompleted=0, temp 30 vs 67.5/71); SM1/SM2 ok with 117 chips; error 540 | [16611567179630140.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567179630140.jpg) |
| 23 | Fixture log — M31PV30, 114/117 chips, missing U109/U110/U111, Reset PASSED, 3× read fail, eeprom2/3 open | [16611567303380292.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567303380292.jpg) |
| 24 | LuCI — 2 boards connected (SM1/SM2); SM0 absent; error 530 "Slot0 not found"; GHSav 18295 | [16611567671908399.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567671908399.jpg) |
| 25 | LuCI — all 3 boards EffectiveChips=0; errors 236/255/268 (over-current/over-power 0x80040008) + 540/541/542; temp 25 °C (no mining started) | [16611568222546018.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568222546018.jpg) |
| 26 | LuCI CGMiner Status — errors 250/251 (undervoltage 0x60000) + 540/541/542 + E005; Pool 0 microbtinit active | [16611568386734281.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568386734281.jpg) |
| 27–29 | (No structured data — use mirror HTML) | [16611568638968489.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568638968489.jpg) |
| 30 | Fluke 15B+ reading 0.259 V DC on domain node with "Insufficient power supply to chip" annotation | [16612390968037260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16612390968037260.jpg) |

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| Zeus article HTML + images | [sources/whatsminer_m30s_m31s_m32_hash/index.html](../sources/whatsminer_m30s_m31s_m32_hash/index.html) |
| Asset manifest | [sources/whatsminer_m30s_m31s_m32_hash/manifest.json](../sources/whatsminer_m30s_m31s_m32_hash/manifest.json) |

Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m30s_m31s_m32_hash`

**Online reference:** https://www.zeusbtc.com/articles/information/3703-whatsminer-m31s-m30s-m32-series-hash-board-repair-guide

---

## Checklist Before Starting

- [ ] Input voltage calculated: **0.31–0.32 V × groups** and set on adjustable PSU
- [ ] 10 A+ adjustable PSU at that voltage
- [ ] Separate 12 V for control board
- [ ] CB4-V10 / PicoBT with M30/M50 test firmware
- [ ] **100 MHz oscilloscope** on bench (mandatory for CLK)
- [ ] M1 case + fan for cooled testing
- [ ] ESD mat
- [ ] **HY234** thermal putty on hand
- [ ] **KF1922** ASIC spares (M30S)
- [ ] MobaXterm / log export path for error 202 analysis
