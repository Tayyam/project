# ASIC Repair Knowledge Base — APW12 Power Supply (FILE 7)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Bitmain APW12 power supply (switching PSU for Antminer S19-class) |
| Variants | APW121215a/b/c/d/e/f/g (see compatibility table) |
| Schematic reference | KJ-P023_SCH.PDF (internal part number) |
| Physical dimensions | ~254.6 × 245 × 64 mm body; ~250 mm length in side view |
| Weight | ~3.8 kg |
| Acoustic | ~67 dBA |
| AC input | Dual C14 connectors; **both must be live simultaneously** |
| AC input range | 200–240 Vac |
| AC input UVLO | ~80–89 Vac |
| Output 1 (Main) | 12–15 V adjustable; 240 A @ 15 V / 300 A @ 12 V; max 3600 W |
| Output 1 OCP | ~291–350 A |
| Output 2 (SB/Standby) | 12.3 V fixed (12.2–12.4 V); 15 A max → powers control board + fans |
| 4-pin control header | GND / EN / SCL / SDA (top→bottom); EN active low |
| 6-pin ATX_2X3 (standby) | +12 V row + GND row |
| Cooling | 3 × 60 mm fans (all intake) |
| Default bench voltage | ~15.2 V at power-up without I2C control (requires EN short to GND) |

**Critical — Dual AC input:**
> Both AC inputs must be connected simultaneously. Two independent PFC stages require simultaneous power. Single input = PSU will not function.

**Cross-references:**
- S19 hashboard: [FILE 1 — S19 Hashboard](repair_s19_hashboard.md)
- Whatsminer M30/M50 hub: [FILE 3 — Whatsminer Hub](repair_whatsminer_m30_m50_hub.md)

---

## APW12 Version Compatibility

| Version | Compatible Miners |
|---------|------------------|
| 1215a/b | S19, S19j, S19 Pro, S19j Pro, S19a, S19i, S19+, T19, D7, E9 |
| 1215c | S19, S19j, S19j+, S19 Pro, S19j Pro, S19a, T19, D7, E9 |
| 1215d | S19, S19 Pro, S19j Pro, S19j Pro+, S19XP |
| 1215e | S19 Pro, S19j Pro, S19XP |
| 1215f | S19, S19 Pro, S19j Pro, S19j Pro+, S19XP, S19K Pro |
| 1215g | S19 Pro-A |

**Interchangeability rules:**
- 1215a/b/c: interchangeable (no voltage feedback)
- 1215d/e/f: interchangeable (with voltage feedback)
- 1215d/e/f can **replace** a/b/c via firmware upgrade
- 1215a/b/c **cannot** replace d/e/f

---

## Hardware Architecture

**Block diagram (main path):**
```
AC1 + AC2 (200–240 Vac)
  → EMI Suppression (X-caps, common-mode chokes)
  → Rectification (Bridge GBJ2506 / GBU2510)
  → NTC inrush limiter + K1 relay bypass
  → PFC Boost (NCP1654 family / U18; MOSFET TK31N60W; SiC diode SCS210AMC)
  → VBUS (~400–450 V DC) filtering
  → LLC Resonant Converter (FAN7688 controller U22; 4× TK31N60W5 primary FETs)
  → Transformer (PQ5050, T3/T6)
  → Synchronous Rectification (TPH4R10ANH FETs; IX4340 dual gate driver U25)
  → Output filter (L8/L9 = 400 µH; output caps 150 µF/35 V)
  → OUT1: 12–15 V / 240 A (main DC bus; lugs OUT-14.5-21V / OUT-GND)

Auxiliary path:
  ICE2QR4765 (U27, Quasi-Resonant PWM) → SB 12 V standby output
  → SB indicator LED (green = standby active)
  → ATX_2X3 6-pin header (+12 V / GND)
  → 4-pin control header (GND/EN/SCL/SDA)
```

**Control / communication:**
- I2C (SDA/SCL) from control board → adjusts main output voltage 12–15 V
- EN pin (active low) → control board asserts low to enable main output
- PIC MCU handles output and communication control
- MCU programming port on rear panel

---

## CRITICAL Safety Requirements

> **Before opening shell and working on PCBA:**
> - **Discharge large capacitors first** — measure with multimeter; proceed only when voltage < 5 V
> - Work must be grounded; ESD wrist strap required
> - After replacing key components: verify no short circuit before applying AC voltage — risk of explosion
> - When working with AC 220 V: extreme caution

