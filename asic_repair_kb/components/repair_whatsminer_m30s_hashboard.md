# ASIC Repair Knowledge Base — Whatsminer M30S / M31S / M32 Hashboard (FILE 2)

**Part of:** [ASIC Repair Knowledge Base](../../asic_repair_knowledge_base.md)

---

## REPAIR FILE 2 — Whatsminer M30S / M31S / M32 Hashboard

**Reference:** [Whatsminer M31S M30S M32 series hash board repair guide (Zeus)](https://www.zeusbtc.com/articles/information/3703-whatsminer-m31s-m30s-m32-series-hash-board-repair-guide)

### Local mirror (offline)

- [sources/whatsminer_m30s_m31s_m32_hash/index.html](../sources/whatsminer_m30s_m31s_m32_hash/index.html)
- [manifest.json](../sources/whatsminer_m30s_m31s_m32_hash/manifest.json)
- Regenerate: `python scripts/fetch_zeus_kb_source.py whatsminer_m30s_m31s_m32_hash`

### Mirrored article images (document order)

| # | Local file |
|---|------------|
| 1 | [16611561735808134.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561735808134.jpg) |
| 2 | [16611561812374631.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561812374631.jpg) |
| 3 | [16611562471122327.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562471122327.jpg) |
| 4 | [16611562653100004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562653100004.jpg) |
| 5 | [16611562846294828.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562846294828.jpg) |
| 6 | [16611563272593809.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563272593809.jpg) |
| 7 | [16611563433857374.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563433857374.jpg) |
| 8 | [16611563714120084.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563714120084.jpg) |
| 9 | [16611563979463560.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563979463560.jpg) |
| 10 | [16611564244693571.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564244693571.jpg) |
| 11 | [16611564381264325.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564381264325.jpg) |
| 12 | [16611564618015287.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564618015287.jpg) |
| 13 | [16611564882443570.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564882443570.jpg) |
| 14 | [16611565089470289.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565089470289.jpg) |
| 15 | [16611565336577726.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565336577726.jpg) |
| 16 | [16611565609524260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565609524260.jpg) |
| 17 | [16611566047063597.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566047063597.jpg) |
| 18 | [16611566183029004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566183029004.jpg) |
| 19 | [16611566507411863.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566507411863.jpg) |
| 20 | [16611566859587294.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566859587294.jpg) |
| 21 | [16611566954682172.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566954682172.jpg) |
| 22 | [16611567179630140.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567179630140.jpg) |
| 23 | [16611567303380292.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567303380292.jpg) |
| 24 | [16612390968037260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16612390968037260.jpg) |
| 25 | [16611567671908399.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567671908399.jpg) |
| 26 | [16611568222546018.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568222546018.jpg) |
| 27 | [16611568386734281.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568386734281.jpg) |
| 28 | [16611568638968489.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568638968489.jpg) |
| 29 | [16611568848204252.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568848204252.jpg) |
| 30 | [16611568976399885.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568976399885.jpg) |

### Critical notes (from source)

1. Input voltage: **0.31–0.32 V × number of groups** (e.g. 0.31×37 ≈ 11.47 V → set **~11.5 V**) — maintenance standard.
2. **Use an oscilloscope**, not a DMM, for **CLK** (clock) measurements.
3. **CLK amplitude (scope):** source states **~0.15 V** is **normal** when working — verify against good board.
4. Violating the above leads to **wrong diagnosis** and **avoidable damage**.

### Figure callouts and UI paths (local mirror)

The following is taken from on-image labels and screenshots in the mirrored JPEGs; image numbers match the table above ([index.html](../sources/whatsminer_m30s_m31s_m32_hash/index.html) is the same order).

- **Image 3 — bench wiring:** Use a **separate ~12 V** supply for the **test control board** (photo shows ~12.0 V at low current); the **main adjustable DC** feeds the **hashboard**; **red = positive**, **black = negative** on the high-current leads; **Ethernet** between **laptop** and **control board**; **ribbon / test cable** between **control board** and **hashboard**.
- **Image 7 — M31S vs M30S LDO placement:** Side-by-side photo marks **LDO** clusters (e.g. **UP5 / UP7** on M31S; **UP37 / UP38** and a top-edge LDO bank on M30S) and **~1.8 V** / **~0.9 V** annotations between chip rows — use the **correct panel** for the PCB you have before probing.
- **Image 8 — 17 V boost (M31S example):** Caption on the saved image: **17 V** from the **boost** circuit (right edge / connector end) powers the **last eight LDOs** (**four** along the **top** of the ASIC array, **four** along the **bottom**). Aligns with the article’s “last groups” boost rail; some revisions highlight **nine** domains on the PCB.
- **Image 9 — 17 V boost (M30S example):** Same topic on an **M30S** panel: caption states **17 V** feeds the **last nine LDOs** (**four** top, **five** bottom). Use **image 8 vs 9** to match **M31S (8)** vs **M30S (9)** layouts when counting boost-fed domains.
- **Image 13 — fixture log (error 540, RST fail):** Annotated transcript: **Reset: FAILED**; **Read Temp Sensor: PASSED** (~26.5 °C); **Read Chip ID: FAILED** — **105** chips listed, **0** effective, **`Not Passed Chips` U001–U105**; **`Error_code: 540`**; **`test result: FAIL`**; optional EEPROM open errors on **`eeprom2` / `eeprom3`** paths — aligns with **Case 1** / RST–chain diagnosis in §IV.
- **Image 14 — RST walk (level shifters):** DMM examples: **U6** RST output **~1.73 V** (caption: normal **1.8 V** class); **U7** **~0.52 V** (caption: **abnormal**) — when stepping the RST chain, treat **≈1.8 V** vs **≈0.5 V** as the good/bad signature called out in the article.
- **Image 16 — reference readings / good-board log:** Example DMM shots **~1.78 V** on a domain and **~58 Ω** on a probed node (illustrative only — compare to a known-good board); terminal excerpt for **M31SV10** shows **105 / 105** chips, **PASS**, temp sensor / reset / chip ID **PASS** when healthy.
- **Image 29 — LuCI CGMiner status:** URL pattern `…/cgi-bin/luci/admin/status/cgminerstatus` — screenshot shows **EffectiveChips 0** while slots stay **Alive**, with **257** (`Power Unknown error … 0x1000000`) and **540 / 541 / 542** (*Slot N reading chip id error*) in the errors table.
- **Image 30 — Miner log:** URL pattern `…/cgi-bin/luci/admin/status/minerlog` — example lines: **257** (power unknown **0x1000000**), **540** (slot reset / chip id), **202** (**Power voltage error**, e.g. `voltage set: 1450` with **`voltage: 0`** / **`current: 0`** → treat as **PSU / delivery** until proven otherwise), **2010** (pools disabled — check **network / pool** config).
- **Image 24 (out-of-order filename in mirror):** Domain probe example **~0.259 V** with on-photo note **“Insufficient power supply to the chip”** — compare to expected **~0.31 V × groups** at the main feed and healthy **1.8 V / 0.9 V** domains before blaming signal-only faults.
- **Image 26 — CGMiner status (power + slots):** Same LuCI family as image 29; annotation ties **235 / 255 / 258** (**over-current / over-power** protection and warning, code **`0x80040008`**) together with **540 / 541 / 542** — caption: **primarily a PSU / power-delivery issue** causing **EffectiveChips 0** on all slots; fix **PSU / input** before deep hashboard rework.

### Vision model supplements (all article images)

Condensed from a vision pass — **verify** against [index.html](../sources/whatsminer_m30s_m31s_m32_hash/index.html) and a known-good board.

**Image 1** ([16611561735808134.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561735808134.jpg)):
- طراز الجهاز: M30S++.
- الشركة المصنعة: Whatsminer.
- قوة التعدين (Hashrate): تبلغ 112T بنسبة تفاوت ±5%.
- كفاءة استهلاك الطاقة (Power Ratio): تبلغ 31J لكل وحدة هاش بنسبة تفاوت ±5%.
- التصميم الفيزيائي: مزود طاقة (PSU) مدمج ومثبت في الجزء العلوي من هيكل الجهاز.
- نظام التبريد: يعتمد على مروحتين دفع وسحب مثبتتين على جانبي الهيكل المعدني.

**Image 2** ([16611561812374631.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611561812374631.jpg)):
- الطراز (Model): M31S+ Whatsminer.
- معدل التجزئة (Hashrate): يبلغ 80T مع نسبة تفاوت ±5%.
- كفاءة استهلاك الطاقة (Power Ratio): تبلغ 42J مع نسبة زيادة +5%.
- التصميم الميكانيكي: مروحتان للتبريد (واحدة في الأمام وواحدة في الخلف) مثبتتان على هيكل ألمنيوم.
- مزود الطاقة (PSU): مثبت بشكل مدمج في الجزء العلوي من هيكل الجهاز.
- شعار المنتج: يحمل العلامة التجارية "whatsminer" بوضوح على جانب الهيكل.

**Image 3** ([16611562471122327.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562471122327.jpg)):
- يُستخدم مصدر طاقة DC بجهد 12V مخصص لتشغيل لوحة التحكم (control board).
- القراءة الظاهرة على شاشة مزود طاقة لوحة التحكم هي 12.02V وتيار بسحب 0.110A.
- يتم تزويد لوحة الهاش (PCB) المراد إصلاحها بالطاقة عبر مصدر طاقة DC مستقل عن مصدر لوحة التحكم.
- يتم الربط بين الحاسوب المحمول (notebook) ولوحة التحكم عبر كابل شبكة (network cable) لنقل البيانات.
- تُستخدم "أسلاك اختبار" (testing wire) للربط المباشر بين لوحة التحكم الاختبارية ولوحة الهاش.
- يتم تحديد القطبية باستخدام الألوان: السلك الأحمر للقطب الموجب (+) والسلك الأسود للقطب السالب (-).
- تظهر شاشة الحاسوب واجهة أوامر نصية (Terminal) تعرض نتائج فحص الرقائق وسجلات التشغيل (Logs).

**Image 4** ([16611562653100004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562653100004.jpg)):
- تنتقل إشارات CLK وRXD وRST من الرقاقة الأولى U1 باتجاه الرقاقة الأخيرة في السلسلة.
- تنتقل إشارة TXD بشكل عكسي من الرقاقة الأخيرة في السلسلة باتجاه الرقاقة U1.
- تُستخدم الرقاقة U1 لإجراء عملية تحويل التردد (Frequency Conversion).
- تتبع المسارات نمطاً تسلسلياً يمر عبر جميع الرقائق (ASICs) الموجودة على اللوحة.
- الإشارات الأساسية اللازمة لفحص استمرارية السلسلة هي: CLK، RXD، RST، وTXD.
- يمثل اللون الأحمر/الأرجواني في المخطط مسار عودة إشارة TXD، بينما يمثل اللون الأزرق/البنفسجي مسار الإشارات الصادرة.

**Image 5** ([16611562846294828.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611562846294828.jpg)):
- إشارة TXD تنتقل من الرقاقة (Chip) الأخيرة في السلسلة وصولاً إلى U1 لإتمام عملية تحويل التردد (frequency conversion).
- إشارات CLK و RXD و RST تنتقل في اتجاه معاكس، حيث تبدأ من U1 وتنتهي عند الرقاقة الأخيرة.
- مسار إشارة TXD ممثل باللون الأرجواني ويتحرك بشكل متعرج عبر صفوف الرقاقات من الأسفل والأطراف صعوداً إلى U1.
- مسارات إشارات CLK و RXD و RST ممثلة باللون الأزرق وتتبع تسلسل الرقاقات من البداية إلى النهاية.
- المكون U1 هو النقطة المركزية التي تستقبل إشارة TXD وترسل إشارات التحكم (CLK, RXD, RST).
- يتم فحص استمرارية الإشارات بناءً على هذا المخطط لتحديد الرقاقة التالفة في السلسلة.

**Image 6** ([16611563272593809.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563272593809.jpg)):
- المقارنة تشمل طرازي لوحات الهاش 31s و 30s.
- يتم تتبع مسارات خمس إشارات أساسية وهي: CLK، RST، BO، RI، CO.
- في طراز 31s، توجد نقطة مرجعية هامة عند Pin 1 للمكون U1 (u1의1脚).
- الإشارات الخمس في كلا التصميمين متصلة على التوالي (串连).
- المكونات المحددة كمقاطعات أو نقاط فحص تشمل: U1، UP1، UP3، UP4، UP43، UP36.
- تظهر الخطوط الحمراء اتجاه تدفق الإشارة بين دوائر الهاش (ASICs) عبر مستويات مختلفة من اللوحة.
- يعتمد طراز 30s على توزيع إشارات في مسارات رأسية أكثر انتظاماً مقارنة بالمسارات المتقاطعة في 31s.

**Image 7** ([16611563433857374.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563433857374.jpg)):
- لوحة M31s تعتمد على منظمات جهد LDO تحمل مسميات مثل UP7، UP5، UP8، و UP9.
- لوحة M30s تعتمد على منظمات جهد LDO تحمل مسميات مثل UP2، UP37، و UP38.
- الجهد المرجعي الأول لمنظمات LDO في كلا النوعين هو 1.8V.
- الجهد المرجعي الثاني لمنظمات LDO في كلا النوعين هو 0.9V.
- الخطوط الأرجوانية العمودية تمثل مسار انتقال الإشارات (Signals) بين مجموعات الدوائر المتكاملة (ASICs).
- يتم توزيع منظمات LDO على الجهتين العلوية والسفلية للوحة لضمان استقرار الجهد عبر الرقاقات.
- ترقيم الرقاقات في M31s يظهر بتسلسل مثل U24، U23، U20، بينما في M30s يظهر بتسلسل أعلى مثل U141 وصولاً إلى U158.

**Image 8** ([16611563714120084.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563714120084.jpg)):
- الموديل التقني المستهدف بالصورة هو M31S.
- يوجد في اللوحة دائرة رفع جهد يشار إليها بـ 17V boost في الجانب الأيمن.
- جهد 17V مخصص لتشغيل آخر 8 طبقات من منظمات الجهد الخطية (LDO).
- يتم توزيع جهد الـ 17V على 8 وحدات LDO محددة بإطارات حمراء (4 في المسار العلوي و4 في المسار السفلي).
- تظهر الخطوط الحمراء في الصورة مسار الربط المباشر بين مخرج دائرة الرفع (17V boost) ومداخل منظمات الجهد LDO.

**Image 9** ([16611563979463560.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611563979463560.jpg)):
- اللوحة تنتمي لطراز M30s كما هو موضح في الملصق العلوي.
- وظيفة جهد 17V هي توفير الطاقة لآخر 9 طبقات من منظمات الجهد الخطية LDO.
- تحتوي اللوحة على دائرة رفع جهد (17V boost) تقع في الجهة اليمنى من اللوحة.
- ترتبط منظمات الجهد (التي تحمل ترميزاً مثل UP24، UP36، UP37، UP38، UP40) بخط تغذية 17V مشترك عبر مسارات محددة باللون الأحمر.
- يتم توزيع منظمات LDO المستهدفة على الحواف العلوية والسفلية لمصفوفة رقاقات ASIC في نهاية اللوحة.

**Image 10** ([16611564244693571.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564244693571.jpg)):
- يشار إلى المكون `UP36` على أنه حساس للحرارة (temperature sensor).
- يشار إلى المكون `UP37` على أنه مكون الذاكرة (memory).
- جهد التغذية المطلوب لتشغيل دائرة حساس الحرارة والذاكرة هو `3.3V`.
- اللوحة تحتوي على واجهة توصيل (Connector) تحمل الرمز `J3`.
- إصدار اللوحة (Revision) المطبوع هو `20S REV1.0.2019.04.28`.
- تظهر إشارات التحكم والبيانات المحددة على اللوحة: `SDA` و `SCL` (بروتوكول I2C) و `RXD1` و `CB_TXD1` (اتصال تسلسلي).
- يتواجد الرمز `RST1` و `PLUG` و `RST_DET` كنقاط فحص أو إشارات مرتبطة بعملية إعادة التشغيل والكشف.
- الملصق الجانبي يحتوي على الأكواد التعريفية: `BINV02-193005F` و `HP6K0D-20052914`.
- المكونات `Y17` و `Y21` تمثل وحدات الكريستال (Oscillators) الموجودة في دائرة المعالجة.
- توجد نقاط اختبار للجهد تحمل التسمية `V3P3`.

**Image 11** ([16611564381264325.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564381264325.jpg)):
- الدائرة مخصصة لوظيفة تحويل مستويات الجهد (level conversion).
- المكون المسمى TAR يحتوي على نقطة فحص بجهد 3.3V.
- المكون المسمى TAR يحتوي على نقطة فحص بجهد 1.8V.
- يوجد في هذا القسم من اللوحة إشارة RXD1 مرتبطة بالمكون UP39.
- نقطة الفحص RST_DET تعمل بجهد 3.3V.
- تتوفر ذاكرة EEPROM على اللوحة تحمل الرقم 24C02RP.
- المنطقة تحتوي على المكونات المعرفة بالرموز UP37 و D118.

**Image 12** ([16611564618015287.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564618015287.jpg)):
- **كود الخطأ 542:** يشير صراحة إلى "Slot2 reading chip id error"، مما يعني وجود مشكلة في الاتصال أو تلف في رقاقات لوحة الهاش الموجودة في الفتحة رقم 2.
- **كود الحدث E005:** يشير إلى "No cgminer"، مما أدى إلى اتخاذ إجراء تلقائي بإعادة تشغيل البرنامج (Restart cgminer).
- **كود الحدث E013:** يوثق تغيير كلمة مرور المجمع (pool[3]) من '123' إلى 'Empty'.
- **بيئة التشغيل:** الجهاز يعمل بنظام LuCI Master (OpenWrt Designated Driver 50045).
- **عنوان IP:** الجهاز الحالي الذي تظهر بياناته يعمل على العنوان 192.168.2.169.
- **إعدادات المجمع (Pool 0):** المجمع النشط حالياً هو "poolin.com" بصعوبة (Difficulty) مقدارها 8192.
- **توقيت الخطأ:** تم تسجيل الخطأ الأخير بتاريخ 2020-07-04 الساعة 11:54:35.
- **حالة الاتصال:** تظهر المجمعات 1 و 2 بحالة "Alive" ولكنها غير نشطة (Active: false).

**Image 13** ([16611564882443570.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611564882443570.jpg)):
- نوع الجهاز الخاضع للاختبار هو M31SV10.
- إصدار البرنامج الثابت (Firmware) المستخدم هو 20200731.15.1.
- نتيجة اختبار إشارة البدء (Reset) هي FAILED، مما يشير إلى خلل في دائرة الـ RST.
- قراءة مستشعر درجة الحرارة سليمة (PASSED) وبقيمة 25.5 درجة مئوية.
- إجمالي عدد الرقائق (Chips) المكتشفة هو 105، لكن عدد الرقائق الفعالة هو 0.
- كود الخطأ البرمجي المسجل هو Error_code = 540.
- فشل قراءة معرف الرقائق (Read Chip ID) لجميع المكونات من U001 إلى U105.
- الرقم التسلسلي للوحة (PCB_SN) هو H5M1FS89100520K10020.
- تظهر الواجهة فشلاً في فتح ملفات التعريف الخاصة بالـ EEPROM في المسارات eeprom2 و eeprom3.

**Image 14** ([16611565089470289.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565089470289.jpg)):
- استخدام جهاز ميلتيميتر رقمي (Fluke) لقياس قيمة جهد إشارة البدء (RST).
- القيمة المرجعية الطبيعية لجهد مخرج إشارة RST عند النقطة U6 هي 1.8V.
- القراءة الظاهرة على الجهاز عند فحص U6 هي 1.733V، وهي تندرج تحت حالة "Normal" (طبيعي).
- القراءة الظاهرة على الجهاز عند فحص U7 هي 0.523V.
- تُصنف القراءة 0.523V عند النقطة U7 بأنها "Abnormal" (غير طبيعية/خلل).
- الفحص يتم يدوياً باستخدام مجسات (Probes) الجهاز على نقاط اختبار محددة على الدائرة المطبوعة (PCB).

**Image 15** ([16611565336577726.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565336577726.jpg)):
- قراءة جهد الخرج لمنظم LDO المسجلة هي 0.562V DC.
- النص التوضيحي يشير إلى أن قيمة 0.562V هي قيمة "منخفضة فقط"، مما يستوجب استبدال أو فحص دائرة المنظم.
- يوجد قصر (Short-circuit) صريح في الطرف رقم 8 (Pin 8) للرقاقة (Chip) الموضحة في الصورة.
- قراءة جهاز القياس في وضع فحص المقاومة/القصر تشير إلى 1.7 (يُرجح أنها أوم Ω).
- المكون المستهدف بالفحص هو دائرة متكاملة (IC) صغيرة ذات 8 أطراف مثبتة بتقنية SMD.
- يتم استخدام جهاز قياس رقمي (Multimeter) من فئة Fluke لإجراء القياسات.

**Image 16** ([16611565609524260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611565609524260.jpg)):
- الجهد الكهربائي المقاس في الصورة الأولى هو 1.781V DC.
- درجة الحرارة المقاسة بواسطة الملتيميتر في الصورة الثانية هي 58.2°C.
- طراز جهاز التعدين المحدد في سجلات النظام هو M31SV10.
- عدد الرقائق (ASIC) التي تم اكتشافها والتحقق منها هو 105 رقاقة.
- الرقم التسلسلي للوحة (PCB_SN) هو H5M1FS6910052BK10020.
- إصدار البرمجية (Firmware_version) المثبت هو 20200701.15.1.
- نتيجة اختبار هوية الرقائق (Chip ID Test Result) هي PASSED.
- درجة حرارة الحساس الداخلي المقروءة برمجياً هي 32.5°C.
- نوع الرقائق المستخدمة في اللوحة هو HP5A03.
- عنوان IP الخاص بالجهاز للوصول عبر واجهة MobaXterm هو 192.168.2.235.
- حالة "الريست" في التقرير البرمجي تظهر كـ Reset: PASSED.
- يحتوي دليل الملفات المعروض على ملفات نظام مثل boot0_nand.fex و kernel.fex.

**Image 17** ([16611566047063597.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566047063597.jpg)):
- عنوان IP الخاص بالجهاز هو 192.168.2.169 عبر واجهة Luci.
- يتم التعرف على ثلاث لوحات هاش (Hashboards) بتسميات: SM0، SM1، SM2.
- لوحة SM0 ولوحة SM1 تعملان بوجود 105 رقاقة (EffectiveChips) لكل منهما.
- لوحة SM2 تسجل 0 رقاقة (EffectiveChips)، مما يشير إلى فشل كامل في التعرف على الرقاقات.
- درجة حرارة SM2 منخفضة جداً (31.00) مقارنة بـ SM0 (58.50) وSM1 (56.00)، مما يؤكد عدم وجود نشاط تعدين عليها.
- كود الخطأ 542 (ErrorCode 542) يشير صراحة إلى "Slot2 reading chip id error"، وهو مرتبط بفشل قراءة معرفات الرقاقات في اللوحة الثالثة.
- كود الخطأ 206 (ErrorCode 206) يشير إلى أن جهد الإدخال (Power input voltage 220.0V) منخفض (Low).
- حدث النظام E005 يشير إلى توقف "No cgminer" مما أدى إلى أمر إعادة تشغيل البرنامج (Restart cgminer).
- المجمع النشط (Active Pool) هو Pool 0 التابع لـ poolin.com عبر المنفذ 443.

**Image 18** ([16611566183029004.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566183029004.jpg)):
- نوع الجهاز المعني هو M31SV10.
- إصدار البرنامج الثابت (Firmware) المستخدم هو 20200701.15.1.
- الرقم التسلسلي للوحة (PCB_SN) هو H5M1FS69100520K10020.
- إجمالي عدد الرقائق (Total chips) المفترض وجوده هو 105 رقاقة.
- عدد الرقائق التي تمت قراءتها بنجاح (Effective chips) هو 104 فقط.
- الرقاقة المفقودة أو التي فشل النظام في التعرف عليها هي U9 (تظهر كـ U009).
- حالة إشارة التصفير (Reset) هي PASSED (سليمة).
- حالة مستشعر الحرارة (Temp Sensor) هي PASSED مع قراءة تبلغ 30.5 درجة مئوية.
- نتيجة الاختبار الإجمالية (Result) هي FAIL (فشل) بسبب نقص في عدد الرقائق.
- الخطأ المسجل في سجل النظام يظهر تحت كود Chip_level0 = 1:U9.
- عنوان الـ IP المسجل للوصول إلى الجهاز هو 192.168.2.235.

**Image 19** ([16611566507411863.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566507411863.jpg)):
- الجهاز من طراز WhatsMiner ويمكن الوصول لواجته عبر العنوان 192.168.2.163.
- عدد الرقائق الفعالة (EffectiveChips) لجميع اللوحات (SM0، SM1، SM2) يظهر بقيمة 0، مما يعني عدم التعرف على أي رقائق.
- كود الخطأ 561 يشير إلى (Slot1 loss balance) ويرتبط باللوحة SM1.
- كود الخطأ 562 يشير إلى (Slot2 loss balance) ويرتبط باللوحة SM2.
- كود الخطأ 205 يشير إلى فشل في التيار (Power current error)، حيث القراءة الحالية 0.0A بينما كانت آخر قراءة مسجلة 182.5A.
- درجات الحرارة المسجلة للوحات هي: SM0 (45.00)، SM1 (44.00)، SM2 (43.50).
- حالة اللوحات في الجدول الرئيسي تظهر كـ "Alive"، لكن قيمة "UpfreqCompleted" هي 0 لجميع اللوحات.
- يوجد حدث برمز E005 يشير إلى توقف برنامج التعدين (No cgminer) ومحاولة إعادة التشغيل (Restart cgminer).
- إجمالي الأخطاء المسجلة وقعت في تاريخ 2020-07-07 في أوقات متقاربة (بين الساعة 16:01 و 16:12).

**Image 20** ([16611566859587294.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566859587294.jpg)):
- عنوان الوصول الافتراضي للواجهة في المتصفح هو `192.168.2.163`.
- مسار الوصول إلى السجلات من القائمة العلوية: `Status` ثم اختيار `Miner Log`.
- المسار البرمجي لصفحة السجلات هو `/cgi-bin/luci/admin/status/minerlog`.
- يحتوي تبويب `Miner Log` على قسمين فرعيين: `Pools Change log` و `Miner State Log`.
- يظهر كود الحالة/الخطأ `[E013]` بشكل متكرر في سجلات تغيير الأحواض (Pools Change).
- واجهة `CGMiner Status` تظهر القيم: `Frequency` بقيمة 0، و `GHSav` بقيمة 0.00، مما يشير إلى توقف التعدين.
- السجلات تحتوي على تفاصيل ربط الحوض وتشمل: `url` (stratum+tcp)، و `user` و `password`.
- نظام إدارة الواجهة يعتمد على برمجية `LuCI`.

**Image 21** ([16611566954682172.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611566954682172.jpg)):
- *(No structured facts parsed.)*

**Image 22** ([16611567179630140.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567179630140.jpg)):
- يتم الوصول إلى واجهة التحكم عبر العنوان الرقمي 192.168.2.158.
- يظهر النظام ثلاث لوحات هاش معرفة بـ SM0، SM1، وSM2.
- عدد الرقائق الفعالة (EffectiveChips) في لوحة SM0 هو 0، بينما يبلغ 117 رقاقة في كل من SM1 وSM2.
- قيمة UpfreqCompleted للوحة SM0 هي 0، مما يعني فشل عملية رفع التردد.
- درجة حرارة لوحة SM0 متوقفة عند 30.00 درجة مئوية، وهي أقل بكثير من SM1 (67.50) وSM2 (71.00).
- حالة اللوحة SM0 في جدول الأجهزة تظهر كـ Alive رغم عدم وجود إنتاجية.
- كود الخطأ (ErrorCode) المسجل في النظام هو 540.
- السبب المباشر للخطأ (Cause) هو "Slot0 reading chip id error"، أي فشل في قراءة معرف الرقائق في الفتحة رقم 0.
- المجمع التعديني النشط (Pool 0) هو stratum+tcp://btc-vip-3dcoa7jxu.ss.poolin.com:443.

**Image 23** ([16611567303380292.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567303380292.jpg)):
- نوع الجهاز (Miner_type) هو M31PV30.
- الرقم التسلسلي للوحة (PCB_SN) هو Z8M1FP75300406KE0094.
- إصدار البرمجيات الثابتة (Firmware_version) هو 20200701.15.1.
- العدد الإجمالي للرقائق المفترض (total chips) هو 117، بينما الرقائق الفعالة المكتشفة (effective chips) هي 114.
- الرقائق التي تم تحديد فشلها في الاختبار هي U109، U110، و U111.
- حالة اختبار مستشعر الحرارة (Read Temp Sensor) هي PASSED بدرجة حرارة 29.0.
- اختبار إعادة الضبط (Reset) نتيجته PASSED.
- فشل النظام في قراءة معرف الرقاقة (Reading chip id failed) بعد 3 محاولات.
- يظهر السجل خطأ في فتح ملفات EEPROM للمسارات eeprom2 و eeprom3.
- مستوى اللوحة (Board_level) المسجل عند الفشل هو 0.
- الرقائق من U113 إلى U117 تظهر قراءات معرفات (IDs) صحيحة في الجزء العلوي من السجل.

**Image 24** ([16611567671908399.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611567671908399.jpg)):
- نوع الجهاز ونظام التشغيل: WhatsMiner عبر واجهة Web UI (صفحة cgminerstatus).
- عنوان IP الخاص بالجهاز: 192.168.2.234.
- لوحات الهاش المتصلة حالياً: لوحتان فقط هما SM1 و SM2.
- حالة اللوحات الموجودة: تظهر الحالة (Status) كـ Alive لكل من SM1 و SM2.
- عدد الرقائق الفعالة (Effective Chips): 164 رقاقة لكل لوحة (SM1 و SM2).
- ترددات التشغيل (Frequency): اللوحة SM1 تعمل بتردد 433، واللوحة SM2 تعمل بتردد 424.
- درجات الحرارة المسجلة: 59.00 لـ SM1 و 64.00 لـ SM2.
- كود الخطأ البرمجي (ErrorCode): 530.
- وصف الخطأ (Cause): "Slot0 not found" (فتحة اللوحة رقم 0 غير موجودة).
- حالة المجمعات (Pools): المجمع رقم 0 (Pool 0) هو النشط (Active: true) بينما المجمعات 1 و 2 غير نشطة.
- إجمالي معدل التعدين (Total GHSav): 18295.32.

**Image 25** ([16611568222546018.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568222546018.jpg)):
- **عنوان IP للجهاز:** 192.168.2.45 عبر مسار /cgi-bin/luci/.
- **حالة اللوحات (SM0, SM1, SM2):** تظهر الحالة "Alive" لكن عدد الرقاقات الفعالة (EffectiveChips) هو 0 لجميع اللوحات.
- **كود الخطأ 236:** يشير إلى حماية من التيار الزائد في مخرج الطاقة (Power output over-current protection 0).
- **كود الخطأ 255:** يشير إلى حماية من القدرة الزائدة لمخرج الطاقة (Power output over-power protection).
- **كود الخطأ 268:** يشير إلى تحذير من التيار الزائد لمخرج الطاقة (Power output over-current warning).
- **الكود السداسي عشري (Hex Code):** جميع أخطاء الطاقة مرتبطة بالكود 0x80040008.
- **أكواد خطأ الرقاقات (540, 541, 542):** تشير إلى فشل في قراءة معرف الرقاقة (reading chip id error) للفتحات Slot0 و Slot1 و Slot2 على التوالي.
- **درجة الحرارة:** القراءة ثابتة عند 25.00 لجميع اللوحات، مما يشير إلى عدم بدء عملية التعدين.
- **قيمة UpfreqCompleted:** تظهر القيمة 0، مما يعني أن الجهاز لم يبدأ مرحلة رفع التردد.

**Image 26** ([16611568386734281.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568386734281.jpg)):
- **رابط الواجهة:** يتم الوصول إلى حالة التعدين عبر المسار `/cgi-bin/luci/admin/status/cgminerstatus`.
- **كود الخطأ 250 و 251:** يشير إلى تفعيل حماية انخفاض جهد الإدخال (`Power input under-voltage protection`) برمز سداسي عشري `0x60000`.
- **كود الخطأ 540، 541، 542:** يشير إلى فشل في قراءة معرف الرقائق (`reading chip id error`) في الفتحات `Slot0` و `Slot1` و `Slot2` على التوالي.
- **كود الحدث E005:** يظهر فقدان عملية التعدين (`No cgminer`) مما يؤدي إلى إجراء إعادة تشغيل تلقائي (`Restart cgminer`).
- **حالة المسابح (Pools):** المسبح رقم 0 (`Pool 0`) هو الوحيد النشط (`Active: true`) بعنوان `ss.poolin.com` ومنفذ `443`.
- **اسم المستخدم الافتراضي:** يظهر المستخدم في إعدادات المسبح باسم `microbtinit`.
- **التوقيت الزمني:** سجلت الأخطاء بتاريخ `2020-07-11` في توقيتات متقاربة جداً (بفارق ثوانٍ).

**Image 27** ([16611568638968489.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568638968489.jpg)):
- *(No structured facts parsed.)*

**Image 28** ([16611568848204252.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568848204252.jpg)):
- *(No structured facts parsed.)*

**Image 29** ([16611568976399885.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16611568976399885.jpg)):
- *(No structured facts parsed.)*

**Image 30** ([16612390968037260.jpg](../sources/whatsminer_m30s_m31s_m32_hash/images/202208/16612390968037260.jpg)):
- جهاز القياس المستخدم هو جهاز ملتيمتر رقمي من طراز FLUKE 15B+.
- القيمة المسجلة على شاشة الجهاز هي 0.259V DC.
- وضعية القياس مضبوطة على التحديد التلقائي للجهد المستمر (Auto V DC).
- يشير النص التوضيحي المرفق بالصورة إلى وجود "نقص في إمداد الطاقة للشريحة" (Insufficient power supply to the chip).
- يتم الفحص باستخدام المسبار الأحمر على مكون سطحي (غالباً مكثف أو نقطة اختبار) بجوار رقاقة ASIC.
- مصدر الصورة واللوحة يعود لمركز صيانة ZEUS MINING.

### Source outline (sections I–IV)

- **I. Product overview** — M3x product photos (see images 1–2 in table).
- **II. Maintenance environment** — tool list (links in original article to Zeus shop SKUs); **M3x uses same hashboard test approach as M20S** for software/fixture context.
- **III. Block diagram** — Same overall idea as [M20S hash board repair guide](https://www.zeusbtc.com/manuals/Whatsminer-M20S-Hash-board-Repair-Guide.asp); **one crystal** on M3x; **signal between groups via resistors**; **LDO** supplies **1.8 V** on **pins 7, 8, 13, 14** and **0.9 V** on **pins 6, 15** per domain; **17 V boost** for **last 8 groups** (or **9** on some PCB revisions — red highlight on board); **3.3 V** for **temp sensor + memory**; **level shift** between **3.3 V** and **1.8 V**. Separate **M31S vs M30S** signal-flow diagrams in article images.
- **IV. Case studies** — real error-code workflows; always correlate with **miner daily log**; suggested signal order: **RST → CLK → RXD → TXD**.

**RST level check (from Case 1):** if needed, drive RST high via (fixture / Linux):

```bash
echo 1 > /sys/class/gpio/gpio99/value
# or
echo 1 > /sys/class/gpio/gpio197/value
```

Then probe RST chain **group by group** (compare **1.8 V** vs abnormal **~0.5 V** at level-shifter outputs).

### Board architecture (summary)

- M3x series: M31S, M31S+, M30S, M30S++, M32
- **Same block diagram family as M20S** — group chipset, temperature sensor, boost, memory, level conversion
- **One crystal oscillator** (M20S uses two) — inter-group resistors carry CLK
- Each group LDO: **2× 1.8 V** (pins 7, 8, 13, 14) + **1× 0.9 V** (pins 6, 15)
- **17 V boost** → last **8–9** groups (version-dependent)
- **3.3 V** → sensor + EEPROM / memory

### Tools required (from source)

1. Electric screwdriver  
2. 936A soldering iron  
3. IR preheat / hot plate  
4. Maintenance control board (**CB4-V10** class fixture)  
5. TF card (test firmware)  
6. **12 V DC** for control board  
7. **Adjustable 10 A+** DC bench supply for hashboard  
8. **100 MHz oscilloscope** (mandatory)  
9. Multimeter  
10. Gloves  
11. Tin paste + solder paste  
12. Power + network cables  
13. Tweezers  
14. Computer  
15. ESD mat  
16. **M1** miner shell **with fan** for cooled testing  

### Bench setup

- Main rail: **0.31 V × groups** calculated voltage  
- Control board: **separate 12 V**  
- **CLK** only with **scope**  
- Cooling: **M1 case + fan** during tests  

### Signal transmission

- M31S and M30S **routing differs** — use the correct diagram from the **local mirror** images  
- CLK stops at a group → **check series resistor** at that boundary  

### Board-specific circuits

| Circuit | Location | Purpose |
|---------|----------|---------|
| 17 V boost | Last 8–9 groups (often red on PCB) | Last groups' LDO feeds |
| 3.3 V | Sensor + memory | Sensor / EEPROM power |
| Level converter | 3.3 V ↔ 1.8 V zones | Signal translation |
| Crystal | Single site | CLK source |

### Fault diagnosis — general protocol

1. Confirm input = **0.31 V × groups**  
2. Walk **domain voltages** group by group  
3. Check **1.8 V** and **0.9 V** LDO per group  
4. **Oscilloscope** CLK each group (**~0.15 V** when good, per article)  
5. Trace **RI / RX** direction for opens  
6. Last groups: verify **17 V boost**  

### Case studies (IV) — quick index

| Case | Error / symptom | Key action |
|------|-----------------|------------|
| 1 | 542, RST fail on SM2 | RST chain; `echo 1` gpio99/197; find low RST at level shifter; LDO/group short (e.g. **pin 8 → GND low Ω**) |
| 2 | 542, 104/105 ASIC, missing U9 | Reflow/replace **U9**; verify chip order vs silkscreen |
| 3 | 561/562 SM1/SM2 | Export **daily log** → **error 202** → **PSU** fault |
| 4 | 540 SM0, U109/U119/U111 read fail | **1.8 V** short on group around **U110** → replace U110 |
| 5 | 530 SM0 | **Fan** / cable loose |
| 6 | 236, 255, 268 | **Replace PSU** |
| 7 | 250, 25, 540–542 | **Log** → **202** → **PSU** |
| 8 | 257 + 540–542 | Same — **PSU** from log |

### Common error codes — M30S

| Error Code | Cause | Action |
|------------|-------|--------|
| 530 | Cannot detect SM0 | Fan + cable |
| 235, 258 | PSU output **over-current** protection / warning (LuCI often shows **`0x80040008`**) | Treat as **PSU / load / cabling** before hashboard signal debug |
| 236, 255, 268 | PSU failure / **over-power** | Replace PSU or fix delivery |
| 250, 25, 540, 541, 542 | PSU + chain | Export log, check **202**, replace PSU |
| 257, 540, 541, 542 | PSU failure | Export log first |
| 542 | Chain / RST / ASIC | See case table |

### M30 specific — thermal putty (critical)

- Dual heatsink gap → **HY234 thermal putty** (gel), **not** liquid paste only  
- Liquid paste cannot fill gap → **overheat** → chip failure  

### Checklist before starting

- [ ] Input voltage = **0.31–0.32 V × groups**  
- [ ] **10 A+** adjustable PSU at that voltage  
- [ ] **12 V** for control board  
- [ ] CB4-V10 / PicoBT with **M30/M50** test build  
- [ ] **100 MHz** scope on bench  
- [ ] M1 case + **fan**  
- [ ] ESD mat  
- [ ] **HY234** putty  
- [ ] **KF1922** ASIC spares  
- [ ] MobaXterm / log export path for **error 202** analysis  
