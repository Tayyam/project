# ASIC Repair Knowledge Base
## Target Models: Antminer S19 · Whatsminer M30S · Whatsminer M50
## Purpose: AI repair agent reference — follow this guide step by step

---

## AGENT OPERATING RULES

1. Always identify the miner model AND board version BEFORE starting any diagnosis.
2. Always read the correct repair guide section for that model.
3. Follow the checklist before touching any board — confirm all tools are available.
4. **For APW12:** Discharge capacitors to < 5V BEFORE touching any internal component — verify with multimeter first.
5. **For S19 hashboard:** Always follow correct power-on/off sequence (negative first, signal cable last) — wrong sequence instantly burns R8/R9/U1/U2.
6. **For S19 control board:** Confirm OTP status before any work — wrong action locks the board permanently.
7. **For M30S hashboard:** Calculate correct input voltage = 0.31V × number of groups — do NOT use a fixed 13V without calculating.
8. Escalate to human if: board has physical burn damage on CPU/main IC, or if OTP status is unknown on S19 control board.
9. Document every measurement taken during diagnosis.
10. After any rework: board must pass PT1 then PT2, twice consecutively, before passing QC.

---

## TOOL INVENTORY — CONFIRMED AVAILABLE ✓

### Diagnosis
- ✓ PicoBT Universal Tester + S19 Test File + M30/M50 Test File
- ✓ Antminer APW12 PSU (bench power — confirm version matches miner)
- ✓ ZOYI ZT-R01 Thermography Multimeter (thermal + voltage simultaneously)
- ✓ FNIRSI DSO-TC3 Oscilloscope (CLK signal measurement)
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

> All previously missing items now acquired. Tool inventory is COMPLETE.

---

## REPAIR FILE 1 — Antminer S19 Hashboard

**Reference:** https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp

### Board Architecture
- 76 × BM1398 ASIC chips
- 38 domains (groups), 2 chips per domain
- Domain voltage: 0.36V per domain
- Domains 38, 37, 36, 35, 34, 33, 32 (7 groups): LDO powered by boost circuit U9 output 19V → outputs 1.8V
- **Domain 31:** powered by VDD 13.64V (NOT by boost — boundary domain, check carefully during diagnosis)
- Domains 30–1: powered by VDD 13.64V through LDO → 1.8V, each domain drops 0.36V
- 0.8V: provided by 1.8V output of each domain via LDO
- Boost circuit: 14V input → 19V output (test point: C55 = 19V)

### Signal Flow — Exact Voltages from Source
| Signal | Direction | Voltage (no IO) | Voltage (operating) |
|--------|-----------|-----------------|---------------------|
| CLK (XIN) | Chip 01 → 76 (from Y1 25M oscillator) | — | 0.7V–1.3V |
| TX/CI (CO) | IO pin 7 → U2 level converter → Chip 01 → 76 | 0V | 1.8V |
| RX/RI (RO) | Chip 76 → 01 → U1 → IO pin 8 → control board | 0.3V | 1.8V |
| BO (BI) | Chip 01 → 76 | 0V | 0V (multimeter reads 0V) |
| RST | IO pin 3 → Chip 01 → 76 | 0V (standby) | 1.8V |

### Bench Setup — CRITICAL POWER-ON/OFF SEQUENCE
> **WARNING: Wrong sequence burns R8, R9, U1, U2 — board will always report 0 chips after**

**Power ON sequence (in this exact order):**
1. Connect negative copper wire to PSU
2. Connect positive copper wire to PSU
3. Plug in signal cable (IO)

**Power OFF sequence (reverse):**
1. Remove signal cable (IO) first
2. Remove positive copper wire
3. Remove negative copper wire last

**Bench hardware:**
- APW12 12V-15V PSU with 4AWG copper wires ≤60cm
- Discharge resistor 25Ω/100W on positive AND negative poles of test fixture
- PicoBT (test fixture V2.2010 control board) with S19 test file
- 4 fans at full speed for heat dissipation during ALL signal measurements
- Board must be cooled down before testing after repair — hot board causes false PNG errors