---

## Tools & Materials Required

| # | Item | Spec |
|---|------|------|
| 1 | Soldering iron | > 80 W; pointed tip SMD (300–350 °C); knife tip plug-in (380–420 °C) |
| 2 | Heat gun | 260 °C ±2 °C — do NOT heat long to avoid PCB blistering |
| 3 | AC voltage regulator | 200–250 V / 0–20 A; **if unavailable: 100 W bulb in series with AC live wire** |
| 4 | Electronic load | 3.6 kW / 0–50 V; **if unavailable: build resistive load matched to APW12** |
| 5 | Multimeter | Fluke 15B+ recommended |
| 6 | Desoldering pump | Constant-temp iron + suction pistol |
| 7 | Tweezers | — |
| 8 | Hashboard tester | ZJ0001000001 or V9 1.2 + special PSU test card firmware |
| 9 | Oscilloscope | Configure if available; confirm Fpwm 450 kHz–1 MHz present |
| 10 | Thermal paste | Spec 2500 — for MOS ↔ heatsink interface |
| 11 | 704 silicone | Re-fix cover after original PCBA glue damaged during repair |
| 12 | Flux + solder | Lead-free solder wire + IPA for cleaning |
| 13 | IIC enable switch | 4-wire cable (blue/brown/green/white) for bench testing without control board |

---

## Maintenance Operations Rules

1. Personnel must understand switching power supply principles + ≥ 1 year experience + welding proficiency
2. Discharge capacitors before any work — measure < 5 V before touching internal components
3. After any replacement: no PCB deformation; reliable solder joints; check for open/short around replacement area
4. After key component replacement: check entire main circuit for shorts before AC voltage test
5. Use anti-static mat and wrist strap — grounded workspace required

---

## Bench Setup for PSU Testing

| Item | Value |
|------|-------|
| AC supply | Voltage regulator 200–250 V / 0–20 A (or 100 W safety bulb in series) |
| Electronic load | 3.6 kW / 0–50 V (or custom resistive load) |
| EN activation | Adapter shorting EN to GND on 4-pin header → reads ~15.2 V default |
| SB output check | Verify SB 12 V first (powers control electronics); green SB LED should light |
| IIC interface | Connect IIC enable switch to 4-pin header before testing with firmware tool |
| Test firmware | POWER TEST v2.0; APW12 v0.1; 4 test steps total |
| Expected output | Step 2/4: ~15.12 V OK; Step 4/4: ~14.87 V OK; stable 15.00 V on multimeter at busbars |

---

## Fault Diagnosis

### PSU not starting

```
1. Confirm BOTH AC inputs connected simultaneously
2. Check EN signal — must be LOW / 0 V to enable main output
3. Check SB (standby) 12 V output first — if absent: SB converter (U27 ICE2QR4765) fault
4. If SB present but no main output → main 12–15 V circuit fault (LLC stage)
5. Check SB indicator LED — green = SB working
```

### No main voltage output

```
1. Check PFC stage (two independent stages):
   - Fuse F1 (16 A) continuity
   - Bridge rectifier (GBJ2506 / GBU2510) — diode check all 4 pins
   - NTC (MF72-10D15) for inrush limiters
   - PFC MOSFET (TK31N60W / TK31N60W5) — short between pins 1/4/8?
   - PFC controller U18 power (VCC from +12V_1 line)
2. Measure VBUS — expect ~400–450 V DC (typical reading 426.1 V)
3. Check Primary VCC (13–15 V range; typical 13.35 V / 13.33 V) — powers PFC + PWM
4. LLC stage: check FAN7688 (U22) gate drive outputs DRVL_1/DRVH_1/DRVH_2/DRVL_2
5. Oscilloscope: confirm Fpwm ~450 kHz–1 MHz at PWM FET gates
6. SR output: check IX4340 (U25) OUTA/OUTB; check TPH4R10ANH SR FETs
7. Check output filter inductors L8/L9 (400 µH) for shorts
```

### Overheating / fan failure

```
1. Check all 3 × 60 mm fans — all must spin (intake direction)
2. Replace thermal paste (spec 2500) between MOS devices and heatsink
3. Check fan power connections (from SB 12 V rail)
4. Re-apply 704 silicone if component cover glue was damaged during repair
```

