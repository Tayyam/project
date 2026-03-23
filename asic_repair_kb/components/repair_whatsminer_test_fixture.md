# ASIC Repair Knowledge Base — Whatsminer M30/M50 Test Fixture (FILE 4)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 4 — Whatsminer M30/M50 Test Fixture Tutorial

**Reference:** [Tutorial on Whatsminer M30 M50 test fixture (Zeus blog)](https://www.zeusbtc.com/blog/details/5314-tutorial-on-whatsminer-m30-m50-test-fixture-to-test-hash-board-asic-chip-failure)

### Local mirror (offline)

- [sources/whatsminer_m30_m50_test_fixture/index.html](../sources/whatsminer_m30_m50_test_fixture/index.html)
- [manifest.json](../sources/whatsminer_m30_m50_test_fixture/manifest.json)
- Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m30_m50_test_fixture`

### Mirrored tutorial images (document order)

| # | Local file |
|---|------------|
| 1 | [17222430368863295.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430368863295.jpg) |
| 2 | [17222430189805372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430189805372.jpg) |
| 3 | [17222430248389372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430248389372.jpg) |
| 4 | [17222430111046933.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430111046933.jpg) |
| 5 | [17222430052995634.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430052995634.jpg) |
| 6 | [17301052498697813.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202410/17301052498697813.jpg) |
| 7 | [17222429993903516.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429993903516.jpg) |
| 8 | [17222429925141401.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429925141401.jpg) |
| 9 | [17222429653262052.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429653262052.jpg) |
| 10 | [17222429699407942.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429699407942.jpg) |
| 11 | [17222429753724576.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429753724576.jpg) |
| 12 | [17222429844302595.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429844302595.jpg) |
| 13 | [17222429569221174.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429569221174.jpg) |
| 14 | [17222429214975507.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429214975507.jpg) |
| 15 | [17222429034401746.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429034401746.jpg) |

### Test fixture specs

- Main board: **CB4-V10 H6OS** control board  
- Cables: Whatsminer **22p** ribbon signal cable + **14p** test fixture cable + **M30/M50 adapter** board  
- Product page: [Whatsminer M30 M50 test fixture (Zeus shop)](https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3194)  
- Compatible: **M30S, M30S+, M31S, M32, M50, M50S+, M50S++** (**air-cooled** — not hydro)  
- **M20 / M30 / M50 / M60** families can follow the same hookup pattern per Zeus (example in article uses **M50** board)

### Local image / screenshot callouts

Mirrored JPEGs and [index.html](../sources/whatsminer_m30_m50_test_fixture/index.html); numbers match the table above. Supplements below were distilled from a one-time vision pass — **confirm** labels and numbers on your mirror before relying on them in the field.

- **Image 1** ([17222430368863295.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430368863295.jpg)): Annotated kit — **CB4-V10 H6OS** main, **M20 / M30 / M50** adapter, **22P** ribbon, **14P** harness. Adapter silk **REV:2** / **CB2-V1-A**; main board shows **RJ45**, **MicroSD**, fan/sensor headers, and a **black heatsink** over the main SoC. *(Vision: small regulator voltages not readable at this distance.)*
- **Image 2** ([17222430189805372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430189805372.jpg)): Powered **CB4_V10** — **SK Hynix** flash, **MicroSD**, **RJ45** with green/yellow LEDs, **flat ribbon** data path, **4-pin** red/black DC input, **electrolytics** near regulators, green power LED on a daughter area. *(Disregard vision guesses tying this board to Antminer S17/T17 — Zeus tutorial context is **Whatsminer**.)*
- **Image 3** ([17222430248389372.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430248389372.jpg)): Bench photo: one bench supply reads **~14.10 V / 31.00 A** and a **UNI-T** meter **~12.32 V / 0.111 A / ~1.37 W** in-frame — **illustration only**; still set your supply per Zeus (**13 V / 31 A**). **Alligator clips** to hash rails, **ribbon** to hash data, laptop shows a terminal log. Background **BITMAIN** PSU is incidental.
- **Image 4** ([17222430111046933.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430111046933.jpg)): When the PC has **no built-in Ethernet**, the article circles a small **white RJ45 dongle** with **three status LEDs** and **red/black** DC pigtail feeding it; blue patch leads to an interface PCB with **SMD passives**. **ZEUS MINING** watermark on tutorial.
- **Image 5** ([17222430052995634.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222430052995634.jpg)): **CB4_V10** with **PCB date 20200823**, **SK hynix** flash, **ribbon** to green adapter, **red + green** LEDs steady together while **RJ45** link/ACT lit — can be **boot** or **fault**; confirm via SSH/UI per tutorial. *(Vision: simultaneous R/G may need log correlation.)*
- **Image 6** ([17301052498697813.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202410/17301052498697813.jpg)): MobaXterm shell — **Session** (red outline) opens new connections; sidebar **Saved sessions**; toolbar **MultiExec**, **Tunneling**, **Tools** (e.g. network scanner), **Start local terminal**.
- **Image 7** ([17222429993903516.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429993903516.jpg)): **Session → SSH**: steps **1→5** end with **OK**; fields **192.168.2.22**, user **root**, port **22**. Password prompt appears **after** OK in practice.
- **Image 8** ([17222429925141401.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429925141401.jpg)): Open session — MobaXterm **v10.2**, **BusyBox ash**, host **WhatsMiner_0724**, **`xauth` not found**, SSH compression off, X11 forwarding on; **`/root/`** holds **`boot0_nand.fex`**, **`boot0_sdcard.fex`**, **`kernel.fex`**, **`env.fex`**, **`boot_updater`**. Use `get_info` if you need exact miner model string.
- **Image 9** ([17222429653262052.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429653262052.jpg)): Windows **Settings → Network & Internet** (Chinese UI) — entry path toward adapter pages for static IP.
- **Image 10** ([17222429699407942.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429699407942.jpg)): **Ethernet** settings → **Change adapter options**; screenshot shows **Unidentified network / No Internet** until you assign a manual **192.168.2.x** host address.
- **Image 11** ([17222429753724576.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429753724576.jpg)): Adapter right-click → **Properties**; **Realtek** NIC; shield icon ⇒ admin action. Other menu entries include disable / diagnose / status (Chinese labels).
- **Image 12** ([17222429844302595.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429844302595.jpg)): **Ethernet properties** — select **Internet Protocol Version 4 (TCP/IPv4)** → **Properties** (shows **Realtek USB FE Family Controller** path).
- **Image 13** ([17222429569221174.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429569221174.jpg)): Example static host **IP `192.168.2.236`**, **mask `255.255.255.0`**, **gateway `192.168.2.1`**, **preferred DNS `114.114.114.114`**, **alternate DNS** blank, **validate settings on exit** checked — stay on **`192.168.2.0/24`** with any free address **other than `.22`** (the fixture).
- **Image 14** ([17222429214975507.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429214975507.jpg)): Same SSH context as image 8 with **`test-readchipid`** typed at prompt; **`xauth`**, compression, and **`/root/*.fex`** notes apply. Output not visible in still — run on live fixture.
- **Image 15** ([17222429034401746.jpg](../sources/whatsminer_m30_m50_test_fixture/images/202407/17222429034401746.jpg)): Example **PASS** transcript for **M50 VH95**: `probe chip_id: 0x1968, count: 117/117`, firmware line (compare to your screenshot — string varies by article revision, e.g. **`20230518.18.BT1`** in mirror), **`Chip_info`** / **`chip data len`** / EEPROM **`tag`** fields, **`Error_code`** empty on pass, **`PASS`**, GPIO note `set reset pin 197 to 0`. Epoch-style timestamps in captures are often **unset RTC**, not test time.

### Required tools

- Whatsminer test jig (CB4-V10)  
- Ethernet cable (**direct PC ↔ fixture**; no router — avoids IP conflicts)  
- Computer with **Ethernet** (or **USB–Ethernet adapter** — shown in tutorial photos)  
- Adjustable PSU **31 A / 13 V** for hashboard rails  
- Hash board under test  

### Step-by-step (aligned with Zeus)

**1 — PSU and cabling**

- Set adjustable supply to **31 A** limit and **13 V**.  
- Connect **12 V** power to the **test fixture**; plug in **Ethernet** to fixture.  
- Connect PSU **+ / −** to the **hash board**.  
- Last, connect **data cable** between hash board and fixture.  

**Power sequence (every board swap):**

- **ON:** fixture/hash power path first → then **data** cable last (article: power cord first, then data).  
- **OFF:** **unplug data first** → then remove power.  

**2 — Ready state**

- When **red and green** LEDs on CB4-V10 **flash together**, the fixture is ready to accept commands.  

**3 — PC IP configuration**

- Open **Network Settings** → adapter used for the fixture → **IPv4** manual address on the **same subnet** as the jig (**192.168.2.22** fixed on fixture — screenshots in local images **7–8**).  

**4 — MobaXterm SSH**

- New **Session** → **SSH** → Host **192.168.2.22**, user **root** → OK.  
- Successful shell = link OK (see tutorial images).  

**5 — Commands**

```bash
# RST low (~0 V) — reset failures
echo 0 > /sys/class/gpio/gpio99/value
# or
echo 0 > /sys/class/gpio/gpio197/value

# RST high (~1.8 V)
echo 1 > /sys/class/gpio/gpio99/value
# or
echo 1 > /sys/class/gpio/gpio197/value

# Reboot fixture control board
reboot

# Chip count only (no heatsink required)
test-readchipid

# Full performance test — heatsinks + fan mandatory
test-hashboard
```

### Important notes

- `test-readchipid` — **no** heatsink required; quick ASIC enumeration.  
- `test-hashboard` — **upper + lower** heatsinks and **fan** required or board will **overheat**.  
- **First use:** update **FPGA** on CB4-V10 via **SD card** program (same family of process as other Zeus fixture docs).  
- PC **does not** need Internet for the test link.  
- Embedded **YouTube** walkthrough on live page: `https://www.youtube.com/embed/7TCDMZMmSkA` (not stored offline).  

### Checklist before starting

- [ ] CB4-V10 + **M30/M50** test firmware on SD; **FPGA** updated if new fixture  
- [ ] PSU at **13 V / 31 A**  
- [ ] **Direct** Ethernet to laptop (or USB–Ethernet dongle)  
- [ ] Static IP on PC subnet matching **192.168.2.22**  
- [ ] MobaXterm / SSH ready  
- [ ] For `test-hashboard`: **both** heatsinks + **fan**  
- [ ] Power **on/off** order followed on every swap  
</think>


<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace