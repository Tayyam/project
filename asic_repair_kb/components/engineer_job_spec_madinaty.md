# مواصفات المهندس المطلوبة — مدينتي (Madinaty)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

> **الوظيفة:** مهندس إلكترونيات — **Hardware & Power Systems Specialist**  
> **الموقع:** مدينتي (Madinaty)  
> **طبيعة العمل:** صيانة وإعادة تأهيل شاملة للوحات إلكترونية دقيقة، وحدات طاقة متطورة، وأنظمة تحكم مدمجة (ماينرز Antminer / Whatsminer والبنية المرتبطة).

---

## المهارات المطلوبة (The Comprehensive Skill Set)

### 1) صيانة البوردات الدقيقة (Hashboard level)

- **BGA rework:** فك، تركيب، و**Reballing** للشرائح متعددة الأرجل.
- **SMD دقيق:** التعامل مع **0402** و**0201** بثبات يد ومجهر/عدسة مناسبة.
- **Signal chain tracing:** تتبع مسارات الإشارة الرقمية وتحديد **نقطة الانقطاع** منطقياً وقياسياً.

### 2) صيانة وحدات الطاقة (PSU & high voltage)

- دوائر **AC-DC** المعقدة، **PFC**، **LLC** (مفاهيم عملية على APW12 وأقرانها).
- مكونات **عالية الجهد** (مكثفات، MOSFETs) — **اختبار بأمان** وتفريغ وتسلسل عمل آمن.
- دوائر **Standby** وتحكم **المراوح** حيثما انطبقت على المنصة.

### 3) أنظمة التحكم والسوفتوير (Control & firmware)

- **Embedded Linux** على لوحات التحكم — تحديث عبر **SD** أو **Ethernet** حسب الموديل.
- مبرمجات **Microcontrollers** (مثل **PICkit**) لاستعادة أنظمة منهارة.
- **CLI / SSH** لتشخيص الحالة العامة للجهاز ولوجات النظام.

### 4) التشخيص والقياس الاحترافي (Advanced diagnosis)

- **Oscilloscope:** تحليل **Clock** وإشارات **Data** على الهاشبورد.  
  - **محاذاة مع قاعدة المعرفة:** لفحص CLK على S19/M30 (~25 MHz+) يلزم **سكوب مكتبي عرض نطاق ≥100 MHz** — انظر [tool_inventory.md](tool_inventory.md) و`js/data.js` (UNI-T UTD2102CEX+ أو ما يعادله). أجهزة فاحص مكونات منضد **لا** تغني عن ذلك لمسار CLK.
- **Thermal imaging:** عزل مكونات ساخنة بشكل غير طبيعي (كاميرا حرارية أو ملتيميتر حراري حسب توفر المعمل).

### 5) إعادة التأهيل والكفاءة الحرارية (Refurbishing & thermal)

- **Ultrasonic cleaning** لإزالة أكسدة/تآكل تحت الشرائح (مع بروتوكول شطف وجفاف — انظر [post_repair_cleaning_protocol.md](post_repair_cleaning_protocol.md)).
- **Thermal putty/gel** (مثل HY234) بتوزيع يضاهي المصنع.
- **UV solder mask** لترميم الطبقة الواقية وحماية المسارات من الرطوبة.

---

## الأدوات المتوفرة بالمعمل (كما هو مذكور في الطلب)

| فئة | المعدات |
|-----|---------|
| **Soldering & rework** | Quick 861DW، Quick 205H، PUHUI T-8280 Preheater |
| **Testing** | FNIRSI Oscilloscope، ZOYI Thermal Multimeter |
| **Processing** | Ultrasonic Cleaner، UV Curing Lamp |

**ملاحظة للمسؤول عن التوظيف:** راجع توافق **FNIRSI** مع متطلبات فحص CLK في [repair_coverage_matrix.md](repair_coverage_matrix.md)؛ قد يلزم **سكوب مكتبي ≥100 MHz** إضافي للهاشبورد دون الاعتماد على فاحص المنضد فقط.

---

## تعلم عملي موصى به

ربط المهندس بقوائم YouTube في [youtube_learning.md](youtube_learning.md) (خصوصاً **ASIC Miner repair operation** للمهارة اليدوية).

---

*وثيقة داخلية للمعرفة — تعديل حسب سياسة التوظيف الفعلية.*