---

## Component Reference

### AC Input / EMI Stage

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| F1 | Fuse | AC input protection | 16 A |
| D2 | GBJ2506 | Bridge rectifier | — |
| NTC6, NTC7 | MF72-10D15 | Inrush current limiters | NTC thermistors |
| K1 | Relay | NTC bypass relay (closes after startup) | — |
| L5, L6 | Common mode choke | EMI suppression | 3R1350W-L11.3 |
| X-caps | — | EMI differential-mode filter | — |
| TEST1–TEST6 | — | Test points: AC input → PFC stage | — |

### PFC Stage (×2 independent)

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| U18 | NCP1654 family | PFC controller | VCC from +12V_1 |
| Q4 (also Q6) | TK20N60W / TK31N60W | PFC boost MOSFET | — |
| D3 (also D17) | SCS210AMC | SiC Schottky boost diode | — |
| R15 | — | Current sense resistor | 5 mΩ |
| D23 | ZTL431BFTA | Shunt regulator (feedback) | — |
| PC817 (×2) | Optocoupler | Isolated feedback | — |
| TEST21–TEST36 | — | PFC stage test points | — |

### SB (Standby / Auxiliary) Converter

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| U27 | ICE2QR4765 | Quasi-resonant PWM controller | — |
| T1 | EE16_4+6 | SB transformer | — |
| D2, D12 | ES1J | Ultra-fast recovery diodes | — |
| D9 | M7 | Snubber diode | — |
| U4 | PC817 | Optocoupler (feedback isolation) | — |
| U6 | ZTL431BFTA | Shunt regulator | — |
| R37 | — | Current sense (CS pin 3 of U27) | 2.7 Ω |
| R43, R44 | — | Output voltage divider | 20 kΩ / 5.1 kΩ |
| R71 | — | Snubber resistor | 390 kΩ |
| C48 | — | Snubber capacitor | 10 nF / 1 kV |
| C31 | — | Output filter, +12V2 | 220 µF / 25 V |
| C29 | — | Output filter, +12V1 | 220 µF / 25 V |
| C74, C75 | — | VCC filter (U27 pin 7) | 10 µF / 1 µF |
| TEST13, TEST15 | — | Test points: +12V1 (TEST13), +12V2 (TEST15) | — |

### ON/OFF Control / Enable Logic

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| U4, U15 | PC817 | Optocouplers for ON/OFF DC-DC_1/DC-DC_2 | U15 pin 3 = EN |
| Q3 | MMBT3906 (PNP) | VCC pass transistor | — |
| R22 | — | Base-to-emitter resistor Q3 | 1.69 kΩ |
| R20, R21, R49, R79, R81 | — | Signal resistors | 5.1 kΩ each |
| C26 | — | Filter cap | 100 nF / 50 V |
| C21, C76 | — | Smoothing caps | 1 µF each |
| +12V3 | — | Supply to this stage | From SB/aux |

### LLC Resonant Stage

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| U22 | FAN7688 | LLC resonant converter controller | FMIN resistor R56 = 130 kΩ; CS resistor R94 = 316 kΩ; VCC R175 = 10 Ω |
| Q14, Q15, Q21, Q22 | TK31N60W5 | Primary half-bridge MOSFETs | — |
| T3, T6 | PQ5050 | Main LLC transformers | — |
| U20, U24, U26, U28 | TLP5772 | Gate drive photocouplers | — |
| Q11, Q23, Q24, Q26 | MMBT3906 (PNP) | Gate discharge transistors | — |
| R63, R165, R170, R176 | — | Gate protection resistors | 51 Ω each |
| C149, C150 | — | Supply capacitors | 220 µF / 25 V |
| C52, C57, C152, C167 | — | Primary coupling caps | 630 V rated |
| DRVL_1, DRVH_1, DRVH_2, DRVL_2 | — | Gate drive output signals | — |
| 5VB | — | Internal reference / VDD for U22 pin 1 (VFB) + pin 2 (VDD) | — |

### Synchronous Rectification (SR) Stage

