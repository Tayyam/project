# ASIC Repair Knowledge Base — Whatsminer M30/M50 Test Fixture (FILE 4)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Component | Whatsminer hashboard test fixture (standalone bench tool) |
| Fixture model | CB4-V10 H6OS control board |
| Compatible miners | M30S, M30S+, M31S, M32, M50, M50S+, M50S++ (air-cooled only — not hydro) |
| Family support | M20 / M30 / M50 / M60 hookup pattern identical |
| Fixture IP (fixed) | 192.168.2.22 |
| PSU for hashboard | 13 V / 31 A adjustable |
| PSU for fixture | 12 V (separate) |
| SSH user | root (no password prompt on first connect in BusyBox ash) |
| Key commands | `test-readchipid` (quick, no heatsink) · `test-hashboard` (full, heatsinks + fan required) |

**Cross-references:**
- Hashboard repair: [FILE 2 — Whatsminer M30S/M31S/M32 Hashboard](repair_whatsminer_m30s_hashboard.md)
- Troubleshooting hub: [FILE 3 — Whatsminer M30/M50 Hub](repair_whatsminer_m30_m50_hub.md)
- Control board: [FILE 6 — Whatsminer Control Board](repair_whatsminer_control_board.md)

---

## Hardware Overview

**Kit contents:**
- CB4-V10 H6OS main control board (RJ45, MicroSD, fan/sensor headers, SK Hynix flash)
- M20/M30/M50 adapter board (silk: REV:2 / CB2-V1-A)
- 22P ribbon signal cable
- 14P test fixture cable

**CB4-V10 indicators:**
- Red + green LEDs flash together → fixture ready to accept commands
- Green power LED steady → board powered
- RJ45 link/ACT LEDs → Ethernet connected

**First-use FPGA update (mandatory before first test):**
1. Download the Whatsminer SD card FPGA update package for CB4-V10
2. Write to MicroSD card (FAT32), insert into CB4-V10 slot
3. Power on fixture → wait for update sequence (~1 min) → LED pattern changes on completion
4. Remove SD card; fixture is now ready for use
5. If FPGA is NOT updated: fixture may falsely report a specific chip bad every run

---

## Tools Required

| Tool | Spec |
|------|------|
| Whatsminer test fixture | CB4-V10 H6OS + adapter + 22P + 14P cables |
| Adjustable DC PSU | 31 A / 13 V for hashboard rails |
| Ethernet cable | Direct PC ↔ fixture (no router — avoids IP conflicts) |
| Computer | With Ethernet port (or USB–Ethernet dongle) |
| Heatsinks + fan | Required for `test-hashboard` only |
| MobaXterm or any SSH client | v10.2+ recommended |

---

## Bench Setup & Power Sequence

**Cable connection order (ON — follow exactly every board swap):**
1. Connect 12 V power to test fixture
2. Set adjustable supply to 13 V / 31 A limit
3. Connect PSU +/− to hashboard (power path)
4. Connect Ethernet to fixture
5. **Last:** connect data cable (22P ribbon) between hashboard and fixture

**Disconnect order (OFF — reverse):**
1. **First:** unplug data cable (22P ribbon)
2. Remove PSU leads from hashboard
3. Remove fixture power

> **Why:** connecting data before power or removing power before data can damage level-shifter ICs on the hashboard.

---

## PC Network Configuration

The fixture has a fixed IP of **192.168.2.22**. Your PC must be on the same subnet.

**Windows (images 9–13 in local mirror):**
1. Settings → Network & Internet → Change adapter options
2. Right-click the Ethernet adapter → Properties
3. Select **Internet Protocol Version 4 (TCP/IPv4)** → Properties
4. Set manually:
   - IP: `192.168.2.236` (any free address except `.22`)
   - Subnet: `255.255.255.0`
   - Gateway: `192.168.2.1`
   - DNS: `114.114.114.114`
5. Check "Validate settings on exit" → OK

> PC does not need Internet access for the test link.

---

## SSH Access — MobaXterm Steps

1. Open MobaXterm → **Session** (red outline top-left)
2. Select **SSH**
3. Fill in:
   - Host: `192.168.2.22`
   - User: `root`
   - Port: `22`
4. Click OK → shell opens as `WhatsMiner_XXXX` (BusyBox ash)
5. `/root/` contains: `boot0_nand.fex`, `boot0_sdcard.fex`, `kernel.fex`, `env.fex`, `boot_updater`
6. Run `get_info` to confirm exact miner model string

---

## Commands

