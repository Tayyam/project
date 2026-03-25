/**
 * Tab sections rendered into #mainContent (workflow, KB shell, purchases, financials, ROI).
 */
export function mountSections(main, DATA, { fmt, fmtUSD, fmtEGP }, { purchaseImportRow, purchaseLocalRow }) {

function computeQuarterlyPlan(plan, currentOps, unitField, costField) {
  if (!plan || !Array.isArray(plan.items)) {
    return { rows: [], totalQuarterlyCost: 0, loadFactor: 1 };
  }
  const baseline = plan.baselineMonthlyOperations || 75;
  const loadFactor = baseline > 0 ? currentOps / baseline : 1;

  const rows = plan.items.map(item => {
    const baseM = Number(item.baseMonthlyQty) || 0;
    const monthlyQty = baseM * loadFactor;
    let quarterlyQty;
    if (item.fixedQuarterlyQty != null && item.fixedQuarterlyQty !== "") {
      const fq = Number(item.fixedQuarterlyQty);
      quarterlyQty = Math.max(0, Math.ceil(fq * loadFactor));
    } else if (baseM > 0) {
      quarterlyQty = Math.max(0, Math.round(monthlyQty * 3));
    } else {
      quarterlyQty = 0;
    }
    const unitCost = Number(item[unitField]) || 0;
    const quarterCost = quarterlyQty * unitCost;
    return {
      ...item,
      monthlyQty,
      quarterlyQty,
      quarterCost,
      [costField]: unitCost
    };
  });

  rows.sort((a, b) => {
    const d = b.quarterCost - a.quarterCost;
    if (d !== 0) return d;
    return String(a.name).localeCompare(String(b.name), "ar");
  });

  const totalQuarterlyCost = rows.reduce((sum, r) => sum + r.quarterCost, 0);
  return { rows, totalQuarterlyCost, loadFactor };
}

function computeImportQuarterlyPlan(data) {
  const currentOps = (data.monthlyVolume && data.monthlyVolume.totalOperations) || 75;
  const result = computeQuarterlyPlan(data.importedConsumablesQuarterly, currentOps, "unitUSD", "unitUSD");
  return {
    rows: result.rows,
    totalQuarterlyUSD: result.totalQuarterlyCost,
    loadFactor: result.loadFactor
  };
}

function computeLocalQuarterlyPlan(data) {
  const currentOps = (data.monthlyVolume && data.monthlyVolume.totalOperations) || 75;
  const result = computeQuarterlyPlan(data.localConsumablesQuarterly, currentOps, "unitEGP", "unitEGP");
  return {
    rows: result.rows,
    totalQuarterlyEGP: result.totalQuarterlyCost,
    loadFactor: result.loadFactor
  };
}

/** صف إيراد شهري مع تطبيق successRate (0–1) إن وُجد: إيراد وعمولة على البيع الناجح فقط، خامات على كل محاولة. إن وُجد `marketerCommissionApplies: false` لا تُحسب عمولة على الصف. */
function effectiveMonthlyRevenueRow(r, marketerPct) {
  const pct = Number(marketerPct) || 20;
  const skipMkt = r.marketerCommissionApplies === false;
  const rawP = r.successRate;
  const p = rawP != null && rawP !== "" ? Number(rawP) : NaN;
  if (!Number.isNaN(p) && p >= 0 && p <= 1) {
    const n = Number(r.count) || 0;
    const price = Number(r.pricePerUnit) || 0;
    const cpu = Number(r.costPerUnit) || 0;
    const expectedSold = n * p;
    const totalRevenue = expectedSold * price;
    const totalCost = n * cpu;
    const marketerTotal = skipMkt ? 0 : totalRevenue * (pct / 100);
    return {
      ...r,
      totalRevenue,
      totalCost,
      marketerTotal,
      _expectedSold: expectedSold,
      _attempts: n,
      _successRate: p
    };
  }
  return {
    ...r,
    totalRevenue: Number(r.totalRevenue) || 0,
    totalCost: Number(r.totalCost) || 0,
    marketerTotal: skipMkt ? 0 : (Number(r.marketerTotal) || 0),
    _expectedSold: Number(r.count) || 0,
    _attempts: Number(r.count) || 0,
    _successRate: null
  };
}

const marketerPctGlobal = Number(DATA.marketerCommissionPercent) || 20;
const repairRevenueSource = DATA.monthlyRevenueRepair ?? DATA.monthlyRevenue ?? [];
const flipRevenueSource = DATA.monthlyDeviceFlip ? [DATA.monthlyDeviceFlip] : [];
const repairRevenueEffective = repairRevenueSource.map(row =>
  effectiveMonthlyRevenueRow(row, marketerPctGlobal)
);
const flipRevenueEffective = flipRevenueSource.map(row =>
  effectiveMonthlyRevenueRow(row, marketerPctGlobal)
);
const monthlyRevenueEffective = [...repairRevenueEffective, ...flipRevenueEffective];

function segmentTotalsUSD(arr) {
  const rev = arr.reduce((a, r) => a + r.totalRevenue, 0);
  const mkt = arr.reduce((a, r) => a + r.marketerTotal, 0);
  const cogs = arr.reduce((a, r) => a + r.totalCost, 0);
  const gross = rev - mkt - cogs;
  return { rev, mkt, cogs, gross };
}

/* ── 1. Workflow ── */
main.insertAdjacentHTML('beforeend', `
<section id="workflow" class="active">
  <div class="section-heading">
    <div class="icon">⚙️</div>
    <h2>مسار العمل <span>الاحترافي</span></h2>
  </div>
  <div class="workflow-list">
    ${DATA.workflow.map(w => `
      <div class="workflow-step">
        <div class="step-num">${w.step}</div>
        <div class="step-body">
          <h3>${w.title}</h3>
          <p>${w.description}</p>
        </div>
      </div>
    `).join('')}
  </div>
</section>
`);

/* ── 2. Knowledge Base (hub + asic_repair_kb/components) ── */
main.insertAdjacentHTML('beforeend', `
<section id="protocol">
  <div class="section-heading">
    <div class="icon">📚</div>
    <h2>${DATA.knowledgeBase.titleAr} <span style="font-size:.72em;color:var(--text-muted)">— ${DATA.knowledgeBase.titleEn}</span></h2>
  </div>
  <div class="card" style="margin-bottom:14px;padding:14px 18px">
    <p style="color:var(--text-muted);margin:0;font-size:.84rem;line-height:1.85">${DATA.knowledgeBase.hubNote}</p>
  </div>
  <div id="kbToolbar" class="card" style="margin-bottom:12px;padding:12px 16px;display:none">
    <button type="button" id="kbBackHub" style="background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.4);color:#93c5fd;padding:8px 16px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:.86rem;font-weight:700">
      ← العودة للفهرس الرئيسي
    </button>
  </div>
  <div id="kbStatus" class="card" style="margin-bottom:16px">
    <p class="kb-loading" style="color:var(--text-muted);margin:0;font-size:.88rem;line-height:1.8">
      جاري تحميل <code style="color:#93c5fd">${DATA.knowledgeBase.file}</code>…
    </p>
  </div>
  <article id="kbRoot" class="card md-kb" dir="ltr" lang="en" hidden></article>
</section>
`);

/* ── 3. Purchases ── */
main.insertAdjacentHTML('beforeend', `
<section id="purchases">
  <div class="section-heading">
    <div class="icon">🛒</div>
    <h2>خريطة <span>المشتريات</span></h2>
  </div>

  <div class="card" style="margin-bottom:20px">
    <p style="color:var(--text-muted);font-size:.88rem;line-height:1.85;margin:0">${DATA.purchases.pageNote}</p>
  </div>

  <div class="card" style="margin-bottom:24px">
    <div class="card-title" style="justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span>${DATA.purchases.fixedAssets.title}</span>
      <span style="background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.35);color:#fbbf24;font-size:.72rem;padding:3px 10px;border-radius:20px;font-weight:600">مرة واحدة — أصول</span>
    </div>
    <p style="font-size:.83rem;color:var(--text-muted);margin-bottom:18px">${DATA.purchases.fixedAssets.note}</p>
    ${DATA.purchases.fixedAssets.groups.map(g => `
      <div style="margin-bottom:22px">
        <div style="font-weight:700;font-size:.92rem;color:var(--text);margin-bottom:6px">${g.sourceLabel}</div>
        <div style="font-size:.78rem;color:var(--text-muted);margin-bottom:10px">${g.tableHint}</div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>الأداة / الأصل</th>
                <th>الموديل</th>
                <th>الوظيفة الأساسية</th>
                ${g.kind === 'usd'
                  ? '<th>السعر</th><th>ملاحظة</th><th>رابط</th>'
                  : '<th>السعر التقديري (ج)</th>'}
              </tr>
            </thead>
            <tbody>
              ${g.kind === 'usd'
                ? g.items.map(purchaseImportRow).join('')
                : g.items.map(purchaseLocalRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `).join('')}
  </div>

  <div class="card" style="margin-bottom:24px">
    <div class="card-title" style="justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span>${DATA.purchases.importedSpecialty.title}</span>
      <span style="background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.3);color:#34d399;font-size:.72rem;padding:3px 10px;border-radius:20px;font-weight:600">
        ✓ أسعار Zeus / AliExpress
      </span>
    </div>
    <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:6px">${DATA.purchases.importedSpecialty.location} · ${DATA.purchases.importedSpecialty.currency}</p>
    <p style="font-size:.83rem;color:var(--text-muted);margin-bottom:14px">${DATA.purchases.importedSpecialty.note}</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>المخزون</th>
            <th>الموديل / الوصف</th>
            <th>الوظيفة</th>
            <th>السعر</th>
            <th>التوفير / ملاحظة</th>
            <th>رابط</th>
          </tr>
        </thead>
        <tbody>
          ${DATA.purchases.importedSpecialty.items.map(purchaseImportRow).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="card">
    <div class="card-title">${DATA.purchases.localSupplies.title}</div>
    <p style="font-size:.78rem;color:var(--text-muted);margin-bottom:6px">📍 ${DATA.purchases.localSupplies.location}</p>
    <p style="font-size:.83rem;color:var(--text-muted);margin-bottom:14px">${DATA.purchases.localSupplies.note}</p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>البند</th>
            <th>الموديل / أين تشتريه</th>
            <th>الوظيفة</th>
            <th>السعر التقديري (${DATA.purchases.localSupplies.currency})</th>
          </tr>
        </thead>
        <tbody>
          ${DATA.purchases.localSupplies.items.map(purchaseLocalRow).join('')}
        </tbody>
      </table>
    </div>
    <p style="font-size:.78rem;color:var(--text-muted);margin-top:14px">GD900 متوفر أيضاً بعبوة 1kg من Zeus (~$3.4) إن أردت جودة ثابتة وتكلفة للوحدة أقل عند الاستهلاك العالي.</p>
  </div>
</section>
`);

/* ── 4. Imported Consumables Quarterly ── */
const importQuarter = computeImportQuarterlyPlan(DATA);
const localQuarter = computeLocalQuarterlyPlan(DATA);
main.insertAdjacentHTML('beforeend', `
<section id="importQuarterly">
  <div class="section-heading">
    <div class="icon">📦</div>
    <h2>${DATA.importedConsumablesQuarterly.title}</h2>
  </div>

  <div class="card" style="margin-bottom:20px">
    <p style="color:var(--text-muted);font-size:.88rem;line-height:1.85;margin:0">${DATA.importedConsumablesQuarterly.note}</p>
    <p style="margin-top:8px;font-size:.8rem;color:#93c5fd">حجم العمل الحالي: ${DATA.monthlyVolume.totalOperations} عملية/شهر — عامل التحميل: ×${importQuarter.loadFactor.toFixed(2)}</p>
    <p style="margin-top:6px;font-size:.75rem;color:var(--text-muted)">ترتيب الصفوف: <strong>الإجمالي الربع سنوي ($)</strong> من الأعلى → الأقل.</p>
  </div>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>المستهلك المستورد</th>
          <th>وحدة الشراء</th>
          <th>الاحتياج الشهري</th>
          <th>الكمية المطلوبة كل 3 شهور</th>
          <th>تكلفة الوحدة ($)</th>
          <th>الإجمالي الربع سنوي ($)</th>
          <th>المصدر</th>
        </tr>
      </thead>
      <tbody>
        ${importQuarter.rows.map(r => {
          const fq = r.fixedQuarterlyQty != null && r.fixedQuarterlyQty !== "" ? Number(r.fixedQuarterlyQty) : null;
          const monthlyCell = (Number(r.baseMonthlyQty) > 0)
            ? r.monthlyQty.toFixed(2)
            : (fq != null && fq > 0)
              ? `<span style="opacity:.85">ثابت/ربع</span>`
              : "—";
          const qCell = r.quarterlyQty > 0 ? r.quarterlyQty : "—";
          const usdCell = r.quarterlyQty > 0 ? fmtUSD(r.quarterCost) : "—";
          return `
          <tr>
            <td style="font-weight:600">${r.name}${r.planHint ? `<div style="font-size:.72rem;color:var(--text-muted);font-weight:400;margin-top:4px">${r.planHint}</div>` : ""}</td>
            <td class="mono">${r.unit}</td>
            <td class="mono">${monthlyCell}</td>
            <td class="amber mono">${qCell}</td>
            <td class="mono">${fmtUSD(r.unitUSD)}</td>
            <td class="green mono">${usdCell}</td>
            <td><a href="${r.url}" target="_blank" rel="noopener" style="color:#6ee7b7;text-decoration:none">🔗 ${r.source}</a></td>
          </tr>`;
        }).join('')}
      </tbody>
    </table>
  </div>

  <div class="card" style="margin-top:16px">
    <div class="capex-item" style="border-bottom:none;padding:4px 0">
      <span style="font-weight:800">إجمالي طلب المستورد (3 شهور)</span>
      <span style="font-weight:900;color:var(--accent);font-size:1.1rem">${fmtUSD(importQuarter.totalQuarterlyUSD)}</span>
    </div>
    <div style="text-align:center;margin-top:6px;font-size:.78rem;color:var(--text-muted)">${fmtEGP(Math.round(importQuarter.totalQuarterlyUSD * DATA.pl.exchangeRate))}</div>
  </div>

  <div class="section-heading" style="margin-top:28px">
    <div class="icon">🏪</div>
    <h2>${DATA.localConsumablesQuarterly.title}</h2>
  </div>

  <div class="card" style="margin-bottom:20px">
    <p style="color:var(--text-muted);font-size:.88rem;line-height:1.85;margin:0">${DATA.localConsumablesQuarterly.note}</p>
    <p style="margin-top:8px;font-size:.8rem;color:#93c5fd">حجم العمل الحالي: ${DATA.monthlyVolume.totalOperations} عملية/شهر — عامل التحميل: ×${localQuarter.loadFactor.toFixed(2)}</p>
    <p style="margin-top:6px;font-size:.75rem;color:var(--text-muted)">ترتيب الصفوف: <strong>الإجمالي الربع سنوي (ج)</strong> من الأعلى → الأقل.</p>
  </div>

  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>الاستهلاك المحلي</th>
          <th>وحدة الشراء</th>
          <th>الاحتياج الشهري</th>
          <th>الكمية المطلوبة كل 3 شهور</th>
          <th>تكلفة الوحدة (ج)</th>
          <th>الإجمالي الربع سنوي (ج)</th>
          <th>المصدر</th>
        </tr>
      </thead>
      <tbody>
        ${localQuarter.rows.map(r => `
          <tr>
            <td style="font-weight:600">${r.name}${r.planHint ? `<div style="font-size:.72rem;color:var(--text-muted);font-weight:400;margin-top:4px">${r.planHint}</div>` : ""}</td>
            <td class="mono">${r.unit}</td>
            <td class="mono">${r.monthlyQty.toFixed(2)}</td>
            <td class="amber mono">${r.quarterlyQty}</td>
            <td class="mono">${fmt(r.unitEGP)}</td>
            <td class="green mono">${fmt(r.quarterCost)}</td>
            <td style="color:var(--text-muted)">${r.source || "محلي"}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <div class="card" style="margin-top:16px">
    <div class="capex-item" style="border-bottom:none;padding:4px 0">
      <span style="font-weight:800">إجمالي الاستهلاكات المحلية (3 شهور)</span>
      <span style="font-weight:900;color:#34d399;font-size:1.1rem">${fmt(localQuarter.totalQuarterlyEGP)}</span>
    </div>
    <div style="text-align:center;margin-top:6px;font-size:.78rem;color:var(--text-muted)">${fmtUSD(localQuarter.totalQuarterlyEGP / DATA.pl.exchangeRate)}</div>
  </div>
</section>
`);

/* ── 5. Cost Per Repair ── */
main.insertAdjacentHTML('beforeend', `
<section id="costPerRepair">
  <div class="section-heading">
    <div class="icon">🔬</div>
    <h2>تكلفة <span>الخامات</span> لكل إصلاح</h2>
  </div>
  <div class="table-wrap" style="margin-bottom:28px">
    <table>
      <thead>
        <tr>
          <th>القسم</th>
          <th>متوسط الخامات المستهلكة (شراء ذكي)</th>
          <th>قديم</th>
          <th>جديد</th>
          <th>سبب التوفير</th>
        </tr>
      </thead>
      <tbody>
        ${DATA.costPerRepair.map(r => `
          <tr>
            <td style="font-weight:600">${r.category}</td>
            <td style="color:var(--text-muted);font-size:.8rem;max-width:320px">${r.materials}</td>
            <td class="mono price-old">${fmtUSD(r.oldCostUSD)}</td>
            <td class="green mono">${fmtUSD(r.avgCostUSD)}</td>
            <td style="color:var(--text-muted);font-size:.78rem;max-width:220px">${r.savingReason}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  <div class="grid-4">
    ${DATA.costPerRepair.map((r, i) => {
      const colors = ['amber','blue','green','red','purple'];
      return `
        <div class="stat-card ${colors[i % colors.length]}">
          <div class="stat-label">${r.category}</div>
          <div class="stat-value">${fmtUSD(r.avgCostUSD)}</div>
          <div class="stat-sub">كان ${fmtUSD(r.oldCostUSD)} → وفّر ${fmtUSD(r.oldCostUSD - r.avgCostUSD)}</div>
        </div>
      `;
    }).join('')}
  </div>
</section>
`);

/* ── 4. Pricing ── */
main.insertAdjacentHTML('beforeend', `
<section id="pricing">
  <div class="section-heading">
    <div class="icon">💰</div>
    <h2>التسعير <span>والربحية</span></h2>
  </div>
  <div class="table-wrap" style="margin-bottom:28px">
    <table>
      <thead>
        <tr>
          <th>الخدمة</th>
          <th>سعر العميل ($)</th>
          <th>سعر العميل (ج)</th>
          <th>عمولة مسوق 20% ($)</th>
          <th>عمولة (ج)</th>
          <th>خامات ($)</th>
          <th>خامات (ج)</th>
          <th>صافي للمركز ($)</th>
          <th>صافي (ج)</th>
          <th>هامش %</th>
        </tr>
      </thead>
      <tbody>
        ${DATA.pricing.map(p => {
          const xr = DATA.pl.exchangeRate;
          const mkPct = Number(DATA.marketerCommissionPercent) || 20;
          const noMkt = p.marketerCommissionApplies === false;
          const sr = p.successRate != null && p.successRate !== "" ? Number(p.successRate) : null;
          const hasSr = sr != null && !Number.isNaN(sr) && sr >= 0 && sr <= 1;
          const mktIfSold = noMkt ? 0 : p.clientPrice * mkPct / 100;
          const netIfSold = p.clientPrice - mktIfSold - p.materialCost;
          const expNetPerAttempt = hasSr
            ? sr * netIfSold - (1 - sr) * p.materialCost
            : null;
          const margin = hasSr && p.clientPrice > 0
            ? ((expNetPerAttempt / p.clientPrice) * 100).toFixed(1)
            : ((p.netProfit / p.clientPrice) * 100).toFixed(1);
          const expMktPerAttempt = hasSr && !noMkt ? sr * mktIfSold : (noMkt ? 0 : p.marketerCommission);
          const netMain = hasSr ? fmtUSD(expNetPerAttempt) : fmtUSD(p.netProfit);
          const netSub = hasSr
            ? `<div style="font-size:.72rem;color:var(--text-muted);margin-top:4px">عند نجاح البيع: ${fmtUSD(netIfSold)}${noMkt ? " · <span style=\"color:#93c5fd\">بدون عمولة مسوق</span>" : ` · عمولة متوقعة/محاولة ≈ ${fmtUSD(expMktPerAttempt)}`} · خامات/محاولة ${fmtUSD(p.materialCost)}</div>`
            : "";
          const mktCell = hasSr
            ? (noMkt
              ? `<span style="color:var(--text-muted)">—</span><div style="font-size:.68rem;color:#93c5fd;margin-top:2px">لا عمولة</div>`
              : `${fmtUSD(expMktPerAttempt)} <span style="font-size:.7rem;color:var(--text-muted)">متوقع/محاولة</span><div style="font-size:.68rem;color:var(--text-muted)">${fmtUSD(mktIfSold)} عند بيع واحد</div>`)
            : fmtUSD(p.marketerCommission);
          const mktEgpVal = hasSr ? expMktPerAttempt : p.marketerCommission;
          return `
            <tr>
              <td style="font-weight:600">${p.service}${hasSr ? `<div style="font-size:.72rem;color:#93c5fd;font-weight:500;margin-top:4px">نجاح متوقع ${Math.round(sr * 100)}% (إيراد فقط على البيع الناجح)</div>` : ""}</td>
              <td class="blue mono">${fmtUSD(p.clientPrice)}</td>
              <td class="mono" style="color:#93c5fd;font-size:.85rem">${fmtEGP(Math.round(p.clientPrice * xr))}</td>
              <td style="color:#fbbf24" class="mono">${mktCell}</td>
              <td class="mono" style="color:#fcd34d;font-size:.85rem">${fmtEGP(Math.round(mktEgpVal * xr))}</td>
              <td style="color:#f87171" class="mono">${fmtUSD(p.materialCost)}</td>
              <td class="mono" style="color:#fca5a5;font-size:.85rem">${fmtEGP(Math.round(p.materialCost * xr))}</td>
              <td class="green mono">${netMain}${netSub || ""}</td>
              <td class="mono" style="color:#6ee7b7;font-size:.85rem">${fmtEGP(Math.round((hasSr ? expNetPerAttempt : p.netProfit) * xr))}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="amber" style="font-weight:700">${margin}%</span>
                  <div style="flex:1;background:var(--bg3);border-radius:4px;height:6px;min-width:60px">
                    <div style="height:100%;border-radius:4px;background:linear-gradient(90deg,var(--accent3),#6ee7b7);width:${Math.min(Math.max(parseFloat(margin), 0), 100)}%"></div>
                  </div>
                </div>
                ${hasSr ? `<div style="font-size:.68rem;color:var(--text-muted);margin-top:4px">الهامش من صافي متوقع/محاولة ÷ سعر الإعلان</div>` : ""}
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
    <p class="stat-note" style="margin-top:10px;text-align:center">عمولة المسوق ${DATA.marketerCommissionPercent}% من سعر العميل على خدمات الإصلاح · **إعادة بيع الجهاز بعد الترميم**: بدون عمولة مسوق · صافي متوقع/محاولة (التدوير) = نسبة النجاح × (سعر البيع − خامات المحاولة) − (1 − نسبة النجاح) × خامات المحاولة · تحويل: 1 USD = ${DATA.pl.exchangeRate} EGP</p>
  </div>
  <div class="grid-4">
    ${DATA.pricing.map((p, i) => {
      const colors = ['green','blue','amber','red','purple'];
      const mkPct = Number(DATA.marketerCommissionPercent) || 20;
      const noMkt = p.marketerCommissionApplies === false;
      const mktIfSold = noMkt ? 0 : p.clientPrice * mkPct / 100;
      const netIfSold = p.clientPrice - mktIfSold - p.materialCost;
      const sr = p.successRate != null && p.successRate !== "" ? Number(p.successRate) : null;
      const hasSr = sr != null && !Number.isNaN(sr) && sr >= 0 && sr <= 1;
      const expNet = hasSr ? sr * netIfSold - (1 - sr) * p.materialCost : p.netProfit;
      const sub = hasSr ? `متوقع/محاولة (${Math.round(sr * 100)}% نجاح) · عند البيع ${fmtUSD(netIfSold)}${noMkt ? " · لا عمولة" : ""}` : "صافي الربح";
      return `
        <div class="stat-card ${colors[i % colors.length]}">
          <div class="stat-label">${p.service}</div>
          <div class="stat-value">${fmtUSD(expNet)}</div>
          <div class="stat-sub">${sub}</div>
        </div>
      `;
    }).join('')}
  </div>
</section>
`);

/* ── 5. OPEX (مصاريف ثابتة + تعادل محسوب من جدول الإيرادات) ── */
const xrOpex = Number(DATA.pl?.exchangeRate) || 54;
const opexMonthlyEGP = Number(DATA.opex?.totalMonthly) || (DATA.opex?.monthly || []).reduce((s, r) => s + (Number(r.amount) || 0), 0);
const opexMonthlyUSD = opexMonthlyEGP / xrOpex;
const hashRowPricing = (DATA.pricing || []).find(p => /هاشبورد/.test(String(p.service || "")));
const netPerHashUSD = hashRowPricing && Number(hashRowPricing.netProfit) > 0 ? Number(hashRowPricing.netProfit) : 71.5;
const breakEvenHashboardsDyn = netPerHashUSD > 0 ? Math.ceil(opexMonthlyUSD / netPerHashUSD) : Number(DATA.opex.breakEvenUnits) || 9;
const totRevOpex  = monthlyRevenueEffective.reduce((a, r) => a + r.totalRevenue, 0);
const totCostOpex = monthlyRevenueEffective.reduce((a, r) => a + r.totalCost, 0);
const totMktOpex  = monthlyRevenueEffective.reduce((a, r) => a + r.marketerTotal, 0);
const grossBeforeOpexUSD = totRevOpex - totMktOpex - totCostOpex;
const netAfterOpexUSD = grossBeforeOpexUSD - opexMonthlyUSD;

main.insertAdjacentHTML('beforeend', `
<section id="opex">
  <div class="section-heading">
    <div class="icon">📊</div>
    <h2>المصاريف التشغيلية <span>ونقطة التعادل</span></h2>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-title">📋 هيكل التكاليف الثابتة (شهرياً)</div>
      ${DATA.opex.monthly.map(m => `
        <div class="pl-row">
          <span class="pl-label strong">${m.label}</span>
          <span style="color:var(--text);font-weight:600">${fmt(m.amount)} ج</span>
        </div>
      `).join('')}
      <div class="pl-row total">
        <span class="pl-label strong">الإجمالي الثابت الشهري (OPEX)</span>
        <span class="pl-value net">${fmt(opexMonthlyEGP)} ج</span>
      </div>
      <div class="pl-row" style="border-top:1px dashed var(--border);margin-top:8px;padding-top:10px">
        <span class="pl-label">ما يعادل بالدولار (للمقارنة مع الإيرادات $)</span>
        <span class="mono" style="color:#93c5fd;font-weight:600">≈ ${fmtUSD(opexMonthlyUSD)} / شهر · 1 USD = ${xrOpex} EGP</span>
      </div>
      <div style="margin-top:14px;padding:12px 14px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.2);border-radius:8px;font-size:.82rem;color:var(--text-muted)">
        ⚡ تكلفة تجهيز المكان (مرة واحدة): <strong style="color:var(--accent)">${fmt(DATA.opex.setupCost)} ج</strong>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🎯 نقطة التعادل (Break-Even)</div>
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;font-weight:900;font-family:'Orbitron',monospace;color:var(--accent3);line-height:1">
          ${breakEvenHashboardsDyn}
        </div>
        <div style="font-size:1rem;color:var(--text-muted);margin-top:8px">لوحات هاشبورد / شهر <span style="font-size:.78rem">(سيناريو تحفّظي)</span></div>
        <div style="margin-top:16px;font-size:.86rem;color:var(--text-muted);line-height:1.7;max-width:340px;margin-inline:auto;text-align:center">
          ${DATA.opex.breakEvenNote}
        </div>
        <div style="margin-top:18px;padding:12px 14px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.22);border-radius:8px;font-size:.8rem;color:#a7f3d0;line-height:1.65;max-width:360px;margin-inline:auto;text-align:right">
          <strong style="color:#34d399">بحسب جدول الإيرادات الحالي</strong> (نفس الافتراضات في الموقع):<br/>
          صافي للمركز <strong>قبل</strong> OPEX ≈ <span class="mono">${fmtUSD(grossBeforeOpexUSD)}</span><br/>
          بعد خصم OPEX ≈ <span class="mono">${fmtUSD(netAfterOpexUSD)}</span> / شهر
        </div>
      </div>
    </div>
  </div>
</section>
`);

/* ── 6. Monthly Volume ── */
const volumeCfg = DATA.monthlyVolume || {};
const templateServices = Array.isArray(volumeCfg.services) ? volumeCfg.services : [];
const serviceTemplateByKey = new Map();
const keyOfService = (name = "") => {
  const s = String(name);
  if (s.includes("هاش")) return "hash";
  if (s.includes("باور")) return "psu";
  if (s.includes("كنترول")) return "ctrl";
  if (s.includes("كابل")) return "cable";
  return s.trim();
};
templateServices.forEach(s => serviceTemplateByKey.set(keyOfService(s.type), s));

const volumeRows = monthlyRevenueEffective.map(r => {
  const key = keyOfService(r.service);
  const tpl = serviceTemplateByKey.get(key);
  const count = Number(r.count) || 0;
  const fallbackHoursPerUnit = tpl && (Number(tpl.monthlyCount) > 0)
    ? (Number(tpl.totalHours) || 0) / Number(tpl.monthlyCount)
    : 0;
  const hoursPerUnit = Number(tpl?.hoursPerUnit) || fallbackHoursPerUnit;
  const totalHours = count * hoursPerUnit;
  const sr = r._successRate != null ? r._successRate : (r.successRate != null ? Number(r.successRate) : null);
  return {
    type: tpl?.type || r.service,
    monthlyCount: count,
    timePerUnit: tpl?.timePerUnit || "—",
    improvement: tpl?.improvement || null,
    totalHours,
    excludeFromOperationCount: false,
    successRate: sr != null && !Number.isNaN(sr) ? sr : null
  };
});

const ks = volumeCfg.knowledgeStudy;
if (ks && Number(ks.totalHours) > 0) {
  const th = Number(ks.totalHours) || 0;
  volumeRows.push({
    type: ks.label || "مراجعة Knowledge Base",
    monthlyCount: Number(ks.sessionsPerMonth) || 0,
    timePerUnit: ks.timePerUnit || "—",
    improvement: ks.improvement || null,
    totalHours: th,
    excludeFromOperationCount: true
  });
}

const totalOperationsDyn = volumeRows.reduce((s, r) => s + (r.excludeFromOperationCount ? 0 : r.monthlyCount), 0);
const totalEffectiveHoursDyn = volumeRows.reduce((s, r) => s + r.totalHours, 0);
const knowledgeSessionsDyn = volumeRows.reduce((s, r) => s + (r.excludeFromOperationCount ? r.monthlyCount : 0), 0);
const workDays = Number(volumeCfg.workDays) || 25;
const hoursPerDay = Number(volumeCfg.hoursPerDay) || 8;
const totalHoursDyn = workDays * hoursPerDay;
const capacityUsedPercentDyn = totalHoursDyn > 0
  ? Math.round((totalEffectiveHoursDyn / totalHoursDyn) * 100)
  : 0;

main.insertAdjacentHTML('beforeend', `
<section id="volume">
  <div class="section-heading">
    <div class="icon">📅</div>
    <h2>محاكاة حجم العمل <span>الشهري</span></h2>
  </div>
  <div class="grid-4" style="margin-bottom:24px">
    <div class="stat-card amber">
      <div class="stat-label">أيام العمل</div>
      <div class="stat-value">${workDays}</div>
      <div class="stat-sub">يوم / شهر</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-label">إجمالي ساعات الدوام</div>
      <div class="stat-value">${totalHoursDyn}</div>
      <div class="stat-sub">ساعة شهرياً</div>
    </div>
    <div class="stat-card green">
      <div class="stat-label">ساعات العمل الفعلية</div>
      <div class="stat-value">${totalEffectiveHoursDyn.toFixed(1)}</div>
      <div class="stat-sub">ساعة فعلية</div>
    </div>
    <div class="stat-card red">
      <div class="stat-label">نسبة استخدام الوقت</div>
      <div class="stat-value">${capacityUsedPercentDyn}%</div>
      <div class="stat-sub">من طاقة المهندس</div>
    </div>
  </div>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>نوع العطل</th>
          <th>العدد المتوقع / شهر</th>
          <th>وقت التنفيذ / قطعة</th>
          <th>إجمالي الساعات</th>
        </tr>
      </thead>
      <tbody>
        ${volumeRows.map(s => `
          <tr>
            <td style="font-weight:600">${s.type}</td>
            <td class="blue mono">${s.monthlyCount}${s.successRate != null && s.successRate < 1 ? `<div style="font-size:.72rem;color:#93c5fd;font-weight:600;margin-top:4px">${Math.round(s.successRate * 100)}% نجاح متوقع → ~${(s.monthlyCount * s.successRate).toFixed(1)} بيع</div>` : ""}</td>
            <td>
              <span style="color:var(--text-muted)">${s.timePerUnit}</span>
              ${s.improvement ? `<span style="display:block;font-size:.72rem;color:#34d399;margin-top:2px">↑ ${s.improvement}</span>` : ''}
            </td>
            <td class="amber mono">${s.totalHours.toFixed(1)}</td>
          </tr>
        `).join('')}
        <tr style="background:rgba(245,158,11,.05)">
          <td style="font-weight:800;color:var(--accent)">الإجمالي</td>
          <td class="blue mono" style="font-weight:800">${totalOperationsDyn} عملية إصلاح${knowledgeSessionsDyn > 0 ? ` <span style="color:var(--text-muted);font-weight:600">+ ${knowledgeSessionsDyn} جلسة KB</span>` : ""}</td>
          <td style="color:#34d399;font-size:.82rem">${volumeCfg.dailyCapacity || "—"}</td>
          <td class="amber mono" style="font-weight:800">${totalEffectiveHoursDyn.toFixed(1)} ساعة</td>
        </tr>
      </tbody>
    </table>
  </div>
  ${volumeCfg.note ? `<p class="stat-note" style="margin-top:10px;text-align:center">${volumeCfg.note}</p>` : ''}
</section>
`);

/* ── 7. Monthly Revenue ── */
const totRev  = monthlyRevenueEffective.reduce((a, r) => a + r.totalRevenue, 0);
const totCost = monthlyRevenueEffective.reduce((a, r) => a + r.totalCost, 0);
const totMkt  = monthlyRevenueEffective.reduce((a, r) => a + r.marketerTotal, 0);
const totNetToCenter = totRev - totMkt - totCost;
const hasSuccessRateAdjustedFlip = flipRevenueEffective.some(
  r => r._successRate != null && r._successRate > 0 && r._successRate < 1
);
const plSegRepair = segmentTotalsUSD(repairRevenueEffective);
const plSegFlip = segmentTotalsUSD(flipRevenueEffective);

function formatMonthlyRevenueRowHtml(r) {
  const rowNet = r.totalRevenue - r.marketerTotal - r.totalCost;
  const srNote = r._successRate != null && r._successRate < 1
    ? `<div style="font-size:.72rem;color:#93c5fd;margin-top:4px">${r._attempts} محاولة · نجاح ${Math.round(r._successRate * 100)}% → ≈${r._expectedSold.toFixed(1)} بيع متوقع</div>`
    : "";
  return `
          <tr>
            <td style="font-weight:600">${r.service}${srNote}</td>
            <td class="mono">${r.count}</td>
            <td class="blue mono">${fmtUSD(r.pricePerUnit)}</td>
            <td class="green mono">${fmtUSD(r.totalRevenue)}</td>
            <td style="color:#fbbf24" class="mono">${fmtUSD(r.marketerTotal)}</td>
            <td style="color:#f87171" class="mono">${fmtUSD(r.costPerUnit)}</td>
            <td style="color:#f87171" class="mono">${fmtUSD(r.totalCost)}</td>
            <td class="mono" style="color:#6ee7b7;font-weight:700">${fmtUSD(rowNet)}</td>
          </tr>`;
}

function monthlySubtotalRow(label, seg) {
  return `
        <tr style="background:rgba(59,130,246,.08)">
          <td colspan="3" style="font-weight:800;color:#93c5fd">${label}</td>
          <td class="green mono" style="font-weight:800">${fmtUSD(seg.rev)}</td>
          <td style="color:#fbbf24;font-weight:800" class="mono">${fmtUSD(seg.mkt)}</td>
          <td>—</td>
          <td style="color:#f87171;font-weight:800" class="mono">${fmtUSD(seg.cogs)}</td>
          <td class="mono" style="color:#6ee7b7;font-weight:800">${fmtUSD(seg.gross)}</td>
        </tr>`;
}

main.insertAdjacentHTML('beforeend', `
<section id="monthly">
  <div class="section-heading">
    <div class="icon">📈</div>
    <h2>الإيرادات وتكلفة الخامات <span>الشهرية</span></h2>
  </div>
  <p class="stat-note" style="text-align:center;margin:-4px 0 16px;font-size:.85rem">جدولان: <strong>ورشة الإصلاح</strong> (خدمات بالقطعة) و<strong>مشروع تدوير المعيبين</strong> (مسار مالي منفصل). الإجمالي في الأسفل يدمج الاثنين قبل OPEX.</p>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>الخدمة</th>
          <th>العدد</th>
          <th>سعر / قطعة ($)</th>
          <th>إجمالي الإيرادات ($)</th>
          <th>عمولة مسوق ${DATA.marketerCommissionPercent}% ($)</th>
          <th>تكلفة / قطعة ($)</th>
          <th>إجمالي الخامات ($)</th>
          <th>صافي للمركز ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td colspan="8" style="font-weight:800;color:var(--accent);background:rgba(245,158,11,.06);padding:10px 12px">① ورشة الإصلاح</td></tr>
        ${repairRevenueEffective.map(formatMonthlyRevenueRowHtml).join("")}
        ${monthlySubtotalRow("إجمالي ورشة الإصلاح", plSegRepair)}
        <tr><td colspan="8" style="font-weight:800;color:#a78bfa;background:rgba(139,92,246,.08);padding:10px 12px">② مشروع تدوير الأجهزة المعيبة <span style="font-weight:500;font-size:.78rem">(تكلفة وأرباح مستقلة — انظر تبويب «تدوير المعيبين»)</span></td></tr>
        ${flipRevenueEffective.map(formatMonthlyRevenueRowHtml).join("")}
        ${flipRevenueEffective.length ? monthlySubtotalRow("إجمالي مشروع التدوير (قبل OPEX)", plSegFlip) : ""}
        <tr style="background:rgba(245,158,11,.12)">
          <td colspan="3" style="font-weight:800;color:var(--accent)">الإجمالي الشهري (الورشة + التدوير)</td>
          <td class="green mono" style="font-weight:800">${fmtUSD(totRev)}</td>
          <td style="color:#fbbf24;font-weight:800" class="mono">${fmtUSD(totMkt)}</td>
          <td>—</td>
          <td style="color:#f87171;font-weight:800" class="mono">${fmtUSD(totCost)}</td>
          <td class="mono" style="color:#6ee7b7;font-weight:800">${fmtUSD(totNetToCenter)}</td>
        </tr>
      </tbody>
    </table>
    <p class="stat-note" style="margin-top:10px;text-align:center">الخامات ≈ ${fmtEGP(Math.round(totCost * DATA.pl.exchangeRate))} · عمولة المسوق ≈ ${fmtEGP(Math.round(totMkt * DATA.pl.exchangeRate))} · صافي التشغيل قبل OPEX ≈ ${fmtUSD(totNetToCenter)}${hasSuccessRateAdjustedFlip ? " · <strong>مشروع التدوير</strong>: الإيراد بنسبة النجاح، <strong>بدون عمولة مسوق</strong>؛ الخامات على كل محاولة." : ""}</p>
  </div>
</section>
`);

/* ── 7b. مشروع تدوير المعيبين (صفحة مستقلة) ── */
const dfp = DATA.deviceFlipProject || {};
const flipOne = flipRevenueEffective[0];
const flipAttempts = flipOne ? (Number(flipOne._attempts) || Number(flipOne.count) || 0) : 0;
const flipNetPerAttempt = flipAttempts > 0 && flipOne ? (plSegFlip.gross / flipAttempts) : 0;
const flipMarginOnRev = plSegFlip.rev > 0 ? ((plSegFlip.gross / plSegFlip.rev) * 100).toFixed(1) : "0";
const xrFlip = Number(DATA.pl?.exchangeRate) || 54;

main.insertAdjacentHTML('beforeend', `
<section id="deviceFlip">
  <div class="section-heading">
    <div class="icon">🔄</div>
    <h2>${dfp.title || "مشروع تدوير الأجهزة المعيبة"}</h2>
  </div>
  ${dfp.intro ? `<div class="card" style="margin-bottom:20px"><p style="margin:0;font-size:.88rem;color:var(--text-muted);line-height:1.85">${dfp.intro}</p></div>` : ""}
  ${flipOne ? `
  <div class="grid-4" style="margin-bottom:24px">
    <div class="stat-card green">
      <div class="stat-label">صافي المشروع / شهر</div>
      <div class="stat-value">${fmtUSD(plSegFlip.gross)}</div>
      <div class="stat-sub">${fmtEGP(Math.round(plSegFlip.gross * xrFlip))} · قبل OPEX الورشة</div>
    </div>
    <div class="stat-card amber">
      <div class="stat-label">صافي متوقع / محاولة</div>
      <div class="stat-value">${fmtUSD(flipNetPerAttempt)}</div>
      <div class="stat-sub">${flipAttempts} محاولة · نسبة نجاح ${flipOne._successRate != null ? Math.round(flipOne._successRate * 100) : 100}%</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-label">إيراد متوقع (بيع ناجح)</div>
      <div class="stat-value">${fmtUSD(plSegFlip.rev)}</div>
      <div class="stat-sub">${plSegFlip.mkt > 0 ? `عمولة مسوق ${fmtUSD(plSegFlip.mkt)}` : "بدون عمولة مسوق على إعادة البيع"}</div>
    </div>
    <div class="stat-card red">
      <div class="stat-label">تكلفة مباشرة (كل المحاولات)</div>
      <div class="stat-value">${fmtUSD(plSegFlip.cogs)}</div>
      <div class="stat-sub">هامش على الإيراد ≈ ${flipMarginOnRev}%</div>
    </div>
  </div>
  <div class="grid-2">
    <div class="card">
      <div class="card-title">📑 المشروع — USD</div>
      <div class="pl-row"><span class="pl-label strong">إيراد (بيع ناجح فقط)</span><span style="color:#60a5fa;font-weight:700">${fmtUSD(plSegFlip.rev)}</span></div>
      <div class="pl-row"><span class="pl-label">عمولة المسوق</span><span style="color:#fbbf24;font-weight:700">- ${fmtUSD(plSegFlip.mkt)}</span></div>
      <div class="pl-row"><span class="pl-label">COGS (شراء + خامات / محاولة)</span><span style="color:#f87171;font-weight:700">- ${fmtUSD(plSegFlip.cogs)}</span></div>
      <div class="pl-row total"><span class="pl-label strong">صافي مساهمة المشروع</span><span class="pl-value net">${fmtUSD(plSegFlip.gross)}</span></div>
    </div>
    <div class="card">
      <div class="card-title">📑 المشروع — EGP</div>
      <div class="pl-row"><span class="pl-label strong">إيراد</span><span style="color:#60a5fa;font-weight:700">${fmtEGP(Math.round(plSegFlip.rev * xrFlip))}</span></div>
      <div class="pl-row"><span class="pl-label">عمولة المسوق</span><span style="color:#fbbf24;font-weight:700">- ${fmtEGP(Math.round(plSegFlip.mkt * xrFlip))}</span></div>
      <div class="pl-row"><span class="pl-label">COGS</span><span style="color:#f87171;font-weight:700">- ${fmtEGP(Math.round(plSegFlip.cogs * xrFlip))}</span></div>
      <div class="pl-row total"><span class="pl-label strong">صافي مساهمة المشروع</span><span class="pl-value net">${fmtEGP(Math.round(plSegFlip.gross * xrFlip))}</span></div>
    </div>
  </div>
  <p class="stat-note" style="margin-top:16px;text-align:center;font-size:.82rem">صافي سنوي تقريبي للمشروع (قبل OPEX): ≈ ${fmtUSD(plSegFlip.gross * 12)} · ${fmtEGP(Math.round(plSegFlip.gross * 12 * xrFlip))}</p>
  ` : `<p class="stat-note" style="text-align:center">لا يوجد بند <code>monthlyDeviceFlip</code> في البيانات.</p>`}
</section>
`);

/* ── 8. P&L ── */
const pl = DATA.pl;
const xrPl = Number(pl.exchangeRate) || 54;
main.insertAdjacentHTML('beforeend', `
<section id="pl">
  <div class="section-heading">
    <div class="icon">🧾</div>
    <h2>قائمة الدخل <span>الشهرية</span></h2>
  </div>
  ${pl.exchangeNote ? `<p class="stat-note" style="text-align:center;margin:-8px 0 16px;font-size:.85rem">${pl.exchangeNote}</p>` : ''}
  <div class="grid-2" style="margin-bottom:20px">
    <div class="card" style="border:1px solid rgba(245,158,11,.25)">
      <div class="card-title">🔧 ورشة الإصلاح <span style="font-size:.72rem;color:var(--text-muted)">(قطع فقط)</span></div>
      <div class="pl-row"><span class="pl-label">إيراد</span><span style="color:#60a5fa;font-weight:700">${fmtUSD(plSegRepair.rev)}</span></div>
      <div class="pl-row"><span class="pl-label">عمولة المسوق</span><span style="color:#fbbf24;font-weight:700">- ${fmtUSD(plSegRepair.mkt)}</span></div>
      <div class="pl-row"><span class="pl-label">COGS</span><span style="color:#f87171;font-weight:700">- ${fmtUSD(plSegRepair.cogs)}</span></div>
      <div class="pl-row total"><span class="pl-label strong">صافي الورشة</span><span style="color:#34d399;font-weight:800">${fmtUSD(plSegRepair.gross)}</span></div>
      <div style="margin-top:10px;font-size:.75rem;color:var(--text-muted)">${fmtEGP(Math.round(plSegRepair.gross * xrPl))} ج</div>
    </div>
    <div class="card" style="border:1px solid rgba(139,92,246,.3)">
      <div class="card-title">🔄 مشروع التدوير <span style="font-size:.72rem;color:var(--text-muted)">(قبل OPEX)</span></div>
      <div class="pl-row"><span class="pl-label">إيراد (نجاح)</span><span style="color:#60a5fa;font-weight:700">${fmtUSD(plSegFlip.rev)}</span></div>
      <div class="pl-row"><span class="pl-label">عمولة المسوق</span><span style="color:#fbbf24;font-weight:700">- ${fmtUSD(plSegFlip.mkt)}</span></div>
      <div class="pl-row"><span class="pl-label">COGS المحاولات</span><span style="color:#f87171;font-weight:700">- ${fmtUSD(plSegFlip.cogs)}</span></div>
      <div class="pl-row total"><span class="pl-label strong">صافي المشروع</span><span style="color:#a78bfa;font-weight:800">${fmtUSD(plSegFlip.gross)}</span></div>
      <div style="margin-top:10px;font-size:.75rem;color:var(--text-muted)">${fmtEGP(Math.round(plSegFlip.gross * xrPl))} ج · لا يشمل تخصيص OPEX</div>
    </div>
  </div>
  <p style="text-align:center;font-size:.88rem;color:var(--text-muted);margin:0 0 16px"><strong>المجمّع</strong> أدناه = ورشة + تدوير؛ <strong>OPEX</strong> يُخصم مرة واحدة على الورشة بأكملها.</p>
  <div class="grid-2">
    <div class="card">
      <div class="card-title">📑 المجمّع — USD</div>
      <div class="pl-row">
        <span class="pl-label strong">إجمالي الإيرادات (فواتير العملاء)</span>
        <span style="color:#60a5fa;font-weight:700">${fmtUSD(pl.grossRevenue.usd)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم عمولة المسوق (${DATA.marketerCommissionPercent}%)</span>
        <span style="color:#fbbf24;font-weight:700">- ${fmtUSD(pl.marketerCommission.usd)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم تكلفة الخامات (COGS)</span>
        <span style="color:#f87171;font-weight:700">- ${fmtUSD(pl.cogs.usd)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label strong">إجمالي الربح التشغيلي (بعد العمولة والخامات)</span>
        <span style="color:#34d399;font-weight:700">${fmtUSD(pl.grossProfit.usd)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم المصاريف الثابتة (OPEX)</span>
        <span style="color:#f87171;font-weight:700">- ${fmtUSD(pl.opex.usd)}</span>
      </div>
      <div class="pl-row total">
        <span class="pl-label strong">صافي الربح الشهري</span>
        <span class="pl-value net">${fmtUSD(pl.netProfit.usd)}</span>
      </div>
    </div>
    <div class="card">
      <div class="card-title">📑 المجمّع — EGP</div>
      <div class="pl-row">
        <span class="pl-label strong">إجمالي الإيرادات (فواتير العملاء)</span>
        <span style="color:#60a5fa;font-weight:700">${fmtEGP(pl.grossRevenue.egp)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم عمولة المسوق (${DATA.marketerCommissionPercent}%)</span>
        <span style="color:#fbbf24;font-weight:700">- ${fmtEGP(pl.marketerCommission.egp)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم تكلفة الخامات (COGS)</span>
        <span style="color:#f87171;font-weight:700">- ${fmtEGP(pl.cogs.egp)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label strong">إجمالي الربح التشغيلي</span>
        <span style="color:#34d399;font-weight:700">${fmtEGP(pl.grossProfit.egp)}</span>
      </div>
      <div class="pl-row">
        <span class="pl-label">يُخصم المصاريف الثابتة (OPEX)</span>
        <span style="color:#f87171;font-weight:700">- ${fmtEGP(pl.opex.egp)}</span>
      </div>
      <div class="pl-row total">
        <span class="pl-label strong">صافي الربح الشهري</span>
        <span class="pl-value net">${fmtEGP(pl.netProfit.egp)}</span>
      </div>
    </div>
  </div>
</section>
`);

/* ── 10. ROI ── */
const roiCfg = DATA.roi || {};
const xr = DATA.pl.exchangeRate || 54;

function parseUsdPrice(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return 0;
  const m = value.match(/\$\s*([0-9]+(?:\.[0-9]+)?)/);
  return m ? Number(m[1]) : 0;
}

function buildCapexFromPurchases(data) {
  const base = [];
  (data.purchases.fixedAssets.groups || []).forEach(group => {
    if (group.kind === 'usd') {
      (group.items || []).forEach(item => base.push({
        label: `${item.name} — ${item.model}`,
        usd: parseUsdPrice(item.price)
      }));
    } else {
      (group.items || []).forEach(item => base.push({
        label: `${item.name} — ${item.model}`,
        usd: (Number(item.price) || 0) / xr
      }));
    }
  });

  const extras = (((data.roi || {}).capex || {}).extraItems || []).map(x => ({
    label: x.label,
    usd: Number(x.usd) || 0
  }));

  const quarterlyImportReserve = computeImportQuarterlyPlan(data).totalQuarterlyUSD;
  if (quarterlyImportReserve > 0) {
    extras.push({
      label: "مخزون مستهلكات مستوردة (يكفي 3 شهور)",
      usd: quarterlyImportReserve
    });
  }

  const items = [...base, ...extras].filter(i => i.usd > 0);
  items.sort((a, b) => b.usd - a.usd);
  const totalUSD = items.reduce((sum, i) => sum + i.usd, 0);

  return {
    items,
    totalUSD,
    totalEGP: Math.round(totalUSD * xr)
  };
}

const capexComputed = buildCapexFromPurchases(DATA);
const monthlyRevenueFromTable = totRev;
const monthlyMktFromTable = totMkt;
const monthlyCogsFromTable = totCost;
const monthlyGrossProfitFromTable = monthlyRevenueFromTable - monthlyMktFromTable - monthlyCogsFromTable;
const monthlyOpexEGP = Number(DATA.opex?.totalMonthly) || (DATA.opex?.monthly || []).reduce((s, r) => s + (Number(r.amount) || 0), 0);
const monthlyOpexUSD = monthlyOpexEGP / xr;
const monthlyNetProfitUSD = monthlyGrossProfitFromTable - monthlyOpexUSD;
const monthlyNetProfitEGP = Math.round(monthlyNetProfitUSD * xr);
const annualNetProfitUSD = monthlyNetProfitUSD * 12;
const annualNetProfitEGP = Math.round(annualNetProfitUSD * xr);
const paybackDays = monthlyNetProfitUSD > 0
  ? Math.ceil((capexComputed.totalUSD / monthlyNetProfitUSD) * 30)
  : null;
const roiPercent = capexComputed.totalUSD > 0
  ? Math.round((annualNetProfitUSD / capexComputed.totalUSD) * 100)
  : 0;
const paybackLabel = paybackDays ? `${paybackDays} يوم` : "غير متاح";
const paybackSub = paybackDays ? "فترة الاسترداد" : "صافي الربح الشهري ≤ 0";
const roiItems = [
  { label: 'صافي الربح الشهري',  value: fmtUSD(monthlyNetProfitUSD), color: 'green', sub: fmtEGP(monthlyNetProfitEGP) },
  { label: 'صافي الربح السنوي',  value: fmtUSD(annualNetProfitUSD),  color: 'amber', sub: fmtEGP(annualNetProfitEGP)  },
  { label: 'استرداد رأس المال',  value: paybackLabel,                color: 'blue',  sub: paybackSub                 },
  { label: 'العائد السنوي',      value: (roiPercent >= 0 ? '+' : '') + roiPercent + '%', color: 'red', sub: 'محسوب ديناميكياً' }
];

main.insertAdjacentHTML('beforeend', `
<section id="roi">
  <div class="section-heading">
    <div class="icon">🚀</div>
    <h2>العائد على <span>الاستثمار</span></h2>
  </div>

  <div class="grid-4" style="margin-bottom:28px">
    ${roiItems.map(item => `
      <div class="stat-card ${item.color}">
        <div class="stat-label">${item.label}</div>
        <div class="stat-value">${item.value}</div>
        <div class="stat-sub">${item.sub}</div>
      </div>
    `).join('')}
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title">💸 رأس المال المدفوع (CAPEX)</div>
      ${roiCfg.capex?.note ? `<div style="background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.25);border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:.8rem;color:#34d399">✓ ${roiCfg.capex.note}</div>` : ''}
      ${capexComputed.items.map(item => `
        <div class="capex-item">
          <span style="color:var(--text-muted);font-size:.83rem">${item.label}</span>
          <span style="color:var(--accent);font-weight:700">${fmtUSD(item.usd)}</span>
        </div>
      `).join('')}
      <div class="capex-item" style="border-top:2px solid rgba(245,158,11,.3);padding-top:14px;margin-top:4px">
        <span style="font-weight:800">إجمالي رأس المال</span>
        <span style="font-weight:900;color:var(--accent);font-size:1.1rem">${fmtUSD(capexComputed.totalUSD)}</span>
      </div>
      <div style="text-align:center;margin-top:8px;font-size:.78rem;color:var(--text-muted)">${fmtEGP(capexComputed.totalEGP)}</div>
    </div>
    <div class="card">
      <div class="card-title">📊 نسبة العائد على الاستثمار</div>
      <div style="padding:10px 0">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:.84rem;color:var(--text-muted)">ROI السنوي</span>
          <span style="font-weight:800;color:var(--accent3)">${(roiPercent >= 0 ? '+' : '') + roiPercent}%</span>
        </div>
        <div class="roi-bar-wrap">
          <div class="roi-bar" id="roiBar1" style="width:0%"></div>
        </div>
      </div>
      <div style="padding:10px 0;margin-top:8px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:.84rem;color:var(--text-muted)">نسبة استرداد رأس المال</span>
          <span style="font-weight:800;color:#60a5fa">${paybackDays ? `في ${paybackDays} يوماً فقط!` : "غير متاح حالياً"}</span>
        </div>
        <div class="roi-bar-wrap">
          <div class="roi-bar" id="roiBar2" style="width:0%;background:linear-gradient(90deg,var(--accent2),#93c5fd)"></div>
        </div>
      </div>
      <div style="margin-top:20px;padding:14px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.2);border-radius:10px;text-align:center">
        <div style="font-size:.84rem;color:var(--text-muted);margin-bottom:6px">الربح السنوي المتوقع</div>
        <div style="font-size:1.8rem;font-weight:900;color:#34d399">${fmtUSD(annualNetProfitUSD)}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${fmtEGP(annualNetProfitEGP)} سنوياً</div>
      </div>
      <p class="stat-note" style="margin-top:12px;text-align:center">
        يعتمد على جدول الإيرادات <strong>المجمّع</strong> (ورشة إصلاح + مشروع تدوير معيبين): ${fmtUSD(monthlyRevenueFromTable)} إيراد − ${fmtUSD(monthlyMktFromTable)} عمولة − ${fmtUSD(monthlyCogsFromTable)} خامات − ${fmtUSD(monthlyOpexUSD)} OPEX.
      </p>
    </div>
  </div>
</section>
`);
}
