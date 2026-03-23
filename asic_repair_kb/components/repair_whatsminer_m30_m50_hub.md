# ASIC Repair Knowledge Base — Whatsminer M30/M50 Troubleshooting Hub (FILE 3)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 3 — Whatsminer M30/M50 Troubleshooting Hub

**Reference:** [Legacy URL](https://www.zeusbtc.com/Support_s_l.asp?t1=whatsminer&t2=hash-board) — page canonical: [Troubleshooting Whatsminer hashboard](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/hash-board/)

### Local mirror (offline)

- [sources/whatsminer_support_hub/index.html](../sources/whatsminer_support_hub/index.html) — saved hub / listing page (`manifest.json` has **0** `/Upload/image` assets; content is mostly **navigation + links** to other Zeus articles).
- **Gemini vision:** no mirrored article images for this slug — there is nothing for `gemini_analyze_image.py --slug whatsminer_support_hub` to process. Use linked articles (e.g. FILE 2) for figure batches, or a separate text/HTML extraction workflow if you need the hub body indexed.
- Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_support_hub`
- For **chip location diagrams** and model-specific repair text, follow links from that page into the mirrored articles (e.g. FILE 2 for M30S/M31S/M32) or fetch additional URLs with `scripts/fetch_zeus_kb_source.py` after adding them to `HTML_SOURCES`.

### Saved hub page — Hash Board article index

From [whatsminer_support_hub/index.html](../sources/whatsminer_support_hub/index.html): the **Hash Board** column lists these paths (prepend `https://www.zeusbtc.com` when online). They complement [FILE 2 — M30S/M31S/M32 hashboard](repair_whatsminer_m30s_hashboard.md), which mirrors a **different** long-form guide URL.

| Hub article title | Path (`zeusbtc.com` + …) |
|-------------------|-------------------------|
| Whatsminer M20S hash board common fault repair method | `/articles/asic-miner-troubleshooting/3844-whatsminer-m20s-hash-board-common-fault-repair-method` |
| Whatsminer M20 series and M30 series hash board repair difference and contact | `/articles/asic-miner-troubleshooting/3843-whatsminer-m20-series-and-m30-series-hash-board-repair-difference-and-contact` |
| Whatsminer M30S chip report is incomplete | `/articles/asic-miner-troubleshooting/3806-whatsminer-m30s-chip-report-is-incomplete` |
| Where is the important chip of Whatsminer M21S hash board located? | `/articles/asic-miner-troubleshooting/3680-where-is-the-important-chip-of-whatsminer-m21s-hash-board-located` |
| The introduction of Whatsminer M20S hash board chip types | `/articles/asic-miner-troubleshooting/3679-the-introduction-of-whatsminer-m20s-hash-board-chip-types` |
| The guidance of repair 1950 chip series hash boards | `/articles/asic-miner-troubleshooting/3326-the-guidance-of-repair-1950-chip-series-hash-boards` |
| How to deal with Whatsminer hash rate imbalance？ | `/articles/asic-miner-troubleshooting/2291-how-to-deal-with-whatsminer-hash-rate-imbalance` |

**Sibling hub categories** (same sidebar on the saved page — use live site for full lists): [General Failure](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/general-failure/), [Control Board](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/control-board/), [Firmware](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/firmware/), [Power Supply](https://www.zeusbtc.com/asic-miner-troubleshooting/whatsminer/power-supply/).

**Saved meta description:** troubleshooting **Whatsminer M20, M20S, M21S, M30, M30S, M50** (and related) hash boards — **ASIC 0**, **incomplete chip count**, **abnormal hash rate**, etc.

**On-page search (saved HTML):** the mirror includes a form posting to Zeus **`/ArticleSearch.asp`** with hidden **`t=asic-miner-troubleshooting`** — online-only, but documents that the live hub is searchable under the troubleshooting category.

### Quick Triage Protocol
1. Read error code from miner interface — cross-reference with error code table in [FILE 2 — M30S hashboard](repair_whatsminer_m30s_hashboard.md)
2. If PSU-related error → **swap PSU first before touching hashboard** — most M30S errors are PSU
3. If hashrate imbalance across 3 boards → check thermal putty on all boards
4. If ASIC=0 on one board → isolate board and run on bench ([FILE 2](repair_whatsminer_m30s_hashboard.md) procedure)
5. If chip count incomplete → follow FILE 2 **Fault diagnosis** and **Case studies (IV)** (RST/CLK/LDO chain)

### Common Cases from Source

**M30S chip report incomplete:**
- Measure domain voltages first — locate the domain with abnormal voltage
- Use oscilloscope on CLK — M30S crystal oscillator failure affects all downstream chips

**M30S EEPROM / memory issues:**
- 3.3V supply to memory area — check if present
- Memory chip solder condition

**Whatsminer M21S important chip locations:**
- Use the **hub** link above (local or live) and open the **M21S** / hash-board articles linked from that index for diagrams

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