### SD Card Setup — First Use
1. Use 19-series SD card program to update FPGA on test fixture control board
2. Unzip → copy to SD card → insert into tester card slot
3. Power on ~1 minute → wait for double flash ×3 on indicator
4. **If FPGA not updated: will falsely report specific chip as bad every test**

**SD card modes:**
- Single-sided heatsink: unzip PT1 inspection chip directly → SD card
- Double-sided heatsink 8×pattern test: rename `Config(2).ini` → `Config.ini` (delete original Config first)

### Maintenance Requirements
1. After replacing ANY accessory: PCB must have no visible deformation; check replaced parts and surrounding area for open/short
2. Operators must have: electronic knowledge + 1+ year maintenance experience + proficient in BGA/QFN/LGA soldering
3. **Board must pass test ≥2 times before passing QC**
4. Verify tools and test fixtures working normally before starting
5. **Chip test sequence: PT1 (chip detection) first → PT2 (function test) only after PT1 passes**
6. Function test requirements: small heatsink must be properly soldered; large heatsink must have thermal gel evenly applied; fans at full speed; when using chassis cooling, install 2 hash boards simultaneously to form air duct
7. Signal measurement: 4 fans at full speed mandatory

### Spare Parts Required (from source)
- 0402 resistors: 0Ω, 51Ω, 10KΩ, 4.7KΩ
- 0402 capacitors: 0.1µF, 1µF
- Solder ball diameter: 0.4mm recommended
- Thermal gel: Fujipoly SPG-30B specification (apply evenly on chip surface after replacement)

### Fault Diagnosis — ASIC = 0 (PT1/PT2)

**Step 1 — Check power output**
- Measure VDD_14V at power terminal (Figure 5-1 in source)
- Check MOS short: measure resistance between pins 1, 4, and 8

**Step 2 — Check domain voltage**
- Expected: 0.36V per domain
- If 14V present but no domain voltage → check PIC circuit

**Step 3 — Check PIC circuit**
- Measure pin 2 of U3 → expected 3.3V
- If no 3.3V → check IO cable connection → reprogram PIC
- **PIC programming details:**
  - Program file: `20200101-PIC1704-BM1398-V89.hex`
  - Tool: PICkit3 — pin 1 of cable → pin 1 of J3 on PCB; connect pins 1,2,3,4,5,6
  - Software: MPLAB IPE → device: PIC16F1704 → select .HEX → Connect → Program → Verify

**Step 4 — Check boost circuit**
- Measure C55 test point → expected 19V

**Step 5 — Check LDO outputs per domain**
- 1.8V LDO output per domain
- 0.8V (PLL) LDO output per domain

**Step 6 — Check signal output (CLK/CI/RI/BO/RST)**
- Use voltage values from Signal Flow table above
- Compare deviating domain with adjacent domain values

### Fault Diagnosis — Incomplete Chip Count (PT1/PT2)

**Case a — LCD shows ASICNG=(0):**
1. Measure total domain voltage AND boost 19V → confirm normal
2. Short-circuit RO test point AND 1V8 test point between chip 1 and chip 2
3. Run find-chip program → check serial log
4. If still 0 chips found, check sub-cases:
   - **a-1:** Measure 1V8 test point (expect 1.8V) and 0V8 test point (expect 0.8V)
     - If abnormal → 1.8V or 0.8V LDO circuit of that domain is abnormal, or 2 ASIC chips not soldered well
     - Most common cause: short circuit of 0.8V or 1.8V patch filter capacitors — measure resistance of relevant patch filter caps on front and back of PCBA
   - **a-2:** Check U1 and U2 circuits — resistance welding, etc.
   - **a-3:** Measure R8 and R9 resistance → must be within 10Ω and not jump randomly — if abnormal, replace
   - **a-4:** Check CLK signal at that domain using oscilloscope — if CLK absent or abnormal at specific group, check the inter-group resistor at that boundary and the crystal oscillator Y1

### Additional Fault Cases

**EEPROM NG on tester LCD:**
- Check U5 soldering condition

**PIC sensor NG / abnormal temperature reading:**
- Check R24–R27 (4 resistors) soldering
- Check U3 PIN2 and PIN3 soldering
- Check temperature sensors U4, U6, U7, U8 and matching resistors R28–R39 on back of PCB
- Verify 3.3V power supply to temperature sensor is normal
- Check heatsink welding quality — deformed large heatsink causes poor chip cooling → temperature difference

