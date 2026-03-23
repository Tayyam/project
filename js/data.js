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
    note: "**مستهلكات ومخزون قطع فقط** (بدون أصول تشغيلية مثل شبلونات/منصة reballing/وصلة APW12/علب تخزين — تبقى في جدول النوادر أو الأصول). تقديرات شهرية مرتبطة بحجم العمل (المرجع: 75 عملية/شهر). **الجدول مرتب تلقائياً** من الأعلى تكلفة للربع إلى الأقل. عدّل `baseMonthlyQty` في `data.js` حسب واقعك.",
    baselineMonthlyOperations: 75,
    items: [
      { name: "شرائح ASIC (Bitmain)", unit: "شريحة (BM1398 / BM1362)", baseMonthlyQty: 45, unitUSD: 3, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106", planHint: "مرتبط بهاش Antminer — يزيد مع نسبة الهاش في الحجم." },
      { name: "شرائح ASIC (MicroBT)", unit: "شريحة (KF1922)", baseMonthlyQty: 16, unitUSD: 2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2148", planHint: "مرتبط بهاش Whatsminer." },
      { name: "فلاكس لحام ASIC", unit: "حقنة 10g Amtech NC-559-ASM", baseMonthlyQty: 3, unitUSD: 8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277" },
      { name: "معجون قصدير BGA", unit: "عبوة 60g Mechanic 183°C", baseMonthlyQty: 1, unitUSD: 12, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264" },
      { name: "قناع لحام UV", unit: "أنبوبة Mechanic UVH900-LY", baseMonthlyQty: 2, unitUSD: 3, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585" },
      { name: "Thermal Putty HY234", unit: "كيس 1kg", baseMonthlyQty: 0.5, unitUSD: 5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638" },
      { name: "كابلات داتا (10-pin / 12-pin)", unit: "كابل", baseMonthlyQty: 22, unitUSD: 0.2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107" },
      { name: "آيسيهات الكنترول (LDO / PMIC)", unit: "شريحة", baseMonthlyQty: 26, unitUSD: 0.05, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997" },
      { name: "قطع غيار الباور (MOSFET / PWM)", unit: "شريحة", baseMonthlyQty: 32, unitUSD: 1, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934" },
      { name: "طقم مقاومات 0402", unit: "طقم Zeus / AliExpress", baseMonthlyQty: 0.5, unitUSD: 18, source: "AliExpress", url: "https://www.aliexpress.com/w/wholesale-0402-resistor-kit-smd.html" },
      { name: "طقم مكثفات 0402", unit: "طقم", baseMonthlyQty: 0.5, unitUSD: 18, source: "AliExpress", url: "https://www.aliexpress.com/w/wholesale-0402-capacitor-kit-smd.html" },
      { name: "كرات لحام BGA 0.4mm", unit: "علبة / عبوة", baseMonthlyQty: 1, unitUSD: 15, source: "AliExpress", url: "https://www.aliexpress.com/w/wholesale-0.4mm-solder-balls-bga.html" },
      { name: "أكياس ESD للشحنات", unit: "عبوة 100 كيس", baseMonthlyQty: 1, unitUSD: 12, source: "AliExpress", url: "https://www.aliexpress.com/w/wholesale-anti-static-esd-bag-pcb.html" }
    ]
  },

  localConsumablesQuarterly: {
    title: "خطة الطلب ربع السنوية — استهلاكات محلية",
    note: "مواد محلية متكررة (العتبة/البستان) محسوبة على نفس حجم العمل الشهري. الجدول مرتب تلقائياً من الأعلى تكلفة للربع إلى الأقل.",
    baselineMonthlyOperations: 75,
    currency: "EGP",
    items: [
      { name: "كيماويات التنظيف", unit: "IPA 99% (عبوة 500ml)", baseMonthlyQty: 1.2, unitEGP: 220, source: "العتبة / كيماويات" },
      { name: "تبريد البنش", unit: "مروحة تعدين 120mm + باور 12V", baseMonthlyQty: 0.34, unitEGP: 1400, source: "البستان / مستعمل" },
      { name: "معجون حراري عام", unit: "GD900 أو ما يعادله", baseMonthlyQty: 1, unitEGP: 250, source: "العتبة / البستان" },
      { name: "حماية أثناء الهواء الساخن", unit: "Kapton + شريط ألومنيوم", baseMonthlyQty: 1, unitEGP: 80, source: "العتبة" },
      { name: "أسلاك توصيل/قياس صغيرة", unit: "Dupont + أسلاك استبدال", baseMonthlyQty: 0.4, unitEGP: 350, source: "البستان" },
      { name: "حقن فارغة بسن معدني", unit: "علبة ~10 قطع", baseMonthlyQty: 0.6, unitEGP: 45, source: "صيدليات / محلي" },
      { name: "مشابك تثبيت كابلات", unit: "Silicone Cable Clips", baseMonthlyQty: 0.34, unitEGP: 95, source: "إكسسوارات كمبيوتر" }
    ]
  },

  purchases: {
    pageNote: "تقسيم منطقي: أصول ثابتة (مرة واحدة) → نوادر مستوردة (مخزون تخصصي) → العتبة/البستان (متجدد ومساعد). **تنظيم المعمل** (أدراج، علب ESD، حامل أدوات، ملصقات، إلخ) **مدمج في نفس الجداول** مع مصدر مصر / Zeus أو AliExpress وسعر تقديري. ⚠️ **فخ تقني:** FNIRSI DSO-TC3 ممتاز كـ *tester* للمكثف/الترانزستور، لكن في وضع السكوب عرض النطاق ~&lt;1 MHz — **لا يرى CLK ~25 MHz** على S19/M30؛ إلزامي شراء **أوسيلوسكوب مكتبي ≥100 MHz** (Rigol/Siglent من البستان/النخيلي).",

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
              price: "$115",
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
              price: "$135",
              priceBefore: "$46 (iTECH HP-B100 — صغيرة تسبب Warping)",
              saving: "تسخين متساوٍ — نسبة تقوس أقل",
              url: "https://www.aliexpress.com/w/wholesale-PUHUI-T-8280-preheater.html",
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
            }
          ]
        },
        {
          sourceLabel: "🏪 مول البستان",
          tableHint: "أدوات ثقيلة / كهرباء معملية",
          kind: "egp",
          items: [
            { name: "أوسيلوسكوب مكتبي (إلزامي لفحص CLK الهاش)", model: "Rigol DS1102Z-E أو Siglent — عرض نطاق ≥ 100 MHz", function: "CLK على S19/M30 يتجاوز 25 MHz — **بدون هذا لا يوجد تشخيص إشارة حقيقي للهاشبورد.** متوفر مول البستان / النخيلي.", price: 28000 },
            { name: "ميكروسكوب رقمي", model: "Andonstar AD207 (7 إنش)", function: "رؤية اللحامات والمسارات المقطوعة بدقة.", price: 7000 },
            { name: "كاوية هاشبورد", model: "Quick 205H (150W) أو Sugon T3602", function: "القوة المطلوبة لسحب/لحام الهاشبورد — ليس للكنترول فقط.", price: 4000 },
            { name: "Tips للـ Quick 205H", model: "Chisel T10 + Fine Point T2 + Bevel K2", function: "رأس عريض للهاشبورد ورأس دقيق للـ SMD — الـ tip الغلط يحرق الـ pad.", price: 350 },
            { name: "باور سبلاي معملي", model: "Sugon 3005D (30V / 5A)", function: "حقن فولت واختبار دوائر الكنترول — لا يشغّل هاشبورد S19 على PicoBT.", price: 4700 },
            { name: "مبرمج PIC (S19)", model: "PICkit 3 أو PICkit 4 + تثبيت MPLAB IPE", function: "برمجة PIC16F1704 على هاشبورد S19 — بدون سوفت سليم البوردة لا تكتشف شرائح حتى لو الهارد سليم.", price: 3200 },
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
            { name: "تبريد اختبار الهاش (ضروري)", model: "4× مراوح قوية + Duct لتدفق هواء مباشر", function: "تشغيل الهاشبورد بدون تبريد قوي يعرّض الشرائح للتلف السريع أثناء الاختبار.", price: 2600 },
            { name: "لمبة سيري أمان للباور", model: "100W bulb in series + حامل + قاعدة توصيل", function: "أبسط وسيلة أمان عند أول تشغيل APW12 بعد الإصلاح لتقليل مخاطر القفلة/الانفجار.", price: 180 }
          ]
        }
      ]
    },

    importedSpecialty: {
      title: "② النوادر المستوردة — مخزون تخصصي",
      note: "أشياء صغيرة لكنها «الخلطة السرية»: لا يُستبدل أغلبها ببديل محلي رخيص دون أن تتأثر جودة الإصلاح أو عمر الهاشبورد. لا تتوفر بنفس الجودة في الشارع المصري.",
      location: "الصين — Zeus Mining / AliExpress",
      currency: "USD",
      items: [
        {
          name: "شرايح ASIC (Bitmain)",
          model: "BM1398 / BM1362 — حسب موديل اللوحة",
          function: "قطع الغيار الأساسية لهاشبورد Antminer.",
          price: "$3 / شريحة",
          priceBefore: "بالكمية (Alibaba)",
          saving: "سعر ثابت بدون MOQ على Zeus",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106",
          source: "Zeus Mining",
          badge: "مخزون أساسي"
        },
        {
          name: "شرائح ASIC (MicroBT)",
          model: "KF1922 — Whatsminer",
          function: "قطع غيار أساسية لهاشبورد MicroBT.",
          price: "$2 / chip",
          priceBefore: "بالكمية (Bit2Miner)",
          saving: "نفس المنتج بسعر منافس",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2148",
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
          price: "$3",
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
          name: "شبلونات الصيانة",
          model: "S19 & M30 Stencils — قوالب مغناطيسية للشرائح",
          function: "توزيع معجون متساوٍ قبل الـ reflow — بدونها الشريحة تتحرك.",
          price: "$8",
          priceBefore: "~$40 (150 ريال)",
          saving: "وفر حتى 91%",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2418",
          source: "Zeus Mining",
          badge: "أوفر"
        },
        {
          name: "طقم BGA Reballing",
          model: "منصة مغناطيسية + شبلونات ASIC (S19)",
          function: "تثبيت الشريحة ومحاذاة كرات القصدير بدقة.",
          price: "$22",
          priceBefore: "بدون منصة الشريحة تهرج",
          saving: "أساس الـ reballing الآمن",
          url: "https://www.aliexpress.com/w/wholesale-bga-reballing-kit-asic.html",
          source: "AliExpress",
          badge: "ناقص إلزامي"
        },
        {
          name: "مخزون كابلات داتا",
          model: "40 كابل (10-pin / 12-pin)",
          function: "كابلات استهلاكية للبيع والتبديل السريع.",
          price: "$0.20 / كابل",
          priceBefore: "~$133 (500 ريال)",
          saving: "وفر حتى 100%",
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
          model: "MOSFETs & PWM ICs",
          function: "مخزون صيانة باور سبلاي التعدين.",
          price: "$1 / chip",
          priceBefore: "~$160 (600 ريال)",
          saving: "وفر حتى 99%",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934",
          source: "Zeus Mining",
          badge: "أوفر"
        },
        {
          name: "وصلة تشغيل APW12 على البنش (IIC / EN)",
          model: "IIC interface enable / EN short jig — Zeus أو ما يعادله",
          function: "APW12 لا يخرج 12–15V على البنش بدون ماينر إلا بتمكين I²C أو تقصير EN حسب الدليل — **ضرورية لاختبار الهاش مع APW12 خارج الجهاز.**",
          price: "~$25",
          priceBefore: null,
          saving: "ابحث في Zeus عن APW12 test / IIC enable بجانب صفحة APW12",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=306",
          source: "Zeus Mining",
          badge: "بنش APW12"
        },
        {
          name: "طقم مقاومات 0402",
          model: "0Ω · 51Ω · 10KΩ · 4.7KΩ — Zeus / AliExpress",
          function: "Zeus §I.5 S19 — المقاومات حول الـ ASIC تتلف مع الحرارة؛ حجم رملي — اشتِ sets جاهزة.",
          price: "~$18",
          priceBefore: null,
          saving: "تجميع يدوي في مصر صعب",
          url: "https://www.aliexpress.com/w/wholesale-0402-resistor-kit-smd.html",
          source: "AliExpress",
          badge: "S19 أساسي"
        },
        {
          name: "طقم مكثفات 0402",
          model: "0.1µF · 1µF · 2.2µF",
          function: "نفس منطق الهاش S19 — فلترة بجانب الشرائح؛ أضف 2.2µF كما يوصي Zeus للتكملة.",
          price: "~$18",
          priceBefore: null,
          saving: "مجموعة واحدة توفر وقت البحث عن كل قيمة",
          url: "https://www.aliexpress.com/w/wholesale-0402-capacitor-kit-smd.html",
          source: "AliExpress",
          badge: "S19 أساسي"
        },
        {
          name: "كرات لحام BGA",
          model: "0.4mm diameter — SnAgCu",
          function: "Reballing BM1398 / KF1922 حسب الدليل.",
          price: "~$15",
          priceBefore: null,
          saving: "مطابقة قطر Zeus",
          url: "https://www.aliexpress.com/w/wholesale-0.4mm-solder-balls-bga.html",
          source: "AliExpress",
          badge: "Reball"
        },
        {
          name: "كروت MicroSD (صناعية)",
          model: "8–16 GB × 5–10 — Industrial / High Endurance",
          function: "تحديث FPGA على PicoBT/CB4، استعادة كنترول S19، صور اختبار — **لا تستخدم كرت موبايل رخيص للإنتاج.**",
          price: "~$8 / كرت",
          priceBefore: null,
          saving: "تدوير كروت منفصلة لكل نوع صورة",
          url: "https://www.amazon.com/s?k=industrial+micro+sd+card+16gb",
          source: "Amazon / محلي",
          badge: "Recovery"
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
        {
          name: "أكياس مانعة للشحنات (ESD Bags)",
          model: "عبوة 100 كيس مقاسات مختلطة",
          function: "تسليم الهاش بورد بعد الإصلاح بشكل احترافي وحمايته من ESD أثناء النقل والتخزين.",
          price: "$12 / 100 pcs",
          priceBefore: null,
          saving: "مستهلك بسيط يرفع الجودة ويحمي الشحن",
          url: "https://www.aliexpress.com/w/wholesale-anti-static-esd-bag-pcb.html",
          source: "AliExpress",
          badge: "Packaging"
        }
      ]
    },

    localSupplies: {
      title: "③ العتبة ومول البستان — متجدد ومساعد",
      note: "كل ما هو متاح في مصر: مواد متجددة، كيماويات، تبريد، كهرباء بسيطة، وإكسسوارات يومية — أقل شحن وأسرع تعويض.",
      location: "مصر — العتبة / مول البستان / شركات كيماويات",
      currency: "EGP",
      items: [
        { name: "كيماويات التنظيف", model: "IPA 99% (≈500ml) — شركات كيماويات بالعتبة", function: "تنظيف الفلاكس والبادز — 99% فقط وليس 70%.", price: 220 },
        { name: "حماية أثناء الهواء الساخن", model: "شريط Kapton أصفر + شريط ألومنيوم", function: "عزل الحرارة وحماية الـ SMD المجاورة.", price: 80 },
        { name: "تبريد البنش", model: "مروحة تعدين 120mm + باور 12V", function: "Nidec / Delta (≥2.7A) — سوق مستعمل أو البستان.", price: 1400 },
        { name: "كهرباء البنش", model: "أسلاك نحاس AWG6 + ترامل حلقية + كابلات باور أصلية", function: "ربط APW12 بالهاشبورد بأمان — يفصلها كهربائي ~100 ج.", price: 150 },
        { name: "مقاومة تفريغ (سلامة البنش)", model: "Discharge Resistor — 25Ω / 100W اسمنتية — محلياً", function: "✗ مطلوب لأمان باور الاختبار على البنش: تفريغ تدريجي للمكثفات الكبيرة بعد الفصل وتقليل صدمات/شرر عند التعامل مع APW12 أو التغذية العالية. اشترِها من محلات المقاومات والكهرباء (العتبة/البستان).", price: 100 },
        { name: "معجون حراري عام", model: "GD900 أو ما يعادله (سائل)", function: "للاستخدام العام على المشتتات — ليس بديل Thermal Putty في الفجوات.", price: 250 },
        { name: "قياس وبرمجة بسيطة", model: "USB to TTL + Dupont jumpers (ذكر-ذكر/أنثى-أنثى)", function: "UART للكنترول؛ **Dupont** لتوصيل PICkit بنقاط الاختبار/ICSP على البوردة.", price: 350 },
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
      materials: "~1.5 شريحة @ ~$3.2 + HY234/معجون بالشبلونة + فلاكس Amtech + مناديل خالية من الوبر + تآكل فرش/IPA — تقدير **$8.5** للوحة متوسطة",
      oldCostUSD: 22,
      avgCostUSD: 8.5,
      savingReason: "شراء رخيص للشرائح + شبلونة تقلل هدر المعجون؛ استهلاكيات التنظيف (Lint-free + ESD brushes) مدمجة في المتوسط"
    },
    {
      category: "الباور سبلاي",
      materials: "2–3 موسفت + آيسي تحكم + قصدير lead-free + فلاكس + Contact cleaner (تقسيم تكلفة) — تقدير **$5**",
      oldCostUSD: 15,
      avgCostUSD: 5,
      savingReason: "قطع Zeus/Ali بسعر وحدة منخفض + أدوات الاستهلاك (شفاط قصدير/قصافة) مُوزَّعة على عدد الإصلاحات"
    },
    {
      category: "الكنترول بورد",
      materials: "2 LDO + فلاكس/قصدير + وصلات صغيرة نادراً — تقدير **$1.5**",
      oldCostUSD: 5,
      avgCostUSD: 1.5,
      savingReason: "LDO بالجملة ~$0.05–0.08 للقطعة + استهلاك نحيف للفلاكس"
    },
    {
      category: "الكابلات",
      materials: "كابل داتا (10/12-pin) + كيس ESD للتسليم — تقدير **$0.55**",
      oldCostUSD: 7,
      avgCostUSD: 0.55,
      savingReason: "كابلات بالجملة ~$0.20–0.25 + كيس مانع شحنات ~$0.12 من طقم الأكياس"
    }
  ],

  marketerCommissionPercent: 20,

  pricing: [
    { service: "صيانة الهاشبورد",    clientPrice: 100, materialCost: 8.5, marketerCommission: 20,  netProfit: 71.5 },
    { service: "صيانة الباور سبلاي", clientPrice: 80,  materialCost: 5,   marketerCommission: 16,  netProfit: 59   },
    { service: "إحياء الكنترول بورد",clientPrice: 50,  materialCost: 1.5, marketerCommission: 10,  netProfit: 38.5 },
    { service: "تغيير كابل داتا",    clientPrice: 15,  materialCost: 0.55, marketerCommission: 3,   netProfit: 11.45 }
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
    breakEvenNote: "بعد خصم خامات الهاشبورد (~$8.5) وعمولة المسوق (20% من $100 = $20)، صافي اللوحة للمركز ≈ $71.5. لتغطية المصاريف الثابتة (~630 $ شهرياً ≈ 34,000 ج) يحتاج ≈ 9 لوحات هاشبورد شهرياً (بسعر صرف 54 ج/$).",
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
    { service: "الهاشبورد",      count: 30, pricePerUnit: 100, totalRevenue: 3000, costPerUnit: 8.5,  totalCost: 255,  marketerTotal: 600  },
    { service: "الباور سبلاي",   count: 15, pricePerUnit: 80,  totalRevenue: 1200, costPerUnit: 5,    totalCost: 75,   marketerTotal: 240  },
    { service: "الكنترول بورد",  count: 10, pricePerUnit: 50,  totalRevenue: 500,  costPerUnit: 1.5,  totalCost: 15,   marketerTotal: 100  },
    { service: "الكابلات",       count: 20, pricePerUnit: 15,  totalRevenue: 300,  costPerUnit: 0.55, totalCost: 11,   marketerTotal: 60   }
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
      note: "CAPEX يشمل تقدير جمارك وشحن لمرة واحدة ($500) + **سكوب مكتبي ~100 MHz** (بديل فخ TC3) + فاحص TC3 كـ tester + ZOYI + إكسسوارات برمجة/0402/IIC لـ APW12 + Quick 205H + AD207 + PUHUI T-8280."
    },
    annualNetProfit:      { usd: 36172.44, egp: 1953312 },
    monthlyNetProfit:     { usd: 3014.37,  egp: 162776  },
    paybackDays:          24,
    roiPercent:           1470
  }

};

