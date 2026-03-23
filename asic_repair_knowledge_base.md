# ASIC Repair Knowledge Base

## Target Models: Antminer S19 · Whatsminer M30S · Whatsminer M50

## Purpose: AI repair agent reference — follow this guide step by step

This knowledge base is split into **components** under [`asic_repair_kb/components/`](asic_repair_kb/components/). Open the section you need, or use the decision tree last.

**Offline Zeus mirrors:** HTML + images (+ M30S PDF) are stored under [`asic_repair_kb/sources/`](asic_repair_kb/sources/) and linked from each component. Regenerate with `python scripts/fetch_zeus_kb_source.py --all`.

| # | Component | Description |
|---|-----------|-------------|
| 1 | [Agent operating rules](asic_repair_kb/components/agent_rules.md) | Mandatory rules before any work |
| 2 | [Tool inventory](asic_repair_kb/components/tool_inventory.md) | Diagnosis, rework, spares, consumables |
| 3 | [FILE 1 — S19 hashboard](asic_repair_kb/components/repair_s19_hashboard.md) | Antminer S19 hash board repair |
| 4 | [FILE 2 — M30S/M31S/M32 hashboard](asic_repair_kb/components/repair_whatsminer_m30s_hashboard.md) | Whatsminer M3x hash board |
| 5 | [FILE 3 — M30/M50 troubleshooting hub](asic_repair_kb/components/repair_whatsminer_m30_m50_hub.md) | Triage, errors, common cases |
| 6 | [FILE 4 — M30/M50 test fixture](asic_repair_kb/components/repair_whatsminer_test_fixture.md) | CB4-V10, MobaXterm, SSH commands |
| 7 | [FILE 5 — S19 control board](asic_repair_kb/components/repair_s19_control_board.md) | OTP warning, IP, chains, fans |
| 8 | [FILE 6 — Whatsminer control board](asic_repair_kb/components/repair_whatsminer_control_board.md) | M50 / M30S setup, pools, firmware |
| 9 | [FILE 7 — APW12 PSU](asic_repair_kb/components/repair_apw12_psu.md) | Power supply repair and safety |
| 10 | [Reference links](asic_repair_kb/components/reference_links.md) | All Zeus / manual URLs |
| 11 | [Agent decision tree](asic_repair_kb/components/agent_decision_tree.md) | Where to start by symptom |

---

*Knowledge base compiled from Zeus Mining official repair documentation. All references verified March 2026.*