```bash
# Drive RST low (~0 V) — use when reset failures occur
echo 0 > /sys/class/gpio/gpio99/value
# or (alternate GPIO)
echo 0 > /sys/class/gpio/gpio197/value

# Drive RST high (~1.8 V)
echo 1 > /sys/class/gpio/gpio99/value
# or
echo 1 > /sys/class/gpio/gpio197/value

# Reboot fixture control board
reboot

# Chip count only — no heatsink required
test-readchipid

# Full performance test — REQUIRES both heatsinks + fan
test-hashboard
```

**Expected PASS output for `test-readchipid` (M50 VH95 example):**
```
probe chip_id: 0x1968, count: 117/117
... Chip_info / chip data len / EEPROM tag fields ...
Error_code: (empty)
PASS
set reset pin 197 to 0
```
> Note: epoch-style timestamps in captures are often unset RTC — not the actual test time.

---

## Important Notes

- `test-readchipid` — no heatsink required; fast ASIC enumeration only
- `test-hashboard` — both upper and lower heatsinks **and** a fan are mandatory or board will overheat and give false failures
- PC does not need Internet for the test link
- If using a USB–Ethernet dongle: same subnet setup applies (dongle shown in image 4 of local mirror)
- Embedded YouTube walkthrough (online only): `https://www.youtube.com/embed/7TCDMZMmSkA`

---

## Image Reference

| # | Description | Local file |
|---|-------------|------------|
| 1 | Annotated kit — CB4-V10, M20/M30/M50 adapter, 22P ribbon, 14P harness | [17222430368863295.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430368863295.jpg) |
| 2 | Powered CB4_V10 — SK Hynix flash, RJ45, ribbon, green power LED | [17222430189805372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430189805372.jpg) |
| 3 | Bench wiring — PSU reads ~14.10 V / 31 A; UNI-T meter ~12.32 V for fixture; alligator clips on hash rails | [17222430248389372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430248389372.jpg) |
| 4 | USB–Ethernet dongle hookup for PC without built-in Ethernet | [17222430111046933.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430111046933.jpg) |
| 5 | CB4_V10 PCB date 20200823 — red + green LEDs steady, RJ45 active | [17222430052995634.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430052995634.jpg) |
| 6 | MobaXterm — Session button, Saved sessions sidebar, MultiExec/Tunneling/Tools toolbar | [17301052498697813.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202410/17301052498697813.jpg) |
| 7 | MobaXterm SSH setup — IP 192.168.2.22, user root, port 22, steps 1–5 | [17222429993903516.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429993903516.jpg) |
| 8 | Open SSH shell — BusyBox ash, /root/ file listing, xauth not found note | [17222429925141401.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429925141401.jpg) |
| 9 | Windows Network & Internet settings (Chinese UI) — path to adapter settings | [17222429653262052.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429653262052.jpg) |
| 10 | Ethernet → Change adapter options — Unidentified network before manual IP | [17222429699407942.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429699407942.jpg) |
| 11 | Adapter right-click → Properties — Realtek NIC shown | [17222429753724576.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429753724576.jpg) |
| 12 | Ethernet properties — select IPv4 → Properties (Realtek USB FE path) | [17222429844302595.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429844302595.jpg) |
| 13 | Static IP form — 192.168.2.236 / 255.255.255.0 / GW 192.168.2.1 / DNS 114.114.114.114 | [17222429569221174.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429569221174.jpg) |
| 14 | SSH shell with `test-readchipid` typed at prompt | [17222429214975507.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429214975507.jpg) |
| 15 | PASS transcript — M50 VH95: 117/117 chips, Error_code empty, PASS, gpio197 reset | [17222429034401746.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429034401746.jpg) |

---

## Local Mirrors & Sources

| Source | Location |
|--------|----------|
| Tutorial HTML + images | [sources/whatsminer_m30_m50_test_fixture/index.html](../sources/whatsminer_m30_m50_test_fixture/index.html) |
| Asset manifest | [manifest.json](../sources/whatsminer_m30_m50_test_fixture/manifest.json) |
| Zeus shop product page | https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3194 |

Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m30_m50_test_fixture`

---

## Checklist Before Starting

- [ ] CB4-V10 + M30/M50 test firmware on SD; **FPGA updated** if new fixture
- [ ] PSU at **13 V / 31 A**
- [ ] **Direct** Ethernet to laptop (or USB–Ethernet dongle on **192.168.2.x** subnet)
- [ ] Static IP on PC — any address on **192.168.2.0/24** except `.22`
- [ ] MobaXterm / SSH client ready
- [ ] For `test-hashboard`: **both** heatsinks + **fan** mounted
- [ ] Power **on/off** order followed on every board swap
