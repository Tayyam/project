# بروتوكول التنظيف بعد الصيانة

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md) · [tool_inventory](tool_inventory.md) · `js/data.js`

---

## الهاشبورد

1. **Ultrasonic** — سائل تنظيف إلكترونيات (أو مقطر + منظف متعادل)، ثم **شطف IPA 99%** (غمر أو بخاخ). مرتبط: Mechanic 500/S880 في المستورد + سائل الحمام في الخطة الربعية.
2. **HY234** (أو SPG-30B حسب الدليل) — معجون جل للفراغات بين الشريحة والمبرد؛ ليس بديله معجون مشتت عادي فقط.
3. **UV solder mask** — تغطية مسارات/خدوش بعد الشغل؛ تصليب بكشاف UV (`localSupplies`).
4. **فرش ESD** — فلاكس بين أرجل الـ ASIC (`localSupplies`).
5. **مسامير مبردات ستانلس** — اختياري إذا المسامير مصدية.

---

## الجهاز كامل

- **F10/F8** — أنفاق هواء + مراوح؛ تنظيف جيد يكفي؛ لا تبديل مجموعة مراوح كبند روتيني.
- **منظف ألومنيوم** — شاسيه S19.
- **بخاخ تلامسات جاف** — داتا/كنترول.
- **سيليكون 704** — إغلاق APW12 بعد الفتح → [FILE 7](repair_apw12_psu.md).

---

## عميق: Ultrasonic → IPA → تجفيف

- حمام: **no-residue** (Mechanic / فئة Elma / مقطر + منظف متعادل).
- شطف: **IPA 99%** فقط — ليس 70%.
- تجفيف: **~60–80 °C، ≥ ~30 دقيقة** قبل التشغيل (فرن العتبة).

---

## تطابق سريع مع المشتريات

| بند | أين |
|-----|-----|
| 704 | `localSupplies` |
| IPA بخاخ + 500ml | `localConsumablesQuarterly` + `localSupplies` |
| Kimwipes | `localSupplies` |
| كشاف UV | `localSupplies` |

---

## مراجع

- [repair_s19_hashboard.md](repair_s19_hashboard.md) — SPG-30B، IPA، غسل اللوحة  
- [repair_apw12_psu.md](repair_apw12_psu.md) — 704، 2500  
- [youtube_learning.md](youtube_learning.md)

---

*حرارة ووقت تجفيف آمنان للوحة.*
