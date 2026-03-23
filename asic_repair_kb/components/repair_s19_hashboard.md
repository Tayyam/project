# ASIC Repair Knowledge Base — Antminer S19 Hashboard (FILE 1)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Bitmain Antminer S19 hashboard |
| PCB silk | BITMAIN 38X2_HASHBOARD_V1_2 |
| ASIC chip | BM1398 (BM1398P / BM1398BB modes) |
| Chips per board | **76** (38 domains × 2 chips) |
| Chip numbering | 1-based on physical board; **0-based** in log output |
| Domain voltage step | ~**0.36 V** per domain along the chain |
| Input voltage (VDD_IN) | 12–15.6 V (from APW12) |
| Boost rail | 14 V → **19 V** (boost U9 → MP1517DR) → feeds groups 38–32 |
| LDO outputs per domain | 1.8 V (VDD_1V8) + 0.8 V (VDD_0V8 / PLL) |
| Core voltage | **0.36 V** (VDD_0V36) per chip |
| Test firmware | PIC16F1704 — file `20200101-PIC1704-BM1398-V89.hex` |
| SD card test program | 19-series; Config.ini naming per heatsink type |
| PT1 → PT2 order | Always run PT1 (detection) before PT2 (function) |
| QC pass criterion | Board must pass tester **≥ 2× OK** before sign-off |

**Cross-references:**
- Control board: [FILE 5 — S19 Control Board](repair_s19_control_board.md)
- APW12 PSU: [FILE 7 — APW12 PSU](repair_apw12_psu.md)

---

## Board Architecture

### Domain layout

| Domain group | Power source | Rail |
|-------------|-------------|------|
| Groups 38, 37, 36, 35, 34, 33, 32 (7 groups) | Boost U9 → ~19 V → LDO | VDD_1V8 from 19 V |
| Group 31 | Boundary domain — treat as 13.64 V / LDO (verify boost vs VDD_IN during diagnosis) | VDD_1V8 |
| Groups 30 → 1 | VDD_IN 13.64 V → LDO → VDD_1V8 | Each domain ~0.36 V lower than previous |

- All domains: LDO 1.8 V → 0.8 V (PLL) per domain
- Left edge input caps: 330 µF / 30 V (C30–C51 family, Figure 4-2)
- Domain serpentine order (Figure 4-2): 1–9 top left→right; 10–19 right→left; 20–29 left→right; 30–38 bottom right→left

### Signal flow (exact voltages from source)

| Signal | Direction | Voltage (no IO) | Voltage (operating) | Notes |
|--------|-----------|-----------------|---------------------|-------|
| CLK (XIN) | Chip 01 → 76 | — | 0.7–1.3 V | 25 MHz crystal Y1 |
| TX/CI (CO) | IO pin 7 (3.3 V at port) → U2 level shift → chip 01→76 | 0 V | 1.8 V | — |
| RX/RI (RO) | Chip 76→01 → U1 → IO pin 8 → control board | 0.3 V | 1.8 V | — |
| BO (BI) | Chip 01→76 | 0 V | 0 V (DMM) | — |
| RST | IO pin 3 → chip 01→76 | 0 V standby | 1.8 V computing | — |

- Signal direction (§VIII): RX/RO travels **76→1**; CLK, CO, BO, RST travel **1→76**
- Inter-stage series resistors: **51 Ω 1%** (e.g. R576–R582) on BI/NRST/RO/CI/CLK between chips (MID_* nets)

---

## CRITICAL: Bench Power-On/Off Sequence

> **WARNING: Wrong sequence burns R8, R9, U1, U2 — board will always report 0 chips after.**

**Power ON (in this exact order):**
1. Connect negative copper wire to PSU
2. Connect positive copper wire to PSU
3. Plug in signal cable (IO) **last**

**Power OFF (reverse):**
1. Remove signal cable (IO) **first**
2. Remove positive copper wire
3. Remove negative copper wire last

---

## Tools & Materials

