# ASIC Repair Knowledge Base — Whatsminer M30/M50 Troubleshooting Hub (FILE 3)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## Scope & Quick Reference

| Field | Value |
|-------|-------|
| Purpose | Entry point / triage router for all Whatsminer M-series repairs |
| Models covered | M20, M20S, M21S, M30, M30S, M30S+, M31S, M32, M50, M50S, M50S++ |
| This file covers | Hub navigation, quick triage, and cross-file routing — not step-by-step repair |
| Detailed repair | Follow the routing table below to the correct FILE |

---

## File Routing — Go Here First

| Symptom / Task | Go to file |
|----------------|------------|
| Whatsminer hashboard repair (M30S/M31S/M32) — ASIC count, LDO, RST, CLK | [FILE 2 — M30S Hashboard](repair_whatsminer_m30s_hashboard.md) |
| Whatsminer test fixture setup (CB4-V10, SSH, `test-readchipid`) | [FILE 4 — Test Fixture](repair_whatsminer_test_fixture.md) |
| Whatsminer control board (M50/M30S) — IP, firmware, pool config, disassembly | [FILE 6 — Control Board](repair_whatsminer_control_board.md) |
| APW12 PSU repair — no output, PFC, LLC, fans | [FILE 7 — APW12 PSU](repair_apw12_psu.md) |
| Error codes 530/540/541/542 (chip read fail) | [FILE 2 — M30S Hashboard → Error Codes](repair_whatsminer_m30s_hashboard.md) |
| Error codes 236/255/268/250/257 (PSU / over-current) | [FILE 2 — M30S Hashboard → Case Studies](repair_whatsminer_m30s_hashboard.md) |
| Error code 530 (SM0 not found) | [FILE 6 — Control Board](repair_whatsminer_control_board.md) — check fan + cable |
| Hashrate imbalance across all 3 boards | [FILE 2 — M30S Hashboard → Thermal Putty](repair_whatsminer_m30s_hashboard.md) |
| ASIC count = 0 on one board | Bench isolate → [FILE 2 — Fault Diagnosis](repair_whatsminer_m30s_hashboard.md) |
| 1950-chip series boards | See hub link: `/articles/asic-miner-troubleshooting/3326-…` (online) |

---

## Quick Triage Protocol

**Always do these 3 checks before deep board-level work:**

1. **Record the error code** from miner web interface (Status → CGMiner Status / Miner Log) before any power-off
2. **Check PSU first** — errors 235/236/250/255/257/258/268 mean PSU fault; swap PSU before touching hashboard
3. **Check all 4 fans** — a seized fan triggers thermal shutdown and may mimic hashboard failure

**Decision by symptom:**

```
EffectiveChips = 0 on ALL boards  →  PSU or power delivery → swap PSU (errors 235/255/257 confirm)
EffectiveChips = 0 on ONE board   →  Isolate board → bench test (FILE 2 + FILE 4)
Chip count incomplete (e.g. 104/105)  →  RST / CLK / LDO chain → FILE 2 Case Studies
Hashrate imbalance (all 3 boards low)  →  Thermal putty dried → replace HY234 on all boards
Error 530 (slot not found)  →  Fan seizure or data cable loose → FILE 6
Error 542 / RST fail  →  Level shifter / RST chain → FILE 2 Case 1
Error 202 in daily log  →  PSU voltage fault → replace PSU
```

---

## Common Cases from Hub Source

**M30S chip report incomplete:**
- Measure domain voltages first — locate the domain with abnormal voltage
- Use oscilloscope on CLK — M30S crystal oscillator failure affects all downstream chips
- Reference: FILE 2 §III block diagram + Case 4

**M30S EEPROM / memory issues:**
- Check 3.3 V supply to memory area (UP36 / UP37 region)
- Check EEPROM (24C02RP) solder condition
- Reference: FILE 2 image 10–11 callouts

**Whatsminer hashrate imbalance:**
- Primary cause: dried HY234 thermal putty on one or more boards
- Secondary: uneven fan cooling (check all 4 fans individually)
- Reference: FILE 2 — M30 specific thermal putty note

**1950 chip series hash boards:**
- Separate repair guide: `https://www.zeusbtc.com/articles/asic-miner-troubleshooting/3326-the-guidance-of-repair-1950-chip-series-hash-boards`

---

## Hub Article Index (Zeus zeusbtc.com — Hash Board column)

| Article title | Path (prepend `https://www.zeusbtc.com`) |
|---------------|------------------------------------------|
| M20S hash board common fault repair method | `/articles/asic-miner-troubleshooting/3844-whatsminer-m20s-hash-board-common-fault-repair-method` |
| M20 vs M30 series hash board repair difference | `/articles/asic-miner-troubleshooting/3843-whatsminer-m20-series-and-m30-series-hash-board-repair-difference-and-contact` |
| M30S chip report is incomplete | `/articles/asic-miner-troubleshooting/3806-whatsminer-m30s-chip-report-is-incomplete` |
| M21S important chip locations | `/articles/asic-miner-troubleshooting/3680-where-is-the-important-chip-of-whatsminer-m21s-hash-board-located` |
| M20S hash board chip types introduction | `/articles/asic-miner-troubleshooting/3679-the-introduction-of-whatsminer-m20s-hash-board-chip-types` |
| 1950 chip series hash board repair guidance | `/articles/asic-miner-troubleshooting/3326-the-guidance-of-repair-1950-chip-series-hash-boards` |
| Whatsminer hash rate imbalance | `/articles/asic-miner-troubleshooting/2291-how-to-deal-with-whatsminer-hash-rate-imbalance` |

**Sibling hub categories (live site):**
[General Failure](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/general-failure/) ·
[Control Board](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/control-board/) ·
[Firmware](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/firmware/) ·
[Power Supply](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/power-supply/)

---

## Local Mirror & Sources

| Source | Location |
|--------|----------|
| Hub HTML (navigation + links, no article images) | [sources/whatsminer_support_hub/index.html](../sources/whatsminer_support_hub/index.html) |
| Asset manifest | [manifest.json](../sources/whatsminer_support_hub/manifest.json) |

> Note: the hub mirror has 0 `/Upload/image` assets — it is navigation only. For figure-rich content, use the linked FILEs above or fetch additional Zeus articles via `scripts/fetch_zeus_kb_source.py`.

Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_support_hub`

---

## Checklist Before Starting

- [ ] Error code recorded from web interface before any power-off
- [ ] (اختياري) كاميرا حرارية للنقاط الساخنة — أو اعتماد قياس جهد/تيار بـ UT136C+ وأطراف Zeus
- [ ] Spare APW12 (correct version) available for PSU swap test
- [ ] Data cables (40× available) for quick cable swap
- [ ] HY234 Thermal Putty available for putty replacement
- [ ] All 4 fans verified operational