| Refdes | Part | Function | Key value |
|--------|------|----------|-----------|
| Q17, Q18, Q25, Q26 | TPH4R10ANH | SR output MOSFETs | — |
| U25 | IX4340 | Dual gate driver for SR | OUTA=pin7 / OUTB=pin5; supply: +12VOUT/−3VOUT/GND-OUT |
| D30, D34 | — | Input diodes for SROUT1/SROUT2 | — |
| R190, R191 | — | Input signal resistors | 200 Ω each |
| R192 | — | VDD feed resistor for U25 | 10 Ω |
| R214, R215 | — | Base resistors for transistors | 10 Ω |
| R188, R193 | — | Pull resistors | 1 kΩ each |
| C63, C185, C191 | — | Filter caps | 1 µF / 25 V |
| SR1_1, SR1_2, SR2_1, SR2_2 | — | SR gate drive outputs | — |
| DSS4540X, DSS5540X | — | Bipolar transistors for drive stage | — |

### Output Filter

| Refdes | Part | Value |
|--------|------|-------|
| L8, L9 | Output filter inductors | 400 µH |
| Output caps | Electrolytic bank | 150 µF / 35 V (multiple) |
| C146, C148, C168, C171 | Secondary snubber caps | 1 nF / 1000 V |
| OUT+ / GND-OUT | Output terminals | Main DC bus lugs (M4 lug pattern: 4-M4) |

### Key Test Points and Expected Voltages

| Test point / Node | Expected voltage | Stage |
|-------------------|-----------------|-------|
| High-voltage capacitor (VBUS) | 400–450 V DC (typical 426.1 V) | After PFC |
| Primary VCC | 13–15 V (typical 13.33–13.35 V) | PFC/PWM supply |
| TEST13 (+12V1) | ~12 V | SB output |
| TEST15 (+12V2) | ~12 V | SB output |
| Main output at busbars | 15.00 V (with IIC set) | OUT1 |
| Logic supply | 3.304 V DC | Control |
| SB output indicator | Green LED lit | SB working |

---

## PCB Layout Notes

**Board zones (1215A manual):**
- **High voltage area** (right side of PCB): PFC, bridge rectifiers, NTCs, primary LLC FETs
- **Low voltage area** (left side): SR FETs, output busbars, thick copper traces for high DC current
- **Isolation gap** between the two zones (safety gap — do not bridge during repair)
- Component side (top): ICs, transformers, heatsinks, electrolytics
- Solder side (bottom): SMD components

**Disassembly:**
- Outer shell: 6 screws (3 top edge + 3 bottom edge)
- PCB mounting: 5 screws (marked with red circles in 1215A image 12/23)
- PCB label: "ALPHA MINER"
- Transformer label: "LC 2201" / "30330029"
- Fans: dual (some variants) or triple; keyed connectors

**Component identification (1215A image 3):**
- PFC MCU control chip (PFC stage)
- SB auxiliary power supply (top of board)
- PWM control chip (main stage)
- Output + communication MCU control chip
- 2× main transformers
- Main output interface (far right)
- SR output transistor heatsink
- PWM transistor heatsink
- PFC transistor heatsink
- 2× bridge rectifiers (input)
- 2× PFC inductors (large toroidal)

---

## Repair Procedures

### MOS replacement (PFC or LLC FETs)

1. Discharge all capacitors — measure VBUS < 5 V before proceeding
2. Apply ESD wrist strap and use anti-static mat
3. Screwdriver to remove silicon potting from MOS leads
4. Heat soldering iron (constant-temp) to melt solder; use desoldering pump to clear through-hole pins
5. Remove fixing screws from MOS body on heatsink
6. Remove insulating sheet between MOS body and heatsink (replace with new one on reinstall)
7. Install same-model MOS only; apply thermal paste spec 2500 between body and heatsink
8. Solder leads; verify no short between drain/gate/source
9. After reassembly: full circuit short-check before applying AC voltage

### Cleaning / inspection

1. Use isopropyl alcohol (IPA) + small brush to clean PCB (especially solder side)
2. Remove gray silicon compound covering wire solder joints before inspection
3. Silicon compound on thick black wires = high-current DC output bonds — critical solder points
4. Inspect film capacitors (DAIN yellow), electrolytics (450 V primary, 25–35 V secondary) for bulging
5. Re-apply 704 silicone to cover after repair if original potting was disturbed

---

## Image Reference

### Main APW12 Guide Images

