# ASIC Repair Knowledge Base — Agent Operating Rules

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## AGENT OPERATING RULES

1. Always identify the miner model AND board version BEFORE starting any diagnosis.
2. Always read the correct repair guide section for that model.
3. Follow the checklist before touching any board — confirm all tools are available.
4. **For APW12:** Discharge capacitors to < 5V BEFORE touching any internal component — verify with multimeter first.
5. **For S19 hashboard:** Always follow correct power-on/off sequence (negative first, signal cable last) — wrong sequence instantly burns R8/R9/U1/U2.
6. **For S19 control board:** Confirm OTP status before any work — wrong action locks the board permanently.
7. **For M30S hashboard:** Calculate correct input voltage = 0.31V × number of groups — do NOT use a fixed 13V without calculating.
8. Escalate to human if: board has physical burn damage on CPU/main IC, or if OTP status is unknown on S19 control board.
9. Document every measurement taken during diagnosis.
10. After any rework: board must pass PT1 then PT2, twice consecutively, before passing QC.
