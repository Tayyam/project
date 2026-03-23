# ASIC Repair Knowledge Base — Tool Inventory

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

**Source of truth for prices/purchase plan:** `js/data.js`

---

## Tool Inventory (Short + Clear)

**Legend:** ✅ عندي | ❌ مش عندي

### 1) أجهزة التشخيص

| العنصر | الحالة |
|---|---|
| PicoBT Universal Tester + ملفات الاختبار | ✅ |
| APW12 Bench PSU (1215 مطابق) | ✅ |
| ZOYI ZT-R01 (حراري + ملتيميتر) | ✅ |
| FNIRSI DSO-TC3 (Tester فقط) | ✅ |
| Oscilloscope مكتبي ≥ 100 MHz | ❌ |
| Sugon 3005D (دوائر كنترول فقط) | ✅ |
| USB to TTL + Dupont | ✅ |

### 2) معدات اللحام وإعادة العمل

| العنصر | الحالة |
|---|---|
| Quick 861DW هواء ساخن | ✅ |
| PUHUI T-8280 IR Preheater | ✅ |
| Quick 205H + Tips | ✅ |
| Andonstar AD207 Microscope | ✅ |
| Ultrasonic Cleaner | ✅ |

### 3) تنظيم البنش والسلامة

| العنصر | الحالة |
|---|---|
| علب ESD لتخزين الشرائح | ❌ |
| زجاجة ضغط IPA | ❌ |
| حقن فارغة بسن معدني | ❌ |
| Silicon heat mat | ❌ |
| مشابك تنظيم الكابلات | ❌ |
| صناديق فرز ملونة (WIP/Done) | ❌ |
| 4 مراوح + Duct للتبريد الإجباري | ❌ |
| لمبة 100W سيري أمان APW12 | ❌ |
| مقاومة تفريغ 25Ω/100W | ✅ |

### 4) مواد ومستهلكات

| العنصر | الحالة |
|---|---|
| Flux Amtech + Paste Mechanic 183°C | ✅ |
| Stencils + منصة Reball | ✅ |
| HY234 Thermal Putty | ✅ |
| GD900 | ✅ |
| IPA 99% + Kapton + Aluminum tape + Wick + Copper sponge | ✅ |
| UV Mask (Mechanic UVH900-LY) | ✅ |
| UV Curing Lamp | ❌ |
| Board wash | ❌ |
| Contact cleaner | ❌ |
| Brass wool cup | ❌ |
| Desoldering pump | ❌ |
| ESD cleaning brushes | ❌ |
| Lint-free wipes | ❌ |
| Lead-free solder wire (good brand) | ❌ |
| Jumper wire 0.1mm | ✅ |

### 5) مخزون قطع الغيار

| العنصر | الحالة |
|---|---|
| شرائح ASIC (BM1398 / KF1922) | ✅ |
| LDO/PMIC + MOSFET/PWM + Data cables + AWG6 wiring | ✅ |
| طقم مقاومات 0402 | ❌ |
| طقم مكثفات 0402 | ❌ |
| BGA balls 0.4mm | ❌ |
| وصلة APW12 IIC/EN | ❌ |
| MicroSD صناعي (Recovery) | ❌ |
| أكياس ESD للتسليم | ❌ |

### 6) السوفتوير

| العنصر | الحالة |
|---|---|
| MobaXterm / WhatsMinerTools / Putty | ✅ |
| MPLAB IPE + PICkit Drivers | ❌ |

---

## أهم النواقص الآن (Priority)

1. ❌ Oscilloscope ≥ 100 MHz  
2. ❌ 4× Fans + Duct (أو shell تبريد مكافئ)  
3. ❌ APW12 safety: 100W bulb in series  
4. ❌ MPLAB IPE + PICkit setup  
5. ❌ 0402 kits + BGA balls + IIC/EN jig

---

إذا استلمت أي بند من خطة الشراء (`js/data.js`)، بدّل حالته مباشرة من ❌ إلى ✅ هنا.