| # | Description | Local file |
|---|-------------|------------|
| 1 | Outline drawing — dual C14 inputs, 3-fan face, ~254.6×245×64 mm; output end: M4 lug pattern, 4-pin header (GND/EN/SCL/SDA), 6-pin ATX_2X3 | [16279616285583875.jpg](../sources/apw12_repair_guide/images/202108/16279616285583875.jpg) |
| 2 | Internal photo — dual DC busbars, 6-pin aux connector, I2C communication port, airflow arrows, grounded chassis | [16279616506154066.jpg](../sources/apw12_repair_guide/images/202108/16279616506154066.jpg) |
| 3 | 6-pin PCIe-style output connector — pins 1–3 yellow (+12 V); pins 4–6 black (return) | [16279617412997281.jpg](../sources/apw12_repair_guide/images/202108/16279617412997281.jpg) |
| 4 | Electrical spec table — OUT1: 12–15 V / 240 A / 3600 W; OUT2: 12.3 V / 15 A; OCP ~291–350 A; UVLO ~80–89 Vac; 250×249×62.2 mm / ~3.8 kg | [16279618932109037.jpg](../sources/apw12_repair_guide/images/202108/16279618932109037.jpg) |
| 5 | Block diagram — AC1+AC2 → EMI → Rectifier → PFC → VBUS filter → LLC step-down → Sync Rectification → 14.5–21 V main out; SB path → 12 V aux; PIC MCU; PWM Isolated drivers; feedback; fan 12 V | [16279619261096097.jpg](../sources/apw12_repair_guide/images/202108/16279619261096097.jpg) |
| 6 | Detailed block diagram — Main 12–15 V + 12 V SB aux; AC1/AC2 → PFC → PWM → DC/DC; Drive IC + PIC IC; rectified output heavy copper traces | [16279619384501173.jpg](../sources/apw12_repair_guide/images/202108/16279619384501173.jpg) |
| 7 | PCB overview — 3 cooling fans; green PCB; 4× large electrolytics; toroidal inductors (EMI/PFC); aluminum heatsinks; copper busbars; daughter boards | [16279620522193219.jpg](../sources/apw12_repair_guide/images/202108/16279620522193219.jpg) |
| 8 | AC → PFC partial schematic — F1 16 A; D2 GBJ2506; NTC pair + K1 relay; U1 NCP1654; Q4 TK20N60W; D3 SiC diode; R15 5 mΩ; PC817 optocouplers; TEST1–TEST6 | [16279621082456342.jpg](../sources/apw12_repair_guide/images/202108/16279621082456342.jpg) |
| 9 | Second PFC stage — F1 16 A; L5/L6 (3R1350W-L11.3); U17 GBU2510 bridge; Q6 TK31N60W MOSFET; D17 SCS210AMC SiC; NTC6/NTC7 (MF72-10D15); D23 ZTL431BFTA; PC817; U18 PFC controller on +12V_1; signals: PWM/RELAY_1/ON_OFF_DC-DC_1; TEST21–TEST36 | [16279621241877363.jpg](../sources/apw12_repair_guide/images/202108/16279621241877363.jpg) |
| 10 | SB converter schematic — U27 ICE2QR4765; T1 EE16_4+6; +12V1/+12V2 outputs; TEST13 (+12V1) and TEST15 (+12V2); U4 PC817 + U6 ZTL431BFTA feedback; R37 2.7 Ω CS; C31 220µF/25V (+12V2); C29 220µF/25V (+12V1); snubber R71/C48/D9; D2/D12 ES1J; C74 10µF + C75 1µF VCC | [16279621416077024.jpg](../sources/apw12_repair_guide/images/202108/16279621416077024.jpg) |
| 11 | (Use mirror HTML for this figure) | [16279621876812971.jpg](../sources/apw12_repair_guide/images/202108/16279621876812971.jpg) |
| 12 | (Use mirror HTML for this figure) | [16279621987968183.jpg](../sources/apw12_repair_guide/images/202108/16279621987968183.jpg) |
| 13 | ON/OFF control — U4/U15 PC817 optocouplers; Q3 MMBT3906 PNP; +12V3 supply → VCC-FAN7688; ON/OFF DC-DC_1/2 control signals; R20/R49/R21/R79/R81 = 5.1 kΩ each; R22 = 1.69 kΩ; C26 100nF/50V; C21/C76 1µF; U15 pin 3 = EN; optocouplers on +12V1_1 / +12V1_2 | [16279622278816328.jpg](../sources/apw12_repair_guide/images/202108/16279622278816328.jpg) |
| 14 | LLC controller (FAN7688 U22) — U20/U24/U26/U28 TLP5772 gate photocouplers; Q11/Q23/Q24/Q26 MMBT3906 discharge PNPs; +12V1/+12V2 supply; R56 130 kΩ (FMIN); R94 316 kΩ (CS); C149/C150 220µF/25V; DRVL_1/DRVH_1/DRVH_2/DRVL_2 outputs; 5VB to VFB(1)/VDD(2); R63/R165/R170/R176 = 51 Ω gate protection; R175 10 Ω VCC | [16279622552940977.jpg](../sources/apw12_repair_guide/images/202108/16279622552940977.jpg) |
| 15 | LLC primary + SR schematic — Q14/Q15/Q21/Q22 TK31N60W5 primary; T3/T6 PQ5050 transformers; Q17/Q18/Q25/Q26 TPH4R10ANH SR FETs; L8/L9 400µH; snubber C146/C148/C168/C171 1nF/1kV; primary caps C52/C57/C152/C167 630V; output bank 150µF/35V; R166/R180 10Ω gate; DRVH1/DRVL1/DRVH2/DRVL2; OUT+ and GND-OUT | [16279624557125120.jpg](../sources/apw12_repair_guide/images/202108/16279624557125120.jpg) |
| 16 | SR gate driver (IX4340 U25) — SROUT1/SROUT2 inputs via D30/D34; R190/R191 200Ω; OUTA(7)/OUTB(5); DSS4540X/DSS5540X transistors; +12VOUT/−3VOUT/GND-OUT supply; R192 10Ω; R214/R215 10Ω; R188/R193 1kΩ; C63/C185/C191 1µF/25V; SR1_1/SR1_2/SR2_1/SR2_2 outputs | [16279624809715697.jpg](../sources/apw12_repair_guide/images/202108/16279624809715697.jpg) |
| 17 | (Use mirror HTML for this figure) | [16279624978293654.jpg](../sources/apw12_repair_guide/images/202108/16279624978293654.jpg) |
| 18 | (Use mirror HTML for this figure) | [16279625112474195.jpg](../sources/apw12_repair_guide/images/202108/16279625112474195.jpg) |
| 19 | PCB overview map — fuses F1/F2/F3/F4; inductors L1/L2/L3/L4/L7/L10/L11/L18/L19; ICs U3/U4/U5/U6/U7/U9/U10/U11/U13/U15; large filter caps C27/C28/C34/C35; Z-mark chokes top-left; right-side SMD test point cluster | [16279625435882154.jpg](../sources/apw12_repair_guide/images/202108/16279625435882154.jpg) |
| 20 | Output connector detail — OUT-14.5-21V (main adjustable); OUT-GND; 4-pin control: SDA/SCL/EN/GND; ATX_2X3 +12V / GND | [16279625732283033.jpg](../sources/apw12_repair_guide/images/202108/16279625732283033.jpg) |
| 21 | (Use mirror HTML for this figure) | [16279626852314344.jpg](../sources/apw12_repair_guide/images/202108/16279626852314344.jpg) |

### 1215A Manual Images

| # | Description | Local file |
|---|-------------|------------|
| 1 | 1215A product callouts — 3× 60 mm fans (intake); both AC inputs required; MCU programming port; positive/negative bus lugs; I2C + SB aux 4-pin headers | [17685445953712629.jpg](../sources/apw12_1215a_manual/images/202601/17685445953712629.jpg) |
| 2 | PCB zones — low voltage area (left, thick copper traces); high voltage area (right); isolation gap; board ID "03"; SMD on solder side | [17685446259205793.jpg](../sources/apw12_1215a_manual/images/202601/17685446259205793.jpg) |
| 3 | Component layout photo — PFC MCU; SB supply (top); PWM controller; output+comms MCU; 2× main transformers; main output interface; SR/PWM/PFC heatsinks; 2× bridge rectifiers; 2× PFC inductors | [17685447543877698.jpg](../sources/apw12_1215a_manual/images/202601/17685447543877698.jpg) |
| 4 | Functional block diagram — dual AC → EMI → Rectify → PFC Boost → OVP/UVP → PWM → Power Conversion → Sync Rectification → DC Out; SB path; PWM feedback loops: OTP/SCP/voltage reg/sampling/OCP/OPP | [17685447763271665.jpg](../sources/apw12_1215a_manual/images/202601/17685447763271665.jpg) |
| 5 | Main stage collage — Fpwm annotations 450 kHz–1 MHz and 400 kHz–2 MHz; V-in and sensing strip; use with scope to confirm oscillation before swapping FETs | [17685448046236326.jpg](../sources/apw12_1215a_manual/images/202601/17685448046236326.jpg) |
| 6 | Schematic file reference — KJ-P023_SCH.PDF (schematic part number) | [17685449834079984.jpg](../sources/apw12_1215a_manual/images/202601/17685449834079984.jpg) |
| 7 | Required tools — diagonal cutting pliers; long-nose pliers; desoldering pump (blue); screwdriver (red handle); Fluke 17B+ multimeter showing O.L on MΩ range | [17685455718935118.jpg](../sources/apw12_1215a_manual/images/202601/17685455718935118.jpg) |
| 8 | Soldering iron settings — Left unit (KOTEBONK KT-120, ESD safe, lead-free): constant temp 380±10 °C, reading 390; Right unit: high-temp 400±10 °C, reading 400; CAL port; red Power switch | [17685456155859083.jpg](../sources/apw12_1215a_manual/images/202601/17685456155859083.jpg) |
| 9 | SB output indicator — green LED = standby active; control connector beside LED; main output indicator (green, far right of front panel); metal chassis; busbars on left | [17685456604312070.jpg](../sources/apw12_1215a_manual/images/202601/17685456604312070.jpg) |
| 10 | IIC enable switch — 4-wire cable (blue/brown/green/white) to side-panel 4-pin header; main output indicator light (green from vent slots); IIC interface enable switch label | [17685457209345320.jpg](../sources/apw12_1215a_manual/images/202601/17685457209345320.jpg) |
| 11 | IIC test fixture (ZJ0001000001) — POWER TEST v2.0; APW12 v0.1; Total Step 4; voltage range 11.89–15.12 V; rocker switch + green button; VR2 on PCB | [17685457529228178.jpg](../sources/apw12_1215a_manual/images/202601/17685457529228178.jpg) |
| 12 | Shell disassembly — 6 screws (3 top + 3 bottom); 5 PCB mount screws (red circles); PCB label "ALPHA MINER"; transformer "LC 2201 30330029"; dual fans; solid caps on secondary; 4× large primary electrolytics | [17685457874434293.jpg](../sources/apw12_1215a_manual/images/202601/17685457874434293.jpg) |
| 13 | Internal detail — MOSFETs on aluminum heatsink with white thermal paste; toroidal inductors with thick copper; DAIN yellow film caps (EMI/PFC); transformer "L12201 30330020"; 450 V electrolytics (primary); small heatsink for switching component | [17685458189165281.jpg](../sources/apw12_1215a_manual/images/202601/17685458189165281.jpg) |
| 14 | PCB top + bottom views — primary filtering caps top; transformer "32201 0330020"; 4× solder-side SMD inspection areas; 4× component-side control IC areas; inductor heatsinks | [17685459695807722.jpg](../sources/apw12_1215a_manual/images/202601/17685459695807722.jpg) |
| 15 | DMM measurement guide — Output terminal resistance: 0.0 Ω = short (fail), 0.712 kΩ = normal; Primary MOSFET diode: 0.000 = short (fail), 0.397 = good; Fuse: 0.000 = good (conductive), OL = blown; Bridge rectifier diode: all 4 pins, 0.000 = short, 0.472 = normal | [17685459965649931.jpg](../sources/apw12_1215a_manual/images/202601/17685459965649931.jpg) |
| 16 | Key voltage checkpoints — VBUS cap: 400–450 V (reading 426.1 V); Primary VCC: 13–15 V (readings 13.35 V / 13.33 V) → PFC+PWM supply; relay closes after startup; Totem-pole PWM FET starts after VCC stable; secondary: 12.50 V DC; logic: 3.304 V DC | [17685460354209074.jpg](../sources/apw12_1215a_manual/images/202601/17685460354209074.jpg) |
| 17 | Silicon removal — screwdriver removes gray potting from thick black wire solder joints; film cap C65; electrolytic C13; daughter board on heatsink | [17685460687268904.jpg](../sources/apw12_1215a_manual/images/202601/17685460687268904.jpg) |
| 18 | Desoldering procedure — left hand holds pump body; right thumb presses switch; constant-temp iron melts solder; pump tip over MOS pins after full melt; targets R127/R129/R125/R123/R153/R166/D34; goal = clean through-holes | [17685460954560911.jpg](../sources/apw12_1215a_manual/images/202601/17685460954560911.jpg) |
| 19 | MOS removal — screwdriver to unfasten from heatsink; insulating sheet between MOS and heatsink (prevents arcing); replace with same-model only; 4 power transistors in row on pink insulating layer; white thermal compound at pin base | [17685461208339109.jpg](../sources/apw12_1215a_manual/images/202601/17685461208339109.jpg) |
| 20 | Solder-side inspection — through-hole pads in red frame (desoldering evidence); gray potting compound over connections; large electrolytics; SMD FETs below pads; aluminum heatsinks; yellow-taped HF inductor; thick black DC output wires | [17685461469383909.jpg](../sources/apw12_1215a_manual/images/202601/17685461469383909.jpg) |
| 21 | PCB cleaning — IPA + small brush on solder side; large electrolytics; aluminum heatsink; manual solder touch-up on copper traces; thick black DC output wires near heatsink | [17685461705757322.jpg](../sources/apw12_1215a_manual/images/202601/17685461705757322.jpg) |
| 22 | IIC test run — POWER TEST v2.0; APW12 v0.1; Step 2/4: 15.12 V OK ON; Step 4/4: 14.87 V OK ON; main screen 11.89 V + 15.12 V; ribbon cable between fixture and PSU board; I/O switch + green step button | [17685462136087736.jpg](../sources/apw12_1215a_manual/images/202601/17685462136087736.jpg) |
| 23 | Shell reassembly — 6 screws; 5 PCB screws; PCB label "ALPHA MINER"; fan connector callout; 3 fans; 2 main transformers; 4 primary electrolytics in 2+2 groups; solid caps at output | [17685462396865293.jpg](../sources/apw12_1215a_manual/images/202601/17685462396865293.jpg) |
| 24 | Final test — connect IIC interface → power switch ON → all output LEDs green → multimeter on busbars reads 15.00 V DC (confirmed in photo) | [17685475653581205.jpg](../sources/apw12_1215a_manual/images/202601/17685475653581205.jpg) |

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| APW12 main guide HTML | [sources/apw12_repair_guide/index.html](../sources/apw12_repair_guide/index.html) · [manifest.json](../sources/apw12_repair_guide/manifest.json) |
| APW12 1215A supplement HTML | [sources/apw12_1215a_manual/index.html](../sources/apw12_1215a_manual/index.html) · [manifest.json](../sources/apw12_1215a_manual/manifest.json) |