### Common Repair Actions
| Symptom | Action |
|---------|--------|
| ASIC = 0 | Follow 6-step diagnosis above in order |
| MOS short (pins 1/4/8) | Replace MOSFET |
| No domain voltage | Check LDO in that domain |
| CLK missing at domain N | Check chip N and N-1 |
| RI signal stops at domain N | Chip N likely dead |
| R8/R9 >10Ω or jumping | Replace R8 and R9 |
| EEPROM NG | Check U5 soldering |
| Temperature NG | Check U4/U6/U7/U8 + R28–R39 |
| Board reports 0 after rework | Wrong power-on/off sequence burned R8/R9/U1/U2 |
| Dead ASIC chip | Replace BM1398: reball with stencil + 183°C paste + apply Fujipoly SPG-30B thermal gel |

### Checklist Before Starting
- [ ] APW12 PSU available + correct version confirmed
- [ ] 4AWG copper wires ≤60cm prepared
- [ ] Discharge resistor 25Ω/100W on BOTH poles of test fixture
- [ ] PicoBT loaded with S19 test file — FPGA updated via SD card
- [ ] 4 fans at full speed for signal measurement heat dissipation
- [ ] Board cooled before test (not immediately after rework)
- [ ] Multimeter with steel pin + heat-shrinkable T-bush for probing
- [ ] Oscilloscope ready for CLK measurement
- [ ] BM1398 chips + 0402 resistors (0Ω/51Ω/10K/4.7K) + 0402 caps (0.1µF/1µF) in stock
- [ ] Fujipoly SPG-30B thermal gel available (or equivalent)
- [ ] PICkit3 programmer available for PIC reprogramming
- [ ] Power-on/off sequence memorized (negative first, signal cable last)

---

## REPAIR FILE 2 — Whatsminer M30S / M31S / M32 Hashboard

**Reference:** https://www.zeusbtc.com/articles/information/3703-whatsminer-m31s-m30s-m32-series-hash-board-repair-guide

### Critical Notes Before Starting
1. Normal working voltage: **0.31~0.32V × number of groups** (e.g. 0.31V × 37 = 11.47V → input ~11.5V) — use as maintenance standard
2. **Use oscilloscope NOT multimeter for CLK voltage** — explicit requirement
3. Violations of these rules lead to wrong analysis and unnecessary damage

### Board Architecture
- M3x series: M31S, M31S+, M30S, M30S++, M32
- **Same block diagram as M20S** — circuit consists of: group chipset, temperature sensor, boost circuit, memory, voltage level conversion
- **Key difference from M20S: only 1 crystal oscillator** (M20S has 2) — signals between groups connected by resistors
- Each group LDO: supports 2×1.8V (Pin 7, 8, 13, 14) + 1×0.9V (Pin 6, 15)
- **17V boost circuit** powers the last 8 groups (or last 9 groups depending on board version)
- 3.3V powers: temperature sensor + memory
- Voltage level conversion between 3.3V and 1.8V

### Tools Required (from source)
1. Electric screwdriver
2. 936A electric soldering iron
3. Electronic hot plate preheat station (IR preheater)
4. Customized control board for maintenance (CB4-V10 fixture)
5. TF Card (for test firmware)
6. 12V DC power supply for control board
7. **Adjustable 10A+ DC power supply** (NOT just any PSU)
8. **100MHz oscilloscope** (mandatory — not optional)
9. Multimeter
10. Gloves
11. Tin paste + Solder paste
12. Power cord, network cable, cables
13. Tweezers
14. Computer
15. Electrostatic table (ESD mat)
16. M1 miner case with fan (for heat dissipation during test)

### Bench Setup
- Main voltage: calculated from 0.31V × number of groups
- Control board: separate 12V DC supply
- Current limit: 10A+ adjustable PSU
- **CLK measurement: oscilloscope mandatory**
- Heat dissipation: M1 miner case with fan during all tests

