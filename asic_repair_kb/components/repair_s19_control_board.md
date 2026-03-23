# ASIC Repair Knowledge Base — S19 Control Board (FILE 5)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Bitmain Antminer S19 control board (Ctrl_C55) |
| PCB ID | AMCB07_4X1_4F_S_VER2.2 |
| SoC | Xilinx ZYNQ 7007 (U1 — FBGA package under sticker) |
| RAM | ESMT DDR |
| Flash | NAND (firmware / OS) |
| Ethernet PHY | H1601CG magnetics (T1) |
| Power input | 6-pin PCIe 12 V connector |
| Fan connectors | FAN1–FAN4 via J13/J14/J15 |
| Hash board connectors | 4× IDC 18-pin (2×9) headers J1–J4 |
| External interfaces | MicroSD slot, RJ45, IP Report port, Reset button |
| UART baud rate | 115200 |
| SSH login | user: `miner` / password: `miner` |

**Critical OTP warning:** read the OTP section before touching any S19 control board.

**Cross-references:**
- Hashboard repair: [FILE 1 — S19 Hashboard](repair_s19_hashboard.md)
- APW12 PSU: [FILE 7 — APW12 PSU](repair_apw12_psu.md)

---

## Hardware Architecture

**Control board rails (Figure 6-1 — local image 16281255087210813.JPG):**

| Rail label | Location (approx) | Powered by |
|-----------|-------------------|------------|
| 1.0 V | Near U5, L1 | DC–DC / PMIC (U5 family) |
| 1.5 V | Near U6, L2 | DC–DC / PMIC (U6 family) |
| 1.8 V | Near U7, L3 | DC–DC / PMIC (U7 family) |
| 3.3 V | Near U8, L4 | DC–DC / PMIC (U8 family) |

**Hash board IO headers (Figure 6-2 — local image 16281255507527082.JPG):**
- 4× IDC 18-pin headers (J1 / J4 visible in photos)
- Channel labels at bottom: CH1, CH2, CH3
- Signal tracks: AN1, AN2, AN3, AN4, R, F
- Round test points with +/− marks above each connector
- Board identifier silk: L1D14TD

---

## CRITICAL WARNING — OTP LOCK

> **Read this before touching any S19 control board.**

- S19 control board has **OTP** (One-Time Programmable) memory on the MCU (U1).
- **Trigger 1:** Sudden power loss **during** OTP initialization → board may fail to boot / OTP not opened.
- **Trigger 2:** Power-on to OTP completion **< 30 s** → same failure mode.
- **Fix if bricked (no network):** replace **U1** (main CPU FBGA).
- **Restriction 1:** After U1 replacement for OTP failure, that U1 **must not** be reused in another S19-class miner.
- **Restriction 2:** Control board with OTP enabled → U1 **cannot** be moved to other model series.
- **Rule:** Do **not** swap S19 control boards between units without confirming OTP / flash history with the owner.

**After SD card recovery:**
1. When recovery succeeds, green LED stays on → **power off** and restart.
2. After power-on again, **wait ≥ 30 s** (OTP timing window).

---

## Fault Diagnosis — Decision Tree

### Level 1: Whole miner does not operate

```
Measure all 4 rails (1.0 V / 1.5 V / 1.8 V / 3.3 V) at control board
│
├─ 3.3 V shorted?
│   ├─ Disconnect U8 → re-measure
│   └─ Still shorted → remove CPU (U1) → re-measure → replace U8 if clear
│
├─ Other rail missing/shorted?
│   └─ Replace corresponding DC–DC converter (U5 / U6 / U7 / U8 family)
│
├─ All rails OK?
│   ├─ Inspect DDR (ESMT) soldering
│   ├─ Inspect CPU (U1 / ZYNQ) soldering
│   └─ Try SD card flash recovery
│
└─ SD card recovery procedure:
    1. Prepare S19 recovery image on MicroSD (SD card program)
    2. Insert → power on → green LED stays on = success
    3. Power off → restart → wait ≥ 30 s
```

### Level 2: Cannot find IP / No network

```
Try Level 1 first (network depends on control board health)
│
├─ Inspect RJ45 Ethernet port (physical damage, bent pins)
├─ Inspect magnetics / transformer T1 (H1601CG) solder
└─ Inspect CPU (U1) soldering
```

### Level 3: Cannot upgrade firmware

```
Same focus as Level 2:
├─ Ethernet port physical condition
├─ T1 magnetics solder
└─ CPU U1 soldering
```

### Level 4: Miner does not read hash boards / missing chains

```
A. Check hashboard ↔ control board cables — seated and undamaged
B. Check per-chain parts on control board (Figure 6-2 — J1–J4 headers)
C. Check wave solder on IO connector pins and nearby resistors
D. If cables OK and board fault suspected → run PT2 single-board test:
   └─ PT2 passes → fault likely control board
   └─ PT2 fails → repair hashboard (FILE 1)
```

### Level 5: Whole-miner failure phenomena (§VII)

| Symptom | Primary check | Action |
|---------|---------------|--------|
| Fan display wrong | Fans actually spinning? | Check cables → then control board |
| Missing one chain of three | Data cable for that chain | Check cable → PT2 → if PT2 pass: control board; if PT2 fail: hashboard (FILE 1) |
| Abnormal temperature | Ambient, fan faults | PCB limit 90 °C in monitoring |
| Partial hashrate (2/3 or 1/3) | Incomplete chip count | Use hashboard tester PT2 (FILE 1) |
| Hashing stops / pool disconnects | Network upstream | Check router, pool, cable |
| One board low hashrate | Specific chain fault | Use PuTTY nonce/ADC log (see below) |

