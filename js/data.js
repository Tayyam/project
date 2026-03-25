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
    { id: "deviceFlip",      label: "🔄 تدوير المعيبين" },
    { id: "pl",              label: "🧾 قائمة الدخل" },
    { id: "roi",             label: "🚀 العائد على الاستثمار" },
  ],

  workflowIntro: "مسار موحّد لورشة **Antminer S19** و**Whatsminer M30/M50**: السلامة أولاً، ثم تشخيص رقمي + كهربائي، إصلاح BGA منضبط، **تنظيف وبروتوكول ما بعد الإصلاح**، واختبار **PicoBT** قبل التسليم. مسار **تدوير جهاز كامل** (شراء معيب وإعادة بيع) يستخدم نفس القواعد التقنية مع تكرار الخطوات على عدة لوحات وتجميل الشاسيه — ويُعرض مالياً في تبويب **تدوير المعيبين**. الوقت الأسبوعي لمراجعة **Knowledge Base** مدمج في محاكاة حجم العمل.",

  workflow: [
    {
      step: "01",
      title: "استقبال، تعريف، وأمان الطاقة",
      description: "تسجيل الموديل والعميل؛ **فصل الباور** وعدم توصيل هاش تحت جهد غير مؤكد. فحص بصري (احتراق، انتفاخ، كابلات). راجع تسلسل الطاقة على البنش و**مقاومة التفريغ** في دليل الورشة — لا تخطَ سلامة **APW12**."
    },
    {
      step: "02",
      title: "التشخيص الرقمي (السجلات)",
      description: "سحب **Logs** وتفسير **ASICNG / PatternNG / ASIC=0** وغيرها؛ ربط النتيجة بخريطة الشرائح والمجالات حسب موديل اللوحة. استخدم **دليل الإصلاح** (`asic_repair_kb`) والفهارس الفرعية — تحليل مساعد بالذكاء الاصطناعي عند الحاجة **بعد** امتلاك السجل الخام."
    },
    {
      step: "03",
      title: "البنش: طاقة وملفات اختبار",
      description: "**APW12** بالإصدار المناسب للموديل؛ باور اختبار مستقر. **PicoBT** مع **ملف اختبار** صحيح (S19 / M30…) لتفادي قراءات خاطئة. تبريد كافٍ أثناء الاختبار المتكرر."
    },
    {
      step: "04",
      title: "القياس الكهربائي وتتبع الإشارة",
      description: "**ملتيميتر** يومي للجهد والاستمرارية؛ **أوسيلوسكوب مكتبي ≥100 MHz** للتحقق من **CLK / RI / RST** على الهاشبورد — لا يُستبدل السكوب بفاحص منضد للإشارات السريعة."
    },
    {
      step: "05",
      title: "تشخيص حراري وبصري (اختياري)",
      description: "**كاميرا حرارية** إن وُجدت لتسريع اكتشاف القصر أو المنطقة الساخنة؛ مع **DMM** وملاحظة المكثفات والمسارات حول الـ ASIC."
    },
    {
      step: "06",
      title: "الإصلاح على اللوحة (BGA / SMD)",
      description: "**منصة تسخين سفلية** متساوية للسطح + **هواء ساخن**؛ فلاكس مناسب ومعجون لحام؛ **قناع UV** عند الحاجة. توازن بين **شرائح Zeus جديدة** و**تخليج** من لوحات مانحة (**76** شريحة/لوح نموذج S19) — راجع خطة المستورد/المحلي (**~1.7** لوح خردة/شهر)."
    },
    {
      step: "07",
      title: "التنظيف وإعادة التجميع",
      description: "إزالة الفلاكس والبقايا؛ **حمام فوق صوتي / سائل مناسب** و**IPA** حسب `post_repair_cleaning_protocol.md`؛ **HY234 / معجون مبردات**؛ تجميع آمن للمشتتات. للتسليم الاحترافي: تنظيف شاسيه/تلامسات عند الحاجة."
    },
    {
      step: "08",
      title: "اختبار نهائي وتسليم",
      description: "**PicoBT** مع تبريد قوي — هدف **قراءة كاملة** وتشغيل مستقر قبل الإغلاق. توثيق مختصر للعميل؛ **إعادة بيع جهاز مُرمَّم** يمر بنفس معيار الجودة ثم يُسعَّر كمسار مالي منفصل (بدون عمولة مسوق على البند وفق الإعدادات الحالية)."
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
    note: "Consumables + spare parts only (no long-life tools). Tin stencils + 90×90 platform: **① fixed assets**. Bridge wires here. Sorted by quarterly $ (high → low).",
    baselineMonthlyOperations: 75,
    items: [
      { name: "BM1362 ASIC (Bitmain)", unit: "chip", baseMonthlyQty: 10, unitUSD: 3.5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106", planHint: "~1.7 donor boards/mo × 76 ASIC — tweak qty with workload." },
      { name: "BM1366BS ASIC (S19K Pro)", unit: "chip", baseMonthlyQty: 2, unitUSD: 9, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3202", planHint: "Fewer donors than S19 — keep minimum stock." },
      { name: "KF1950 / KF1958 ASIC (Whatsminer)", unit: "chip", baseMonthlyQty: 5, unitUSD: 2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1994", planHint: "M30 family." },
      { name: "KF1968 / KF1973 ASIC (Whatsminer)", unit: "chip", baseMonthlyQty: 3, unitUSD: 6.65, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2200", planHint: "M50 / M60 class." },
      { name: "Pre-tinned bridge wires", unit: "~100 pcs 10/15 cm", baseMonthlyQty: 0.35, unitUSD: 1.2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2461", planHint: "Consumable — not a fixed asset." },
      { name: "Amtech NC-559-ASM flux", unit: "10g syringe", baseMonthlyQty: 3, unitUSD: 8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277" },
      { name: "Mechanic 183°C solder paste", unit: "60g", baseMonthlyQty: 1, unitUSD: 12, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264" },
      { name: "Mechanic UVH900-LY solder mask", unit: "tube", baseMonthlyQty: 2, unitUSD: 6.54, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585" },
      { name: "HY234 thermal putty", unit: "1 kg", baseMonthlyQty: 0.5, unitUSD: 5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638" },
      { name: "24-pin data cable", unit: "60 cm", baseMonthlyQty: 22, unitUSD: 1.8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107" },
      { name: "Control LDO / PMIC kit", unit: "chip", baseMonthlyQty: 26, unitUSD: 0.05, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997" },
      { name: "SI7N65F MOSFET (PSU)", unit: "chip", baseMonthlyQty: 32, unitUSD: 0.4, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934" },
      { name: "SMD resistor sample book", unit: "book", baseMonthlyQty: 0.5, unitUSD: 7.75, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005008894523897.html" },
      { name: "SMD capacitor sample book", unit: "book", baseMonthlyQty: 0.5, unitUSD: 12, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005004657585875.html" },
      { name: "Board wash (ultrasonic)", unit: "Mechanic 500 / no-residue", baseMonthlyQty: 0.75, unitUSD: 3.9, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1782", planHint: "With ultrasonic — post-repair deep clean." }
    ]
  },

  localConsumablesQuarterly: {
    title: "خطة الطلب ربع السنوية — استهلاكات محلية",
    note: "Local recurring (Attaba / Boustan). Donor board ≈76 ASIC; ~1.7 boards/mo → ~5/qtr × 1500 EGP. Bench fans + bridge wires: import plan. Sorted by quarterly EGP (high → low).",
    baselineMonthlyOperations: 75,
    currency: "EGP",
    items: [
      { name: "Donor hashboard (parts harvesting)", unit: "board (~76 ASIC)", baseMonthlyQty: 1.7, unitEGP: 1500, source: "Local scrap", planHint: "Selective strip + test; new chips stay on import plan." },
      { name: "IPA 99%", unit: "500 ml bottle", baseMonthlyQty: 1.2, unitEGP: 220, source: "Attaba / chemicals" },
      { name: "IPA 99% spray", unit: "large spray — hash rinse", baseMonthlyQty: 0.9, unitEGP: 320, source: "Attaba / chemicals" },
      { name: "GD900 (or equiv.)", unit: "thermal paste", baseMonthlyQty: 1, unitEGP: 250, source: "Attaba / Boustan" },
      { name: "Kapton + aluminum tape", unit: "hot-air shielding", baseMonthlyQty: 1, unitEGP: 80, source: "Attaba" },
      { name: "Metal-tip syringes", unit: "~10 pcs", baseMonthlyQty: 0.6, unitEGP: 45, source: "Pharmacy / local" },
      { name: "Silicone cable clips", unit: "desk routing", baseMonthlyQty: 0.34, unitEGP: 95, source: "PC accessories" }
    ]
  },

  purchases: {
    pageNote: "① Fixed assets ② Zeus/AliExpress stock ③ Local supplies. Hash CLK needs a **bench scope ≥100 MHz** (e.g. UTD2102CEX+). Desk LCR/TC testers are optional — not a CLK substitute.",

    fixedAssets: {
      title: "① قائمة الأصول — الاستثمار الثابت",
      note: "One-time tools + PicoBT test files (digital assets). Tin stencils + 90×90 tinning platform here. Pre-tinned bridge wires → quarterly import plan.",
      groups: [
        {
          sourceLabel: "🇨🇳 China — Zeus Mining / AliExpress",
          tableHint: "Capital equipment — shipped import",
          kind: "usd",
          items: [
            {
              name: "PicoBT universal tester",
              model: "PicoBT Universal Tester",
              function: "Hashboard diagnosis on bench.",
              price: "$459",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2349",
              source: "Zeus Mining"
            },
            {
              name: "APW12 bench PSU",
              model: "Antminer APW12 — 1215 a/b/c/d/e/f/g (match hash model)",
              function: "12–15 V / 70 A+ under load. Confirm revision with supplier.",
              price: "$82",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=306",
              source: "Zeus Mining"
            },
            {
              name: "Bench DMM",
              model: "UNI-T UT136C+",
              function: "Voltage / resistance / continuity. Not thermal — use fine probes below.",
              price: "$43",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3210",
              source: "Zeus Mining"
            },
            {
              name: "Hot air station",
              model: "Quick 861DW 1300W",
              function: "ASIC / dense SMD rework.",
              price: "$365",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3208",
              source: "Zeus Mining"
            },
            {
              name: "IR preheater",
              model: "PUHUI T-8280 — 28×27 cm",
              function: "Full-board even preheat; less warp.",
              price: "$92",
              url: "https://ar.aliexpress.com/item/1005010520024198.html",
              source: "AliExpress"
            },
            {
              name: "Antminer PicoBT test files",
              model: "S19 + S19j Pro",
              function: "Avoid false errors on S19 family.",
              price: "$49 / file",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3093",
              source: "Zeus Mining"
            },
            {
              name: "Whatsminer PicoBT test file",
              model: "M30 / M50 / M60",
              function: "MicroBT models on PicoBT.",
              price: "$35",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3744",
              source: "Zeus Mining"
            },
            {
              name: "Bench oscilloscope (CLK)",
              model: "UNI-T UTD2102CEX+ — 2CH / 100 MHz / 1 GS/s",
              function: "S19/M30 CLK ~25 MHz+ — need ≥100 MHz scope.",
              price: "$321",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1972",
              source: "Zeus Mining"
            },
            {
              name: "PIC programmer",
              model: "PICKit 3.5",
              function: "Hash + APW12 PIC with MPLAB IPE.",
              price: "$19",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=137",
              source: "Zeus Mining"
            },
            {
              name: "EEPROM / hash decode cable",
              model: "18-pin → USB",
              function: "Rewrite EEPROM; mixed boards / log errors.",
              price: "$15",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1560",
              source: "Zeus Mining"
            },
            {
              name: "Adjustable bench DC PSU",
              model: "WANPTEK KPS3030D — 30 V 30 A + 6 mm leads",
              function: "Hash feed + control inject. Low current limit + OCP on control.",
              price: "$230",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2184",
              source: "Zeus Mining"
            },
            {
              name: "2-in-1 rework station",
              model: "Quick 707D+ / 709D+ — hot air + iron",
              function: "Does not replace 861DW for max BGA air.",
              price: "$90",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3609",
              source: "Zeus Mining"
            },
            {
              name: "BGA 90×90 tinning platform",
              model: "BGA 90×90 kit",
              function: "Chip hold + reball prep; pick kit on Zeus page.",
              price: "$17.9",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1829",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — KF1950",
              model: "Whatsminer tin tool",
              function: "KF1950 reball prep.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2292",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — KF1958",
              model: "Whatsminer",
              function: "KF1958.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2293",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — KF1968",
              model: "Whatsminer",
              function: "KF1968 / KF1968E.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2295",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — KF1973",
              model: "Whatsminer",
              function: "KF1973E.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2296",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — BM1362",
              model: "S19j / S19j Pro",
              function: "BM1362AK.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2344",
              source: "Zeus Mining"
            },
            {
              name: "Tin stencil — BM1366BS",
              model: "S19K Pro",
              function: "BM1366BS.",
              price: "$3.5",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2691",
              source: "Zeus Mining"
            },
            {
              name: "Bench cooling — 4×120 mm",
              model: "Dual fan kit + speed control",
              function: "Air under hash during PicoBT.",
              price: "$12.9",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2684",
              source: "Zeus Mining"
            },
            {
              name: "Dust blower",
              model: "F10 / F8 turbo",
              function: "Hash, fans, chassis dust.",
              price: "$22",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3717",
              source: "Zeus Mining"
            },
            {
              name: "High-temp repair mat",
              model: "Silicone mat",
              function: "Desk protection for hot air / iron.",
              price: "$8.48",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=182",
              source: "Zeus Mining"
            },
            {
              name: "DMM probes",
              model: "Fine tips",
              function: "Test points on hash.",
              price: "$3.3",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2856",
              source: "Zeus Mining"
            },
            {
              name: "DMM SMD clips",
              model: "IC clip",
              function: "Hands-free on small pins.",
              price: "$2.85",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1647",
              source: "Zeus Mining"
            }
          ]
        },
        {
          sourceLabel: "🏪 مول البستان",
          tableHint: "Heavy gear / lab electrics",
          kind: "egp",
          items: [
            { name: "Digital microscope", model: "Andonstar AD207 — 7\"", function: "Solder / trace inspection.", price: 7000 }
          ]
        },
        {
          sourceLabel: "📍 العتبة",
          tableHint: "Helpers + workflow",
          kind: "egp",
          items: [
            { name: "Ultrasonic cleaner", model: "~2 L", function: "Flux / grime after rework.", price: 2200 },
            { name: "Board drying oven", model: "60–80 °C — ≥30 min cycles", function: "Post-IPA dry before power; see cleaning protocol.", price: 4500 },
            { name: "IPA pump bottle", model: "Push-down dispenser", function: "Less evaporation; mobile repair shops.", price: 75 },
            { name: "Metal-tip syringes", model: "~10 pcs", function: "Flux dosing.", price: 45 },
            { name: "Colored part bins", model: "~6 boxes", function: "WIP status colors.", price: 220 },
            { name: "Silicone cable clips", model: "Adhesive", function: "Desk cable routing.", price: 95 },
            { name: "Series safety bulb", model: "100 W + holder", function: "First power-up after APW12 repair.", price: 180 }
          ]
        }
      ]
    },

    importedSpecialty: {
      title: "② النوادر المستوردة — مخزون تخصصي",
      note: "Small parts + consumables from Zeus/AliExpress. New chips complement donor boards (~1.7/mo × 76 ASIC). Tin stencils + 90×90 platform: **①**.",
      location: "China — Zeus Mining / AliExpress",
      currency: "USD",
      items: [
        {
          name: "BM1362 ASIC",
          model: "BM1362AK (+ variants per board)",
          function: "S19 / S19j / S19j Pro — match Zeus table.",
          price: "$3.5 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106",
          source: "Zeus Mining"
        },
        {
          name: "BM1366BS ASIC",
          model: "S19K Pro",
          function: "S19K Pro hash.",
          price: "$9 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3202",
          source: "Zeus Mining"
        },
        {
          name: "KF1950 ASIC",
          model: "KF1950-03C",
          function: "M30 series.",
          price: "$2 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1994",
          source: "Zeus Mining"
        },
        {
          name: "KF1958 ASIC",
          model: "KF1958",
          function: "M30s / M30s+ / M30+.",
          price: "$2 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2297",
          source: "Zeus Mining"
        },
        {
          name: "KF1968 ASIC",
          model: "KF1968E-03C",
          function: "M50 / M50S / M30s++ / M30 / M53 / M53S.",
          price: "$5.8 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2200",
          source: "Zeus Mining"
        },
        {
          name: "KF1973 ASIC",
          model: "KF1973E-03C",
          function: "M50 / M50S / M53 / M60S.",
          price: "$7.5 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2283",
          source: "Zeus Mining"
        },
        {
          name: "Amtech NC-559-ASM flux",
          model: "10g syringe (100g also on page)",
          function: "ASIC rework.",
          price: "$8",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277",
          source: "Zeus Mining"
        },
        {
          name: "Mechanic 183°C paste",
          model: "60g / 500g",
          function: "BGA reball.",
          price: "$12",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264",
          source: "Zeus Mining"
        },
        {
          name: "Board cleaner",
          model: "Mechanic 500 / S880 / 850",
          function: "Post-rework wash.",
          price: "$3.9",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1782",
          source: "Zeus Mining"
        },
        {
          name: "SANKI solder wire",
          model: "0.6 mm — 500g — lead-free",
          function: "S19 hand solder.",
          price: "$16.9",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3133",
          source: "Zeus Mining"
        },
        {
          name: "UV solder mask",
          model: "Mechanic UVH900-LY",
          function: "Pad/trace repair — cure under UV.",
          price: "$6.54",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585",
          source: "Zeus Mining"
        },
        {
          name: "HY234 thermal putty",
          model: "1 kg",
          function: "Gap fill between dual heatsinks — S19 / M30.",
          price: "$5",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638",
          source: "Zeus Mining"
        },
        {
          name: "24-pin data cable",
          model: "60 cm",
          function: "Stock for sale / swap.",
          price: "$1.8 / cable",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107",
          source: "Zeus Mining"
        },
        {
          name: "Control LDO / PMIC",
          model: "0.8V / 1.8V / 3.3V",
          function: "Control board repair stock.",
          price: "$0.05 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997",
          source: "Zeus Mining"
        },
        {
          name: "SI7N65F MOSFET",
          model: "650 V 7 A",
          function: "Mining PSU repair.",
          price: "$0.4 / chip",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934",
          source: "Zeus Mining"
        },
        {
          name: "SMD resistor kit",
          model: "Sample book 0201–1206",
          function: "S19 hash — add 2.2µF per Zeus if needed.",
          price: "$7.75",
          url: "https://ar.aliexpress.com/item/1005008894523897.html",
          source: "AliExpress"
        },
        {
          name: "SMD capacitor kit",
          model: "Sample book 01005–1206",
          function: "S19 hash bypass caps.",
          price: "$12",
          url: "https://ar.aliexpress.com/item/1005004657585875.html",
          source: "AliExpress"
        },
        {
          name: "ESD chip box",
          model: "Anti-static storage",
          function: "Loose ASIC / small parts.",
          price: "$4.4 / box",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1754",
          source: "Zeus Mining"
        }
      ]
    },

    localSupplies: {
      title: "③ العتبة ومول البستان — متجدد ومساعد",
      note: "Local recurring: chemicals, bench wiring, finishing. Details: `post_repair_cleaning_protocol.md`. Zeus DMM / SANKI / ESD box → ①/②; bridge wires → quarterly import.",
      location: "Egypt — Attaba / Boustan / chemical suppliers",
      currency: "EGP",
      items: [
        { name: "IPA 99%", model: "~500 ml — Attaba", function: "Flux / pads — not 70%.", price: 220 },
        { name: "Kapton + aluminum tape", model: "Hot-air shield", function: "Protect nearby SMD.", price: 80 },
        { name: "Bench power wiring", model: "AWG6 + lugs + OEM cables", function: "Safe APW12 → hash.", price: 150 },
        { name: "Discharge resistor", model: "25 Ω 100 W cement", function: "Bleed big caps after bench power-off.", price: 100 },
        { name: "GD900 (or equiv.)", model: "Paste — general heatsinks", function: "Not a substitute for HY234 gap fill.", price: 250 },
        { name: "USB–TTL adapter", model: "UART for control", function: "PuTTY / MobaXterm. Pre-tinned bridges → import plan.", price: 250 },
        { name: "Industrial MicroSD", model: "8–16 GB × 5–10 — endurance rated", function: "PicoBT FPGA, S19 recovery — not cheap phone cards.", price: 432 },
        { name: "Fine jumper wire", model: "0.1 mm enameled — Attaba/Boustan", function: "Tight traces / pads.", price: 120 },
        { name: "UV curing lamp", model: "365–405 nm", function: "Cure UV solder mask fast.", price: 320 },
        { name: "Contact cleaner spray", model: "WD-40 Specialist or equiv.", function: "Data / control connectors.", price: 280 },
        { name: "Brass wool (iron tip)", model: "Cup", function: "Tip cleaning — keeps temperature stable.", price: 90 },
        { name: "Desoldering pump", model: "SS-02 class", function: "PSU through-holes.", price: 420 },
        { name: "ESD brushes", model: "Set 3–5", function: "Flux / carbon around ASIC & PSU.", price: 220 },
        { name: "Lint-free wipes", model: "Kimwipes class", function: "Die prep before thermal compound.", price: 140 },
        { name: "Silicone 704 RTV", model: "Tube", function: "Reseal APW12 after open (Zeus PSU guide).", price: 180 },
        { name: "Aluminum chassis polish", model: "Metal polish", function: "Cosmetic finish on S19 shell.", price: 220 },
        { name: "Heatsink screws (optional)", model: "Stainless kit", function: "Replace corroded screws after teardown.", price: 120 }
      ]
    }
  },

  costPerRepair: [
    {
      category: "الهاشبورد",
      materials: "**~1.4** شريحة BM1362 @ **$3.5** ≈ $4.9 + HY234 + Mechanic paste + Amtech + قناع UV (نصيب) + سائل حمام/IPA (نصيب) + 0402 نادراً — متوسط **$8.5** / لوحة",
      oldCostUSD: 9.8,
      avgCostUSD: 8.5,
      savingReason: "مزج **تخليع** (لوح بايظ ~76 شريحة) مع **شرائح Zeus جديدة** للسرعة والجودة؛ متوسط التكلفة/لوحة يبقى مضبوطاً مع خطة الطلب المعتدلة"
    },
    {
      category: "الباور سبلاي",
      materials: "2–3× SI7N65F (~$0.4) + آيسي تحكم + فلاكس/قصدير + منظف + **نصيب سيليكون 704** بعد فتح الغلاف — متوسط **$4.2**",
      oldCostUSD: 3.9,
      avgCostUSD: 4.2,
      savingReason: "إضافة تكلفة معقولة لـ 704 RTV (Zeus FILE 7) مُستهلكة على عدة وحدات"
    },
    {
      category: "الكنترول بورد",
      materials: "2× LDO/PMIC (~$0.05) + فلاكس/قصدير + جسور Zeus (نصيب) — متوسط **$1.5**",
      oldCostUSD: 1.3,
      avgCostUSD: 1.5,
      savingReason: "تضمين نصيب أسلاك الجسر المغطاة قصدير في الاختبار/الاسترداد"
    },
    {
      category: "الكابلات",
      materials: "كابل داتا 24-pin / 60cm Zeus — **$1.8**",
      oldCostUSD: 1.8,
      avgCostUSD: 1.8,
      savingReason: "بدون تغيير — يطابق بند المستورد"
    },
    {
      category: "تدوير جهاز كامل (لوحات تالفة)",
      materials: "**شراء الجهاز $100** (باور/كنترول/مراوح سليمة، هاش معطل) + خامات إصلاح وتجميل **~$38** (≈3 لوحات بمتوسط استهلاك شرائح/معجون/فلاكس/تنظيف + معجون مبردات «زي الجديد») — **~$138** تكلفة مباشرة / محاولة؛ بيع ناجح **$1000** · الإيرادات في الجداول تفترض **نجاحاً 80%** (تُحسب تلقائياً من `successRate` في الواجهة)",
      oldCostUSD: 155,
      avgCostUSD: 138,
      savingReason: "تقدير موحّد لكل محاولة؛ المحاولات الفاشلة لا تُباع لكن تبقى تكلفتها المباشرة — راجع نسبة النجاح في `monthlyDeviceFlip` و`pricing`"
    }
  ],

  marketerCommissionPercent: 20,

  pricing: [
    { service: "صيانة الهاشبورد",    clientPrice: 100, materialCost: 8.5, marketerCommission: 20,  netProfit: 71.5 },
    { service: "صيانة الباور سبلاي", clientPrice: 80,  materialCost: 4.2, marketerCommission: 16,  netProfit: 59.8 },
    { service: "إحياء الكنترول بورد",clientPrice: 50,  materialCost: 1.5, marketerCommission: 10,  netProfit: 38.5 },
    { service: "تغيير كابل داتا",    clientPrice: 15,  materialCost: 1.8, marketerCommission: 3,   netProfit: 10.2 },
    { service: "بيع جهاز بعد الترميم (شراء معيب)", clientPrice: 1000, materialCost: 138, marketerCommission: 0, netProfit: 862, successRate: 0.8, marketerCommissionApplies: false }
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
    breakEvenNote: "إذا توقفت **كل** الإيرادات ما عدا إصلاح الهاشبورد: صافي اللوحة ≈ **$71.5** (سعر $100 − عمولة 20% − خامات ~$8.5). يُقسَم OPEX الشهري (~**34,000 ج** ≈ **$629.6** عند 54 ج/$) على هذا الصافي → العدد الظاهر أعلاه (يُقرب لأعلى). **تنبيه:** مشروع **تدوير المعيبين** (`monthlyDeviceFlip`) مسار مالي منفصل في الجداول؛ نسبة نجاحه لا تدخل في هذا السيناريو. الرقم الكبير يُحدَّث من `pricing` + `monthlyRevenueRepair` + OPEX.",
    breakEvenUnits: 9
  },

  monthlyVolume: {
    workDays: 25,
    hoursPerDay: 8,
    totalHours: 200,
    services: [
      { type: "صيانة هاشبورد",      monthlyCount: 30, timePerUnit: "25–30 دقيقة", totalHours: 13.5, improvement: "كان 45 دق — بفضل قوالب المعجون والتنظيم" },
      { type: "صيانة باور سبلاي",   monthlyCount: 15, timePerUnit: "60 دقيقة",    totalHours: 15,   improvement: null },
      { type: "إحياء كنترول بورد",  monthlyCount: 10, timePerUnit: "20 دقيقة",    totalHours: 3.5,  improvement: "كان 30 دق — بفضل سكوب مكتبي + لحام دقيق + برمجة عند الحاجة" },
      { type: "بيع/تغيير كابلات",   monthlyCount: 20, timePerUnit: "10 دقائق",    totalHours: 3.5,  improvement: null },
      { type: "تدوير جهاز تعدين (شراء معيب)", monthlyCount: 10, timePerUnit: "8–12 ساعة / جهاز", hoursPerUnit: 10, totalHours: 100, improvement: "3 لوحات + اختبار كامل + تنظيف شاسيه ومعجون مبردات · **نسبة نجاح متوقعة 80%** (≈8 بيع من 10 محاولات) — الجداول المالية تستخدم هذا الافتراض" }
    ],
    totalOperations: 85,
    totalEffectiveHours: 145.5,
    capacityUsedPercent: 73,
    dailyCapacity: "6–8 لوحات هاشبورد يومياً + تدوير أجهزة كاملة حسب الطلب",
    knowledgeStudy: {
      label: "مراجعة ومذاكرة دليل الإصلاح (Knowledge Base)",
      sessionsPerMonth: 20,
      timePerUnit: "30 دقيقة / جلسة",
      totalHours: 10,
      improvement: "فهرس `asic_repair_kb` — سجلات، باور، بروتوكول تنظيف، checklists؛ بدون إيراد مباشر"
    },
    note: "بفضل قوالب المعجون والسير المنظم، انخفض وقت الهاشبورد من 45 إلى 25–30 دقيقة. **تدوير الجهاز**: افتراض 8–12 ساعة عمل فعلية لكل معدّن (شراء معيب، هاش معطل، باقي الوحدات سليمة). **الوقت المخصص للـ KB** يُحسب ضمن ساعات العمل الفعلية ونسبة استخدام الوقت ولا يُدخل في عدد عمليات الإصلاح المدفوعة."
  },

  /** إيرادات ورشة الإصلاح فقط (بدون مشروع تدوير الأجهزة المعيبة). */
  monthlyRevenueRepair: [
    { service: "الهاشبورد",      count: 30, pricePerUnit: 100, totalRevenue: 3000, costPerUnit: 8.5, totalCost: 255,  marketerTotal: 600  },
    { service: "الباور سبلاي",   count: 15, pricePerUnit: 80,  totalRevenue: 1200, costPerUnit: 4.2, totalCost: 63,   marketerTotal: 240  },
    { service: "الكنترول بورد",  count: 10, pricePerUnit: 50,  totalRevenue: 500,  costPerUnit: 1.5, totalCost: 15,   marketerTotal: 100  },
    { service: "الكابلات",       count: 20, pricePerUnit: 15,  totalRevenue: 300,  costPerUnit: 1.8, totalCost: 36,   marketerTotal: 60   }
  ],

  /** مشروع مستقل: شراء معيب + إصلاح + بيع — تُحسب أرباحه وCOGS منفصلة في الواجهة. */
  monthlyDeviceFlip: {
    service: "تدوير جهاز تعدين (شراء معيب)",
    count: 10,
    successRate: 0.8,
    pricePerUnit: 1000,
    costPerUnit: 138,
    totalRevenue: 8000,
    totalCost: 1380,
    marketerTotal: 0,
    marketerCommissionApplies: false
  },

  deviceFlipProject: {
    title: "مشروع تدوير الأجهزة المعيبة",
    intro: "**مسار مالي مستقل** عن إصلاح القطع بالسعر الثابت: رأس مال دوّار لكل محاولة (**شراء ~$100 + خامات إصلاح** ضمن ~**$138**/محاولة)، بيع **$1000** عند اكتمال الترميم. **لا تُطبَّق عمولة المسوق** على هذا البند — **الإيراد** يُحسب على **البيع الناجح فقط** (افتراض نجاح **80%**)؛ **COGS** على **كل محاولة** حتى الفاشلة. **OPEX** الورشة **لا يُوزَّع** هنا — يظل في قائمة الدخل **المجمّعة**؛ هذا القسم يعرض **مساهمة المشروع قبل OPEX**."
  },

  pl: {
    currency: "USD / EGP",
    exchangeRate: 54,
    exchangeNote: "قائمة الدخل: **ورشة الإصلاح** (عمولة مسوق 20% على الإيراد) + **مشروع إعادة بيع الجهاز** (بدون عمولة مسوق) ثم **المجمّع**. التدوير: إيراد على البيع الناجح فقط (80%)، COGS على كل محاولة. **OPEX** يُخصم مرة واحدة من المجمّع.",
    grossRevenue:         { usd: 13000,  egp: 702000 },
    marketerCommission:   { usd: 1000,   egp: 54000  },
    cogs:                 { usd: 1749,   egp: 94446  },
    grossProfit:          { usd: 10251,  egp: 553554 },
    opex:                 { usd: 629.63, egp: 34000  },
    netProfit:            { usd: 9621.37, egp: 519554 }
  },

  roi: {
    intro: "**العائد والاسترداد يُحسبان تلقائياً** من: (1) جدول الإيرادات المجمّع بعد تطبيق نسبة نجاح التدوير و**استثناء عمولة المسوق من إعادة بيع الجهاز**، (2) **OPEX** من `opex.totalMonthly`، (3) **CAPEX** = مجموع أصول `purchases.fixedAssets` بالدولار + بنود `capex.extraItems` + تقدير **مخزون مستورد 3 شهور**. أرقام البطاقات العلوية وشريطي النسبة تتبع هذا النموذج — لا تُحدَّث يدوياً.",
    capex: {
      extraItems: [
        { label: "تجهيزات المحل (تشطيب + أثاث)", usd: 200 },
        { label: "جمارك + شحن منتجات من الخارج (مرة واحدة)", usd: 500 }
      ],
      note: "CAPEX يشمل تقدير جمارك وشحن لمرة واحدة ($500) + **UNI-T UTD2102CEX+ (100 MHz)** أو سكوب محلي مماثل + **UNI-T UT136C+** + ملحقات قياس Zeus + PICKit 3.5 + كابل EEPROM + WANPTEK KPS + تبريد 4×120mm + حصيرة صيانة 182 + **Quick 707D+** + **861DW** + AD207 + **PUHUI T-8280** (بدون HP-B100 مكرر). بدون فاحص مكونات منضد اختياري (مثل DSO-TC3). **يُضاف تلقائياً:** مخزون مستهلكات مستوردة (خطة 3 شهور)."
    }
  }

};

