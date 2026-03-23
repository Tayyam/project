# ASIC Repair Knowledge Base — Whatsminer Control Board M50 / M30S (FILE 6)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Whatsminer control board (integrated compute + PSU management) |
| Models covered | M50, M50S, M50S+, M50S++, M30S, M31S, M32 |
| PSU type | Integrated (APW12-class) with C19 high-current AC inlet |
| Boot time to ready state | ~50 seconds |
| Default network | DHCP |
| IP broadcast method | Hold IPFOUND button > 5 s → LEDs flash → IP broadcast sent |
| Default SSH / web login | root / root (or check label on unit) |
| Find tool | WhatsMinerTools (same subnet) |

**Cross-references:**
- Hashboard repair: [FILE 2 — M30S Hashboard](repair_whatsminer_m30s_hashboard.md)
- Troubleshooting hub: [FILE 3 — M30/M50 Hub](repair_whatsminer_m30_m50_hub.md)
- Test fixture: [FILE 4 — Test Fixture](repair_whatsminer_test_fixture.md)

---

## Hardware Architecture

**M50 control end panel (image 1 in local mirror):**
- ETH port (RJ45)
- Active LED (green)
- Reset button
- IP Found button (also used for >5 s IP broadcast)
- TF (MicroSD) slot for firmware recovery
- Fault / Alarm LED indicators

**M50 PSU/bus region (image 2 in local mirror):**
- PCB silk: **V+** / **V−** under main DC lugs
- 12× Phillips screws on DC interface
- White flat cable routed between busbars
- Output electrolytics behind the copper bars
- Pin header **J1** (upper-left) — confirm refdes on your unit
- **Copper bar polarity MUST match V+/V− silk** before torquing hardware — wrong polarity damages hashboard

**Cooling:**
- Dual fans (front + rear) for lengthwise airflow
- Fan harnesses use keyed connectors (yellow/black leads)
- Recommended ambient: below ~30 °C
- If exhaust very hot and fans exceed ~6100 rpm: expect down-clocking — not a hashboard defect

---

## M50 Series — Electrical Specs

| Model | Hashrate (TH/s) | Efficiency (J/TH) | Wall Power (W) |
|-------|-----------------|-------------------|----------------|
| M50 | 112 | 28 | 3136 |
| M50S | 128 | 26 | 3328 |
| M50S+ | 138 | 24 | 3312 |
| M50S++ | 140–144 | 22 | 3080 |

---

## Pre-Operation Physical Checks

> **Do these before any software / network diagnosis.**

**Cable connections:**
- Verify power cord, adapter board control cable, and fan data cable all correctly seated
- When inserting cables: pins fully engaged — do NOT force
- **Incorrect cable connection → stable operation affected → may burn cables and control board**

**Copper bar polarity (hashboard connection):**
- Confirm V+ and V− poles match PCB silk on both PSU and hashboard ends
- Screw washers fixing copper bar must be aligned **parallel** to edge of copper bar
- Wrong polarity → immediate board damage

---

## Fault Priority Tree

Work top-to-bottom — resolve each level before proceeding to the next.

```
LEVEL 1 — Physical (check before powering on)
  ├─ All cables seated? (power cord, control cable, fan cable, data cables)
  ├─ Copper bar polarity correct? (V+ / V− silk matches)
  └─ Fan harness keyed connectors locked?

LEVEL 2 — Power-on / LED sequence
  ├─ After power-on, wait 50 s
  ├─ Yellow LED steady + Green LED flashing = NORMAL
  ├─ No LEDs = PSU / power delivery issue → check APW12 (FILE 7)
  ├─ Fault / Alarm LED = see error codes in FILE 2
  └─ Automatic frequency search runs ~15 min after boot — do NOT assume fault during this window

LEVEL 3 — Network / IP
  ├─ Run WhatsMinerTools on same subnet
  ├─ Hold IPFOUND > 5 s → LEDs flash → tool finds IP
  ├─ If DHCP IP not found: verify router has DHCP enabled, or set static IP
  └─ Static IP: login at current DHCP IP → Configuration → Interfaces → Edit → set static → Save
      (open the NEW IP in browser after saving — old URL shows endless loading)

LEVEL 4 — Web interface / mining status
  ├─ Check CGMiner Status: EffectiveChips per board
  ├─ Check Miner Log: error codes → cross-reference FILE 2 error code table
  ├─ Error 530 (slot not found) → check fan + data cable for that slot
  ├─ Errors 540/541/542 → hashboard RST/CLK/ASIC fault → FILE 2
  └─ Errors 236/255/268/250/257 → PSU fault → FILE 7 / swap PSU first

LEVEL 5 — Firmware / software
  ├─ After frequency search (~15 min) if hashrate still abnormal: check firmware version
  ├─ Use WhatsMinerTools for batch firmware upgrade
  ├─ After firmware change: verify normal mining before returning to owner
  └─ Reboot: System → Reboot → "Perform reboot"
```