---

## PuTTY Diagnostic Commands

**Connect:**
- SSH to miner IP, port 22 (PuTTY or MobaXterm)
- Login: `miner` / `miner`
- Hostname: `Antminer`

**Commands:**
```bash
# Real-time nonce log (for low hashrate bisect — domain / asic index)
tail -f /tmp/nonce.log

# Real-time domain voltage (ADC) log
tail -f /tmp/adc.log
```

**Reading the nonce log:**
- Lines show `domain N asic[xxx]=…` nonce counts
- Compare across chips — low nonce on chip X points to that chip on the hashboard
- Paste commands in PuTTY with **right-click** (not Ctrl+V)

---

## Component Reference

### Control board key ICs

| Refdes | Part | Function |
|--------|------|----------|
| U1 | Xilinx ZYNQ 7007 (FBGA) | Main SoC / CPU — OTP host |
| U5 | DC–DC converter | 1.0 V rail |
| U6 | DC–DC converter | 1.5 V rail |
| U7 | DC–DC converter | 1.8 V rail |
| U8 | DC–DC converter | 3.3 V rail |
| T1 | H1601CG | Ethernet magnetics |
| DDR | ESMT | System RAM |
| NAND | Flash | Firmware / OS storage |

### Figure reference

| Figure | Topic | Local file |
|--------|-------|------------|
| 6-1 | OTP / control board recovery — Ctrl_C55 V2.2010 photo with rails annotated | [16281255087210813.JPG](../sources/s19_hash_guide/images/202108/16281255087210813.JPG) |
| 6-2 | IO / chain-related hardware — J1–J4 IDC headers, CH1/CH2/CH3, test points | [16281255507527082.JPG](../sources/s19_hash_guide/images/202108/16281255507527082.JPG) |
| 6-4 | Boot log — UART 115200; Chain[0] finds 102/114 ASICs → power off hash board 0 | [16281255876188535.JPG](../sources/s19_hash_guide/images/202108/16281255876188535.JPG) |
| 6-5 | Pool / network symptom — WARN_NET_LOST, 169.254.x.x (no DHCP), power off after 9 min | [16281256176355390.JPG](../sources/s19_hash_guide/images/202108/16281256176355390.JPG) |
| 6-6 | Normal miner status display | [16281256719764448.jpg](../sources/s19_hash_guide/images/202108/16281256719764448.jpg) |
| 6-7a | PuTTY configuration dialog — SSH, port 22, IP 10.77.23.206 | [16281256966372007.jpg](../sources/s19_hash_guide/images/202108/16281256966372007.jpg) |
| 6-7b | PuTTY session open — hostname Antminer, login miner/miner | [16281259808162230.jpg](../sources/s19_hash_guide/images/202108/16281259808162230.jpg) |
| 6-8 | nonce.log output — domain/asic index, nonce counts per chip | [16281260712654783.jpg](../sources/s19_hash_guide/images/202108/16281260712654783.jpg) |

> Note: the mirrored Zeus page labels 6-1, 6-2, then 6-4 — there is **no Figure 6-3** in the mirrored HTML.

### Key log signatures

**Figure 6-4 — Boot log (chain count mismatch):**
- UART baud: 115200
- Normal ASIC count per chain: **114**
- If Chain[0] = 102 after 3 attempts (times 0/1/2): `Chain 0 only find 102 asic, will power off hash board 0`
- This is a **hashboard fault on chain 0**, not a control board fault by itself → repair chain 0 hashboard (FILE 1)
- Operating params logged: `pulse_mode=1`, `ccdly_sel=1`, `pwth_sel=1`, `fixed_frequency=500`

**Figure 6-5 — Network fault log:**
- `WARN_NET_LOST: network connection lost` → **power off in 4 min** if not restored
- Total: network lost 5 min + 4 min wait = auto shutdown
- IP `169.254.x.x` = link-local = **DHCP failed** → upstream network / pool issue, not hashboard
- `Lost shares due to no stratum share response` = pool unreachable
- `read asic reg error chain=1 chip=204 reg=176` = secondary ASIC error
- **Treat as network / DHCP / pool problem first**

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| S19 hash board guide HTML (§VI–§VII are control board sections) | [sources/s19_hash_guide/index.html](../sources/s19_hash_guide/index.html) |
| Asset manifest | [sources/s19_hash_guide/manifest.json](../sources/s19_hash_guide/manifest.json) |

> Scroll to **VI. Control board…** and **VII. Failure phenomenon…** in the saved HTML. Figures §VI–§VII use images 41–48 in document order.

Regenerate: `python scripts/fetch_zeus_kb_source.py s19_hash_guide`

**Online reference:** https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp

---

## Checklist Before Starting

- [ ] OTP / prior flash history confirmed with owner
- [ ] USB–TTL (UART 115200) available
- [ ] PuTTY or SSH client ready
- [ ] LDO / PMIC spares for control board rails (U5–U8 family)
- [ ] Fine soldering tip + microscope
- [ ] Ethernet cable + laptop for link/IP tests
- [ ] All **4 fans** confirmed operational before blaming control board
- [ ] MicroSD card + S19 recovery image (for SD flash recovery)