Regenerate: `python scripts/fetch_zeus_kb_source.py apw12_repair_guide apw12_1215a_manual`

**Online references:**
- Main guide: https://www.zeusbtc.com/manuals/Antminer-APW12-Power-Supply-Repair-Guide.asp
- 1215A manual: https://www.zeusbtc.com/manuals/5869-antminer-apw121215a-miner-power-supply-repair-manual

---

## Checklist Before Starting

- [ ] Correct APW12 version identified — match to miner model before purchase/use
- [ ] Both AC inputs confirmed available for simultaneous connection
- [ ] Large capacitors discharged (< 5 V measured before touching internal components)
- [ ] AC voltage regulator (200–250 V) OR 100 W safety bulb setup ready
- [ ] ESD mat + wrist strap + grounded workspace
- [ ] Electronic load (3.6 kW) OR resistive load ready
- [ ] Multimeter calibrated
- [ ] Oscilloscope available (confirm Fpwm ~450 kHz–1 MHz at PWM gates)
- [ ] Soldering iron 80 W+ (pointed tip + knife tip)
- [ ] Heat gun calibrated to 260 °C ±2 °C
- [ ] MOSFETs (TK31N60W / TK31N60W5 / TPH4R10ANH) + PWM ICs in stock
- [ ] Thermal paste spec 2500 + 704 silicone available
- [ ] Flux + lead-free solder wire + IPA for cleaning
- [ ] IIC test fixture (ZJ0001000001 or V9 1.2) with APW12 test firmware
