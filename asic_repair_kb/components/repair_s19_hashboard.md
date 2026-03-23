# ASIC Repair Knowledge Base — Antminer S19 Hashboard (FILE 1)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 1 — Antminer S19 Hashboard

**Reference:** [Antminer S19 Hash Board Repair Guide (Zeus)](https://www.zeusbtc.com/manuals/Antminer-S19-Hash-Board-Repair-Guide.asp)

### Local mirror (offline)

- Saved HTML (image `src` rewritten to `./images/…` for local viewing): [sources/s19_hash_guide/index.html](../sources/s19_hash_guide/index.html)
- Asset manifest (order, URLs, local paths): [sources/s19_hash_guide/manifest.json](../sources/s19_hash_guide/manifest.json)
- Regenerate: `python scripts/fetch_zeus_kb_source.py s19_hash_guide` from repo root ([`scripts/fetch_zeus_kb_source.py`](../../scripts/fetch_zeus_kb_source.py))
- Flat image index (markdown): run `python scripts/emit_image_tables.py s19_hash_guide`

### Vision model supplements (hashboard and earlier figures)

Document-order images **1–40** and **49** from the same Zeus mirror (excludes §VI–§VII control figures, which live in [FILE 5](repair_s19_control_board.md)). **Verify** refdes and voltages on hardware.

**Document image 1** ([16280669255318281.JPG](../sources/s19_hash_guide/images/202108/16280669255318281.JPG)):
- نوع المعالج المستهدف: Xilinx Zynq 7007.
- الوظيفة الأساسية: استعادة ذاكرة الـ NAND (NAND recovery).
- وسيلة التنفيذ: عبر بطاقة الذاكرة الخارجية (SD card).
- التوافقية الحصرية: مخصص لإصدارات الأجهزة التي تحمل وسم "zhiju".
- كود التعريف البرمجي المرفق: 0xB031.
- نوع الملف: أرشيف مضغوط (Compressed archive).

**Document image 2** ([16280669332283857.JPG](../sources/s19_hash_guide/images/202108/16280669332283857.JPG)):
- تحتوي اللوحة على مؤشري LED للحالة (أخضر وأحمر) مثبتين عمودياً تحت التسمية D2.
- يوجد منفذ بطاقة ذاكرة (Card Slot) من نوع MicroSD/TF مخصص لتحديث البرامج الثابتة (Firmware).
- يتوفر منفذ شبكة RJ45 مزود بمصادر ضوء LED مدمجة لبيان حالة الاتصال والنشاط.
- يوجد زر ضاغط (Push Button) يحمل الرمز S2 يقع بين مؤشرات الحالة ومنفذ الشبكة.
- اللوحة تحتوي على نقاط توصيل JTAG تحت الرمز J10 مكونة من صفين من الثقوب (2 JTAG).
- يوجد موصل مخصص للشاشة تحت التسمية J8 LCD على يسار اللوحة.
- تظهر المقاومات السطحية R122، R123، R124، وR125 في منطقة دوائر الإشارة بالقرب من JTAG.
- المكثف C130 يقع في الجزء العلوي بالقرب من مسار مؤشرات LED.

**Document image 3** ([16280669718083128.JPG](../sources/s19_hash_guide/images/202108/16280669718083128.JPG)):
- يتوافق ملف البرامج هذا مع رقاقات التعدين من طراز BM1398 (المستخدمة غالباً في سلسلة Antminer S19).
- يحتوي المجلد على ملف `single_board_test` بحجم 228 KB وهو المسؤول عن تنفيذ اختبار اللوحة الواحدة (Single Board Test).
- يوجد ملفات تهيئة بصيغة INI مخصصة للموديل NBP1901 بإصدارين: `PT1` و `PT2`.
- يعتمد النظام على ملف النواة `uImage` بحجم 4,266 KB لتحميل نظام التشغيل المصغر الخاص بالفحص.
- يتوفر ملف `devicetree.dtb` بحجم 11 KB لتعريف المكونات الصلبة (Hardware) لنظام التشغيل.
- يُستخدم ملف `uramdisk.image` المضغوط (10,258 KB) كقرص تخزين مؤقت في الذاكرة العشوائية أثناء عملية الفحص.
- يحتوي المجلد على ملف `submit_result` لإرسال أو حفظ نتائج الاختبار بعد الانتهاء.
- توجد مجلدات مخصصة لحفظ النتائج (`Result`) وأنماط الفحص للرقاقة (`BM1398-pattern`).

**Document image 4** ([16280670439942976.JPG](../sources/s19_hash_guide/images/202108/16280670439942976.JPG)):
- التوجيه باللون الأحمر يشير إلى ضرورة إعادة تسمية الملف `Config.ini-NBS1902-PT2` ليصبح الاسم الجديد هو `Config.ini`.
- المجلد `BM1398-pattern` مخصص لاختبارات رقاقات Bitmain من طراز BM1398 (الموجودة في أجهزة مثل S19).
- يتضمن الدليل ملف `devicetree.dtb` بحجم 11 KB وتاريخ تعديله 2020/2/10.
- حجم ملف النواة `uImage` هو 4,266 KB.
- ملف النظام `uramdisk.image` هو ملف مضغوط (WinRAR) بحجم 10,258 KB.
- الملف المسؤول عن تنفيذ اختبار اللوحة المنفردة هو `single_board_test` وحجمه 162 KB.
- توجد نسختان من ملفات الإعداد المسبق: `NBS1902-PT1` و `NBS1902-PT2` وكلاهما بحجم 3 KB.
- المجلد `Result` مخصص لتخزين نتائج الاختبارات التي يتم إنتاجها بعد عملية الفحص.

**Document image 5** ([16280670989112547.JPG](../sources/s19_hash_guide/images/202108/16280670989112547.JPG)):
- البرنامج مرتبط باختبار رقاقات BM1398 (المستخدمة في سلسلة Antminer S19).
- الملف المستهدف بالتعديل هو Config.ini بحجم 3 KB.
- تظهر نافذة تحذير "重命名" (إعادة تسمية) باللغة الصينية تشير إلى خطر تغيير امتداد الملف.
- الزر "是(Y)" (نعم) هو الخيار المحدد لتأكيد عملية تغيير الاسم.
- المجلد يحتوي على ملفات الإقلاع الأساسية: uImage (4,266 KB) و devicetree.dtb (11 KB).
- يوجد ملف إعدادات بديل أو احتياطي باسم Config.ini-NBS1902-PT1.
- ملف uramdisk.image محفوظ كأرشيف WinRAR بحجم 10,258 KB.
- التواريخ المسجلة للمجلدات والملفات تعود لشهر أبريل 2020.
- يتضمن الدليل ملفات تنفيذية للاختبار مثل single_board_test و submit_result.

**Document image 6** ([16280671263690793.JPG](../sources/s19_hash_guide/images/202108/16280671263690793.JPG)):
- يتضمن النظام مجلد أنماط خاص بشرائح ASIC من طراز BM1398 (مرتبط عادةً بسلسلة Antminer S17/T17).
- تتبع ملفات التهيئة تسمية تسلسلية مثل Config.ini-NBS1902-PT1 و Config.ini-NBS1902-PT2.
- يعتمد تشغيل واجهة الفحص على ملفات الإقلاع: uImage و devicetree.dtb و uramdisk.image.
- يوجد ملف تنفيذي أو نصي مخصص لفحص اللوحة المنفردة يسمى single_board_test.
- يشير التنبيه في الصورة إلى وجود تضارب في الأسماء عند محاولة إعادة تسمية الملف Config.ini-NBS1902-PT2.
- يتم تخزين نتائج الفحص في مجلد مخصص يسمى Result، مع وجود ملف يسمى submit_result لإرسال التقارير.
- الخيار المحدد باللون الأحمر في مربع الحوار هو "نعم" (是(Y)) للموافقة على تغيير الاسم إلى Config (2).ini.

**Document image 7** ([16280671577488218.JPG](../sources/s19_hash_guide/images/202108/16280671577488218.JPG)):
- البرنامج مخصص للتعامل مع رقاقات BM1398 (المستخدمة في سلسلة Antminer S19).
- التوجيه البرمجي باللون الأحمر ينص على: "حذف ملف Config الأصلي" (删除原有的Config文件).
- الملف المختار حالياً هو `Config` وحجمه 3 KB.
- يوجد ملف إعدادات بديل أو احتياطي باسم `Config.ini-NBS1902-PT1`.
- يحتوي المجلد على ملف `single_board_test` المسؤول عن تشغيل عملية فحص اللوحة المنفردة.
- يعتمد النظام على بنية ملفات إقلاع Linux تشمل `uImage` و `devicetree.dtb` و `uramdisk.image`.
- المجلد `BM1398-pattern` يحتوي على أنماط الإشارة اللازمة لفحص وظائف الرقاقات.
- ملف `submit_result` مخصص لتصدير أو رفع تقارير نتائج الفحص بعد الانتهاء.
- المجلد `Result` هو الوجهة التي تُخزن فيها تقارير الاختبارات السابقة.

**Document image 8** ([16280672139981566.JPG](../sources/s19_hash_guide/images/202108/16280672139981566.JPG)):
- الملفات مخصصة لاختبار لوحات تعدين تستخدم شرائح من طراز BM1398 (سلسلة Antminer S19).
- يتطلب التشغيل الصحيح إعادة تسمية ملف الإعدادات من Config (2) إلى الاسم الصريح Config.
- حجم ملف Config الأساسي يبلغ 3 KB.
- الملف المسؤول عن تعريف شجرة الأجهزة هو devicetree.dtb بحجم 11 KB.
- توجد أداة مخصصة لاختبار اللوحة المنفردة تسمى single_board_test بحجم 162 KB.
- ملف صورة النظام الأساسي هو uImage وحجمه 4,266 KB.
- ملف القرص الذاكري هو uramdisk.image وحجمه 10,258 KB.
- يتضمن الدليل ملفاً باسم Config.ini-NBS1902-PT1، مما يشير إلى توافق مع إصدار أو نموذج فحص محدد (PT1).
- توجد مجلدات منظمة لنتائج الفحص (Result) وأنماط الاختبار (BM1398-pattern).

**Document image 9** ([16280672448823607.JPG](../sources/s19_hash_guide/images/202108/16280672448823607.JPG)):
- البرنامج مصمم للتعامل مع شرائح ASIC من طراز BM1398 (مجلد BM1398-pattern).
- الملف الأساسي لتشغيل فحص اللوحة المنفردة هو `single_board_test` وحجمه 162 KB.
- يعتمد تشغيل واجهة الفحص على ملفات نظام Linux الأساسية: `uImage` (بوزن 4,266 KB) و `uramdisk.image` (بوزن 10,258 KB).
- يوجد ملف تعريف العتاد الصلب `devicetree.dtb` بحجم 11 KB اللازم لربط البرمجيات بالمكونات الفيزيائية.
- يتضمن النظام ملف إعدادات مخصص تحت المسمى `Config.ini-NBS1902-PT1`.
- تُخزن مخرجات وتقارير الفحص الفني في مجلد يسمى `Result`.
- آخر تحديث لملف اختبار اللوحة (`single_board_test`) تم بتاريخ 2020/04/22.
- العبارة الصينية باللون الأحمر "制作完成" تشير إلى "اكتمل الإنشاء" أو "تم التصنيع بنجاح"، وهي رسالة تظهر عند الانتهاء من إعداد بطاقة SD الخاصة بالاختبار.

**Document image 10** ([16280673436987379.jpg](../sources/s19_hash_guide/images/202108/16280673436987379.jpg)):
- مسار تحويل الجهد الأول في جهة اليسار يبدأ من 1.8V input وينتج 0.8V output.
- توجد مرحلة تنظيم جهد تستقبل 19V input وتخرج 1.8V output.
- النقطة المشار إليها في أقصى اليمين تستقبل جهداً قدره 13.64 (يُفترض فولت) لإنتاج 1.8V output.
- تظهر الرموز التعريفية للمكونات (Designators) على الحرير المطبوع للوحة مثل U101، U102، U103، U105، وU106.
- التصميم يعتمد على وحدات تنظيم جهد متكررة موزعة بجانب مناطق تثبيت رقاقات التعدين (Hash Chips).
- تُستخدم الوحدات المحددة باللون الأحمر كنقاط فحص أساسية (Test Points) لتتبع أعطال الطاقة في دوائر LDO أو Buck Converters.

**Document image 11** ([16280673851292066.JPG](../sources/s19_hash_guide/images/202108/16280673851292066.JPG)):
- المسمى التعريفي المطبوع على اللوحة هو BITMAIN 38X2_HASHBOARD_V1_2.
- تتكون اللوحة من 38 مجموعة مرقمة (من 1 إلى 38)، كل مجموعة تحتوي على شريحتين، مما يجعل الإجمالي 76 شريحة ASIC.
- المكثفات الكيميائية الموجودة على يسار اللوحة (مثل C49، C50، C51) تحمل المواصفات الفنية 330uF بجهد 30V.
- يظهر في الجزء المكبر أسفل اليسار المكون U9 كمنظم جهد ضمن دائرة تيار بجانب المحث والمكثف C55.
- توجد نقاط فحص إشارة متكررة بجانب المجموعات تحمل الرموز CLK، RI، CO، BO، RST.
- الترقيم التسلسلي للمجموعات يبدأ من 1 في الأعلى وينتهي عند 38 في الصف السفلي الأيسر.
- تحتوي اللوحة على موصلات واجهة (Interface Connectors) موزعة على الحواف مثل J155 و J154 و J156.
- التصميم يعتمد على توزيع شرائح ASIC في أربعة صفوف أفقية رئيسية.

**Document image 12** ([16280675029636732.jpg](../sources/s19_hash_guide/images/202108/16280675029636732.jpg)):
- **الشركة المصنعة والموديل:** اللوحة من إنتاج شركة BITMAIN وتحمل الرمز التعريفي 38X2_HASHBOARD_V1_2 المطبوع على يسار اللوحة.
- **عدد الرقائق:** تحتوي اللوحة على 76 رقاقة ASIC، مرقمة باللون الأحمر من رقم 1 إلى رقم 76.
- **توزيع الرقائق:** الرقائق موزعة على 4 صفوف رئيسية؛ الصفان العلويان يحتويان على الرقائق (1-18)، الصفان التاليان (19-38)، ثم (39-58)، والصفان السفليان (59-76).
- **مسار الإشارة:** الترقيم يوضح مسار تسلسل الإشارات (مثل إشارات CLK, RI, BO, CO, RST) حيث يبدأ من الرقاقة رقم 1 وينتهي عند الرقاقة رقم 76.
- **تسميات المكونات (Silk Screen):** تظهر تسميات المكونات بوضوح بجانب كل رقاقة (مثل U116 فوق الرقاقة 1، U117 فوق الرقاقة 2، U123 فوق الرقاقة 38).
- **المكثفات الكيميائية:** توجد 5 مكثفات كيميائية كبيرة على الجانب الأيسر للوحة (مثل C30، C32، C49، C50) بجهد 30V وسعة 330uF.
- **نقاط الاختبار:** تظهر نقاط اختبار صغيرة (Test Points) مخصصة لكل رقاقة لقياس الجهد (مثل 0.8V أو 1.8V) ونبضات البيانات، وتقع أسفل كل رقاقة مباشرة.
- **منطقة التحكم:** توجد دائرة التحكم والتعريف (EEPROM/PIC) في الزاوية اليسرى السفلية بالقرب من المكونات U5 و U9.

**Document image 13** ([16280675329455458.jpg](../sources/s19_hash_guide/images/202108/16280675329455458.jpg)):
- اللوحة تحتوي على إجمالي 76 شريحة ASIC، كل شريحة مغطاة بمبرد (Heatsink) منفصل.
- الترقيم التسلسلي الموضح باللون الأحمر يبدأ من الرقم 1 في أعلى اليمين وينتهي بالرقم 76 في أسفل اليمين.
- تتبع الرقائق نمط ترقيم زوجي عمودي (مثلاً 1 فوق 2، ثم 4 فوق 3) يتحرك من اليمين إلى اليسار في أربعة قطاعات أفقية رئيسية.
- يوجد كود مطبوع على اللوحة في الجزء العلوي الأيمن: TEAM E120330 و 10001189.
- اللوحة تحمل علامة التصنيف 94V-0، مما يشير إلى معايير السلامة من الحرائق لمادة PCB.
- تظهر رموز لمكونات أو نقاط فحص في الزاوية السفلية اليمنى تحمل التسميات U148 و U149.
- يوجد مبرد إضافي أكبر حجماً يقع على الحافة اليمنى الوسطى، وهو غير مدرج ضمن الترقيم التسلسلي لرقائق الهاش (غالباً لمنظمات الجهد LDO أو وحدة الطاقة).

**Document image 14** ([16280675609637282.JPG](../sources/s19_hash_guide/images/202108/16280675609637282.JPG)):
- الرمز المرجعي للمكون المشار إليه بالسهم الأحمر هو U9.
- المكون L1 عبارة عن محث (Inductor) كبير يمثل جزءاً أساسياً من دائرة تحويل الطاقة (Buck Converter).
- المكونات D4 و D5 هي ثنائيات (Diodes) مثبتة بالقرب من خرج دائرة الطاقة.
- يوجد رمز تحذير من الشحنات الاستاتيكية (ESD) في أعلى لوحة الدائرة المطبوعة.
- المكون D3 يقع في أقصى اليسار مع وجود علامة القطبية الموجبة (+) المطبوعة على اللوحة.
- المكونات C1314 و C1313 عبارة عن مكثفات سيراميكية (MLCC) ذات حجم كبير نسبياً مقارنة ببقية المكثفات.
- توجد شبكة من المقاومات (R50، R51، R52، R53، R54، R55) والمكثفات الصغيرة حول U9 مخصصة لضبط التغذية المرتفعة (Feedback) والتعويض (Compensation).

**Document image 15** ([16280676018461882.JPG](../sources/s19_hash_guide/images/202108/16280676018461882.JPG)):
- طراز مزود الطاقة (PSU) هو APW12 وهو من النوع القابل للتعديل (Adjustable).
- يخرج مزود الطاقة جهد DC يتراوح ما بين 12V إلى 15V لتغذية لوحات الهاش.
- يتم تزويد لوحة التحكم (Control Board) بجهد 12V من مزود الطاقة.
- يعتمد التواصل بين مزود الطاقة ولوحة التحكم على بروتوكول IIC وخط التمكين EN.
- الربط بين لوحة التحكم ولوحات الهاش يتضمن خطوط 3V3 وخطوط الإشارة (signal).
- النظام يحتوي على 3 لوحات هاش (Hash Boards) تستقبل الطاقة مباشرة من مزود الطاقة.
- لوحة التحكم تدير وتتصل بـ 4 مراوح تبريد (Fans).

**Document image 16** ([16280677076156400.jpg](../sources/s19_hash_guide/images/202108/16280677076156400.jpg)):
- *(No structured facts parsed.)*

**Document image 17** ([16280677762706693.jpg](../sources/s19_hash_guide/images/202108/16280677762706693.jpg)):
- نطاق جهد الدخل الرئيسي (VDD_IN) المسموح به يتراوح ما بين 12V إلى 15.6V.
- جهد المخرج النهائي للدائرة يحمل التسمية التقنية VDD_14V.
- يتم التحكم في تشغيل الدائرة عبر إشارة منطقية تسمى PIC_EN تمر عبر المقاومة R45 (4.7K).
- تعتمد مرحلة القدرة على أربعة ترانزستورات موسفت (MOSFET) من طراز TPHR9003NL بالرموز (Q2, Q3, Q6, Q7).
- يوجد خط جهد عالي في الدائرة يحمل الرمز VDD_21V0 مرتبط بمقسم جهد (R41, R47) بقيمة 20K لكل منهما.
- تستخدم الدائرة ترانزستورات تحكم صغيرة من نوع T2N7002AK وتحمل الرموز Q4 و Q5.
- زمن استجابة الجهد للارتفاع إلى 24.5V محدد تقنياً بـ 2ms (أو 1.9ms في حالة المحاكاة).
- مقاومات حماية البوابات (Gate Resistors) للموسفتات الرئيسية قيمتها 10R بدقة 1% (الرموز R40, R44, R48, R49).
- الموصلات J3 و J4 من نوع CON-THD4-110X110-PWR وتعمل كنقاط توزيع طاقة.
- المكون D2 هو دايود زينر (Zener Diode) طراز BZT52C15G_15V، و D3 هو دايود طراز MBR0540.
- المكثف C44 المستخدم في دائرة التحكم يعمل بجهد 50V وسعة 100nF.

**Document image 18** ([16280678779025618.jpg](../sources/s19_hash_guide/images/202108/16280678779025618.jpg)):
- المكونات المعنية تحمل التسميات المرجعية Q2، Q3، Q6، Q7 على الحرير المطبوع (Silkscreen).
- الرقم المصنعي المطبوع على القطع هو TPHR9003NL.
- نوع الغلاف الإلكتروني (Package) هو MOSFET بثمانية أطراف (8-pin) مصمم للتيارات العالية.
- توجد علامة نقطية (دائرة بيضاء) على لوحة PCB أسفل يسار كل ترانزستور لتحديد اتجاه القطبية وPin 1.
- توجد منصات لحام عريضة (Pads) مغطاة بالقصدير بجانب المكونات تحمل الرموز J1 و J44، وتُستخدم عادةً لنقل التيارات العالية أو لتبديد الحرارة.
- تظهر المكونات الأربعة مرتبة في صف أفقي واحد كجزء من دوائر تحويل الطاقة (Buck Converter).

**Document image 19** ([16280679098027647.JPG](../sources/s19_hash_guide/images/202108/16280679098027647.JPG)):
- المتحكم الدقيق (Microcontroller) الأساسي في هذا الجزء من اللوحة هو PIC16F1704 ويحمل الرمز المرجعي U3.
- يوجد منفذ واجهة برمجة أو تخاطب يحمل التسمية J2.
- ترتيب دبابيس (Pins) المنفذ J2 من الأعلى إلى الأسفل هو: GND، CLK، DAT، GND، 3V3، MCLR.
- الجهد المرجعي المحدد لنقطة التغذية في المنفذ J2 هو 3V3.
- توجد دائرة متكاملة ثانوية (غالباً مستشعر حرارة أو EEPROM) تحمل الرمز المرجعي U5.
- يظهر على سطح المتحكم U3 رمز إنتاج مكون من أرقام تشمل 1952229.
- المكونات المحيطة بـ U3 تشمل صفاً من المقاومات والمكثفات بتسميات مثل R22، R23، C18، R15.

**Document image 20** ([16280679412382871.JPG](../sources/s19_hash_guide/images/202108/16280679412382871.JPG)):
- المكون يحمل التسمية المرجعية U5 وهو من طراز AT24C02D-XHM-T.
- جهد التغذية الرئيسي (VCC) للمكون هو 3V3 ويصل عبر الطرف رقم 8.
- الطرف رقم 4 (GND) متصل مباشرة بالأرضي.
- الطرف رقم 7 (WP - Write Protect) موصل بالأرضي (GND)، مما يعني أن خاصية الحماية من الكتابة معطلة والذاكرة قابلة للتعديل.
- يستخدم المكون بروتوكول التواصل I2C عبر الطرفين SDA (الطرف رقم 5) وSCL (الطرف رقم 6).
- يوجد مكثف تنعيم (Decoupling Capacitor) يحمل الرمز C27 بقيمة 100nF وجهد 6.3V موصل بين خط 3V3 والأرضي.
- أطراف العنونة الخارجية (Address Pins) هي A0 (الطرف 1)، A1 (الطرف 2)، وA2 (الطرف 3).

**Document image 21** ([16280679709801253.JPG](../sources/s19_hash_guide/images/202108/16280679709801253.JPG)):
- *(No structured facts parsed.)*

**Document image 22** ([16280679896800337.JPG](../sources/s19_hash_guide/images/202108/16280679896800337.JPG)):
- الجهاز هو مبرمج ومصحح أخطاء من نوع PICkit 3.
- يحمل تسمية MPLAB ICE على الهيكل الخارجي.
- يحتوي الجهاز على ثلاث مؤشرات ضوئية للحالة: POWER و ACTIVE و STATUS.
- مؤشر ACTIVE يظهر مضيئاً باللون الأزرق في الصورة.
- الواجهة البرمجية هي ICSP وتتكون من 6 دبابيس (6-pin) موصلة بأسلاك ملونة.
- يوجد سهم أبيض صغير على الهيكل يشير إلى اتجاه Pin 1 في منفذ التوصيل.
- يتم التوصيل بمصدر الطاقة أو الحاسوب عبر كابل USB أحمر اللون من الجانب الأيمن.

**Document image 23** ([16280680154961774.JPG](../sources/s19_hash_guide/images/202108/16280680154961774.JPG)):
- البرنامج المحدد في الصورة هو MPLAB IPE v3.10 (Integrated Programming Environment).
- الإصدار المتاح لبيئة التطوير في القائمة هو MPLAB X IDE v3.10.
- تتضمن الحزمة أداة MPLAB driver switcher لإدارة تعريفات المبرمج (Programmer Drivers).
- يُستخدم MPLAB IPE بشكل أساسي لبرمجة أو استخراج ملفات (Firmware) من متحكمات PIC الموجودة على لوحات الهاش أو لوحات التحكم.

**Document image 24** ([16280680638577513.JPG](../sources/s19_hash_guide/images/202108/16280680638577513.JPG)):
- البرنامج المستخدم هو Integrated Programming Environment بإصدار v3.10.
- القسم المختار حالياً في القائمة الجانبية هو Power (يظهر بنقطة خضراء)، بينما تظهر بقية الأقسام (Operate, Memory, إلخ) بنقاط حمراء.
- قيمة جهد VDD مضبوطة يدوياً على 3.3V.
- مستوى الجهد الموصى به (Recommended Voltage Level) حسب واجهة البرنامج هو 5.0.
- قيمة جهد البرمجة VPP مضبوطة على 9.0V.
- قيم الجهد الاسمي VDD Nom والتطبيقي VDD App كلاهما مضبوط على 5.0V.
- خيار "Power Target Circuit from Tool" مفعّل (Checked)، مما يعني أن أداة البرمجة هي التي تمد الدائرة بالطاقة.
- خيار البرمجة بالجهد المنخفض "Low Voltage Program" غير مفعّل.
- خيار "High Voltage on MCLR" يظهر في حالة غير نشطة (Grayed out).
- تتوفر وظيفة "Reset Voltages" لاستعادة إعدادات الجهد الافتراضية بضغطة زر واحدة.

**Document image 25** ([16280680775892317.JPG](../sources/s19_hash_guide/images/202108/16280680775892317.JPG)):
- اسم البرنامج المستخدم هو Integrated Programming Environment v3.10.
- طراز المتحكم (Microcontroller) المستهدف في العملية هو PIC16F1704.
- ملف الفيرموير (Hex file) المحمّل مخصص لرقاقة BM1398 الخاصة بسلسلة S19.
- إصدار الفيرموير المستخدم هو V89 وتاريخه المرتبط بالملف هو 20200101.
- قيمة Checksum المسجلة للملف هي D654.
- حالة حماية النسخ (CP) مضبوطة على OFF.
- سجل العمليات التراكمي يظهر 450 عملية ناجحة (Pass Count) مقابل 179 عملية فاشلة (Fail Count).
- إجمالي العمليات المسجلة في الواجهة (Total Count) هو 629.
- آخر إجراء مسجل في سجل المخرجات (Output) هو تحميل ملف hex بنجاح في التوقيت 16:29:45.
- المسار المصدري للملف يشير إلى استخدام قرص محلي E: ضمن مجلدات مخصصة لبرامج PIC.

**Document image 26** ([16280681615335996.jpg](../sources/s19_hash_guide/images/202108/16280681615335996.jpg)):
- تتضمن اللوحة المتحكم الدقيق `U3` من طراز `PIC16F1704`.
- يتوفر منفذ واجهة البرمجة `J2` بستة نقاط توصيل معرّفة كـ: `GND`, `CLK`, `DAT`, `GND`, `3V3`, `MCLR`.
- يوجد رقاقة أمان أو تشفير تحمل الرمز `U5` (غالباً من عائلة `ATSHA`).
- تعتمد دائرة التغذية على ملف حث (Inductor) مرموز له بـ `L1` وعليه الرقم "100".
- يشير السهم الأحمر في الصورة اليسرى إلى المكثف `C31` المتصل بمنظم الجهد `U9`.
- تحتوي الدائرة على ثنائيات حماية أو توحيد مرمزة بالرموز `D3`, `D4`, `D5`.
- توجد مكثفات تنعيم كبيرة نسبياً مرمزة بـ `C1313` و `C1314`.
- اللوحة تحمل علامة متوافقة مع معايير البيئة (خالية من الرصاص) عبر شعار `Pb-free`.

**Document image 27** ([16280681949383909.JPG](../sources/s19_hash_guide/images/202108/16280681949383909.JPG)):
- الرقاقة المركزية المسؤولة عن تحويل الجهد هي MP1517DR وتحمل الرمز U9.
- جهد الدخل (Input Voltage) للدائرة هو VDD_14V.
- جهد الخرج المستهدف (Target Output) هو 19V ويظهر تحت المسمى VDD_19V0.
- تبدأ الدائرة بالعمل (Turn on) عند وصول جهد طرف التمكين (EN) إلى 8.5V.
- قيمة الملف الحثي (Inductor) المرموز له L1 هي 10uH بتيار يتحمل 4A/3A.
- جهد المرجعية للتغذية المرتدة (VFB) عند الطرف رقم 16 هو 0.7V.
- تستخدم الدائرة صمامات ثنائية (Diodes) من نوع Schottky طراز MBR0540 للرموز D3، D4، D5.
- المقاومة R55 في شبكة التغذية المرتدة قيمتها 160K وبدقة 1%.
- المقاومة R50 المسؤولة عن تقسيم جهد التمكين قيمتها 20K وبدقة 1%.
- المكثف C55 الموصول بخرج الـ 19V مُصنف كـ NC (غير مركب/غير موجود برمجياً).
- يحتوي المسار الصادر من SW1 و SW2 (الأطراف 9 و 10) على مضاعف جهد أو حماية باستخدام D4 و D5.

**Document image 28** ([16280687224064054.JPG](../sources/s19_hash_guide/images/202108/16280687224064054.JPG)):
- نوع الرقائق المستخدمة في المخطط هو BM1398P (بوضعي التشغيل MODE_0 و MODE_1).
- يتناقص جهد التغذية الرئيسي (VDD) بالتسلسل بين الرقائق: يبدأ بـ 13.64V، ثم 13.28V بعد الرقاقة الأولى، ووصولاً إلى 12.92V بعد الرقاقة الثانية.
- تعتمد الرقائق على جهد نواة داخلي (Core Voltage) بقيمة 0.36V يُرمز له بـ VDD_0V36.
- وحدة الطاقة الفرعية (RISKY_PWR_1V8_0V8) تولد جهدين تشغيليين هما 0.8V (VDD_0V8) و 1.8V (VDD_1V8).
- يتم تزويد وحدات RISKY_PWR بجهد دخل مرتفع يصل إلى 19.0V (VDD_19V0).
- إشارات التحكم المتبادلة بين الرقائق تشمل: CLK (الساعة)، CI (إدخال البيانات)، RO (إخراج البيانات)، NRST (إعادة التعيين)، و BI (مؤشر الانشغال).
- تحتوي كل رقاقة على أقطاب مخصصة لاستشعار الحرارة وهي TEMP_N و TEMP_P.
- الرقائق معرفة في السلسلة كـ BM0_38 و BM1_37.
- توجد نقاط اتصال مرتبطة بالمبرد الحراري (Heatsink) تحت مسمى HEATSINK_30L.

**Document image 29** ([16280687517173735.JPG](../sources/s19_hash_guide/images/202108/16280687517173735.JPG)):
- المكون `U150` هو منظم جهد خطي (LDO) من طراز `MP2019GN`.
- جهد الدخل لمنظم `U150` هو `VDD_POWER` ويصل عبر الطرف رقم 4 (VIN).
- جهد المرجع للتغذية الراجعة (VFB) للمنظم `U150` يبلغ 1.25V.
- العقدة `VDD_1V8_MD` مُشار إليها بجهد 1.83V.
- يوجد صمام ثنائي (Diode) طراز `D42` (`1N4148WT`) يفصل بين خط `VDD_1V8_MD` وخط `VDD_1V8`.
- المكون `U151` هو منظم جهد خطي طراز `SGM2036-ADJYN5G/TR`.
- يأخذ المنظم `U151` دخله من خط `VDD_1V8_MD` عبر الطرف رقم 1 (VIN).
- المخرج النهائي للمنظم `U151` هو خط التغذية `VDD_0V8`.
- المقاومات `R733` (بقيمة 4.7K 1%) و `R734` (بقيمة 10K 1%) تشكل شبكة التغذية الراجعة للمنظم `U150`.
- العناصر التالية مُصنفة كغير مركبة (NC): `R730` ، `C1183` ، `C1187` ، `C1188`.
- المقاومة `R736` قيمتها 0 أوم (0R) وتعمل كجسر في دائرة التغذية الراجعة لـ `U151`.

**Document image 30** ([16280687683264249.JPG](../sources/s19_hash_guide/images/202108/16280687683264249.JPG)):
- نوع الرقاقات المستخدمة في الدائرة هو BM1398P (تظهر بنسختي MODE_0 و MODE_1).
- الرقاقة BM1_31 مرتبطة بوحدة الطاقة PWR 31 بجهد تشغيل VDD قدره 10.76V.
- الجهد الداخل (VDD_IN) لوحدة الطاقة PWR 31 هو 13.64V.
- الرقاقة BM0_30 مرتبطة بوحدة الطاقة PWR 32 بجهد تشغيل VDD قدره 10.4V.
- الجهد الداخل (VDD_IN) لوحدة الطاقة PWR 32 هو 13.28V.
- تعتمد الرقاقات على خطوط تغذية ثانوية بجهود 0.8V (VDD_0V8) و 1.8V (VDD_1V8).
- يتم ربط مستشعر حرارة خارجي TEMP_ASIC (المسمى TEMP 4) بالرقاقة BM0_30.
- خطوط الإشارة التسلسلية بين الرقاقات تشمل: CLK (الساعة)، CI (الإدخال)، RO (الإخراج)، NRST (إعادة التعيين)، و BI (إشارة الانشغال).
- مستشعر الحرارة يستخدم بروتوكول اتصال عبر خطوط SDA و SCL.
- يوجد منفذ جهد خاص يسمى VDDIO_18_MID متصل بالرقاقة BM0_30.
- المخطط يحدد نقاط تبريد مرتبطة بـ HEATSINK_11L و COPPER_36.

**Document image 31** ([16280687955976637.JPG](../sources/s19_hash_guide/images/202108/16280687955976637.JPG)):
- تستخدم الدائرة الأولى منظم الجهد **U102** من نوع **LN1134A182MR** لتحويل جهد الدخل **VDD_IN** إلى **VDD_1V8_MD**.
- يتم تفعيل المنظم **U102** عبر طرف التمكين (OE) المتصل بـ **R512** بقيمة **10K** ونسبة خطأ **1%**.
- يوجد صمام ثنائي (Diode) برمز **D31** وطراز **1N4148WTG** لربط خط **VDD_1V8_MD** بخط الخرج النهائي **VDD_1V8**.
- تستخدم الدائرة الثانية منظم الجهد **U103** من نوع **SGM2036-ADJYN5G/TR** لإنتاج جهد **VDD_0V8**.
- يعتمد المنظم **U103** في دخله (VIN) على خط الجهد **VDD_1V8_MD**.
- المكثفات الملحقة بلاحقة **NC** (مثل **C820**، **C821**، **C825**، **C826**) هي قطع غير مثبتة "Not Connected" برمجياً في هذا التصميم.
- المقاومات **R513** و **R515** هي مقاومات صفرية (**0R**) وموسومة بـ **NC**، مما يعني أنها مسارات اختيارية غير موصلة افتراضياً.
- جهد تحمل المكثفات المستخدمة في أغلب الدائرة (مثل **C819**، **C824**) هو **6.3V**.

**Document image 32** ([16280688356818739.JPG](../sources/s19_hash_guide/images/202108/16280688356818739.JPG)):
- المكون المركزي هو شريحة ASIC تحمل الرمز U116 وطراز BM1398BB_Mode 1.
- جهد النواة الرئيسي المغذي للشريحة (Core Voltage) هو VDD_0V36.
- تستخدم الشريحة خطوط جهد الإدخال/الإخراج VDDIO_18_0 و VDDIO_18_1 بجهد 1.8V.
- تستخدم الشريحة خطوط جهد VDDIO_08_0 و VDDIO_08_1 بجهد 0.8V.
- توجد مقاومات حماية بقيمة 51R وبدقة 1% على خطوط الإشارة: R578 (RO)، R576 (BO)، R580 (RI)، و R582 (CO).
- المكثفات C920 و C921 تعمل كفلترة لخطوط الطاقة بقيمة 4.7uF وجهد 6.3V.
- يتم مراقبة الحرارة عبر الأقطاب TEMP_P (دبوس 22) و TEMP_N (دبوس 21).
- توجد نقاط فحص (Test Points) متعددة موزعة على المسارات، منها TP617 إلى TP619 للإشارات الواردة و TP620 إلى TP622 للإشارات الصادرة.
- تتصل إشارات الساعة عبر المسارات CLKI (دبوس 12) و CLKO (دبوس 25).
- المقاومة R585 وقيمتها 10K وبدقة 1% تعمل كمقاومة سحب (Pull-up/down) في الدائرة.
- يتم تحديد عنوان الشريحة عبر الأقطاب ADDR0 (دبوس 4) و ADDR1 (دبوس 5).

**Document image 33** ([16280689649568480.JPG](../sources/s19_hash_guide/images/202108/16280689649568480.JPG)):
- المكون الرئيسي في هذا المقطع يحمل الرمز المرجعي U3.
- يوجد نقطة فحص (Test Point) أو مسار مخصص لجهد التشغيل بقيمة 3V3.
- تتوفر نقطة تأريض صريحة يرمز لها بالرمز GND.
- يوجد خط إشارة أو تحكم يحمل التسمية CLR (غالباً لمسح البيانات أو إعادة الضبط).
- تضم مصفوفة المكونات السطحية المقاومات التالية: R19، R20، R24، R25، R26، R27.
- تضم مصفوفة المكونات السطحية المكثفات التالية: C11، C12، C22، C24، C25.
- يظهر دليل الاتجاه (Pin 1 indicator) للمكون U3 على شكل دائرة صغيرة بجانب الركن السفلي الأيسر للقطعة.

**Document image 34** ([16280690203020490.JPG](../sources/s19_hash_guide/images/202108/16280690203020490.JPG)):
- يحتوي المخطط على مساحة مخصصة لتعريف اللوحة برمز شريطي تحت مسمى `BAR_CODE`.
- توجد منطقة مخصصة لرمز الاستجابة السريعة الثنائي في الجهة اليمنى تحمل التسمية `2D_BAR_CODE`.
- تتوزع رقائق ASIC على اللوحة في مصفوفة مكونة من 12 عموداً رئيسياً.
- توجد دوائر (نقاط اختبار) دائرية الشكل موزعة بانتظام بين الرقائق تستخدم لقياس الإشارات الأساسية (CLK, RO, BI, CI, RI).
- تم تحديد أربعة مواقع في زوايا مصفوفة المعالجة بواسطة مربعات حمراء، تمثل غالباً نقاط مرجعية أو مكونات طرفية في سلسلة الإشارة.
- الجهة اليمنى من اللوحة مخصصة لدوائر التغذية والتحكم وواجهة الاتصال مع لوحة التحكم (Control Board).

**Document image 35** ([16280691358575865.jpg](../sources/s19_hash_guide/images/202108/16280691358575865.jpg)):
- الدائرة تحتوي على أربعة حساسات حرارة من نوع LM75A بتسميات برمجية (U4، U6، U7، U8).
- جهد التغذية التشغيلي للدائرة (VCC) هو 3.3V ويشار إليه بـ 3V3.
- خطوط الاتصال الرئيسية هي TSDA (بيانات) و TSCL (ساعة) وتعمل ببروتوكول I2C.
- المقاومات R24 و R25 هي مقاومات رفع (Pull-up) لخطوط I2C بقيمة 4.7K أوم ودقة 1%.
- المقاومات R26 و R27 هي مقاومات صفرية (0R) تعمل كجسور توصيل لخطوط الإشارة.
- المكثفات C24 و C25 تعمل كمرشحات تنعيم لخطوط الإشارة بقيمة 100pF وجهد 50V.
- كل شريحة حساس مزودة بمكثف سيراميكي (Decoupling Capacitor) بقيمة 100nF وجهد 6.3V (C23، C27، C28، C29).
- يتم تحديد عنوان (I2C Address) لكل حساس عبر توصيل الأرجل A0، A1، A2 إما بجهد 3V3 أو بالأرضي GND عبر مقاومات 4.7K.
- الحساس U4 مخصص لمراقبة الصف الأول عند مدخل الهواء (Air intake).
- الحساس U6 مخصص لمراقبة الصف السفلي عند مدخل الهواء (Air intake).
- الحساس U7 مخصص لمراقبة الصف الثالث عند مخرج الهواء (Air outlet).
- الحساس U8 مخصص لمراقبة الصف السادس عند مخرج الهواء (Air outlet).
- منفذ الأرضي (GND) متصل بالرجل رقم 4 في جميع الحساسات، ومنفذ التغذية (VCC) متصل بالرجل رقم 8.

**Document image 36** ([16280691868885679.JPG](../sources/s19_hash_guide/images/202108/16280691868885679.JPG)):
- الكود التعريفي لرقاقات ASIC المسجل هو 0x1398.
- عدد الحساسات التي تمت قراءتها من خلال متحكم PIC هو 4 حساسات (Sensor 0, 1, 2, 3).
- قيم درجات الحرارة المسجلة للحساسات هي: (28، 28، 27، 28) على التوالي.
- عدد رقاقات ASIC المكتشفة في الفحص الأولي (First Find) هو 76 ASIC.
- عدد رقاقات ASIC المكتشفة في النتيجة النهائية هو 75 ASIC فقط.
- قيمة النطاق الفولطي (Voltage_Domain) المسجلة هي 38.
- معدل البود (Baud rate) للسلسلة مضبوط على القيمة 12000000.
- الفاصل الزمني للعنونة (address_interval) محدد بالقيمة 2.
- حالة إعادة ضبط النواة برمجياً (Software reset core) تمت بنجاح (done).

**Document image 37** ([16281252098008009.JPG](../sources/s19_hash_guide/images/202108/16281252098008009.JPG)):
- يتكون المكون من 32 طرفاً (Pin) مرقماً بالإضافة إلى نقاط توصيل مركزية (VDD_0 و VSS_0).
- مدخل إشارة الساعة CLKI يقع في الطرف 29، بينما مخرجها CLKO يقع في الطرف 8.
- مدخل الأوامر CI يقع في الطرف 28، بينما مخرج الأوامر CO يقع في الطرف 9.
- إشارات الاستجابة أو العودة تبدأ من RI (الطرف 10) وتخرج من RO (الطرف 27).
- إشارة إعادة التعيين (Reset) متمثلة في المدخل NRSTI (الطرف 26) والمخرج NRSTO (الطرف 11).
- مسار إشارة النبض أو الانشغال يتم عبر المدخل BI (الطرف 25) والمخرج BO (الطرف 12).
- تعتمد الشريحة مستويات جهد منطقية مختلفة تشمل VDDIO_18 (بجهد 1.8V) و VDDIO_08 (بجهد 0.8V).
- توجد أطراف مخصصة لمستشعر الحرارة وهي TEMP_P (الطرف 22) و TEMP_N (الطرف 21).
- يتم تحديد عنوان الشريحة عبر الطرفين ADDR0 (الطرف 4) و ADDR1 (الطرف 5).
- الطرف رقم 6 مخصص لتمكين طاقة النواة تحت مسمى P_CORE_EN.

**Document image 38** ([16281252916071119.JPG](../sources/s19_hash_guide/images/202108/16281252916071119.JPG)):
- نوع رقاقة الآسيك (ASIC) المستهدفة في الفحص هي BM1398.
- يظهر الخطأ المتكرر عدم تطابق في رقم السلسلة (chain)، حيث القيمة المستلمة هي 13 بينما المتوقعة (gChain) هي 0.
- رصد قيمة خطأ CRC في لوحة الهاش: `gHashboard_received_crc_error_work = 80`.
- توقف وظيفة نبضات القلب الخاصة بالمتحكم المصغر: `pic_heart_beat_func stop`.
- تسجيل فشل في منهجية الاختبار البرمجي: `BM1398_receive_function : Test_Method error`.
- تكرار محاولات فحص السجل (register check) لست مرات متتالية بنفس النتيجة الخاطئة قبل توقف العملية.

**Document image 39** ([16281253208141905.JPG](../sources/s19_hash_guide/images/202108/16281253208141905.JPG)):
- يظهر التقرير قائمة بالشرائح التالفة تحت بند `bad asic list` وهي: `asic[036]`، `asic[037]`، `asic[043]`، و `asic[075]`.
- القيمة المسجلة للشريحة `asic[075]` في النطاق `Voltage domain [37]` هي 3706، وهي أقل بوضوح من متوسط قيم الشرائح الأخرى (حوالي 4900).
- تم تمييز الشريحة `asic[075]` بعلامات تحذير `!!!` للدلالة على وجود خلل في استجابتها داخل نطاق الجهد الخاص بها.
- النتيجة النهائية للاختبار هي `PATTERN NG` (اختصار لـ No Good)، مما يعني فشل اللوحة في اجتياز الفحص.
- معدل النونص المستلم `nonce_rate` هو 97.923619%.
- عدد النونص المفقود `lost nonce number` يبلغ 7865.
- عدد النونص الصالح `valid nonce number` يبلغ 370919.
- يحتوي كل نطاق جهد `Voltage domain` في هذا الجزء من السجل على شريحتين ASIC (مثال: `Voltage domain [32]` يضم `asic[064]` و `asic[065]`).

**Document image 40** ([16281254173846250.jpg](../sources/s19_hash_guide/images/202108/16281254173846250.jpg)):
- الرسالة المتكررة `reg_value_buf buffer is full!` تشير إلى امتلاء ذاكرة التخزين المؤقت المخصصة لقيم السجلات (Registers) في البرنامج.
- الوظيفة البرمجية `BTC_software_pattern_check_nonce` ترصد تعارضاً في معرّف السلسلة، حيث يتم استقبال `nonce` من سلاسل متعددة (مثل: 8، 4، 12، 10، 3، 14، 7، 6) بينما القيمة المتوقعة هي `gChain: 2`.
- تم تحديد قراءة من المعالج رقم `Asic: 42` للنمط رقم 2368.
- يظهر التقرير تفاصيل داخلية للمعالج `Asic: 42` تشمل `big_core 85` و `small_core 3`.
- القيمة القصوى المسجلة للأنماط في هذا السياق هي `most pattern number is: 8`.
- الخطأ يظهر وجود خلل في التزامن بين لوحة التحكم (Control Board) والرقاقات (ASICs) على لوحة الهاش رقم 2 (Chain 2).

**Document image 49** ([16281261554488676.jpg](../sources/s19_hash_guide/images/202108/16281261554488676.jpg)):
- تبدأ العملية بثلاث خطوات فحص أولي: Observe the appearance، وMeasure resistance، وMeasure voltage.
- يتطلب التشخيص استخدام أداة فحص مخصصة (Test with hashboard tester).
- يجب فحص وحدة التغذية الخاصة باللوحة (Check the power supply of the board).
- يتضمن الفحص الفني قياس الجهد عند نقاط اختبار الإشارة (voltage at signal testing point).
- يتم تحديد العطل بناءً على معلومات التفتيش (Locate the fault according to inspection information).
- عند تحديد الشريحة التالفة (Locate the chip)، تكون الأولوية لعملية إعادة اللحام (re-soldering) قبل استبدال الشريحة.
- معيار قبول اللوحة بعد الإصلاح هو اجتياز الاختبار بنجاح لأكثر من مرتين (OK for more than 2 times).

> **Note:** Figures 3-1 through 8-1 match the official page. Use **Local mirror** for offline diagrams, or the **Official figures** table below for direct Zeus CDN links.

### Source §I — Platform / tools / materials (summary)

- **Workbench:** grounded ESD mat, grounded wrist strap.
- **Soldering:** constant-temp iron **350℃–380℃** with **pointed tip** for 0402 and small passives; **heat gun** + **BGA rework station** for chip rework.
- **Measurement:** multimeter with **steel pin** + **heat-shrink T-bush** (Fluke 15b+ recommended); **oscilloscope** (Agilent recommended); stable network + Ethernet cable.
- **Hash board power:** **[APW12](https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=306) `APW12_12V-15V_V1.2`** and adapter leads; **4AWG copper**, length **≤ 60 cm** between PSU and hash board.
- **Tester:** PicoBT-class fixture **V2.2010** control board; **25 Ω cement resistor, ≥ 100 W** on **both** + and − fixture poles (discharge).
- **Consumables:** solder paste column **M705**, flux paste, **board wash + absolute alcohol**; **Fujipoly SPG-30B** thermal gel on chip tops after repair; magnetic stencils; **0.4 mm** solder balls; absorb wick.
- **New chip install:** tin balls + paste, **pre-solder chip** then solder to PCBA (per manual §II.8).

### Official figures — direct image URLs (zeusbtc.com)

Base: `https://www.zeusbtc.com` — paths below are appended as `/Upload/image/...`.

| Figure | Role | URL(s) |
|--------|------|--------|
| 3-1 | SD / FPGA update (two panels above caption) | [1](https://www.zeusbtc.com/Upload/image/202108/16280669255318281.JPG) · [2](https://www.zeusbtc.com/Upload/image/202108/16280669332283857.JPG) |
| 3-2 | Single-sided heatsink SD layout | [link](https://www.zeusbtc.com/Upload/image/202108/16280669718083128.JPG) |
| 3-3 | Config.ini naming | [link](https://www.zeusbtc.com/Upload/image/202108/16280670439942976.JPG) |
| 3-4 … 3-8 | Double-sided / Config steps | [3-4](https://www.zeusbtc.com/Upload/image/202108/16280670989112547.JPG) · [3-5](https://www.zeusbtc.com/Upload/image/202108/16280671263690793.JPG) · [3-6](https://www.zeusbtc.com/Upload/image/202108/16280671577488218.JPG) · [3-7](https://www.zeusbtc.com/Upload/image/202108/16280672139981566.JPG) · [3-8](https://www.zeusbtc.com/Upload/image/202108/16280672448823607.JPG) |
| 4-1 … 4-4 | Domain / power structure | [4-1](https://www.zeusbtc.com/Upload/image/202108/16280673436987379.jpg) · [4-2](https://www.zeusbtc.com/Upload/image/202108/16280673851292066.JPG) · [4-3](https://www.zeusbtc.com/Upload/image/202108/16280675029636732.jpg) · [4-4](https://www.zeusbtc.com/Upload/image/202108/16280675329455458.jpg) |
| 4-5 | Boost 14 V → 19 V | [link](https://www.zeusbtc.com/Upload/image/202108/16280675609637282.JPG) |
| 4-6 | Whole miner (3× hash + control + APW12 + fans) | [link](https://www.zeusbtc.com/Upload/image/202108/16280676018461882.JPG) |
| 5-1 | **VDD / power check (circled areas)** | [panel A](https://www.zeusbtc.com/Upload/image/202108/16280677076156400.jpg) · [panel B](https://www.zeusbtc.com/Upload/image/202108/16280677762706693.jpg) |
| 5-2 | Domain voltage probing | [link](https://www.zeusbtc.com/Upload/image/202108/16280678779025618.jpg) |
| 5-3 … 5-5 | PIC / U3 area | [5-3](https://www.zeusbtc.com/Upload/image/202108/16280679098027647.JPG) · [5-4](https://www.zeusbtc.com/Upload/image/202108/16280679412382871.JPG) · [5-5](https://www.zeusbtc.com/Upload/image/202108/16280679709801253.JPG) |
| 5-6 | PICkit3 ↔ J3 wiring | [link](https://www.zeusbtc.com/Upload/image/202108/16280679896800337.JPG) |
| 5-7 … 5-8 | MPLAB IPE steps | [5-7](https://www.zeusbtc.com/Upload/image/202108/16280680154961774.JPG) · [5-8a](https://www.zeusbtc.com/Upload/image/202108/16280680638577513.JPG) · [5-8b](https://www.zeusbtc.com/Upload/image/202108/16280680775892317.JPG) |
| 5-9 … 5-10 | **Boost test / C55 @ 19 V** | [5-9](https://www.zeusbtc.com/Upload/image/202108/16280681615335996.jpg) · [5-10](https://www.zeusbtc.com/Upload/image/202108/16280681949383909.JPG) |
| 5-11 | LDO 1.8 V / PLL 0.8 V per group (multi-panel) | [A](https://www.zeusbtc.com/Upload/image/202108/16280687224064054.JPG) · [B](https://www.zeusbtc.com/Upload/image/202108/16280687517173735.JPG) · [C](https://www.zeusbtc.com/Upload/image/202108/16280687683264249.JPG) · [D](https://www.zeusbtc.com/Upload/image/202108/16280687955976637.JPG) |
| 5-12 | Signal probe / wrong power sequence damage note | [link](https://www.zeusbtc.com/Upload/image/202108/16280688356818739.JPG) |
| 5-13 | R24–R27, U3 pins 2–3 | [link](https://www.zeusbtc.com/Upload/image/202108/16280689649568480.JPG) |
| 5-14 | Temp sensors back / resistors front | [A](https://www.zeusbtc.com/Upload/image/202108/16280690203020490.JPG) · [B](https://www.zeusbtc.com/Upload/image/202108/16280691358575865.jpg) |
| 5-15 | Dichotomy / ASIC75 example layout | [link](https://www.zeusbtc.com/Upload/image/202108/16280691868885679.JPG) |
| 5-16 | ASICNG fixed chip — case d-1 (six resistors) | [link](https://www.zeusbtc.com/Upload/image/202108/16281252098008009.JPG) |
| 5-17 | ASICNG — case d-2 (log / domain voltage pattern) | [link](https://www.zeusbtc.com/Upload/image/202108/16281252916071119.JPG) |
| 5-18 | Pattern NG log example (domain/asic index **from 0**) | [link](https://www.zeusbtc.com/Upload/image/202108/16281253208141905.JPG) |
| 5-19 | PT2 serial “long run” shorting method | [link](https://www.zeusbtc.com/Upload/image/202108/16281254173846250.jpg) |
| 8-1 | **Maintenance flowchart** | [link](https://www.zeusbtc.com/Upload/image/202108/16281261554488676.jpg) |

### Official figure captions (from saved `index.html`)

Exact labels on the mirrored page (for search in [index.html](../sources/s19_hash_guide/index.html)): **3-3** “Naming as Config.ini”; **3-6** Delete original Config file; **3-7** Change Config (2) to Config; **3-8** Complete making; **8-1** Maintenance flowchart. **§VIII** text uses **RX** for reverse path and **RO** in the test-point list — same net family as **RI/RO** in the signal table.

### Figures 4-1 … 4-4 — layout callouts (local images)

- **4-1** ([16280673436987379.jpg](../sources/s19_hash_guide/images/202108/16280673436987379.jpg)): Photo of the LDO strip with on-image labels — **19 V → 1.8 V** (boost-fed domains), **13.64 V → 1.8 V** (VDD-stepped chain), **1.8 V → 0.8 V** (PLL per domain); multiple red-box regulator groups along the chip edge — matches the English paragraph above **Figure 4-1** in [index.html](../sources/s19_hash_guide/index.html).
- **4-2** ([16280673851292066.JPG](../sources/s19_hash_guide/images/202108/16280673851292066.JPG)): Silk **BITMAIN 38X2_HASHBOARD_V1_2**; **domain 1–38** in serpentine rows (**1–9** top left→right, **10–19** right→left, **20–29** left→right, **30–38** bottom right→left); inset near **domain 38** highlights **L1** / power pocket; left edge input caps marked **330 µF 30 V** (e.g. **C30–C51**).
- **4-3** ([16280675029636732.jpg](../sources/s19_hash_guide/images/202108/16280675029636732.jpg)): Same PCB class with **ASIC 1–76** overlay (serpentine **pair** path) — map log **`asic[index]`** (0-based) to physical die.
- **4-4** ([16280675329455458.jpg](../sources/s19_hash_guide/images/202108/16280675329455458.jpg)): **Heatsink-installed** view with **1–76** numbers on sinks; **BAR_CODE** / edge IDs — use when the board is assembled and you must find chip **N** without removing sinks.

### Figure 8-1 — maintenance flowchart (local image)

From [16281261554488676.jpg](../sources/s19_hash_guide/images/202108/16281261554488676.jpg): **Observe appearance** → **measure resistance** → **measure voltage** → **hashboard tester** → check **board supply + voltages at signal test points** → **localize fault** from inspection → at chip: **reflow first**, then **replace** if needed → **pass** only after **more than two** consecutive OK tests (same intent as §VIII bullets).

### Figure 5-1 — schematic callouts (panels A & B, local images)

From [16280677076156400.jpg](../sources/s19_hash_guide/images/202108/16280677076156400.jpg) / [16280677762706693.jpg](../sources/s19_hash_guide/images/202108/16280677762706693.jpg) (verify against your PCB rev):

- **Input:** **VDD_IN**; annotation **12 V–15.6 V** on high-side path (panel B).
- **Main switch FETs:** four **TPHR9003NL** in parallel (**Q2, Q3, Q6, Q7**) with **10 Ω** gate resistors; **PIC_EN** drives **Q4** (T2N7002AK) / **Q5** driver network (**R41–R47**, **C44**, **D2** 15 V Zener, **D3** Schottky).
- **Rails:** **VDD_14V** after power stage; **VDD_21V0** / boost-related node on panel A (**SY7302ABC U10** example on some revs) with FB divider **R63/R67**, **VFB≈0.6 V**; output caps **C76–C79**; note on discharge: **~100 ms** to **~4 V** with **4.7 µF** + **10 k** bleeder (panel A).
- **Soft-start / timing (circled on diagram):** rise to **~24.5 V** in **~2 ms** (sim **~1.9 ms**) around **Q5 / R42 / C44** — use if diagnosing slow or failed power-up.
- **Stability:** Chinese/English note on panel A: small output capacitance → **re-check loop stability after repair**.

### Figure 5-12 — BM1398 signal / test-point excerpt (local image)

From [16280688356818739.JPG](../sources/s19_hash_guide/images/202108/16280688356818739.JPG) (example **U116**):

- **Inter-stage series resistors** often **51 Ω 1%** (e.g. **R576–R582**) on **BI/NRST/RO/CI/CLK** between chips (**MID_*** nets).
- **Core:** **VDD_0V36** to die; **VDDIO_18** / **VDDIO_08** with typical **100 nF / 1 µF** nearby.
- **Test points** along chain: e.g. **TP617–TP622** at chip boundary — use with signal-flow voltages and adjacent-domain compare.

### Board Architecture

- 76 × BM1398 ASIC chips
- 38 domains (groups), 2 chips per domain
- **BM1398 domain step:** ~**0.36 V** per domain along the chain
- **Groups 38, 37, 36, 35, 34, 33, 32 (7 groups):** LDO fed from **boost U9 → ~19 V** → **1.8 V** domain rail
- **Groups 30 → 1:** fed from **VDD 13.64 V** through LDO → **1.8 V**, each domain ~**0.36 V** lower than the previous
- **Group 31:** not in the “7 boost groups” list in the official English text — it sits **after** group 32; treat as **VDD 13.64 V / LDO domain** (boundary domain — verify boost vs 13.64 V rail like group 30 domains during diagnosis). See **Figure 4-1**.
- **0.8 V (PLL):** from each domain’s **1.8 V** via LDO
- **Boost:** **14 V** in → **19 V** out; **Figure 4-5** — bench confirmation **C55 ≈ 19 V** (**Figures 5-9, 5-10**; manual text also mentions “diagram 4-9” — use **5-9** on Zeus page)

### Signal Flow — Exact Voltages from Source

| Signal | Direction | Voltage (no IO) | Voltage (operating) | Notes |
|--------|-----------|-----------------|---------------------|--------|
| CLK (XIN) | Chip 01 → 76 (Y1 **25 MHz**) | — | **0.7 V–1.3 V** | |
| TX/CI (CO) | IO **pin 7** (**3.3 V** at port) → **U2** level shift → chip 01 → 76 | **0 V** | **1.8 V** | |
| RX/RI (RO) | Chip 76 → 01 → **U1** → IO **pin 8** → control board | **0.3 V** | **1.8 V** | |
| BO (BI) | Chip 01 → 76 | **0 V** | **0 V** (DMM) | |
| RST | IO **pin 3** → chip 01 → 76 | **0 V** standby | **1.8 V** computing | |

### Bench Setup — CRITICAL POWER-ON/OFF SEQUENCE

> **WARNING: Wrong sequence burns R8, R9, U1, U2 — board will always report 0 chips after**

**Power ON sequence (in this exact order):**
1. Connect negative copper wire to PSU
2. Connect positive copper wire to PSU
3. Plug in signal cable (IO)

**Power OFF sequence (reverse):**
1. Remove signal cable (IO) first
2. Remove positive copper wire
3. Remove negative copper wire last

**Bench hardware:**
- **APW12 `APW12_12V-15V_V1.2`** (per Zeus §I) with **4AWG** copper **≤ 60 cm**
- Discharge resistor **25 Ω / ≥ 100 W** on positive **and** negative poles of test fixture
- PicoBT (test fixture **V2.2010** control board) with S19 test file
- **4 fans** at full speed for heat dissipation during **all** signal measurements
- Board must be **cooled** before testing after repair — hot board causes **false PNG** errors

### SD Card Setup — First Use

1. Use **19-series** SD card program to update FPGA on test fixture control board
2. Unzip → copy to SD card → insert into tester card slot
3. Power on ~**1 minute** → wait for **double flash × 3** on indicator → update complete
4. **If FPGA not updated:** may falsely report a **specific** chip bad every run

**SD card modes (Figures 3-1–3-8):**
- **Single-sided heatsink:** unzip PT1 inspection package **directly** onto SD
- **Double-sided heatsink 8× pattern:** rename `Config(2).ini` → `Config.ini` (**delete** original `Config` first) — **Figures 3-3–3-8**

### Maintenance Requirements

1. After replacing **any** accessory: no PCB deformation; check replaced area for open/short
2. Operators: electronics background + **≥ 1 year** repair experience + **BGA/QFN/LGA** proficiency
3. **Board must pass tester ≥ 2× OK** before QC
4. Confirm tools, **tester software**, **fixture FW/FPGA** before work
5. **PT1** (detection) **before PT2** (function); PT2 only after PT1 passes
6. PT2: small heatsink soldered; large heatsink + **even** thermal gel; fans full speed; chassis cooling → **2** hash boards for duct
7. Signal measurement: **4 fans** full speed **mandatory**
8. New chip: **pre-tin** pins with paste, then solder to PCBA (**§II.8**)

### Spare Parts Required (from source)

- 0402 resistors: 0 Ω, 51 Ω, 10 kΩ, 4.7 kΩ
- 0402 capacitors: 0.1 µF, 1 µF
- Solder ball **0.4 mm** recommended
- Thermal gel: **Fujipoly SPG-30B** on chip surface after replacement

### Fault Diagnosis — ASIC = 0 (PT1/PT2)

**Step 1 — Check power output**
- Measure **VDD / 14 V** at hash board power input — **Figure 5-1** (circled areas)
- MOS short: resistance **pins 1, 4, 8**

**Step 2 — Check domain voltage**
- Each domain ~**0.36 V**; with **14 V** in you usually see domain rails — if **14 V** present but **no** domain voltage, continue down this tree
- **Figure 5-2**

**Step 3 — Check PIC circuit**
- **U3 pin 2** ≈ **3.3 V** — **Figures 5-3–5-5**
- If missing: IO/tester cable, then **reprogram PIC**
- **PIC programming:**
  - File: `20200101-PIC1704-BM1398-V89.hex`
  - **PICkit3:** pin 1 of cable → pin 1 of **J3**; connect pins **1–6** — **Figure 5-6**
  - **MPLAB IPE:** device **PIC16F1704** → power mode → **Operate** → load HEX → **Connect** → **Program** → **Verify** — **Figures 5-7, 5-8**

**Step 4 — Check boost**
- **C55** ≈ **19 V** — **Figures 5-9, 5-10** (manual typo references “4-9”; on-site figures are **5-9**)

**Step 5 — LDO outputs**
- **1.8 V** and **PLL 0.8 V** per group — **Figure 5-11**

**Step 6 — Signals (CLK / CI / RI / BO / RST)**
- Use table above; compare suspicious domain to **neighbors** — **Figure 5-12**
- Wrong power sequence → **R8, R9, U1, U2** damage → **0 ASIC**

### Fault Diagnosis — Incomplete Chip Count (PT1/PT2)

**Case a — LCD `ASICNG` / (0):**
1. Confirm **total domain voltage** + **boost 19 V**
2. Short **RO** test point to **1V8** test point **between chip 1 and 2**
3. Run **find-chip**; read **serial log**
4. If still **0** chips:
   - **a-1:** **1V8** = 1.8 V, **0V8** = 0.8 V? If not → LDO / soldering / **filter cap shorts** (measure cap resistance both sides)
   - **a-2:** **U1 / U2** and series resistors
   - **a-3:** **R8, R9** ≈ **≤ 10 Ω**, stable — else replace
   - **a-4:** **First chip** false solder: looks tinned from **side** but pads **clean** when chip lifted (manual); also verify **CLK** at domain with scope if needed

**Case b — After a), log finds ≥ 1 chip:**
- First chip + upstream OK — slide shorting **1V8–RO** down the chain (e.g. between **38 & 39**) to bisect; **dichotomy** until bad **N** (**Figure 5-15**): short **N−1|N** → find **N−1** chips; short **N|N+1** → **0** chips ⇒ fault at **N**

**Case c — LCD `ASIC75` (75 @ 12 M):**
- **76** chips @ **115200** but **75** @ **12 M** → one chip fails high-speed detect
- **Repair:** dichotomy with **1V8–RO** shorts; example: if shorting to expect **47** chips shows **46** → replace **47th** chip (numbers **0-based** in log) — **Figure 5-15**

**Case d — LCD `ASICNG: (X)` fixed X:**
- **d-1:** Test time **same** as good board; **X** often stable → bad **CLK/CI/BO** resistors **before and after chip X** (**six** resistors); less often **X−1, X, X+1** pin solder — **Figure 5-16**
- **d-2:** Test time **~2×** good board; **X** may drift or **0**; log shows tester-slot-specific line; domain volts **before** fault **&lt; ~0.3 V**, **after** **&gt; ~0.38 V** → poor solder on **1.8 V / 0.8 V / RXT / CLK** — measure domains, use **1V8–RO** bisection — **Figure 5-17**

### Fault Diagnosis — Pattern NG (PT2)

- **Incomplete nonce / PatternNG** → large chip-to-chip mismatch; often **damaged die** → **replace** chip
- **Rule:** if bodies look OK, in **each domain** replace the chip with **lowest nonce response** in that domain. Example log: low response **asic[36][37][43][75]** → **36 & 37** share a domain → replace **whichever is lower**; also replace **43** and **75**
- **Important:** log **domain** and **asic** indices **start at 0** — **Figure 5-18**

### Fault Diagnosis — PT2 Serial “Long Run”

- During PT2, serial **never finishes** → short **RO** to **1.8 V** starting at **chip 1**; when serial **stops** after a short, that segment is good; first short after which **long run** continues → **bad chip** → replace — **Figure 5-19**

### Fault Diagnosis — PT2 Always Reports Same Chip NG

- PT1 OK, PT2 always one chip NG → inspect body; measure **caps/resistors** in front of chip → usually **cold joint** or **passive** fault

### Additional Fault Cases

**EEPROM NG on tester LCD:**
- **U5** solder — **Figure 5-12** context

**PIC sensor NG / temperature:**
- **R24–R27**, **U3** pins **2–3** — **Figure 5-13**
- **U4 + R28–30, U6 + R31–33, U7 + R34–36, U8 + R37–39**; sensors **back**, resistors **front**; **3.3 V** to sensor rail — **Figure 5-14**
- Heatsink / small heatsink weld; bent **large** heatsink → poor cooling → ΔT errors

### Section VIII — Routine workflow (from source)

See **Figure 8-1** flowchart + bullets:
- **Visual:** warp, burn, missing/offset parts
- **Impedance** per voltage domain → find short/open **before** energizing
- **~0.36 V** per domain check
- After routine pass → hash board **tester** for fault localization
- Near bad ASIC: probe **CO / NRST / RO / XIN / BI** and **VDD0V8 / VDD1V8**
- **Signal direction:** **RX (RO)** from **76 → 1**; **CLK, CO, BO, RST** from **1 → 76** — combine with **power sequence** to locate break
- **Reflow:** no-clean flux, reflow pins to re-wet; if unchanged → **replace** chip
- **QC:** **≥ 2** full passes; **cool down** between runs

### Miner-side log (one board low hashrate)

From Zeus **§VII** (figures **6-6–6-8** on main page): PuTTY to miner IP → `tail -f /tmp/nonce.log` (nonce) and `tail -f /tmp/adc.log` (domain voltage). Use log hints + bench steps above. **OTP / control board** → [FILE 5 — S19 control board](repair_s19_control_board.md).

### Common Repair Actions

| Symptom | Action |
|---------|--------|
| ASIC = 0 | Six steps §V.1 in order; **Figures 5-1–5-12** |
| MOS short (pins 1/4/8) | Replace MOSFET |
| No domain voltage | LDO / PIC / boost path |
| CLK missing at domain N | Chip **N** and **N−1**; boundary resistors; **Y1** |
| RI stops at domain N | Chip **N** likely dead |
| R8/R9 > 10 Ω or unstable | Replace **R8, R9** |
| EEPROM NG | **U5** solder |
| Temperature NG | **U4/U6/U7/U8** + **R28–R39** + heatsinks |
| Board 0 ASIC after rework | Wrong power sequence → **R8/R9/U1/U2** |
| Pattern NG | Replace lowest-nonce chip **per domain**; index from **0** |
| ASIC75 @ 12 M | Dichotomy → replace failing **ASIC index** |
| ASICNG fixed X | **d-1** six resistors / **d-2** solder + domain volts |
| PT2 serial endless | **RO–1V8** short sweep → replace bad chip |
| PT2 fixed chip NG | Visual + front passives + reflow/replace |
| Dead BM1398 | Reball 0.4 mm + **183 °C** paste + **SPG-30B** |

### Checklist Before Starting

- [ ] **APW12_12V-15V_V1.2** (or compatible) + version matches miner
- [ ] **4AWG** copper **≤ 60 cm**
- [ ] **25 Ω / ≥ 100 W** discharge on **both** fixture poles
- [ ] PicoBT **V2.2010** + S19 test file; **FPGA** updated via SD (**Figures 3-1–3-2**)
- [ ] **4 fans** full speed for measurements
- [ ] Board **cooled** before test post-repair
- [ ] DMM + fine probes; **scope** for CLK
- [ ] BM1398 + 0402 R/C kit + **SPG-30B**
- [ ] **PICkit3** + MPLAB IPE
- [ ] Power sequence: **GND first, IO last** / remove **IO first**