| Item | Spec |
|------|------|
| PSU | APW12 `APW12_12V-15V_V1.2` |
| Copper leads | **4AWG**, length **≤ 60 cm** between PSU and hashboard |
| Discharge resistor | **25 Ω / ≥ 100 W** on both + and − fixture poles |
| Test fixture | PicoBT V2.2010 control board with S19 test file |
| Fans | **4 fans at full speed** — mandatory for all signal measurements |
| Soldering iron | Constant-temp 350–380 °C, pointed tip (0402 + small passives) |
| Rework station | Heat gun + BGA rework for chip replacement |
| Multimeter | Fluke 15b+ with steel probe pin + heat-shrink T-bush |
| Oscilloscope | Agilent or equivalent (for CLK) |
| PIC programmer | PICkit3 (MPLAB ICE) |
| MPLAB | IPE v3.10 |
| Solder paste | Column M705 |
| Flux | No-clean paste flux |
| Solder balls | **0.4 mm** |
| Thermal gel | **Fujipoly SPG-30B** on chip tops after replacement |
| Cleaning | Board wash + absolute alcohol (IPA) |
| Stencils | Magnetic stencils |

---

## SD Card Setup — First Use

1. Use 19-series SD card program to update FPGA on test fixture control board
2. Unzip → copy to SD card → insert into tester card slot
3. Power on ~1 min → wait for **double flash × 3** → update complete
4. **If FPGA not updated:** may falsely report a specific chip bad every run

**SD card test modes:**
- **Single-sided heatsink (PT1):** unzip PT1 inspection package directly onto SD
- **Double-sided heatsink 8× pattern (PT2):** rename `Config(2).ini` → `Config.ini` (delete original `Config` first) — Figures 3-3–3-8

**SD card files:**
- `uImage` (4,266 KB) — kernel
- `devicetree.dtb` (11 KB) — hardware tree
- `uramdisk.image` (10,258 KB) — RAM disk
- `single_board_test` (162 KB) — test executable
- `Config.ini` — active config (rename from `Config.ini-NBS1902-PT1` or `PT2`)
- `BM1398-pattern/` — ASIC test patterns
- `Result/` — test output storage
- `submit_result` — result export tool

---

## Fault Diagnosis

### ASIC = 0 (PT1/PT2)

**Step 1 — Check power output**
- Measure VDD / 14 V at hash board power input (Figure 5-1, circled areas)
- MOS short: measure resistance at pins 1, 4, 8 of MOSFET (Q2/Q3/Q6/Q7 = TPHR9003NL)

**Step 2 — Check domain voltage**
- Each domain ~0.36 V; with 14 V in you should see domain rails
- If 14 V present but no domain voltage → continue below

**Step 3 — Check PIC circuit**
- U3 pin 2 ≈ 3.3 V (Figures 5-3–5-5)
- If missing: check IO/tester cable → reprogram PIC (see PIC programming procedure)

**Step 4 — Check boost**
- Measure C55 ≈ **19 V** (Figures 5-9, 5-10)
- Note: manual may reference "4-9" as typo — use figure 5-9 on Zeus page

**Step 5 — LDO outputs**
- Check 1.8 V and PLL 0.8 V per group (Figure 5-11)

**Step 6 — Signals (CLK / CI / RI / BO / RST)**
- Use signal table above; compare suspicious domain to neighbors (Figure 5-12)
- Wrong power sequence → R8, R9, U1, U2 damage → 0 ASIC

---

### Incomplete Chip Count (PT1/PT2)

**Case a — LCD `ASICNG` / (0):**
1. Confirm total domain voltage + boost 19 V
2. Short RO test point to 1V8 test point **between chip 1 and 2**
3. Run find-chip; read serial log
4. If still 0 chips:
   - **a-1:** 1V8 = 1.8 V, 0V8 = 0.8 V? If not → LDO / soldering / filter cap shorts (measure cap resistance both sides)
   - **a-2:** U1 / U2 and series resistors
   - **a-3:** R8, R9 ≈ ≤ 10 Ω, stable — else replace
   - **a-4:** First chip false solder (looks tinned from side but pads clean when lifted); verify CLK at domain with scope

**Case b — After a), log finds ≥ 1 chip:**
- First chip + upstream OK → slide shorting **1V8–RO** down the chain (e.g. between 38 & 39) to bisect
- Dichotomy (Figure 5-15): short N−1|N → find N−1 chips; short N|N+1 → 0 chips ⇒ fault at N

**Case c — LCD `ASIC75` (75 chips @ 12 M):**
- 76 chips @ 115200 but 75 @ 12 M → one chip fails high-speed detect
- Repair: dichotomy with 1V8–RO shorts
- Example: shorting to expect 47 chips shows 46 → replace 47th chip (**0-based** in log)

**Case d — LCD `ASICNG: (X)` fixed X:**
- **d-1:** Test time same as good board; X often stable → bad CLK/CI/BO resistors before and after chip X (six resistors); less often X−1, X, X+1 pin solder (Figure 5-16)
- **d-2:** Test time ~2× good board; X may drift or be 0; log shows tester-slot-specific line; domain volts before fault < ~0.3 V, after > ~0.38 V → poor solder on 1.8 V / 0.8 V / RXT / CLK; measure domains, use 1V8–RO bisection (Figure 5-17)

---

### Pattern NG (PT2)

- Incomplete nonce / PatternNG → large chip-to-chip mismatch; often damaged die → replace chip
- Rule: in each domain, replace the chip with the **lowest nonce response** in that domain
- Example log: low response `asic[36][37][43][75]` → 36 & 37 share a domain → replace whichever has lower response; also replace 43 and 75
- **Important:** log domain and asic indices **start at 0** (Figure 5-18)

---

### PT2 Serial "Long Run"

- During PT2, serial never finishes → short RO to 1.8 V starting at chip 1
- When serial stops after a short → that segment is good
- First short after which long run **continues** → bad chip → replace (Figure 5-19)

---

### PT2 Always Reports Same Chip NG

- PT1 OK, PT2 always one chip NG → inspect body; measure caps/resistors in front of chip → usually cold joint or passive fault

---

### Additional Fault Cases

**EEPROM NG on tester LCD:**
- U5 (AT24C02D-XHM-T) solder

**PIC sensor NG / temperature:**
- R24–R27, U3 pins 2–3 (Figure 5-13)
- U4 + R28–30; U6 + R31–33; U7 + R34–36; U8 + R37–39
- Sensors on back of PCB; resistors on front; 3.3 V to sensor rail (Figure 5-14)
- Bent large heatsink → poor cooling → temperature delta errors

---

### Common Repair Actions Summary

| Symptom | Action |
|---------|--------|
| ASIC = 0 | Six steps above in order; Figures 5-1–5-12 |
| MOS short (pins 1/4/8) | Replace MOSFET (TPHR9003NL) |
| No domain voltage | LDO / PIC / boost path |
| CLK missing at domain N | Chip N and N−1; boundary resistors; Y1 crystal |
| RI stops at domain N | Chip N likely dead |
| R8/R9 > 10 Ω or unstable | Replace R8, R9 |
| EEPROM NG | U5 solder |
| Temperature NG | U4/U6/U7/U8 + R28–R39 + heatsinks |
| Board 0 ASIC after rework | Wrong power sequence → R8/R9/U1/U2 |
| Pattern NG | Replace lowest-nonce chip per domain; index from 0 |
| ASIC75 @ 12 M | Dichotomy → replace failing ASIC index |
| ASICNG fixed X | d-1: six resistors / d-2: solder + domain volts |
| PT2 serial endless | RO–1V8 short sweep → replace bad chip |
| PT2 fixed chip NG | Visual + front passives + reflow/replace |
| Dead BM1398 | Reball 0.4 mm + 183 °C paste + SPG-30B |

---

## PIC Programming Procedure

**File:** `20200101-PIC1704-BM1398-V89.hex`

**PICkit3 connection:**
- Pin 1 of cable → pin 1 of J3 on hashboard
- Connect all 6 pins (GND / CLK / DAT / GND / 3V3 / MCLR) — Figure 5-6
- J3 pinout top→bottom: GND, CLK, DAT, GND, 3V3, MCLR

**MPLAB IPE steps:**
1. Device: **PIC16F1704**
2. Power mode: VDD = **3.3 V**; option "Power Target Circuit from Tool" = checked
3. Load HEX file → Connect → Program → Verify
4. Expected checksum: **D654** (for V89)
5. Figures 5-7, 5-8

---

## Component Reference