### Signal Transmission (M31S vs M30S differ — check board diagrams)
- M31S and M30S have different signal transmission direction layouts
- Both use 1 crystal oscillator — CLK generated at oscillator, transmitted through all groups via resistors between groups
- When CLK stops at a group → check the inter-group resistor connection at that point

### Board-Specific Circuits to Know
| Circuit | Location | Purpose |
|---------|----------|---------|
| 17V boost | Last 8–9 groups (highlighted in red on PCB) | Powers last groups' LDOs |
| 3.3V | Temperature sensor area + memory area | Sensor and EEPROM power |
| Level converter | Between 3.3V and 1.8V zones | Signal voltage conversion |
| Crystal oscillator | Single location on board | CLK source for all chips |

### Fault Diagnosis — General Protocol
1. Confirm input voltage = 0.31V × number of groups
2. Measure domain voltages sequentially group by group
3. Check LDO 1.8V and 0.9V per group
4. **Use oscilloscope** to check CLK at each group
5. Check signal chain (RI direction) to locate break point
6. For last 8–9 groups: additionally check 17V boost circuit output

### Common Error Codes — M30S
| Error Code | Cause | Action |
|------------|-------|--------|
| 530 | Cannot detect SM0 | Check fan connection and cable |
| 236, 255, 268 | PSU failure | Replace power supply |
| 250, 25, 540, 541, 542 | PSU + chain failure | Export miner log, check error 202, replace PSU |
| 257, 540, 541, 542 | PSU failure | Same — export log first |

### M30 Specific — Thermal Putty (Critical)
- M30/M30S uses dual heatsink design with physical gap between heatsinks
- **MUST use HY234 Thermal Putty (gel) — NOT liquid thermal paste**
- Liquid paste cannot fill the gap → overheating → chip failure
- Apply putty evenly across chip surfaces before reassembling heatsinks

### Checklist Before Starting
- [ ] Input voltage calculated: 0.31V × number of groups = target voltage
- [ ] Adjustable 10A+ DC PSU configured to calculated voltage
- [ ] Separate 12V DC PSU for control board
- [ ] PicoBT / CB4-V10 loaded with M30/M50 test file
- [ ] **100MHz oscilloscope connected and ready (mandatory)**
- [ ] M1 miner case with fan for heat dissipation
- [ ] ESD mat and grounding
- [ ] HY234 Thermal Putty available for reassembly
- [ ] KF1922 ASIC chips in stock
- [ ] Tin paste + solder paste available
- [ ] MobaXterm installed on laptop

---

## REPAIR FILE 3 — Whatsminer M30/M50 Troubleshooting Hub

**Reference:** https://www.zeusbtc.com/Support_s_l.asp?t1=whatsminer&t2=hash-board

### Quick Triage Protocol
1. Read error code from miner interface — cross-reference with error code table in FILE 2
2. If PSU-related error → **swap PSU first before touching hashboard** — most M30S errors are PSU
3. If hashrate imbalance across 3 boards → check thermal putty on all boards
4. If ASIC=0 on one board → isolate board and run on bench (FILE 2 procedure)
5. If chip count incomplete → follow FILE 2 sub-cases a-1 through a-4

### Common Cases from Source

**M30S chip report incomplete:**
- Measure domain voltages first — locate the domain with abnormal voltage
- Use oscilloscope on CLK — M30S crystal oscillator failure affects all downstream chips

**M30S EEPROM / memory issues:**
- 3.3V supply to memory area — check if present
- Memory chip solder condition

**Whatsminer M21S important chip locations:**
- Reference: https://www.zeusbtc.com/Support_s_l.asp?t1=whatsminer&t2=hash-board for chip location diagrams

**1950 chip series hash boards:**
- Separate repair guide available on troubleshooting hub

**M30S hashrate imbalance:**
- Check thermal putty (HY234) on all 3 boards — dried putty is primary cause
- Check fan operation on all 4 fans — uneven cooling → uneven hashrate

### Checklist Before Starting
- [ ] Error code recorded before power-off
- [ ] Thermal camera (ZOYI ZT-R01) ready for hotspot detection
- [ ] Spare APW12 (correct version) available for PSU swap test
- [ ] 40× data cables available for quick cable swap
- [ ] HY234 Thermal Putty available for putty replacement
- [ ] All 4 fans verified operational

