# ASIC Repair Knowledge Base — Agent Decision Tree

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

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
│   │     → If APW12 faulty → [FILE 7 — APW12](repair_apw12_psu.md)
│   │
│   ├── Low / zero hashrate
│   │     ├── S19 → [FILE 1 — S19 hashboard](repair_s19_hashboard.md) (bench test with PicoBT)
│   │     └── M30S/M50 → [FILE 2 — M30S hashboard](repair_whatsminer_m30s_hashboard.md) (calculate voltage first: 0.31V × groups)
│   │
│   ├── Cannot find IP / not booting
│   │     ├── S19 → [FILE 5 — S19 control board](repair_s19_control_board.md) (check OTP status first)
│   │     └── M30S/M50 → [FILE 6 — Whatsminer control board](repair_whatsminer_control_board.md) (check copper bar + cables first)
│   │
│   ├── Error codes on M30S/M50
│   │     → [FILE 3 — M30/M50 hub](repair_whatsminer_m30_m50_hub.md) → cross-reference error code table
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