### Hashboard power stage

| Refdes | Part | Function | Key specs |
|--------|------|----------|-----------|
| Q2, Q3, Q6, Q7 | TPHR9003NL | Main switch MOSFETs (buck converter) | 8-pin SMD; 10 Ω gate resistors R40/R44/R48/R49 |
| Q4, Q5 | T2N7002AK | Control FETs for PIC_EN path | — |
| U9 | MP1517DR | Boost: 14 V → 19 V | L1 = 10 µH / 4A; EN threshold 8.5 V; VFB = 0.7 V |
| D2 | BZT52C15G (15 V Zener) | Gate clamp | — |
| D3, D4, D5 | MBR0540 (Schottky) | Boost protection | — |
| L1 | Inductor | Boost toroid | 10 µH, 4 A/3 A |
| C55 | — | Boost output cap | Target ≈ 19 V at this point |

### LDO per domain (typical)

| Refdes | Part | Function |
|--------|------|----------|
| U102 | LN1134A182MR | 1.8 V LDO (VDD_1V8_MD) |
| U103 | SGM2036-ADJYN5G/TR | 0.8 V LDO (VDD_0V8 / PLL) |
| U150 | MP2019GN | 1.8 V LDO (VDD_1V8_MD in some domains) |
| U151 | SGM2036-ADJYN5G/TR | 0.8 V output from 1.8 V source |
| D31/D42 | 1N4148WTG / 1N4148WT | Diode isolating VDD_1V8_MD → VDD_1V8 |

### PIC / control area

| Refdes | Part | Function | Key specs |
|--------|------|----------|-----------|
| U3 | PIC16F1704 | Hashboard microcontroller | J2/J3 ICSP: GND/CLK/DAT/GND/3V3/MCLR; pin 2 ≈ 3.3 V |
| U5 | AT24C02D-XHM-T | EEPROM | I2C (SDA=pin5/SCL=pin6); VCC=3.3 V at pin 8; WP tied to GND (writable) |
| L1 | Inductor | Power to U3 area | 100 marking |
| J2/J3 | ICSP header | PIC programmer connection | 6-pin: GND/CLK/DAT/GND/3V3/MCLR |

### Temperature sensors

| Refdes | Part | Location | I2C address set by |
|--------|------|----------|--------------------|
| U4 | LM75A | Row 1, air intake | A0/A1/A2 via 4.7 kΩ to 3V3 or GND |
| U6 | LM75A | Row lower, air intake | A0/A1/A2 |
| U7 | LM75A | Row 3, air outlet | A0/A1/A2 |
| U8 | LM75A | Row 6, air outlet | A0/A1/A2 |
| R24, R25 | 4.7 kΩ 1% | I2C pull-up (TSDA, TSCL) | — |
| R26, R27 | 0 Ω | I2C bridge jumpers | — |
| C24, C25 | 100 pF / 50 V | Signal filter caps | — |

### BM1398 ASIC pin reference

| Pin | Signal | Direction | Notes |
|-----|--------|-----------|-------|
| 4 | ADDR0 | — | Chip address bit 0 |
| 5 | ADDR1 | — | Chip address bit 1 |
| 6 | P_CORE_EN | — | Core power enable |
| 8 | CLKI | Input | Clock in (25 MHz from Y1) |
| 9 | CO | Output | Command out |
| 10 | RI | Input | Return input (from next chip) |
| 11 | NRSTO | Output | Reset out |
| 12 | BO | Output | Busy out |
| 21 | TEMP_N | — | Thermal sensor − |
| 22 | TEMP_P | — | Thermal sensor + |
| 25 | BI | Input | Busy in |
| 26 | NRSTI | Input | Reset in |
| 27 | RO | Output | Return out |
| 28 | CI | Input | Command in |
| 29 | CLKO | Output | Clock out (to next chip) |
| VDD_0, VSS_0 | Power | — | Core + ground pads |

---

## Spare Parts Required

