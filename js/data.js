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

  workflow: [
    {
      step: "01",
      title: "التشخيص الرقمي",
      description: "سحب السجلات (Logs) وتحليلها عبر الذكاء الاصطناعي لتحديد الشريحة أو القطعة التالفة بدقة."
    },
    {
      step: "02",
      title: "التشخيص الحراري / النقاط الساخنة",
      description: "ملتيميتر عادي + ملاحظة بصرية؛ **كاميرا حرارية اختيارية** إن وُجدت — لرؤية قصر أو حرارة زائدة بسرعة."
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
    note: "**مستهلكات ومخزون قطع فقط** (بدون أصول تشغيلية طويلة العمر). **استراتيجية الشرائح:** لا نعتمد على طلبات Zeus الضخمة فقط — جزء كبير من الاحتياج يُغطّى **بتخليع هاشبوردات تالفة محلياً** (~**76 شريحة**/لوح بتكلفة تقديرية **1500 ج** للوح، انظر جدول المحلي). نحتفظ بكمية **معتدلة من الشرائح الجديدة** (Zeus) لضمان **سرعة العمل**، وجودة مضمونة للحالات الحرجة، والموديلات/الدفعات التي يصعب تخليعها. **قوالب Tin ومنصة BGA 90×90** في **① الأصول**. **أسلاك الجسر** هنا كمخزون استهلاكي. **سائل تنظيف اللوحات** يدعم `post_repair_cleaning_protocol.md`. الجدول مرتب تلقائياً من الأعلى تكلفة للربع إلى الأقل.",
    baselineMonthlyOperations: 75,
    items: [
      { name: "شرائح ASIC Bitmain (BM1362)", unit: "شريحة", baseMonthlyQty: 16, unitUSD: 3.5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1106", planHint: "كمية **احتياط جديد** معتدلة (S19 / S19j) — الباقي من تخليع اللوحات البايظة؛ زِد عند ضغط عمل أو نقص donors." },
      { name: "شرائح ASIC Bitmain (BM1366BS)", unit: "شريحة S19K Pro", baseMonthlyQty: 2, unitUSD: 9, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3202", planHint: "S19K Pro — غالباً أقل توفراً من التخليع؛ احتفظ بحد أدنى جديد." },
      { name: "شرائح Whatsminer (KF1950 / KF1958)", unit: "شريحة", baseMonthlyQty: 5, unitUSD: 2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1994", planHint: "M30 — يكمّلها تخليع لوحات Whatsminer التالفة إن وُجدت محلياً." },
      { name: "شرائح Whatsminer (KF1968 / KF1973)", unit: "شريحة", baseMonthlyQty: 3, unitUSD: 6.65, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2200", planHint: "M50/M60 — وزّع بين جديد وتخليع حسب التوفر." },
      { name: "أسلاك جسر للوحة (مغطاة قصدير)", unit: "عبوة ~100 عود (10cm/15cm)", baseMonthlyQty: 0.35, unitUSD: 1.2, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2461", planHint: "مستهلكات اختبار/جسور مع PICKit ونقاط القياس — ليست أصلًا ثابتًا." },
      { name: "فلاكس لحام ASIC", unit: "حقنة 10g Amtech NC-559-ASM", baseMonthlyQty: 3, unitUSD: 8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2277" },
      { name: "معجون قصدير BGA", unit: "عبوة 60g Mechanic 183°C", baseMonthlyQty: 1, unitUSD: 12, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=264" },
      { name: "قناع لحام UV", unit: "أنبوبة Mechanic UVH900-LY", baseMonthlyQty: 2, unitUSD: 6.54, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1585" },
      { name: "Thermal Putty HY234", unit: "كيس 1kg", baseMonthlyQty: 0.5, unitUSD: 5, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1638" },
      { name: "كابلات داتا 24-pin (60cm)", unit: "كابل", baseMonthlyQty: 22, unitUSD: 1.8, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=107" },
      { name: "آيسيهات الكنترول (LDO / PMIC)", unit: "شريحة", baseMonthlyQty: 26, unitUSD: 0.05, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=997" },
      { name: "قطع غيار الباور (SI7N65F MOSFET)", unit: "شريحة", baseMonthlyQty: 32, unitUSD: 0.4, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3934" },
      { name: "طقم مقاومات SMD", unit: "Sample Book", baseMonthlyQty: 0.5, unitUSD: 7.75, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005008894523897.html" },
      { name: "طقم مكثفات SMD", unit: "Sample Book", baseMonthlyQty: 0.5, unitUSD: 12, source: "AliExpress", url: "https://ar.aliexpress.com/item/1005004657585875.html" },
      { name: "سائل تنظيف لوحات (حمام فوق صوتي)", unit: "عبوة — Mechanic 500 / no-residue board wash", baseMonthlyQty: 0.75, unitUSD: 3.9, source: "Zeus Mining", url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1782", planHint: "بروتوكول التنظيف العميق بعد الصيانة — يكمّل الألتراسونيك؛ يفضل بدون بقايا." }
    ]
  },

  localConsumablesQuarterly: {
    title: "خطة الطلب ربع السنوية — استهلاكات محلية",
    note: "مواد محلية متكررة (العتبة/البستان) محسوبة على نفس حجم العمل الشهري. **مصدر شرائح رخيص:** شراء **هاشبوردات تالفة للتخليع** (~**76 شريحة**/لوح) بسعر تقديري **1500 ج/لوح** — يقلّل الحاجة لشراء كميات ضخمة من Zeus؛ **مع ذلك** يبقى طلب **شرائح جديدة** في خطة المستورد واجباً للتوازن (سرعة، جودة، موديلات نادرة). **تبريد بنش 4×120mm** في **① أصول Zeus**. **أسلاك الجسر** في **خطة المستورد**. **بخاخ IPA 99%** لشطف الهاشات بعد الألتراسونيك (`post_repair_cleaning_protocol.md`). الجدول مرتب تلقائياً من الأعلى تكلفة للربع إلى الأقل.",
    baselineMonthlyOperations: 75,
    currency: "EGP",
    items: [
      { name: "هاشبورد تالف للتخليع (مصدر شرائح)", unit: "لوحة (~76 ASIC)", baseMonthlyQty: 1.5, unitEGP: 1500, source: "سوق محلي / خردة تعدين", planHint: "تقدير **1500 ج/لوحة** — تفكيك انتقائي + فحص؛ لا يعوّض بالكامل الشرائح الجديدة للحالات العاجلة أو الجودة العالية." },
      { name: "كيماويات التنظيف", unit: "IPA 99% (عبوة 500ml)", baseMonthlyQty: 1.2, unitEGP: 220, source: "العتبة / كيماويات" },
      { name: "بخاخ IPA 99%", unit: "عبوة رش كبيرة — شطف نهائي للهاشات", baseMonthlyQty: 0.9, unitEGP: 320, source: "العتبة / كيماويات" },
      { name: "معجون حراري عام", unit: "GD900 أو ما يعادله", baseMonthlyQty: 1, unitEGP: 250, source: "العتبة / البستان" },
      { name: "حماية أثناء الهواء الساخن", unit: "Kapton + شريط ألومنيوم", baseMonthlyQty: 1, unitEGP: 80, source: "العتبة" },
      { name: "حقن فارغة بسن معدني", unit: "علبة ~10 قطع", baseMonthlyQty: 0.6, unitEGP: 45, source: "صيدليات / محلي" },
      { name: "مشابك تثبيت كابلات", unit: "Silicone Cable Clips", baseMonthlyQty: 0.34, unitEGP: 95, source: "إكسسوارات كمبيوتر" }
    ]
  },

  purchases: {
    pageNote: "تقسيم منطقي: أصول ثابتة (مرة واحدة) → نوادر مستوردة (مخزون تخصصي) → العتبة/البستان (متجدد ومساعد). **تنظيم المعمل** (أدراج، علب ESD، حامل أدوات، ملصقات، إلخ) **مدمج في نفس الجداول** مع مصدر مصر / Zeus أو AliExpress وسعر تقديري. لفحص **CLK والإشارات على الهاشبورد (S19/M30 ~25 MHz+)** يلزم **أوسيلوسكوب مكتبي عرض نطاق ≥100 MHz** — مرجع Zeus: UNI-T UTD2102CEX+ مع الطلبية، أو Rigol/Siglent محلياً. فاحص مكونات منضد (مثل DSO-TC3) **اختياري** فقط لسرعة اختبار المكثف/الترانزستور ولا يُعد بديلاً للسكوب.",

    fixedAssets: {
      title: "① قائمة الأصول — الاستثمار الثابت",
      note: "هذه الأدوات «قلب المعمل»: تُشترى مرة واحدة وتعيش معك لسنوات — بما فيها ملفات اختبار PicoBT (أصول رقمية، ليست مستهلكات). **تشمل قوالب Tin / أداة التنقيط ومنصة BGA 90×90 (Tinning)** كأصول ثابتة. **أسلاك الجسر المغطاة قصدير** ليست أصلًا ثابتًا — تُخطَّط كمستهلكات في جدول «مستورد 3 شهور». مرتبة حسب مكان الشراء.",
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
              priceBefore: "باور مختبر صغير لا يكفي لتيار الهاش الكامل (≈150W مقابل 1000W+)",
              saving: "صفحة Zeus — اختر الإصدار المناسب لهاشبورداتك",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=306",
              source: "Zeus Mining",
              badge: "ناقص إلزامي"
            },
            {
              name: "ملتيميتر رقمي (يومي)",
              model: "UNI-T UT136C+",
              function: "قياس جهد/مقاومة/استمرارية للبنش — جهاز «عادي» موثوق؛ **ليس حرارياً** — للنقاط الضيقة استخدم أطراف Zeus (2856/1647) أدناه.",
              price: "$43",
              priceBefore: "ZOYI ZT-R01 (حراري + DMM) — أغلى إن احتجت لاحقاً كاميرا حرارية",
              saving: "Zeus — MOQ 1",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3210",
              source: "Zeus Mining",
              badge: "DMM أساسي"
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
              priceBefore: "منصات تسخين صغيرة لا تغطي الهاش كاملاً — PUHUI لسطح كبير 28×27cm",
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
              function: "CLK على S19/M30 ~25 MHz+ — **سكوب مكتبي ≥100 MHz إلزامي** لفحص الإشارات على الهاشبورد.",
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
              name: "باور DC قابل للضبط (بنش — هاش + كنترول)",
              model: "WANPTEK KPS3030D — 30V 30A 900W + كابلات تمساح 6mm",
              function: "**وحدة واحدة للبنش:** قياس/تغذية هاشبورد (تيار عالٍ) **و** حقن فولت دوائر الكنترول — على الكنترول اضبط **حد تيار منخفض** وفعّل OCP حتى لا تضر بالـ LDO. اختر الموديل/الكابلات على الصفحة (~**$230** مع كابلات 6mm حسب اختيارك).",
              price: "$230",
              priceBefore: "باورين منفصلين (5A محلي + هاش) لم يعودا ضروريين",
              saving: "Zeus — سلسلة KPS",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2184",
              source: "Zeus Mining",
              badge: "Bench DC"
            },
            {
              name: "محطة لحام 2 في 1",
              model: "Quick 707D+ أو 709D+ — هواء ساخن + كاوية",
              function: "إصلاح هاش وباور ASIC — **كاوية اللحام + الهواء الساخن في محطة واحدة**؛ يغني عن شراء كاوية هاش منفصلة (مثل 205H محلياً). اختر 707D+ (800W هواء) أو 709D+ أقوى؛ رؤوس **سلسلة 960** من نفس صفحة Zeus. **لا يستبدل 861DW** إن احتجت هواء أقصى للـ BGA الكبير.",
              price: "$90",
              priceBefore: null,
              saving: "Zeus — توفير مساحة مقابل محطتين منفصلتين",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3609",
              source: "Zeus Mining",
              badge: "2-in-1"
            },
            {
              name: "منصة BGA 90×90 (Tinning)",
              model: "BGA 90x90 — Only tinning tool",
              function: "منصة عامة لتثبيت الشريحة وتنقيط الكرات؛ **أصل ثابت** يُستخدم لسنوات مع قوالب Tin. اختر الـ Kit المناسب من نفس صفحة Zeus.",
              price: "$17.9",
              priceBefore: null,
              saving: "صفحة Zeus ID=1829 — اختر الـ Kit المناسب",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1829",
              source: "Zeus Mining",
              badge: "منصة عامة · أصل"
            },
            {
              name: "Tin tool — Whatsminer KF1950",
              model: "Tin tool / Tin stencil",
              function: "تنقيط/تجهيز لحام لشرائح KF1950 — **قالب أصل ثابت** يُعاد استخدامه.",
              price: "$3.5",
              priceBefore: null,
              saving: "Zeus — مع الشريحة المناسبة",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2292",
              source: "Zeus Mining",
              badge: "Tin stencil · أصل"
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
              badge: "Tin stencil · أصل"
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
              badge: "Tin stencil · أصل"
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
              badge: "Tin stencil · أصل"
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
              badge: "Tin stencil · أصل"
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
              badge: "Tin stencil · أصل"
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
              function: "تنظيف غبار الهاش والمراوح والشاسيه وأنفاق الهواء داخل الماينر؛ Zeus يرسل F10 افتراضياً لاحقاً — جزء من «تجديد شكل الجهاز».",
              price: "$22",
              priceBefore: null,
              saving: "أداة صيانة يدوية — شحن مع الطلبية",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3717",
              source: "Zeus Mining",
              badge: "تنظيف"
            },
            {
              name: "حصيرة صيانة تحت حرارة عالية",
              model: "High temperature repair mat",
              function: "حماية سطح المكتب أثناء الهوت إير/الكاوية — بديل الحصيرة السيليكون المحلية.",
              price: "$8.48",
              priceBefore: "حصيرة مغناطيس محلية ~480 ج",
              saving: "Zeus",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=182",
              source: "Zeus Mining",
              badge: "سلامة البنش"
            },
            {
              name: "أطراف قياس للملتيميتر",
              model: "Multimeter test probes",
              function: "بديل السنون المحلية — توصيل أدق على الـ test points.",
              price: "$3.3",
              priceBefore: "سنون محلية ~350 ج",
              saving: "Zeus",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=2856",
              source: "Zeus Mining",
              badge: "قياس"
            },
            {
              name: "مشبك اختبار SMD للملتيميتر",
              model: "Multimeter SMD Test Clip",
              function: "تثبيت على أرجل رقيقة / SMD دون انزلاق اليد.",
              price: "$2.85",
              priceBefore: null,
              saving: "Zeus",
              url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1647",
              source: "Zeus Mining",
              badge: "SMD"
            }
          ]
        },
        {
          sourceLabel: "🏪 مول البستان",
          tableHint: "أدوات ثقيلة / كهرباء معملية",
          kind: "egp",
          items: [
            { name: "ميكروسكوب رقمي", model: "Andonstar AD207 (7 إنش)", function: "رؤية اللحامات والمسارات المقطوعة بدقة.", price: 7000 }
          ]
        },
        {
          sourceLabel: "📍 العتبة",
          tableHint: "معدات مساعدة + تنظيم مخزون وسير عمل (محلياً)",
          kind: "egp",
          items: [
            { name: "غسالة ألتراسونيك", model: "Ultrasonic Cleaner سعة ~2L", function: "تنظيف نهائي للبوردة من الفلاكس والأوساخ بعد الشغل.", price: 2200 },
            { name: "فرن تجفيف للبوردات", model: "Drying oven ~60–80°C — دورات ≥30 دقيقة", function: "بروتوكول ما بعد الصيانة: بعد IPA لا تشغّل البوردة رطبة تحت ASIC/LDO؛ تجفيف حراري كما يوصي Zeus — انظر `post_repair_cleaning_protocol.md`.", price: 4500 },
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
      note: "أشياء صغيرة لكنها «الخلطة السرية»: لا يُستبدل أغلبها ببديل محلي رخيص دون أن تتأثر جودة الإصلاح أو عمر الهاشبورد. **شرائح Bitmain/Whatsminer** من Zeus — **كمية احتياط جديد** تكمّل **تخليع هاشبوردات بايظة** (~76 شريحة/لوح محلياً، انظر خطة المحلي ربع السنوية)؛ لا حاجة لتكديس شرائح جديدة بمفردها. **قوالب Tin / منصة BGA 90×90** في **① الأصول**.",
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
          name: "منظف بورد (سائل)",
          model: "Mechanic 500 / S880 / 850 — lead-free circuit board cleaner",
          function: "تنظيف هاش/كنترول/باور بعد الشغل — بديل منظف البورد المحلي.",
          price: "$3.9",
          priceBefore: "Board wash محلي ~450 ج",
          saving: "Zeus — موديل 500 على الصفحة",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1782",
          source: "Zeus Mining",
          badge: "تنظيف"
        },
        {
          name: "سلك لحام خالي من الرصاص",
          model: "SANKI — 0.6mm (500g)",
          function: "لحام يدوي للهاش S19 lead-free — بديل قصدير Alpha/Kester المحلي.",
          price: "$16.9",
          priceBefore: "قصدير سلك محلي ~900 ج",
          saving: "Zeus — قطر 0.6mm / 500g",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=3133",
          source: "Zeus Mining",
          badge: "سلك لحام"
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
          name: "علبة تخزين شرائح (ESD)",
          model: "Chip anti-static storage box",
          function: "حفظ شرائح ASIC مفردة أو قطع صغيرة — كرّر الشراء حسب حجم المخزون.",
          price: "$4.4 / علبة",
          priceBefore: "طقم AliExpress تقديري",
          saving: "Zeus — MOQ 1",
          url: "https://www.zeusbtc.com/ASIC-Miner-Repair/Parts-Tools-Details.asp?ID=1754",
          source: "Zeus Mining",
          badge: "ESD · شريحة"
        },
        
      ]
    },

    localSupplies: {
      title: "③ العتبة ومول البستان — متجدد ومساعد",
      note: "كل ما هو متاح في مصر: مواد متجددة، كيماويات، كهرباء بسيطة، وإكسسوارات يومية. يشمل **سيليكون 704**، **منظف ألومنيوم للشاسيه**، **Kimwipes**، **كشاف UV**، **بخاخ تلامسات جاف**، و**مسامير مبردات اختيارية** — انظر `post_repair_cleaning_protocol.md`. **المراوح:** يكفي التنظيف المناسب (منفضة F10 وما شابه) وليس استبدال مجموعة المراوح كبند مشتريات. **ملتيميتر Zeus، حصيرة صيانة، أطراف قياس، قصدير سلك SANKI، منظف Mechanic 500، علب ESD** في `①`/`②`؛ **قوالب Tin ومنصة 90×90** في `①` فقط؛ **أسلاك الجسر** في **مستورد 3 شهور**. ميكروسكوب AD207 محلياً غالباً.",
      location: "مصر — العتبة / مول البستان / شركات كيماويات",
      currency: "EGP",
      items: [
        { name: "كيماويات التنظيف", model: "IPA 99% (≈500ml) — شركات كيماويات بالعتبة", function: "تنظيف الفلاكس والبادز — 99% فقط وليس 70%.", price: 220 },
        { name: "حماية أثناء الهواء الساخن", model: "شريط Kapton أصفر + شريط ألومنيوم", function: "عزل الحرارة وحماية الـ SMD المجاورة.", price: 80 },
        { name: "كهرباء البنش", model: "أسلاك نحاس AWG6 + ترامل حلقية + كابلات باور أصلية", function: "ربط APW12 بالهاشبورد بأمان — يفصلها كهربائي ~100 ج.", price: 150 },
        { name: "مقاومة تفريغ (سلامة البنش)", model: "Discharge Resistor — 25Ω / 100W اسمنتية — محلياً", function: "✗ مطلوب لأمان باور الاختبار على البنش: تفريغ تدريجي للمكثفات الكبيرة بعد الفصل وتقليل صدمات/شرر عند التعامل مع APW12 أو التغذية العالية. اشترِها من محلات المقاومات والكهرباء (العتبة/البستان).", price: 100 },
        { name: "معجون حراري عام", model: "GD900 أو ما يعادله (سائل)", function: "للاستخدام العام على المشتتات — ليس بديل Thermal Putty في الفجوات.", price: 250 },
        { name: "قياس وبرمجة بسيطة", model: "USB to TTL (UART للكنترول)", function: "سيريال PuTTY/MobaXterm؛ **أسلاك جسر مغطاة قصدير** تُخطَّط في **خطة المستهلكات المستوردة ربع السنوية** (Zeus ID=2461) وليست من **① الأصول**.", price: 250 },
        { name: "Recovery كروت MicroSD (صناعية)", model: "8–16 GB × 5–10 — Industrial / High Endurance (Amazon / محلي)", function: "تحديث FPGA على PicoBT/CB4، استعادة كنترول S19، صور اختبار — **لا تستخدم كرت موبايل رخيص للإنتاج.**", price: 432 },
        { name: "سلك جسر فائق الدقة", model: "Jumper / Enameled Wire قطر 0.1mm — العتبة / مول البستان", function: "جسور للمسارات المقطوعة أو الـ pads الضيقة؛ يُباع بالمتر أو بكرة صغيرة من محلات الكيماويات والإلكترونيات.", price: 120 },
        { name: "لمبة UV / كشاف UV صغير", model: "UV Curing Lamp (365–405nm)", function: "تنشيط قناع اللحام UV الأخضر بسرعة بعد ترميم المسارات؛ نفس الأداة تُستخدم بعد Jumpers — دقائق بدل انتظار طويل.", price: 320 },
        { name: "بخاخ تنظيف تلامسات (جاف)", model: "WD-40 Specialist Contact Cleaner أو مكافئ", function: "تنظيف جاف لكابلات الداتا والكنترول من الأكسدة — يقلل هبوط الهاش ريت بسبب سوء التوصيل.", price: 280 },
        { name: "سلك تنظيف الكاوية", model: "Brass Wool Cup", function: "أفضل من السفنجة المبلولة للحفاظ على حرارة السن وإطالة عمر الـ tip.", price: 90 },
        { name: "شفاط قصدير يدوي", model: "Desoldering Pump (SS-02 أو مكافئ)", function: "فك مكونات PSU الأكبر وسحب القصدير من الثقوب بشكل أنظف.", price: 420 },
        { name: "فرش تنظيف ESD", model: "طقم 3-5 أحجام (Anti-static Brushes)", function: "تنظيف الفلاكس وبواقي الكربون حول الـ ASIC ودوائر الباور بدون شحنات ساكنة.", price: 220 },
        { name: "مناديل Kimwipes أو خالية من الوبر", model: "Lint-free Wipes — علبة", function: "مسح سطح الشيبات قبل وضع HY234/SPG-30B؛ لا تترك وبراً تحت المعجون الحراري.", price: 140 },
        { name: "سيليكون 704 (RTV)", model: "أنبوبة — إغلاق APW12 بعد الفتح", function: "دليل Zeus FILE 7: إعادة عزل/تثبيت الغطاء والأطراف بعد إصلاح البور — يمنع رطوبة واهتزاز كما في المصنع.", price: 180 },
        { name: "منظف ألومنيوم للشاسيه", model: "Metal polish / aluminum cleaner — S19", function: "إرجاع لمعة هيكل الألومنيوم بعد إزالة البقع والتأكسد — «الجهاز يبان جديد» للعميل.", price: 220 },
        { name: "مسامير مبردات ستانلس (اختياري)", model: "طقم متوافق مع تثبيت المشتتات على الهاش", function: "استبدال مسامير مصدية لمظهر احترافي بعد فك المبردات.", price: 120 }
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
    { service: "بيع جهاز بعد الترميم (شراء معيب)", clientPrice: 1000, materialCost: 138, marketerCommission: 200, netProfit: 662, successRate: 0.8 }
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
    marketerTotal: 1600
  },

  deviceFlipProject: {
    title: "مشروع تدوير الأجهزة المعيبة",
    intro: "**مسار مالي مستقل** عن إصلاح القطع بالسعر الثابت: رأس مال دوّار لكل محاولة (**شراء ~$100 + خامات إصلاح** ضمن ~**$138**/محاولة)، بيع **$1000** عند اكتمال الترميم. **الإيراد وعمولة المسوق** تُحسبان على **البيع الناجح فقط** (افتراض نجاح **80%**)؛ **COGS** على **كل محاولة** حتى الفاشلة. **OPEX** الورشة (إيجار، راتب، كهرباء) **لا يُوزَّع** هنا — يظل في قائمة الدخل **المجمّعة** فقط؛ هذا القسم يعرض **مساهمة المشروع قبل OPEX**."
  },

  pl: {
    currency: "USD / EGP",
    exchangeRate: 54,
    exchangeNote: "قائمة الدخل تعرض **جزأين** (ورشة إصلاح + مشروع تدوير معيبين) ثم **المجمّع**. عمولة المسوق 20% من إيراد كل بند. مشروع التدوير: إيراد/عمولة على البيع الناجح فقط (80%)، COGS على كل محاولة. **OPEX** يُخصم مرة واحدة من المجمّع.",
    grossRevenue:         { usd: 13000,  egp: 702000 },
    marketerCommission:   { usd: 2600,   egp: 140400 },
    cogs:                 { usd: 1749,   egp: 94446  },
    grossProfit:          { usd: 8651,   egp: 467154 },
    opex:                 { usd: 629.63, egp: 34000  },
    netProfit:            { usd: 8021.37, egp: 433154 }
  },

  roi: {
    capex: {
      extraItems: [
        { label: "تجهيزات المحل (تشطيب + أثاث)", usd: 200 },
        { label: "جمارك + شحن منتجات من الخارج (مرة واحدة)", usd: 500 }
      ],
      note: "CAPEX يشمل تقدير جمارك وشحن لمرة واحدة ($500) + **UNI-T UTD2102CEX+ (100 MHz)** أو سكوب محلي مماثل + **UNI-T UT136C+** + ملحقات قياس Zeus + PICKit 3.5 + كابل EEPROM + WANPTEK KPS + تبريد 4×120mm + حصيرة صيانة 182 + **Quick 707D+** + **861DW** + AD207 + **PUHUI T-8280** (بدون HP-B100 مكرر). بدون فاحص مكونات منضد اختياري (مثل DSO-TC3)."
    },
    annualNetProfit:      { usd: 96256.44, egp: 5197848 },
    monthlyNetProfit:     { usd: 8021.37,  egp: 433154  },
    paybackDays:          24,
    roiPercent:           1470
  }

};