---

## IP Setup

### M50
- Default: DHCP (requires DHCP-enabled router)
- After power-on: **wait 50 seconds** → Yellow LED steady + Green LED flashing = normal
- To broadcast IP: hold IPFOUND button **> 5 seconds** → LEDs flash = IP broadcast sent
- Use WhatsMinerTools on same subnet to find IP, MAC, and miner location
- Login: enter dynamic IP in browser → use default account/password

### M30S
- Run WhatsMinerTools → "Check IP Address Reported by Miner"
- Obtain dynamic IP from software

### Static IP (either model)
- Login at DHCP IP → **Configuration → Interfaces → Edit** → set protocol to static → fill IP/mask/gateway → **Save**
- Open the new IP in browser (staying on old URL causes endless loading)
- Reference: M30S manual Section 5.3

---

## Pool Configuration

1. Login to miner dashboard
2. Go to: **Configuration → Miner Configuration**
3. Set up to 3 mining pool addresses + worker names
4. Click **"Save & Apply"**
5. Go to: **Miner Status → Restart miner program** to apply

---

## NTP Server Configuration

- Path: **System → System Configuration** → add/modify NTP server address
- Required for accurate time sync in mining operations

---

## Firmware Upgrade

- Use **WhatsMinerTools** for batch firmware upgrades
- After firmware change: verify miner is hashing normally before returning to owner
- Reboot: **System → Reboot → "Perform reboot"**

---

## Disassembly Notes (M50 — from source §IV)

**Control board removal:**
1. Unplug all cables
2. Remove 4 chassis bracket screws + 4 panel screws
3. Reinstall: board to bracket first → cables → bracket to chassis → fan last

**PSU removal:**
1. Remove 4 chassis screws
2. Remove copper-bar screws + fan lead
3. Unplug PSU–control comms cable **before** sliding PSU out
4. Install comms cable **first** on reassembly, then 6 copper-bar lugs with washers **parallel** to bar edges

**Hash board removal:**
1. Remove control board + front fan
2. Remove adapter + copper bars
3. Extract hash boards
4. Reinstall: correct slot alignment → adapter socket mating → copper bars (polarity + washer alignment) → control board + fan

---

## Image Reference

| # | Description | Local file |
|---|-------------|------------|
| 1 | M50 control end panel — ETH, Active LED, Reset, IPFOUND button, TF slot, Fault/Alarm indicators | [16967583225058729.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967583225058729.jpg) |
| 2 | APW12 output bus region — V+/V− silk under main lugs, 12× Phillips screws, J1 header, output caps | [16967511585427869.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967511585427869.jpg) |

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| M50 blog HTML + images | [sources/whatsminer_m50_manual_blog/index.html](../sources/whatsminer_m50_manual_blog/index.html) · [manifest.json](../sources/whatsminer_m50_manual_blog/manifest.json) |
| M30S user manual (PDF) | [sources/whatsminer_m30s_user_manual/WhatsMiner-M30S-Manual.pdf](../sources/whatsminer_m30s_user_manual/WhatsMiner-M30S-Manual.pdf) · [manifest.json](../sources/whatsminer_m30s_user_manual/manifest.json) |

> Note: M30S PDF is binary-only in this repo — not full-text searchable. Open in a PDF viewer offline; run `pdftotext` externally if grep-able text is needed.

Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m50_manual_blog whatsminer_m30s_user_manual`

**Online references:**
- M50: https://www.zeusbtc.com/blog/details/4764-whatsminer-m50-series-manual
- M30S: https://www.zeusbtc.com/manuals/user-manuals/WhatsMiner-M30S-Manual.pdf

---

## Checklist Before Starting

- [ ] Physical: all cables properly connected, copper bar polarity verified (V+ / V−)
- [ ] WhatsMinerTools installed on laptop
- [ ] MobaXterm installed (for SSH if needed)
- [ ] Laptop on same network segment as miner
- [ ] Default login credentials available
- [ ] DHCP router available OR static IP configured on miner
- [ ] All fans confirmed operational before blaming control board