| Component | Value / Part |
|-----------|-------------|
| 0402 resistors | 0 Ω, 51 Ω, 10 kΩ, 4.7 kΩ |
| 0402 capacitors | 100 nF, 1 µF |
| Solder balls | 0.4 mm |
| Thermal gel | Fujipoly SPG-30B (chip surface after replacement) |
| BM1398 ASIC | As needed |
| TPHR9003NL | Main switch MOSFETs |
| PIC16F1704 | U3 — hashboard MCU |
| AT24C02D-XHM-T | U5 — EEPROM |

---

## Maintenance Requirements

1. After replacing any accessory: no PCB deformation; check replaced area for open/short
2. Operators: electronics background + **≥ 1 year** repair experience + BGA/QFN/LGA proficiency
3. Board must pass tester **≥ 2× OK** before QC
4. Confirm tools, tester software, fixture FW/FPGA before work
5. **PT1 before PT2** — PT2 only after PT1 passes
6. PT2: small heatsink soldered; large heatsink + even thermal gel; fans full speed; chassis cooling → 2 hash boards for duct
7. Signal measurement: **4 fans full speed mandatory**
8. New chip: pre-tin pins with paste, then solder to PCBA (§II.8)

---

## Section VIII — Routine Workflow (from source)

1. **Visual:** warp, burn, missing/offset parts
2. **Impedance** per voltage domain → find short/open before energizing
3. ~0.36 V per domain check
4. After routine pass → hash board tester for fault localization
5. Near bad ASIC: probe CO / NRST / RO / XIN / BI and VDD0V8 / VDD1V8
6. **Reflow:** no-clean flux, reflow pins to re-wet; if unchanged → replace chip
7. **QC:** ≥ 2 full passes; cool down between runs

---

## Image Reference (Figures 3-1 to 8-1)