---

## REPAIR FILE 4 — Whatsminer M30/M50 Test Fixture Tutorial

**Reference:** https://www.zeusbtc.com/blog/details/5314-tutorial-on-whatsminer-m30-m50-test-fixture-to-test-hash-board-asic-chip-failure

### Test Fixture Specs
- Main board: **CB4-V10 H6OS** control board
- Cables included: Whatsminer 22p ribbon signal cable + 14p test fixture cable + M30/M50 adapter board
- Compatible models: M30S, M30S+, M31S, M32, M50, M50S+, M50S++ (air-cooled — NOT hydro)

### Required Tools
- Whatsminer test jig (CB4-V10)
- Ethernet cable
- Computer (with Ethernet port — use USB-Ethernet adapter if no built-in port)
- Adjustable power supply (31A / 13V)
- Whatsminer hash board to test

### Step-by-Step Setup Procedure

**Step 1 — Configure PSU**
- Set current limit: **31A**
- Set voltage: **13V**

**Step 2 — Connect all devices in order**
1. Connect 12V power cable to test fixture
2. Insert network cable into test fixture
3. Connect positive and negative poles of adjustable PSU to hash board
4. Connect hash board to test fixture with data cable

**CRITICAL — Power-on/off sequence:**
- **Power ON:** connect power cord first → then connect data cable
- **Power OFF:** unplug data cable first → then unplug power cord
- When replacing boards for testing: follow this sequence every time

**Step 3 — Wait for ready indicator**
- When **red and green indicators on CB4-V10 flash simultaneously** → test fixture is ready

**Step 4 — Set computer IP address**
- Connect ethernet cable directly from fixture to computer (**direct connection, NOT through router** — to prevent IP conflicts)
- Open Network Settings → Local Area Connection → IPv4
- Fixture has fixed IP → set computer to same subnet manually

**Step 5 — Open MobaXterm and connect**
1. Open MobaXterm → click "Session"
2. Select "SSH"
3. Enter in "Remote host": **192.168.2.22**
4. Check "Specify username" → enter: **root**
5. Click OK
6. Successful connection screen confirms fixture and computer are linked

### Test Commands
```bash
# Reset RST signal to low (fix reset failures)
echo 0 > /sys/class/gpio/gpio99/value
# OR (alternative path)
echo 0 > /sys/class/gpio/gpio197/value

# Reset RST signal to high
echo 1 > /sys/class/gpio/gpio99/value
# OR
echo 1 > /sys/class/gpio/gpio197/value

# Test chip IDs — no heatsink required
test-readchipid

# Full performance test — heatsink + fan REQUIRED
test-hashboard
```

### Important Notes
- `test-readchipid` → runs without heatsink — use for chip detection only
- `test-hashboard` → **REQUIRES upper and lower heatsinks installed + fan running** — overheats without
- **First use:** flash FPGA on CB4-V10 control board using SD card program before first test
- Computer does NOT need internet — direct cable only

### Checklist Before Starting
- [ ] CB4-V10 test fixture with M30/M50 test file flashed on SD card
- [ ] FPGA updated on CB4-V10 (first use only)
- [ ] Adjustable PSU set to 13V / 31A
- [ ] Ethernet cable connected direct to laptop (not router)
- [ ] Laptop IP set manually to same subnet as 192.168.2.22
- [ ] MobaXterm installed and SSH configured
- [ ] Heatsinks installed on board for `test-hashboard` (not needed for `test-readchipid`)
- [ ] Cooling fan running during performance test
- [ ] USB-Ethernet adapter available if laptop has no Ethernet port

---

## REPAIR FILE 5 — S19 Control Board

**Reference:** Section VI & VII in https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp

### CRITICAL WARNING — OTP LOCK (Read before touching any S19 control board)
- S19 control board has OTP (One-Time Programmable) function
- **Trigger 1:** Power cut during OTP initialization → control board will NOT boot
- **Trigger 2:** OTP process takes < 30 seconds → same result
- **Fix:** Replace U1 (main CPU FBGA chip)
- **Restriction 1:** Replaced U1 **CANNOT** be used in any other S19 series miner
- **Restriction 2:** U1 with OTP enabled **CANNOT** be used in other model series
- **Rule:** Do NOT swap S19 control boards between units without verifying OTP status first

