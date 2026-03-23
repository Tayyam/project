# Knowledge in progress — جاري العمل عليها

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

These Zeus / MicroBT documents are **registered for the KB** but **not yet** turned into mirrored `sources/<slug>/` folders or component repair files. Use the **online URL** until you fetch locally.

**Next steps (when ready):**
1. Add each **slug** to `scripts/fetch_zeus_kb_source.py` (`HTML_SOURCES` / PDF list) if your repo has that script.
2. Run `python scripts/fetch_zeus_kb_source.py <slug> …` from repo root (or `--all` once slugs are registered).
3. Optionally add a `repair_*.md` component that links to `../sources/<slug>/index.html` (or PDF path) and distill procedures for the AI.

---

## Planned documents

| Document | URL | Local mirror (slug) |
|----------|-----|---------------------|
| Whatsminer Troubleshooting Guide | https://www.zeusbtc.com/articles/asic-miner-troubleshooting/1683-whatsminer-troubleshooting-and-solutions | `whatsminer_solutions` |
| S19 Control Board Card Flashing | https://www.zeusbtc.com/articles/asic-miner-troubleshooting/3833-antminer-s19-control-board-card-flashing-firmware-tutorial | `s19_control_flashing` |
| PicoBT Universal Tester Manual | https://www.zeusbtc.com/articles/information/4218-picobt-universal-miner-tester-user-manual | `picobt_universal_manual` |
| Whatsminer Control Board Repair | https://www.zeusbtc.com/articles/information/4875-whatsminer-control-board-inspection-and-repair-manual | `whatsminer_cb_repair` |
| How to Repair Whatsminer PSU | https://www.zeusbtc.com/articles/asic-miner-troubleshooting/1686-how-to-repair-whatsminer-power-supply | `whatsminer_psu_repair` |
| PSU Output Tester Tutorial | https://www.zeusbtc.com/blog/details/5731-antminer-whatsminer-power-supply-output-tester-usage-tutorial | `psu_output_tester` |
| WhatsMiner P21 Series PSU Manual (PDF) | https://www.zeusbtc.com/manuals/user-manuals/WhatsMiner-P21-Series-PSU-Manual.pdf | `whatsminer_p21_psu_manual` |

### Expected local paths (after fetch)

| Slug | Typical layout |
|------|----------------|
| `whatsminer_solutions` | `asic_repair_kb/sources/whatsminer_solutions/index.html` + `images/` |
| `s19_control_flashing` | `asic_repair_kb/sources/s19_control_flashing/index.html` + `images/` |
| `picobt_universal_manual` | `asic_repair_kb/sources/picobt_universal_manual/index.html` + `images/` |
| `whatsminer_cb_repair` | `asic_repair_kb/sources/whatsminer_cb_repair/index.html` + `images/` |
| `whatsminer_psu_repair` | `asic_repair_kb/sources/whatsminer_psu_repair/index.html` + `images/` |
| `psu_output_tester` | `asic_repair_kb/sources/psu_output_tester/index.html` + `images/` |
| `whatsminer_p21_psu_manual` | `asic_repair_kb/sources/whatsminer_p21_psu_manual/WhatsMiner-P21-Series-PSU-Manual.pdf` (PDF-only, same pattern as M30S manual) |

---

## Relation to existing FILES

| Planned slug | Likely complements (existing KB) |
|--------------|----------------------------------|
| `whatsminer_solutions` | [FILE 3 — Hub](repair_whatsminer_m30_m50_hub.md), [FILE 6](repair_whatsminer_control_board.md) |
| `s19_control_flashing` | [FILE 5 — S19 control](repair_s19_control_board.md) |
| `picobt_universal_manual` | [FILE 1 — S19 hashboard](repair_s19_hashboard.md) (PicoBT V2.2010 already referenced) |
| `whatsminer_cb_repair` | [FILE 6](repair_whatsminer_control_board.md) |
| `whatsminer_psu_repair` | [Repair coverage matrix](repair_coverage_matrix.md) — will justify **Power = true** for Whatsminer once integrated |
| `psu_output_tester` | [FILE 7 — APW12](repair_apw12_psu.md), Whatsminer PSU workflow (after mirror) |
| `whatsminer_p21_psu_manual` | Whatsminer PSU family reference (PDF) |

---

*Last updated: register slugs here first; mirror folders appear only after a successful fetch.*
