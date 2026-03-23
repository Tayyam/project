export const DATA = {

  models: [
    "Antminer S19 Series",
    "Whatsminer M20 / M30 / M50"
  ],

  navigation: [
    { id: "workflow",        label: "⚙️ مسار العمل" },
    { id: "protocol",        label: "📚 دليل الإصلاح" },
    { id: "purchases",       label: "🛒 المشتريات" },
    { id: "importQuarterly", label: "📦 مستورد 3 شهور" },
    { id: "costPerRepair",   label: "🔬 تكلفة الإصلاح" },
    { id: "pricing",         label: "💰 التسعير والربح" },
    { id: "opex",            label: "📊 المصاريف والتعادل" },
    { id: "volume",          label: "📅 حجم العمل" },
    { id: "monthly",         label: "📈 الإيرادات الشهرية" },
    { id: "pl",              label: "🧾 قائمة الدخل" },
    { id: "roi",             label: "🚀 العائد على الاستثمار" },
  ],

  workflow: [
    {
      step: "01",
      title: "التشخيص الرقمي",
      description: "سحب السجلات (Logs) وتحليلها عبر الذكاء الاصطناعي لتحديد الشريحة أو القطعة التالفة بدقة."
    },
    {
      step: "02",
      title: "المسح الحراري",
      description: "استخدام الكاميرا الحرارية لرؤية نقاط القصر (Short Circuits) أو الحرارة الزائدة فوراً."
    },
    {
      step: "03",
      title: "تتبع الإشارة",
      description: "استخدام الأوسيلوسكوب للتأكد من وصول النبضات الأساسية (CLK, RI, RST)."
    },
    {
      step: "04",
      title: "الجراحة المجهرية",
      description: "التسخين السفلي للوحة (Preheating) ثم الفك والتركيب بالهواء الساخن."
    },
    {
      step: "05",
      title: "الاختبار النهائي",
      description: "تشغيل البوردة على جهاز PicoBT مع مروحة تبريد قوية لضمان القراءة بنسبة 100%."
    }
  ],

  knowledgeBase: {
    file: "asic_repair_knowledge_base.md",
    titleAr: "دليل الإصلاح",
    titleEn: "ASIC Repair Knowledge Base",
    hubNote: "المحتوى مُحدَّث على شكل **فهرس** + ملفات فرعية داخل <code style=\"color:#93c5fd\">asic_repair_kb/components/</code> ومرايا Zeus تحت <code style=\"color:#93c5fd\">asic_repair_kb/sources/</code>. اضغط أي رابط ينتهي بـ <code>.md</code> في الجدول لفتحه هنا. يظهر زر العودة للفهرس عند تصفّح ملف فرعي."
  },

  importedConsumablesQuarterly: {
    title: "خطة الطلب ربع السنوية — مستهلكات مستوردة فقط",
    note: "**مستهلكات ومخزون قطع فقط** (بدون أصول تشغيلية طويلة العمر). شرائح Bitmain/Whatsminer حسب صفحات Zeus الحالية؛ **Tin stencil** ومنصة 90×90 في جدول النوادر وليس بالضرورة هنا. **الجدول مرتب تلقائياً** من الأعلى تكلفة للربع إلى الأقل.",
    baselineMonthlyOperations: 75,
    items: [
      { name: "شرائح ASIC Bitmain (BM1362)", unit: "شريحة", baseMonthlyQty: 42, unitUSD: 3.5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106", planHint: "غالبية هاش S19 / S19j — عدّل حسب مزيج اللوحات." },
      { name: "شرائح ASIC Bitmain (BM1366BS)", unit: "شريحة S19K Pro", baseMonthlyQty: 3, unitUSD: 9, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3202", planHint: "فقط إصلاحات S19K Pro." },
      { name: "شرائح Whatsminer (KF1950 / KF1958)", unit: "شريحة", baseMonthlyQty: 10, unitUSD: 2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1994", planHint: "سلسلة M30 الأرخص — راجع ID=2297 لـ KF1958." },
      { name: "شرائح Whatsminer (KF1968 / KF1973)", unit: "شريحة", baseMonthlyQty: 6, unitUSD: 6.65, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2200", planHint: "متوسط سعر ~$6.65 بين $5.8 و $7.5 — وزّع حسب M50/M60 عندك." },
      { name: "فلاكس لحام ASIC", unit: "حقنة 10g Amtech NC-559-ASM", baseMonthlyQty: 3, unitUSD: 8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277" },
      { name: "معجون قصدير BGA", unit: "عبوة 60g Mechanic 183°C", baseMonthlyQty: 1, unitUSD: 12, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264" },
      { name: "قناع لحام UV", unit: "أنبوبة Mechanic UVH900-LY", baseMonthlyQty: 2, unitUSD: 6.54, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585" },
      { name: "Thermal Putty HY234", unit: "كيس 1kg", baseMonthlyQty: 0.5, unitUSD: 5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638" },
      { name: "كابلات داتا 24-pin (60cm)", unit: "كابل", baseMonthlyQty: 22, unitUSD: 1.8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107" },
      { name: "آيسيهات الكنترول (LDO / PMIC)", unit: "شريحة", baseMonthlyQty: 26, unitUSD: 0.05, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997" },
      { name: "قطع غيار الباور (SI7N65F MOSFET)", unit: "شريحة", baseMonthlyQty: 32, unitUSD: 0.4, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934" },
      { name: "طقم مقاومات SMD", unit: "Sample Book", baseMonthlyQty: 0.5, unitUSD: 7.75, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005008894523897.html" },
      { name: "طقم مكثفات SMD", unit: "Sample Book", baseMonthlyQty: 0.5, unitUSD: 12, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005004657585875.html" }
    ]
  },

  localConsumablesQuarterly: {
    title: "خطة الطلب ربع السنوية — استهلاكات محلية",
    note: "مواد محلية متكررة (العتبة/البستان) محسوبة على نفس حجم العمل الشهري. **تبريد بنش 4×120mm** و**Jumpers مغطاة قصدير** أصبحا من جدول أصول Zeus (`purchases`). الجدول مرتب تلقائياً من الأعلى تكلفة للربع إلى الأقل.",
    baselineMonthlyOperations: 75,
    currency: "EGP",
    items: [
      { name: "كيماويات التنظيف", unit: "IPA 99% (عبوة 500ml)", baseMonthlyQty: 1.2, unitEGP: 220, source: "العتبة / كيماويات" },
      { name: "معجون حراري عام", unit: "GD900 أو ما يعادله", baseMonthlyQty: 1, unitEGP: 250, source: "العتبة / البستان" },
      { name: "حماية أثناء الهواء الساخن", unit: "Kapton + شريط ألومنيوم", baseMonthlyQty: 1, unitEGP: 80, source: "العتبة" },
      { name: "حقن فارغة بسن معدني", unit: "علبة ~10 قطع", baseMonthlyQty: 0.6, unitEGP: 45, source: "صيدليات / محلي" },
      { name: "مشابك تثبيت كابلات", unit: "Silicone Cable Clips", baseMonthlyQty: 0.34, unitEGP: 95, source: "إكسسوارات كمبيوتر" }
    ]
  },

  purchases: {
    pageNote: "تقسيم منطقي: أصول ثابتة (مرة واحدة) → نوادر مستوردة (مخزون تخصصي) → العتبة/البستان (متجدد ومساعد). **تنظيم المعمل** (أدراج، علب ESD، حامل أدوات، ملصقات، إلخ) **مدمج في نفس الجداول** مع مصدر مصر / Zeus أو AliExpress وسعر تقديري. ⚠️ **فخ تقني:** FNIRSI DSO-TC3 ممتاز كـ *tester* للمكثف/الترانزستور، لكن في وضع السكوب عرض النطاق ~&lt;1 MHz — **لا يرى CLK ~25 MHz** على S19/M30؛ إلزامي **أوسيلوسكوب مكتبي ≥100 MHz** — مرجع Zeus: UNI-T UTD2102CEX+ (100 MHz) مع الطلبية، أو Rigol/Siglent محلياً إن وُجد.",

    fixedAssets: {
      title: "① قائمة الأصول — الاستثمار الثابت",
      note: "هذه الأدوات «قلب المعمل»: تُشترى مرة واحدة وتعيش معك لسنوات — بما فيها ملفات اختبار PicoBT (أصول رقمية، ليست مستهلكات). مرتبة حسب مكان الشراء.",
      groups: [
        {
          sourceLabel: "🇨🇳 الصين — Zeus Mining / AliExpress",
          tableHint: "أصول رأسمالية تُشحن من الخارج",
          kind: "usd",
          items: [
            {
              name: "التستر الشامل",
              model: "PicoBT Universal Tester",
              function: "الجهاز الأهم لتشخيص أعطال الهاشبورد على البنش.",
              price: "$459",
              priceBefore: "~$587 (2200 ريال)",
              saving: "وفر $128",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2349",
              source: "Zeus Mining",
              badge: "أوفر"
            },
            {
              name: "باور اختبار الهاشبورد (Bench)",
              model: "Antminer APW12 — إصدارات 1215 (a/b/c/d/e/f/g) حسب الموديل",
              function: "12–15V / 70A+ — التشغيل الحقيقي تحت الحمل مع PicoBT. ⚠️ أكد رقم الإصدار مع مبيعات Zeus (واتساب) — الإصدارات غير متوافقة بين الموديلات.",
              price: "$82",
              priceBefore: "Sugon 3005D لا يكفي (150W vs 1000W+)",
              saving: "صفحة Zeus — اختر الإصدار المناسب لهاشبورداتك",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=306",
              source: "Zeus Mining",
              badge: "ناقص إلزامي"
            },
            {
              name: "الفحص الحراري + ملتيميتر",
              model: "ZOYI ZT-R01 Thermography Multimeter",
              function: "رؤية النقاط الساخنة وقياس الجهد في نفس اللحظة.",
              price: "$105",
              priceBefore: "~$294 (Infiray P2 Pro)",
              saving: "وفر $189 — 2 في 1",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3932",
              source: "Zeus Mining",
              badge: "Game Changer"
            },
            {
              name: "فاحص مكونات (ليس بديل سكوب الهاش)",
              model: "FNIRSI DSO-TC3",
              function: "⚠️ **مهم:** جهاز ممتاز كـ *tester* (مكثف/ترانزستور/دوائر بسيطة) + مولد إشارة. في وضع الأوسيلوسكوب عرض النطاق الفعلي **ضعيف جداً (~&lt;1 MHz)** — إشارة CLK على الهاشبورد **25 MHz+** لن تظهر. **لا تعتمد عليه لفحص CLK على S19/M30.**",
              price: "$44",
              priceBefore: null,
              saving: "احتفظ به للمكونات — سكوب المكتب منفصل (إلزامي للهاش)",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3221",
              source: "Zeus Mining",
              badge: "Tester فقط — ليس CLK"
            },
            {
              name: "محطة هواء ساخن احترافية",
              model: "Quick 861DW 1300W Hot Air Rework Station",
              function: "هواء ساخن احترافي لصيانة الـ ASIC والـ SMD الكثيف.",
              price: "$365",
              priceBefore: "~$375 (Sugon 8610DX محلي)",
              saving: "جودة أعلى + شراء مع الطلبية",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3208",
              source: "Zeus Mining",
              badge: "أفضل"
            },
            {
              name: "منصة IR تسخين شاملة للهاشبورد",
              model: "PUHUI T-8280 Large IR Preheater (28×27cm)",
              function: "تسخين متساوٍ للهاشبورد كاملة — يقلل التقوس أثناء الـ rework.",
              price: "$92",
              priceBefore: "$46 (iTECH HP-B100 على Zeus — سطح 100×100 أصغر؛ PUHUI تغطية أوسع)",
              saving: "تسخين متساوٍ — نسبة تقوس أقل",
              url: "https://ar.aliexpress.com/item/1005010520024198.html",
              source: "AliExpress",
              badge: "ترقية ضرورية"
            },
            {
              name: "ملف اختبار Antminer",
              model: "S19 + S19j Pro Test Files",
              function: "سوفتوير PicoBT لعائلة S19 — بدونها False Errors. أصل رقمي يبقى مع المعمل (ليس مستهلكات).",
              price: "$49 / ملف",
              priceBefore: null,
              saving: "أصل — ترخيص/ملف يُشترى مرة ويُستخدم لسنوات",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3093",
              source: "Zeus Mining",
              badge: "أصل"
            },
            {
              name: "ملف اختبار Whatsminer",
              model: "M30 / M50 / M60 Test File",
              function: "سوفتوير PicoBT لموديلات MicroBT. أصل رقمي مع المعمل.",
              price: "$35",
              priceBefore: null,
              saving: "أصل — نفس منطق ملفات Antminer",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3744",
              source: "Zeus Mining",
              badge: "أصل"
            },
            {
              name: "أوسيلوسكوب مكتبي (فحص CLK الهاش)",
              model: "UNI-T UTD2102CEX+ — 2CH / 100 MHz / 1 GS/s",
              function: "CLK على S19/M30 ~25 MHz+ — **سكوب مكتبي ≥100 MHz إلزامي**؛ لا تعتمد على TC3 في وضع السكوب.",
              price: "$321",
              priceBefore: "Rigol/Siglent محلي ~28k ج",
              saving: "مرجع Zeus — اختر فيشة الطاقة على الصفحة",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1972",
              source: "Zeus Mining",
              badge: "إلزامي · CLK"
            },
            {
              name: "مبرمج PIC (هاش + باور Antminer)",
              model: "PICKit 3.5",
              function: "حرق/قراءة PIC على هاشبورد وباور Antminer — مع MPLAB IPE؛ أصل أرخص من شراء PICkit محلي غير موثوق.",
              price: "$19",
              priceBefore: "PICkit محلي ~3200 ج",
              saving: "Zeus — استرداد ذاتي للفيرموير مقارنة بـ kit3",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=137",
              source: "Zeus Mining",
              badge: "برمجة PIC"
            },
            {
              name: "كابل برمجة EEPROM (Hashboard decode)",
              model: "Hashboard decoding tool — واجهة 18-pin → USB",
              function: "إعادة كتابة EEPROM عند خلط لوحات أو أخطاء EEPROM في اللوج بعد الإصلاح؛ Antminer + Whatsminer حسب صفحة Zeus.",
              price: "$15",
              priceBefore: null,
              saving: "أداة Zeus الرسمية لخط البيانات",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1560",
              source: "Zeus Mining",
              badge: "EEPROM"
            },
            {
              name: "باور DC قابل للضبط (هاشبورد)",
              model: "WANPTEK KPS3030D — 30V 30A 900W + كابلات تمساح 6mm",
              function: "تغذية هاشبورد لقياس الجهد بدل الاعتماد على الباور الأصلي فقط؛ اختر الموديل/الكابلات على الصفحة (~**$230** مع كابلات 6mm حسب اختيارك).",
              price: "$230",
              priceBefore: "Sugon 3005D للكنترول فقط (ضعيف أمام الهاش)",
              saving: "Zeus — مرجع لسلسلة KPS",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2184",
              source: "Zeus Mining",
              badge: "Bench DC"
            },
            {
              name: "منصة تسخين PCB (صغيرة)",
              model: "iTECH HP-B100 (100×100mm)",
              function: "تسخين أولي للوح ألومنيوم/هاش قبل الهواء الساخن — أصغر من PUHUI T-8280؛ راقب التقوس على اللوح الكبيرة.",
              price: "$46",
              priceBefore: null,
              saving: "Zeus — بديل اقتصادي لسطح صغير",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3799",
              source: "Zeus Mining",
              badge: "Preheater"
            },
            {
              name: "محطة لحام 2 في 1",
              model: "Quick 707D+ أو 709D+ — هواء ساخن + كاوية",
              function: "إصلاح هاش وباور ASIC — اختر 707D+ (800W هواء) أو 709D+ أقوى على نفس الصفحة؛ **لا يستبدل 861DW** إن احتجت هواء أقصى للـ BGA الكبير.",
              price: "$90",
              priceBefore: null,
              saving: "Zeus — توفير مساحة مقابل محطتين منفصلتين",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3609",
              source: "Zeus Mining",
              badge: "2-in-1"
            },
            {
              name: "تبريد اختبار الهاش (4×120mm)",
              model: "Adjustable speed dual fan — 4× 120mm + منظم سرعة",
              function: "هواء قوي تحت الهاشبورد أثناء PicoBT — بديل تجميع مراوح محلية يدوياً.",
              price: "$12.9",
              priceBefore: "4× مروحة + باور + دكت محلي ~2600 ج",
              saving: "Zeus — جاهز بمنظم سرعة",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2684",
              source: "Zeus Mining",
              badge: "تبريد بنش"
            },
            {
              name: "منفضة ضغط (تنظيف)",
              model: "F10 / F8 mini turbo violent fan — غبار وهاش",
              function: "تنظيف غبار الهاش والمراوح والشاسيه؛ Zeus يرسل F10 افتراضياً لاحقاً.",
              price: "$22",
              priceBefore: null,
              saving: "أداة صيانة يدوية — شحن مع الطلبية",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3717",
              source: "Zeus Mining",
              badge: "تنظيف"
            },
            {
              name: "أسلاك جسر للوحة (مغطاة قصدير)",
              model: "Motherboard jumper 10cm / 15cm — عبوة ~100 عود",
              function: "جسور لحام واختبار للـ PCB؛ ألوان عشوائية حسب Zeus — تُستخدم مع PICKit ونقاط الاختبار.",
              price: "$1.2",
              priceBefore: null,
              saving: "MOQ 1 — أضفها لنفس شحنة Zeus",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2461",
              source: "Zeus Mining",
              badge: "توصيل"
            }
          ]
        },
        {
          sourceLabel: "🏪 مول البستان",
          tableHint: "أدوات ثقيلة / كهرباء معملية",
          kind: "egp",
          items: [
            { name: "ميكروسكوب رقمي", model: "Andonstar AD207 (7 إنش)", function: "رؤية اللحامات والمسارات المقطوعة بدقة.", price: 7000 },
            { name: "كاوية هاشبورد", model: "Quick 205H (150W) أو Sugon T3602", function: "القوة المطلوبة لسحب/لحام الهاشبورد — ليس للكنترول فقط.", price: 4000 },
            { name: "Tips للـ Quick 205H", model: "Chisel T10 + Fine Point T2 + Bevel K2", function: "رأس عريض للهاشبورد ورأس دقيق للـ SMD — الـ tip الغلط يحرق الـ pad.", price: 350 },
            { name: "باور سبلاي معملي (كنترول)", model: "Sugon 3005D (30V / 5A)", function: "حقن فولت واختبار دوائر الكنترول — لا يشغّل هاشبورد S19 على PicoBT كاملاً؛ **للهاش استخدم WANPTEK من Zeus.**", price: 4700 },
            { name: "سنون ملتيميتر دقيقة", model: "Steel Needle Probes / حامل سن رفيع", function: "قياس بين رجلي شريحة ASIC والـ test points الضيقة — السن العادي يعمل قفلة.", price: 350 },
            { name: "قصدير لحام خالي من الرصاص", model: "Alpha أو Kester lead-free", function: "هاش S19 lead-free — خلط 60/40 في نقاط حساسة قد يسبب مشاكل توصيل حراري/موثوقية.", price: 900 },
            { name: "منظف بورد مائي", model: "Board Wash / Aqueous flux cleaner", function: "بعد الشغل: أنظف من IPA وحده — يقلل بقايا بيضاء أحياناً مع الفلاكس.", price: 450 },
            { name: "حصيرة سيليكون مغناطيسية", model: "Magnetic Heat-Insulation Mat — حماية سطح المكتب + تثبيت مسامير", function: "سيليكون مقاوم للحرارة مع مناطق مغناطيس للمسامير أثناء فك الجهاز؛ يحمي من الهوت إير.", price: 480 }
          ]
        },
        {
          sourceLabel: "📍 العتبة",
          tableHint: "معدات مساعدة + تنظيم مخزون وسير عمل (محلياً)",
          kind: "egp",
          items: [
            { name: "غسالة ألتراسونيك", model: "Ultrasonic Cleaner سعة ~2L", function: "تنظيف نهائي للبوردة من الفلاكس والأوساخ بعد الشغل.", price: 2200 },
            { name: "زجاجة مضخة للـ IPA", model: "Push-down Dispenser — محلات صيانة موبايل بالعتبة", function: "تقليل تبخر الكحول 99% وسحب كمية صغيرة بضغطة واحدة أثناء التنظيف.", price: 75 },
            { name: "حقن فارغة بسن معدني", model: "علبة ~10 قطع — صيدليات / محلات صيانة", function: "تعبئة الفلاكس وتوزيع دقيق تحت الشريحة أو على الـ pads.", price: 45 },
            { name: "صناديق بلاستيك ملونة (سير عمل)", model: "مجموعة ~6 صناديق — أدوات منزلية بالعتبة", function: "لون لكل حالة (مثلاً أحمر: انتظار / أخضر: جاهز) لتفادي خلط البوردات وقطع الغيار.", price: 220 },
            { name: "مشابك تثبيت كابلات", model: "Silicone Adhesive Cable Clips — إكسسوارات كمبيوتر بالعتبة", function: "تثبيت كابلات PicoBT والباور على حافة المكتب وتقليل التشابك.", price: 95 },
            { name: "لمبة سيري أمان للباور", model: "100W bulb in series + حامل + قاعدة توصيل", function: "أبسط وسيلة أمان عند أول تشغيل APW12 بعد الإصلاح لتقليل مخاطر القفلة/الانفجار.", price: 180 }
          ]
        }
      ]
    },

    importedSpecialty: {
      title: "② النوادر المستوردة — مخزون تخصصي",
      note: "أشياء صغيرة لكنها «الخلطة السرية»: لا يُستبدل أغلبها ببديل محلي رخيص دون أن تتأثر جودة الإصلاح أو عمر الهاشبورد. **شرائح Bitmain/Whatsminer** و**Tin stencil لكل جيل شريحة** من Zeus بدل شبلونات S19/M30 العامة؛ منصة 90×90 اختيارية كمنصة عامة.",
      location: "الصين — Zeus Mining / AliExpress",
      currency: "USD",
      items: [
        {
          name: "شرائح ASIC Bitmain (BM1362)",
          model: "BM1362AK (ومشتقات BM1362AA/AC/AI/AJ حسب اللوحة)",
          function: "S19 / S19j / S19j Pro / سلسلة Hydro المذكورة على صفحة Zeus — اختر الرقم حسب جدول التوافق.",
          price: "$3.5 / شريحة",
          priceBefore: null,
          saving: "صفحة Zeus — MOQ 10",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC Bitmain (S19K Pro)",
          model: "BM1366BS",
          function: "استبدال شريحة هاشبورد Antminer S19K Pro.",
          price: "$9 / شريحة",
          priceBefore: null,
          saving: "Zeus — تطابق موديل اللوحة",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3202",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC Whatsminer (KF1950)",
          model: "KF1950-03C",
          function: "هاشبورد Whatsminer M30 series.",
          price: "$2 / شريحة",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1994",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC Whatsminer (KF1958)",
          model: "KF1958",
          function: "M30s / M30s+ / M30+ hash board.",
          price: "$2 / شريحة",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2297",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC Whatsminer (KF1968)",
          model: "KF1968E-03C",
          function: "M50 / M50S / M30s++ / M30 / M53 / M53S.",
          price: "$5.8 / شريحة",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2200",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC Whatsminer (KF1973)",
          model: "KF1973E-03C",
          function: "M50 / M50S / M53 / M60S.",
          price: "$7.5 / شريحة",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2283",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "فلاكس لحام ASIC",
          model: "Amtech NC-559-ASM — 10g أصلي (حقنة) أو 100g صيني",
          function: "لتعويم الشريحة ولحام صحيح — الأصلي 10g هو المفضل للـ ASIC؛ عبوة 100g متاحة على نفس صفحة Zeus.",
          price: "$8",
          priceBefore: "فلاكس محلي مضروب",
          saving: "10g أصلي — السعر المرجعي على Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277",
          source: "Zeus Mining",
          badge: "الخلطة السرية"
        },
        {
          name: "معجون قصدير BGA",
          model: "Mechanic Solder Paste 183°C — 60g أو 500g",
          function: "Reballing مضمون — درجة انصهار مناسبة للـ ASIC؛ أوزان متعددة على Zeus.",
          price: "$12",
          priceBefore: "قصدير محلي درجة انصهار عالية",
          saving: "60g — السعر المرجعي على Zeus (يوجد 500g)",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264",
          source: "Zeus Mining",
          badge: "الخلطة السرية"
        },
        {
          name: "قناع لحام UV",
          model: "Mechanic UVH900-LY",
          function: "عند احتراق أو رفع الـ pad: يحمي الـ traces والـ pads بعد الإصلاح — بدونه كثير من الترميمات تبقى مؤقتة. يتصلب في ثوانٍ تحت مصباح UV.",
          price: "$6.54",
          priceBefore: null,
          saving: "عزل دائم للمسار بعد إعادة اللحام",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585",
          source: "Zeus Mining",
          badge: "ناقص إلزامي"
        },
        {
          name: "Thermal Putty (معجون جل)",
          model: "HY234 Hash Board Thermal Putty 1kg",
          function: "ضروري لموديلات S19 / M30 لملء الفراغات بين المشتتات المزدوجة.",
          price: "$5",
          priceBefore: null,
          saving: "توزيع حراري أفضل من المعجون السائل في الفجوات",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638",
          source: "Zeus Mining",
          badge: "S19/M30"
        },
        {
          name: "Tin tool — Whatsminer KF1950",
          model: "Tin tool / Tin stencil",
          function: "تنقيط/تجهيز لحام لشرائح KF1950 على حسب الدليل.",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus — مع الشريحة المناسبة",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2292",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "Tin tool — Whatsminer KF1958",
          model: "Tin stencil",
          function: "تنقيط لشرائح KF1958.",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2293",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "Tin tool — Whatsminer KF1968",
          model: "Tin stencil",
          function: "تنقيط لشرائح KF1968/KF1968E.",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2295",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "Tin tool — Whatsminer KF1973",
          model: "Tin stencil",
          function: "تنقيط لشرائح KF1973E وما يعادلها حسب الصفحة.",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2296",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "Tin tool — Antminer BM1362 (S19j / S19j Pro)",
          model: "Tin stencil — سلسلة BM1362AK",
          function: "تنقيط لشرائح BM1362 على هاش S19j / S19j Pro.",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2344",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "Tin stencil — Antminer BM1366BS",
          model: "tool tin stencil",
          function: "مساعد تنقيط لشريحة BM1366BS (S19K Pro).",
          price: "$3.5",
          priceBefore: null,
          saving: "Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2691",
          source: "Zeus Mining",
          badge: "Tin stencil"
        },
        {
          name: "منصة BGA 90×90 (Tinning)",
          model: "BGA 90x90 — Only tinning tool",
          function: "منصة عامة لتثبيت الشريحة وتنقيط الكرات؛ **السعر لخيار المنصة فقط** على Zeus — باقي الـ Kits اختيارية من نفس الصفحة.",
          price: "$17.9",
          priceBefore: null,
          saving: "صفحة Zeus ID=1829 — اختر الـ Kit المناسب",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1829",
          source: "Zeus Mining",
          badge: "منصة عامة"
        },
        {
          name: "مخزون كابلات داتا",
          model: "Data line data cable 24 pin — 60cm",
          function: "كابلات استهلاكية للبيع والتبديل السريع.",
          price: "$1.8 / كابل",
          priceBefore: null,
          saving: "سعر محدث حسب النوع 24-pin / 60cm",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107",
          source: "Zeus Mining",
          badge: "أوفر"
        },
        {
          name: "آيسيهات الكنترول",
          model: "LDOs (0.8V / 1.8V / 3.3V) & PMIC",
          function: "مخزون إصلاح كنترول بورد.",
          price: "$0.05 / chip",
          priceBefore: "~$107 (400 ريال)",
          saving: "وفر حتى 100%",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997",
          source: "Zeus Mining",
          badge: "أوفر"
        },
        {
          name: "قطع غيار الباور",
          model: "SI7N65F 650V 7A N-channel MOSFET",
          function: "مخزون صيانة باور سبلاي التعدين.",
          price: "$0.4 / chip",
          priceBefore: null,
          saving: "سعر محدث لشريحة SI7N65F",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934",
          source: "Zeus Mining",
          badge: "أوفر"
        },
        {
          name: "طقم مقاومات SMD",
          model: "Resistor Kit Sample Book (0201/0402/0603/0805/1206)",
          function: "Zeus §I.5 S19 — المقاومات حول الـ ASIC تتلف مع الحرارة؛ حجم رملي — اشتِ sets جاهزة.",
          price: "$7.75",
          priceBefore: null,
          saving: "سعر أقل + قيم كثيرة في كتاب واحد",
          url: "https://ar.aliexpress.com/item/1005008894523897.html",
          source: "AliExpress",
          badge: "S19 أساسي"
        },
        {
          name: "طقم مكثفات SMD",
          model: "Capacitor Sample Book (01005/0201/0402/0603/0805/1206)",
          function: "نفس منطق الهاش S19 — فلترة بجانب الشرائح؛ أضف 2.2µF كما يوصي Zeus للتكملة.",
          price: "$12",
          priceBefore: null,
          saving: "كتاب قيم متعددة بسعر اقتصادي",
          url: "https://ar.aliexpress.com/item/1005004657585875.html",
          source: "AliExpress",
          badge: "S19 أساسي"
        },
        
        
        {
          name: "علب تخزين Anti-static (ESD)",
          model: "طقم علب موصولة / أدراج ESD للـ ASIC — Zeus غالباً لا يبيع الطقم؛ AliExpress",
          function: "حفظ شرائح ASIC الغالية بعيداً عن الكهرباء الساكنة والرطوبة؛ **أساسي مع مخزون شرائح.**",
          price: "$18 / طقم (~10 علب)",
          priceBefore: null,
          saving: "سعر تقديري شحن من الصين — قارن البائعين (ESD safe)",
          url: "https://www.aliexpress.com/w/wholesale-esd-anti-static-storage-box-smd.html",
          source: "AliExpress",
          badge: "تنظيم · ASIC"
        },
        
      ]
    },

    localSupplies: {
      title: "③ العتبة ومول البستان — متجدد ومساعد",
      note: "كل ما هو متاح في مصر: مواد متجددة، كيماويات، كهرباء بسيطة، وإكسسوارات يومية — أقل شحن وأسرع تعويض. **تبريد اختبار الهاش، سكوب 100 MHz، PICkit، باور DC للهاش، منفضة F10، وطقم Jumpers Zeus** انقلت لقائمة أصول Zeus في `① قائمة الأصول`.",
      location: "مصر — العتبة / مول البستان / شركات كيماويات",
      currency: "EGP",
      items: [
        { name: "كيماويات التنظيف", model: "IPA 99% (≈500ml) — شركات كيماويات بالعتبة", function: "تنظيف الفلاكس والبادز — 99% فقط وليس 70%.", price: 220 },
        { name: "حماية أثناء الهواء الساخن", model: "شريط Kapton أصفر + شريط ألومنيوم", function: "عزل الحرارة وحماية الـ SMD المجاورة.", price: 80 },
        { name: "كهرباء البنش", model: "أسلاك نحاس AWG6 + ترامل حلقية + كابلات باور أصلية", function: "ربط APW12 بالهاشبورد بأمان — يفصلها كهربائي ~100 ج.", price: 150 },
        { name: "مقاومة تفريغ (سلامة البنش)", model: "Discharge Resistor — 25Ω / 100W اسمنتية — محلياً", function: "✗ مطلوب لأمان باور الاختبار على البنش: تفريغ تدريجي للمكثفات الكبيرة بعد الفصل وتقليل صدمات/شرر عند التعامل مع APW12 أو التغذية العالية. اشترِها من محلات المقاومات والكهرباء (العتبة/البستان).", price: 100 },
        { name: "معجون حراري عام", model: "GD900 أو ما يعادله (سائل)", function: "للاستخدام العام على المشتتات — ليس بديل Thermal Putty في الفجوات.", price: 250 },
        { name: "قياس وبرمجة بسيطة", model: "USB to TTL (UART للكنترول)", function: "سيريال PuTTY/MobaXterm؛ **أسلاك جسر مغطاة قصدير (100 عود)** مع طلبية Zeus — راجع `① أصول Zeus` (Motherboard jumper ID=2461).", price: 250 },
        { name: "Recovery كروت MicroSD (صناعية)", model: "8–16 GB × 5–10 — Industrial / High Endurance (Amazon / محلي)", function: "تحديث FPGA على PicoBT/CB4، استعادة كنترول S19، صور اختبار — **لا تستخدم كرت موبايل رخيص للإنتاج.**", price: 432 },
        { name: "سلك جسر فائق الدقة", model: "Jumper / Enameled Wire قطر 0.1mm — العتبة / مول البستان", function: "جسور للمسارات المقطوعة أو الـ pads الضيقة؛ يُباع بالمتر أو بكرة صغيرة من محلات الكيماويات والإلكترونيات.", price: 120 },
        { name: "لمبة UV لتجفيف الماسك", model: "UV Curing Lamp صغيرة (365-405nm)", function: "تجفيف UV Mask بعد عمل Jumper خلال دقيقة تقريباً بدل انتظار طويل.", price: 320 },
        { name: "بخاخ تنظيف تلامسات", model: "WD-40 Specialist Contact Cleaner أو مكافئ", function: "تنظيف سوكيتات الداتا والمناطق المتأكسدة/المكربنة قبل إعادة الاختبار.", price: 280 },
        { name: "سلك تنظيف الكاوية", model: "Brass Wool Cup", function: "أفضل من السفنجة المبلولة للحفاظ على حرارة السن وإطالة عمر الـ tip.", price: 90 },
        { name: "شفاط قصدير يدوي", model: "Desoldering Pump (SS-02 أو مكافئ)", function: "فك مكونات PSU الأكبر وسحب القصدير من الثقوب بشكل أنظف.", price: 420 },
        { name: "فرش تنظيف ESD", model: "طقم 3-5 أحجام (Anti-static Brushes)", function: "تنظيف الفلاكس وبواقي الكربون حول الـ ASIC ودوائر الباور بدون شحنات ساكنة.", price: 220 },
        { name: "مناديل خالية من الوبر", model: "Lint-free Wipes", function: "تنظيف سطح الـ ASIC والـ pads قبل وضع Thermal Putty أو المعجون.", price: 140 }
      ]
    }
  },

  costPerRepair: [
    {
      category: "الهاشبورد",
      materials: "~1.5 شريحة @ ~$3.5 + HY234/معجون بالشبلونة + فلاكس Amtech + Paste + مستهلكات تنظيف — تقدير **$9.8** للوحة متوسطة",
      oldCostUSD: 22,
      avgCostUSD: 9.8,
      savingReason: "تحديث حسب سعر BM1362 الجديد ($3.5) مع متوسط استهلاك معجون/فلاكس/تنظيف فعلي"
    },
    {
      category: "الباور سبلاي",
      materials: "2–3 MOSFET (SI7N65F ~$0.4) + آيسي تحكم + قصدير/فلاكس + منظف — تقدير **$3.9**",
      oldCostUSD: 15,
      avgCostUSD: 3.9,
      savingReason: "سعر MOSFET المحدث ($0.4) خفّض متوسط تكلفة صيانة الباور لكل وحدة"
    },
    {
      category: "الكنترول بورد",
      materials: "2 LDO + فلاكس/قصدير + استهلاك بسيط من أسلاك Dupont عند الحاجة — تقدير **$1.3**",
      oldCostUSD: 5,
      avgCostUSD: 1.3,
      savingReason: "LDO منخفض التكلفة مع استهلاك لحام محدود في أغلب أعطال الكنترول"
    },
    {
      category: "الكابلات",
      materials: "كابل داتا 24-pin / 60cm — تقدير **$1.8**",
      oldCostUSD: 7,
      avgCostUSD: 1.8,
      savingReason: "السعر محدث لبند الكابل الجديد 24-pin بطول 60cm"
    }
  ],

  marketerCommissionPercent: 20,

  pricing: [
    { service: "صيانة الهاشبورد",    clientPrice: 100, materialCost: 9.8, marketerCommission: 20,  netProfit: 70.2 },
    { service: "صيانة الباور سبلاي", clientPrice: 80,  materialCost: 3.9, marketerCommission: 16,  netProfit: 60.1 },
    { service: "إحياء الكنترول بورد",clientPrice: 50,  materialCost: 1.3, marketerCommission: 10,  netProfit: 38.7 },
    { service: "تغيير كابل داتا",    clientPrice: 15,  materialCost: 1.8, marketerCommission: 3,   netProfit: 10.2 }
  ],

  opex: {
    currency: "EGP",
    monthly: [
      { label: "الإيجار",                          amount: 5000  },
      { label: "كهرباء وإنترنت ومستهلكات عامة",   amount: 2000  },
      { label: "راتب المهندس (ثابت)",              amount: 27000 }
    ],
    totalMonthly: 34000,
    setupCost: 10000,
    breakEvenNote: "بعد خصم خامات الهاشبورد (~$9.8) وعمولة المسوق (20% من $100 = $20)، صافي اللوحة للمركز ≈ $70.2. لتغطية المصاريف الثابتة (~630 $ شهرياً ≈ 34,000 ج) يحتاج ≈ 9 لوحات هاشبورد شهرياً (بسعر صرف 54 ج/$).",
    breakEvenUnits: 9
  },

  monthlyVolume: {
    workDays: 25,
    hoursPerDay: 8,
    totalHours: 200,
    services: [
      { type: "صيانة هاشبورد",      monthlyCount: 30, timePerUnit: "25–30 دقيقة", totalHours: 13.5, improvement: "كان 45 دق — بفضل قوالب المعجون والـ ZOYI" },
      { type: "صيانة باور سبلاي",   monthlyCount: 15, timePerUnit: "60 دقيقة",    totalHours: 15,   improvement: null },
      { type: "إحياء كنترول بورد",  monthlyCount: 10, timePerUnit: "20 دقيقة",    totalHours: 3.5,  improvement: "كان 30 دق — بفضل ZOYI + سكوب مكتبي + لحام دقيق + برمجة عند الحاجة" },
      { type: "بيع/تغيير كابلات",   monthlyCount: 20, timePerUnit: "10 دقائق",    totalHours: 3.5,  improvement: null }
    ],
    totalOperations: 75,
    totalEffectiveHours: 35.5,
    capacityUsedPercent: 18,
    dailyCapacity: "6–8 لوحات هاشبورد يومياً",
    note: "بفضل القوالب والـ ZOYI، انخفض وقت الهاشبورد من 45 إلى 25-30 دقيقة"
  },

  monthlyRevenue: [
    { service: "الهاشبورد",      count: 30, pricePerUnit: 100, totalRevenue: 3000, costPerUnit: 9.8, totalCost: 294,  marketerTotal: 600  },
    { service: "الباور سبلاي",   count: 15, pricePerUnit: 80,  totalRevenue: 1200, costPerUnit: 3.9, totalCost: 58.5, marketerTotal: 240  },
    { service: "الكنترول بورد",  count: 10, pricePerUnit: 50,  totalRevenue: 500,  costPerUnit: 1.3, totalCost: 13,   marketerTotal: 100  },
    { service: "الكابلات",       count: 20, pricePerUnit: 15,  totalRevenue: 300,  costPerUnit: 1.8, totalCost: 36,   marketerTotal: 60   }
  ],

  pl: {
    currency: "USD / EGP",
    exchangeRate: 54,
    exchangeNote: "عمولة المسوق 20% تُخصم من إيراد كل خدمة قبل حساب صافي الربح التشغيلي. التحويل: 1 USD = 54 EGP",
    grossRevenue:         { usd: 5000,   egp: 270000 },
    marketerCommission:   { usd: 1000,   egp: 54000  },
    cogs:                 { usd: 356,    egp: 19224  },
    grossProfit:          { usd: 3644,   egp: 196776 },
    opex:                 { usd: 629.63, egp: 34000  },
    netProfit:            { usd: 3014.37,egp: 162776 }
  },

  roi: {
    capex: {
      extraItems: [
        { label: "تجهيزات المحل (تشطيب + أثاث)", usd: 200 },
        { label: "جمارك + شحن منتجات من الخارج (مرة واحدة)", usd: 500 }
      ],
      note: "CAPEX يشمل تقدير جمارك وشحن لمرة واحدة ($500) + **UNI-T UTD2102CEX+ (100 MHz)** أو سكوب محلي + TC3 كـ tester + ZOYI + PICKit 3.5 Zeus + كابل EEPROM + WANPTEK KPS + تبريد 4×120mm Zeus + Quick 205H/707D+ + 861DW + AD207 + PUHUI T-8280 / HP-B100."
    },
    annualNetProfit:      { usd: 36172.44, egp: 1953312 },
    monthlyNetProfit:     { usd: 3014.37,  egp: 162776  },
    paybackDays:          24,
    roiPercent:           1470
  }

};