### Common Control Board Faults (from source Section VI)

**Fault: Cannot find IP**
- High probability: abnormal operation caused it — check OTP status first
- Check network port appearance and solder condition
- Check network transformer T1 and CPU solder joints

**Fault: Whole miner fails to read hashboard / missing chains**
- A. Check cable connections between hashboard and control board
- B. Check control board components corresponding to each chain
- C. Check wave solder quality on pins around the IO interface connector

**Fault: Abnormal fan display**
- Check if fans work normally
- Check fan-to-control-board connection
- Check control board for abnormalities

**Fault: Missing chain (3 hashboards total but one missing)**
- Mostly caused by link failure between hashboard and control board
- Check data cable first, then IO interface soldering

### Miner-Level Faults (Section VII from source)
- If whole miner fails: check hashboard ↔ control board connections first before disassembly
- Confirm APW12 version matches miner version before replacing PSU
- Check all 4 fans before declaring control board fault — fan failure can cause false alarms

### Checklist Before Starting
- [ ] OTP status confirmed (ask owner whether miner was previously flashed/configured)
- [ ] USB to TTL (UART) cable connected
- [ ] Putty or SSH client installed and ready
- [ ] LDO / PMIC chips in stock for control board repair
- [ ] Fine soldering tip (T2) mounted on iron
- [ ] Microscope ready for solder joint inspection
- [ ] Network cable + laptop for IP testing
- [ ] Confirm all 4 fans operational before concluding control board is faulty

---

## REPAIR FILE 6 — Whatsminer Control Board (M50 / M30S)

**References:**
- M50: https://www.zeusbtc.com/blog/details/4764-whatsminer-m50-series-manual
- M30S: https://www.zeusbtc.com/manuals/user-manuals/WhatsMiner-M30S-Manual.pdf

### Pre-Operation Physical Checks (from M50 source)
Before any software/network diagnosis, verify hardware first:

**Cable connection check:**
- Verify power cord, adapter board control cable, and fan data cable are all correctly connected
- When inserting cables: ensure pins are correctly inserted — do NOT force
- **Incorrect cable connection → stable operation affected → may burn cables and control board**

**Copper bar check (hashboard connection):**
- Confirm positive and negative poles of copper bar are connected correctly
- Screw washers fixing copper bar must be aligned parallel to edge of copper bar
- Wrong polarity → board damage

### IP Setup — M50
- Default: DHCP (requires DHCP-enabled router)
- After power-on: **wait 50 seconds** → yellow LED steady + green LED flashing = normal state
- To broadcast IP: **hold IPFOUND button >5 seconds** → LEDs flash = IP broadcast sent
- Use WhatsMinerTools software on same subnet to find IP, MAC address, and miner location
- Login with default account/password → enter dynamic IP in browser

### IP Setup — M30S
- Run WhatsMinerTools → "Check IP Address Reported by Miner"
- Obtain dynamic IP from software

### Pool Configuration (both models)
1. Login to miner dashboard
2. Go to: Configuration → Miner Configuration
3. Set up to 3 mining pool addresses + worker names
4. Click "Save & Apply"
5. Go to: Miner Status → Restart miner program to apply changes

### NTP Server Configuration
- System → System Configuration → add/modify NTP server address
- Required for accurate time sync in mining operations

### Firmware Upgrade
- Use WhatsMinerTools for batch firmware upgrades
- After firmware change: verify miner is hashing normally before returning to owner
- Reboot via: System → Reboot → "Perform reboot"

### Static IP Configuration (optional)
- Configure via miner dashboard if DHCP not available
- Reference M30S manual Section 5.3 for step-by-step

### Checklist Before Starting
- [ ] Physical: all cables properly connected, copper bar polarity verified
- [ ] WhatsMinerTools installed on laptop
- [ ] MobaXterm installed (for SSH if needed)
- [ ] Laptop on same network segment as miner
- [ ] Default login credentials available
- [ ] DHCP router available OR static IP configured on miner

---

## REPAIR FILE 7 — APW12 Power Supply Repair

**References:**
- https://www.zeusbtc.com/manuals/Antminer-APW12-Power-Supply-Repair-Guide.asp
- https://www.zeusbtc.com/manuals/5869-antminer-apw121215a-miner-power-supply-repair-manual

### Architecture
- 2 single-phase AC inputs (C14 delta connectors, requires C13 cable)
- **CRITICAL: Both AC inputs must be connected simultaneously — two independent PFC stages require simultaneous power input. Single input = PSU will not function.**
- Output 1 (Main): 12V–15V adjustable (max 12V/300A or 15V/240A) — voltage controlled via I2C from control board
- Output 2 (SB — Standby): 12V fixed (for control board + fans, max 15A)
- 4-pin signal terminal: SDA/SCL (I2C for voltage adjustment), EN (enable, active low — control board enables PSU)
- 3 × 60mm cooling fans
- Structure: large main board + 3 fans + lower shell

### APW12 Version Compatibility
| Version | Compatible Miners |
|---------|------------------|
| 1215a/b | S19, S19j, S19 Pro, S19j Pro, S19a, S19i, S19+, T19, D7, E9 |
| 1215c | S19, S19j, S19j+, S19 Pro, S19j Pro, S19a, T19, D7, E9 |
| 1215d | S19, S19 Pro, S19j Pro, S19j Pro+, S19XP |
| 1215e | S19 Pro, S19j Pro, S19XP |
| 1215f | S19, S19 Pro, S19j Pro, S19j Pro+, S19XP, S19K Pro |
| 1215g | S19 Pro-A |

**Compatibility rules:**
- 1215a/b/c: interchangeable (no voltage feedback)
- 1215d/e/f: interchangeable (with voltage feedback)
- 1215d/e/f can replace a/b/c via firmware upgrade
- 1215a/b/c CANNOT replace d/e/f

### Maintenance Platform Requirements (from source)
1. Constant temperature soldering iron **above 80W** — pointed tip for SMD (300–350°C), knife tip for plug-in components (380–420°C)
2. Heat gun for chip disassembly — **260°C ±2°C** — do NOT heat for long to avoid PCB blistering
3. AC controllable voltage regulator (200–250V, 0–20A) for safe power-on — **if unavailable: use 100W light bulb in series with AC live wire**
4. Electronic load (3.6KW, 0–50V) for load testing — **if unavailable: build resistive load matched to APW12**
5. Multimeter (Fluke 15b+ recommended) + suction pistol + tweezers
6. Hashboard tester (zj0001000001 or V9 1.2) + special PSU test card firmware
7. Oscilloscope (configure if available)
8. Flux + lead-free solder wire + IPA for cleaning
9. **Thermal paste (2500 specification)** — for MOS ↔ heatsink heat conduction repair
10. **704 silicone** — to re-fix cover after original PCBA glue is damaged during repair

### CRITICAL Safety Requirements (from source)
> **Before opening shell and repairing PCBA:**
> - **Discharge large capacitors first** — measure with multimeter, proceed only when voltage < 5V
> - Work must be grounded, ESD wrist strap recommended
> - After replacing key components: verify no short circuit before applying AC voltage — otherwise risk of miner explosion
> - When working with AC220V: exercise extreme caution

### Maintenance Operations Rules
1. Personnel must understand switching power supply working principles + 1+ year experience + welding proficiency
2. Discharge capacitors before any work — measure < 5V before touching
3. After any replacement: no PCB deformation, solder joints reliable, check for open/short around replacement area
4. After key component replacement: check entire main circuit for shorts before AC voltage test
5. Use anti-static mat and wrist strap — grounded workspace required

### Bench Setup for PSU Testing
1. AC voltage regulator (200–250V, 0–20A current limit) — OR 100W bulb in series as safety measure
2. Electronic load 3.6KW/0–50V for output load test — OR custom resistive load
3. Multimeter for voltage measurement at all test points
4. Oscilloscope if available

### Common Fault Diagnosis

**PSU not starting**
1. Confirm both AC inputs connected simultaneously
2. Check EN signal from control board (must be low/0V to enable)
3. Check SB (standby) 12V fixed output first — powers control board and fans
4. If SB present but no main output → check main 12V–15V output circuit