| Figure | Description | Local file |
|--------|-------------|------------|
| 3-1 (imgs 1–2) | SD/FPGA update — Zynq 7007, recovery code 0xB031; control board layout (MicroSD, RJ45, LEDs, J8 LCD, JTAG J10, S2 button) | [16280669255318281.JPG](../sources/s19_hash_guide/images/202108/16280669255318281.JPG) · [16280669332283857.JPG](../sources/s19_hash_guide/images/202108/16280669332283857.JPG) |
| 3-2 | Single-sided heatsink SD file layout — `single_board_test`, `Config.ini`, `BM1398-pattern/`, `Result/`, kernel files | [16280669718083128.JPG](../sources/s19_hash_guide/images/202108/16280669718083128.JPG) |
| 3-3 | Config.ini naming — rename `Config.ini-NBS1902-PT2` → `Config.ini` | [16280670439942976.JPG](../sources/s19_hash_guide/images/202108/16280670439942976.JPG) |
| 3-4 to 3-8 | Double-sided heatsink / Config steps | [3-4](../sources/s19_hash_guide/images/202108/16280670989112547.JPG) · [3-5](../sources/s19_hash_guide/images/202108/16280671263690793.JPG) · [3-6](../sources/s19_hash_guide/images/202108/16280671577488218.JPG) · [3-7](../sources/s19_hash_guide/images/202108/16280672139981566.JPG) · [3-8](../sources/s19_hash_guide/images/202108/16280672448823607.JPG) |
| 4-1 | LDO strip with on-image labels: 19 V→1.8 V (boost-fed); 13.64 V→1.8 V; 1.8 V→0.8 V (PLL); red-box regulator groups | [16280673436987379.jpg](../sources/s19_hash_guide/images/202108/16280673436987379.jpg) |
| 4-2 | PCB silk BITMAIN 38X2_HASHBOARD_V1_2 — domain 1–38 serpentine; L1 / power pocket at domain 38; 330 µF / 30 V input caps | [16280673851292066.JPG](../sources/s19_hash_guide/images/202108/16280673851292066.JPG) |
| 4-3 | Same PCB with ASIC 1–76 overlay (serpentine pair path) — map `asic[index]` (0-based) to physical die | [16280675029636732.jpg](../sources/s19_hash_guide/images/202108/16280675029636732.jpg) |
| 4-4 | Heatsink-installed view with 1–76 numbers — find chip N without removing sinks | [16280675329455458.jpg](../sources/s19_hash_guide/images/202108/16280675329455458.jpg) |
| 4-5 | Buck converter schematic: Q2/Q3/Q6/Q7 (TPHR9003NL), PIC_EN through Q4/Q5, VDD_14V output, soft-start ~2 ms to 24.5 V | [16280675609637282.JPG](../sources/s19_hash_guide/images/202108/16280675609637282.JPG) |
| 4-6 | Whole miner block: 3× hashboard + control + APW12 + 4 fans; IIC/EN interface; 12 V→3V3 on control; 12–15 V adjustable to hashboards | [16280676018461882.JPG](../sources/s19_hash_guide/images/202108/16280676018461882.JPG) |
| 5-1 (A+B) | VDD / power check — circled areas on schematic; VDD_IN 12–15.6 V; Q2/Q3/Q6/Q7 TPHR9003NL with 10 Ω gates; PIC_EN network; VDD_14V | [16280677076156400.jpg](../sources/s19_hash_guide/images/202108/16280677076156400.jpg) · [16280677762706693.jpg](../sources/s19_hash_guide/images/202108/16280677762706693.jpg) |
| 5-2 | Domain voltage probing — Q2/Q3/Q6/Q7 location on PCB, pin 1 indicators, J1/J44 thermal pads | [16280678779025618.jpg](../sources/s19_hash_guide/images/202108/16280678779025618.jpg) |
| 5-3 | PIC area — U3 (PIC16F1704), J2 header (GND/CLK/DAT/GND/3V3/MCLR), U5 (sensor/EEPROM), L1 inductor "100" | [16280679098027647.JPG](../sources/s19_hash_guide/images/202108/16280679098027647.JPG) |
| 5-4 | AT24C02D (U5) schematic — I2C SDA(5)/SCL(6)/WP(7)=GND/VCC(8)=3.3 V; A0/A1/A2 address pins; C27=100 nF/6.3 V | [16280679412382871.JPG](../sources/s19_hash_guide/images/202108/16280679412382871.JPG) |
| 5-5 | U3 (PIC16F1704) PCB area — R22/R23/C18/R15; pin 1 dot; production code 1952229 | [16280679709801253.JPG](../sources/s19_hash_guide/images/202108/16280679709801253.JPG) |
| 5-6 | PICkit3 (MPLAB ICE) — 3 LEDs (POWER/ACTIVE/STATUS); ACTIVE blue; 6-pin ICSP cable; USB red; pin 1 arrow | [16280679896800337.JPG](../sources/s19_hash_guide/images/202108/16280679896800337.JPG) |
| 5-7 | MPLAB IPE v3.10 install screen — IPE + IDE v3.10 + driver switcher | [16280680154961774.JPG](../sources/s19_hash_guide/images/202108/16280680154961774.JPG) |
| 5-8a | MPLAB IPE Power tab — VDD=3.3 V; "Power Target from Tool" checked; VPP=9.0 V; Low Voltage Program off | [16280680638577513.JPG](../sources/s19_hash_guide/images/202108/16280680638577513.JPG) |
| 5-8b | MPLAB IPE Operate — device PIC16F1704; file for BM1398-S19; version V89 / 20200101; checksum D654; 450 pass/179 fail/629 total shown | [16280680775892317.JPG](../sources/s19_hash_guide/images/202108/16280680775892317.JPG) |
| 5-9 | Boost schematic: U9 (MP1517DR), L1 10 µH, D3/D4/D5 MBR0540, EN at 8.5 V, VFB=0.7 V, VDD_19V0 output | [16280681615335996.jpg](../sources/s19_hash_guide/images/202108/16280681615335996.jpg) |
| 5-10 | Boost confirmation: VDD_IN=14 V → VDD_19V0; C55 should read ~19 V; rise time ~2 ms to 24.5 V (sim 1.9 ms) | [16280681949383909.JPG](../sources/s19_hash_guide/images/202108/16280681949383909.JPG) |
| 5-11 (A-D) | LDO 1.8 V / 0.8 V per group schematics — U102 LN1134A182MR → VDD_1V8_MD; U103/U151 SGM2036 → VDD_0V8; D31/D42 isolators; NC components listed | [A](../sources/s19_hash_guide/images/202108/16280687224064054.JPG) · [B](../sources/s19_hash_guide/images/202108/16280687517173735.JPG) · [C](../sources/s19_hash_guide/images/202108/16280687683264249.JPG) · [D](../sources/s19_hash_guide/images/202108/16280687955976637.JPG) |
| 5-12 | BM1398 signal/TP excerpt (U116 example) — 51 Ω resistors R576–R582; VDD_0V36 core; VDDIO_18/08; TP617–TP622 | [16280688356818739.JPG](../sources/s19_hash_guide/images/202108/16280688356818739.JPG) |
| 5-13 | U3 pins 2–3 area — R19/R20/R24/R25/R26/R27; C11/C12/C22/C24/C25; pin 1 indicator dot | [16280689649568480.JPG](../sources/s19_hash_guide/images/202108/16280689649568480.JPG) |
| 5-14 (A+B) | Temp sensors — LM75A (U4/U6/U7/U8) back of PCB; pull-up R24/R25=4.7 kΩ; bridge R26/R27=0 Ω; each sensor has 100 nF decoupling; 3.3 V supply | [A](../sources/s19_hash_guide/images/202108/16280690203020490.JPG) · [B](../sources/s19_hash_guide/images/202108/16280691358575865.jpg) |
| 5-15 | Dichotomy method — ASIC75 example; `asic[075]` in domain[37] value 3706 vs ~4900 average; bad asic list; PATTERN NG result | [16280691868885679.JPG](../sources/s19_hash_guide/images/202108/16280691868885679.JPG) |
| 5-16 | ASICNG d-1 — six resistors around chip X; BM1398 32-pin pinout (CLKI/CLKO/CI/CO/RI/RO/NRSTI/NRSTO/BI/BO/ADDR0/ADDR1/P_CORE_EN/TEMP_P/TEMP_N) | [16281252098008009.JPG](../sources/s19_hash_guide/images/202108/16281252098008009.JPG) |
| 5-17 | ASICNG d-2 — chain mismatch log: expected gChain=0 but received 13; CRC error 80; pic_heart_beat stop | [16281252916071119.JPG](../sources/s19_hash_guide/images/202108/16281252916071119.JPG) |
| 5-18 | Pattern NG log — `bad asic list`: asic[036]/[037]/[043]/[075]; domain[37] value 3706; nonce_rate 97.92%; lost 7865 / valid 370919 | [16281253208141905.JPG](../sources/s19_hash_guide/images/202108/16281253208141905.JPG) |
| 5-19 | PT2 serial long run — `reg_value_buf buffer full`; nonce from wrong chains (8/4/12/10/3/14/7/6) vs gChain=2; Asic:42 big_core 85 small_core 3 | [16281254173846250.jpg](../sources/s19_hash_guide/images/202108/16281254173846250.jpg) |
| 8-1 | Maintenance flowchart — Observe → Resistance → Voltage → Tester → Board supply/signal TPs → Locate fault → Reflow first → Replace → ≥2× OK | [16281261554488676.jpg](../sources/s19_hash_guide/images/202108/16281261554488676.jpg) |

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| S19 hash board guide HTML (rewritten image src) | [sources/s19_hash_guide/index.html](../sources/s19_hash_guide/index.html) |
| Asset manifest | [sources/s19_hash_guide/manifest.json](../sources/s19_hash_guide/manifest.json) |

Regenerate: `python scripts/fetch_zeus_kb_source.py s19_hash_guide`
Flat image index: `python scripts/emit_image_tables.py s19_hash_guide`

**Online reference:** https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp

---

## Checklist Before Starting

- [ ] **APW12_12V-15V_V1.2** (or compatible) + version matches miner
- [ ] **4AWG** copper **≤ 60 cm**
- [ ] **25 Ω / ≥ 100 W** discharge on **both** fixture poles
- [ ] PicoBT **V2.2010** + S19 test file; **FPGA** updated via SD (Figures 3-1–3-2)
- [ ] **4 fans** at full speed for all measurements
- [ ] Board **cooled** before test post-repair
- [ ] DMM + fine probes; **scope** for CLK
- [ ] BM1398 + 0402 R/C kit + **SPG-30B** thermal gel
- [ ] **PICkit3** + MPLAB IPE v3.10
- [ ] Power sequence memorized: **GND first, IO last** / remove **IO first**
