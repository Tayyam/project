# ASIC Repair Knowledge Base — Whatsminer Control Board M50 / M30S (FILE 6)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 6 — Whatsminer Control Board (M50 / M30S)

**References:**
- M50: [Whatsminer M50 series manual (Zeus blog)](https://www.zeusbtc.com/blog/details/4764-whatsminer-m50-series-manual)
- M30S: [WhatsMiner-M30S-Manual.pdf](https://www.zeusbtc.com/manuals/user-manuals/WhatsMiner-M30S-Manual.pdf)

### Local mirrors (offline)

| Source | Location |
|--------|----------|
| M50 blog (HTML + images) | [whatsminer_m50_manual_blog/index.html](../sources/whatsminer_m50_manual_blog/index.html) · [manifest.json](../sources/whatsminer_m50_manual_blog/manifest.json) |
| M30S user manual (PDF) | [WhatsMiner-M30S-Manual.pdf](../sources/whatsminer_m30s_user_manual/WhatsMiner-M30S-Manual.pdf) · [manifest.json](../sources/whatsminer_m30s_user_manual/manifest.json) |

Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m50_manual_blog whatsminer_m30s_user_manual`

### Mirrored M50 blog images (document order)

| # | Local file |
|---|------------|
| 1 | [16967583225058729.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967583225058729.jpg) |
| 2 | [16967511585427869.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967511585427869.jpg) |

### Local figure callouts (M50 blog mirror)

- **Image 1** ([16967583225058729.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967583225058729.jpg)): control end panel — **ETH**, **Active** (green), **Reset**, **IP Found** (same control used for **>5 s** IP broadcast), **TF** (microSD) slot, **Fault / Alarm** indicators; matches the **50 s** boot / LED checklist in the article text. Chassis side shows **Whatsminer M50** branding; integrated PSU uses a **C19**-style high-current inlet; **dual fans** (front + rear) for lengthwise airflow; fan harnesses use keyed connectors (yellow/black leads visible). *(Vision supplement — verify on hardware: barcode/SN not legible in mirror photo.)*
- **Image 2** ([16967511585427869.jpg](../sources/whatsminer_m50_manual_blog/images/202310/16967511585427869.jpg)): **APW12** output bus region — PCB silk **V+** / **V-** under the main lugs; cross-check **hashboard copper bar** orientation against these marks **before** torqueing hardware (wrong polarity → damage). Photo also shows **12× Phillips** screws on the DC interface, a **white flat cable** routed between busbars, large **output electrolytics** behind the bars, and a small pin header marked **`J1`** (or similar) upper-left — confirm refdes on your unit. *(Vision supplement: rail voltage label not readable in this crop — use spec sheet / DMM.)*

### M50 series — specs (§I, saved `index.html`)

| Model | Hashrate (TH) | Efficiency (J/TH) | Power on wall (W) |
|-------|---------------|-------------------|---------------------|
| M50 | 112 | 28 | 3136 |
| M50S | 128 | 26 | 3328 |
| M50S+ | 138 | 24 | 3312 |
| M50S++ | 140–144 | 22 | 3080 |

### Extra UI / ops notes (saved M50 blog HTML)

- **Static IP path (LuCI-style):** log in at the current DHCP IP → **Configuration** → **Interfaces** → **Edit** → set protocol to **static address** and fill fields → **Save** → open the **new** IP in the browser (staying on the old URL may show endless loading).
- **After power-on:** the miner may run an automatic **frequency search for ~15 minutes** before settling into normal mining — do not assume fault during that window.
- **Cooling:** article recommends ambient **below ~30 °C**; if the exhaust is very hot and fans exceed **~6100 rpm**, expect **down-clocking / lower power** — distinguish from hashboard defects.
- **§IV Disassembly (outline):** **Control board** — unplug all cables, remove **4** chassis bracket screws + **4** panel screws; reinstall in reverse (board to bracket first, then cables, then bracket to chassis, fan last). **PSU** — **4** chassis screws, copper-bar screws, fan lead; unplug **PSU–control** comms cable before sliding PSU out; install comms cable first on reassembly, then **6** copper-bar lugs with washers **parallel** to bar edges. **Hash board** — remove control board + front fan, adapter + copper bars, then extract boards; reinstall with correct **slot alignment**, adapter socket mating, then copper bars (polarity + washer alignment), then control + fan.

### M30S PDF — offline limitation

Deep dashboard steps (**pools**, **NTP**, **static IP §5.3**, etc.) live in [WhatsMiner-M30S-Manual.pdf](../sources/whatsminer_m30s_user_manual/WhatsMiner-M30S-Manual.pdf). This knowledge base stores the **binary PDF only** — it is **not** full-text searchable inside the repo. When offline, open the file in a PDF viewer; if you need grep-able text locally, run **`pdftotext`** (or similar) on your machine and keep the output outside the KB if desired.

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