**No main voltage output**
1. Check PFC stage components (two independent PFC stages)
2. Measure MOSFET gates and drains
3. Check PWM IC outputs

**Overheating / fan failure**
1. Check 3 × 60mm fans for operation
2. Replace thermal paste (spec 2500) between MOS and heatsink
3. Check fan power connections
4. Re-apply 704 silicone if component cover glue was damaged

### Checklist Before Starting
- [ ] Correct APW12 version identified (match to miner model — verify before purchase/use)
- [ ] Both AC inputs confirmed available for simultaneous connection
- [ ] Large capacitors discharged (< 5V measured before touching)
- [ ] AC voltage regulator (200–250V) OR 100W safety bulb setup ready
- [ ] ESD mat + wrist strap + grounded workspace
- [ ] Electronic load OR resistive load ready
- [ ] Multimeter calibrated
- [ ] Oscilloscope available
- [ ] Soldering iron 80W+ (pointed tip + knife tip)
- [ ] Heat gun calibrated to 260°C ±2°C
- [ ] MOSFETs + PWM ICs in stock
- [ ] Thermal paste (2500 spec) + 704 silicone available
- [ ] Flux + lead-free solder wire + IPA for cleaning

---

## REFERENCE LINKS — ALL FREE

| Document | URL |
|----------|-----|
| S19 Hashboard Repair Guide | https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp |
| M30S/M31S/M32 Repair Guide | https://www.zeusbtc.com/articles/information/3703-whatsminer-m31s-m30s-m32-series-hash-board-repair-guide |
| M30/M50 Troubleshooting Hub | https://www.zeusbtc.com/Support_s_l.asp?t1=whatsminer&t2=hash-board |
| M30/M50 Test Fixture Tutorial | https://www.zeusbtc.com/blog/details/5314-tutorial-on-whatsminer-m30-m50-test-fixture-to-test-hash-board-asic-chip-failure |
| S19 Control Board (in Hash Guide) | https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp |
| M50 Manual | https://www.zeusbtc.com/blog/details/4764-whatsminer-m50-series-manual |
| M30S User Manual PDF | https://www.zeusbtc.com/manuals/user-manuals/WhatsMiner-M30S-Manual.pdf |
| APW12 PSU Repair Guide | https://www.zeusbtc.com/manuals/Antminer-APW12-Power-Supply-Repair-Guide.asp |
| APW12 1215A Repair Manual | https://www.zeusbtc.com/manuals/5869-antminer-apw121215a-miner-power-supply-repair-manual |
| Zeus Full Manual Library | https://www.zeusbtc.com/Support-Manuals.asp |
| UV Solder Mask (Zeus shop) | https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585 |

---

## AGENT DECISION TREE — WHERE TO START

```
Miner brought in
│
├── 1. Identify exact model + board version
│       S19 / S19j / S19 Pro / S19j Pro → affects APW12 version needed
│       M30S / M31S / M32 / M50 → affects voltage calculation
│
├── 2. Symptom?
│   ├── Not powering on
│   │     → Check APW12: both AC inputs connected? SB 12V present?
│   │     → If APW12 faulty → FILE 7
│   │
│   ├── Low / zero hashrate
│   │     ├── S19 → FILE 1 (bench test with PicoBT)
│   │     └── M30S/M50 → FILE 2 (calculate voltage first: 0.31V × groups)
│   │
│   ├── Cannot find IP / not booting
│   │     ├── S19 → FILE 5 (check OTP status first)
│   │     └── M30S/M50 → FILE 6 (check copper bar + cables first)
│   │
│   ├── Error codes on M30S/M50
│   │     → FILE 3 → cross-reference error code table
│   │     → Most codes → PSU swap first before hashboard work
│   │
│   └── Unknown symptom
│         → Run PicoBT/test fixture on each hashboard
│         → Route based on result
│
├── 3. Before touching any board
│     ├── APW12: discharge caps < 5V first
│     ├── S19 hashboard: memorize power ON/OFF sequence
│     └── S19 control board: confirm OTP status
│
└── 4. After repair → PT1 → PT2 → pass twice → QC complete
```

---

*Knowledge base compiled from Zeus Mining official repair documentation. All references verified March 2026.*
