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
      const colors = ['amber','blue','green','red'];
      return `
        <div class="stat-card ${colors[i]}">
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
          const margin = ((p.netProfit / p.clientPrice) * 100).toFixed(1);
          const xr = DATA.pl.exchangeRate;
          return `
            <tr>
              <td style="font-weight:600">${p.service}</td>
              <td class="blue mono">${fmtUSD(p.clientPrice)}</td>
              <td class="mono" style="color:#93c5fd;font-size:.85rem">${fmtEGP(Math.round(p.clientPrice * xr))}</td>
              <td style="color:#fbbf24" class="mono">${fmtUSD(p.marketerCommission)}</td>
              <td class="mono" style="color:#fcd34d;font-size:.85rem">${fmtEGP(Math.round(p.marketerCommission * xr))}</td>
              <td style="color:#f87171" class="mono">${fmtUSD(p.materialCost)}</td>
              <td class="mono" style="color:#fca5a5;font-size:.85rem">${fmtEGP(Math.round(p.materialCost * xr))}</td>
              <td class="green mono">${fmtUSD(p.netProfit)}</td>
              <td class="mono" style="color:#6ee7b7;font-size:.85rem">${fmtEGP(Math.round(p.netProfit * xr))}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="amber" style="font-weight:700">${margin}%</span>
                  <div style="flex:1;background:var(--bg3);border-radius:4px;height:6px;min-width:60px">
                    <div style="height:100%;border-radius:4px;background:linear-gradient(90deg,var(--accent3),#6ee7b7);width:${Math.min(parseFloat(margin), 100)}%"></div>
                  </div>
                </div>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
    <p class="stat-note" style="margin-top:10px;text-align:center">عمولة المسوق ${DATA.marketerCommissionPercent}% من سعر العميل · صافي للمركز = سعر العميل − العمولة − الخامات · تحويل: 1 USD = ${DATA.pl.exchangeRate} EGP</p>
  </div>
  <div class="grid-4">
    ${DATA.pricing.map((p, i) => {
      const colors = ['green','blue','amber','red'];
      return `
        <div class="stat-card ${colors[i]}">
          <div class="stat-label">${p.service}</div>
          <div class="stat-value">${fmtUSD(p.netProfit)}</div>
          <div class="stat-sub">صافي الربح</div>
        </div>
      `;
    }).join('')}
  </div>
</section>
`);

/* ── 5. OPEX ── */
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
        <span class="pl-label strong">الإجمالي الثابت الشهري</span>
        <span class="pl-value net">${fmt(DATA.opex.totalMonthly)} ج</span>
      </div>
      <div style="margin-top:14px;padding:12px 14px;background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.2);border-radius:8px;font-size:.82rem;color:var(--text-muted)">
        ⚡ تكلفة تجهيز المكان (مرة واحدة): <strong style="color:var(--accent)">${fmt(DATA.opex.setupCost)} ج</strong>
      </div>
    </div>
    <div class="card">
      <div class="card-title">🎯 نقطة التعادل (Break-Even)</div>
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;font-weight:900;font-family:'Orbitron',monospace;color:var(--accent3);line-height:1">
          ${DATA.opex.breakEvenUnits}
        </div>
        <div style="font-size:1rem;color:var(--text-muted);margin-top:8px">لوحات هاشبورد فقط</div>
        <div style="margin-top:16px;font-size:.86rem;color:var(--text-muted);line-height:1.7;max-width:300px;margin-inline:auto">
          ${DATA.opex.breakEvenNote}
        </div>
      </div>
    </div>
  </div>
</section>
`);

/* ── 6. Monthly Volume ── */
main.insertAdjacentHTML('beforeend', `
<section id="volume">
  <div class="section-heading">
    <div class="icon">📅</div>
    <h2>محاكاة حجم العمل <span>الشهري</span></h2>
  </div>
  <div class="grid-4" style="margin-bottom:24px">
    <div class="stat-card amber">
      <div class="stat-label">أيام العمل</div>
      <div class="stat-value">${DATA.monthlyVolume.workDays}</div>
      <div class="stat-sub">يوم / شهر</div>
    </div>
    <div class="stat-card blue">
      <div class="stat-label">إجمالي ساعات الدوام</div>
      <div class="stat-value">${DATA.monthlyVolume.totalHours}</div>
      <div class="stat-sub">ساعة شهرياً</div>
    </div>
    <div class="stat-card green">
      <div class="stat-label">ساعات العمل الفعلية</div>
      <div class="stat-value">${DATA.monthlyVolume.totalEffectiveHours}</div>
      <div class="stat-sub">ساعة فعلية</div>
    </div>
    <div class="stat-card red">
      <div class="stat-label">نسبة استخدام الوقت</div>
      <div class="stat-value">${DATA.monthlyVolume.capacityUsedPercent}%</div>
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
        ${DATA.monthlyVolume.services.map(s => `
          <tr>
            <td style="font-weight:600">${s.type}</td>
            <td class="blue mono">${s.monthlyCount}</td>
            <td>
              <span style="color:var(--text-muted)">${s.timePerUnit}</span>
              ${s.improvement ? `<span style="display:block;font-size:.72rem;color:#34d399;margin-top:2px">↑ ${s.improvement}</span>` : ''}
            </td>
            <td class="amber mono">${s.totalHours}</td>
          </tr>
        `).join('')}
        <tr style="background:rgba(245,158,11,.05)">
          <td style="font-weight:800;color:var(--accent)">الإجمالي</td>
          <td class="blue mono" style="font-weight:800">${DATA.monthlyVolume.totalOperations} عملية</td>
          <td style="color:#34d399;font-size:.82rem">${DATA.monthlyVolume.dailyCapacity}</td>
          <td class="amber mono" style="font-weight:800">${DATA.monthlyVolume.totalEffectiveHours} ساعة</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
`);

/* ── 7. Monthly Revenue ── */
const totRev  = DATA.monthlyRevenue.reduce((a, r) => a + r.totalRevenue, 0);
const totCost = DATA.monthlyRevenue.reduce((a, r) => a + r.totalCost, 0);
const totMkt  = DATA.monthlyRevenue.reduce((a, r) => a + r.marketerTotal, 0);
const totNetToCenter = totRev - totMkt - totCost;
main.insertAdjacentHTML('beforeend', `
<section id="monthly">
  <div class="section-heading">
    <div class="icon">📈</div>
    <h2>الإيرادات وتكلفة الخامات <span>الشهرية</span></h2>
  </div>
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
        ${DATA.monthlyRevenue.map(r => {
          const rowNet = r.totalRevenue - r.marketerTotal - r.totalCost;
          return `
          <tr>
            <td style="font-weight:600">${r.service}</td>
            <td class="mono">${r.count}</td>
            <td class="blue mono">${fmtUSD(r.pricePerUnit)}</td>
            <td class="green mono">${fmtUSD(r.totalRevenue)}</td>
            <td style="color:#fbbf24" class="mono">${fmtUSD(r.marketerTotal)}</td>
            <td style="color:#f87171" class="mono">${fmtUSD(r.costPerUnit)}</td>
            <td style="color:#f87171" class="mono">${fmtUSD(r.totalCost)}</td>
            <td class="mono" style="color:#6ee7b7;font-weight:700">${fmtUSD(rowNet)}</td>
          </tr>
        `}).join('')}
        <tr style="background:rgba(245,158,11,.05)">
          <td colspan="3" style="font-weight:800;color:var(--accent)">الإجمالي الشهري</td>
          <td class="green mono" style="font-weight:800">${fmtUSD(totRev)}</td>
          <td style="color:#fbbf24;font-weight:800" class="mono">${fmtUSD(totMkt)}</td>
          <td>—</td>
          <td style="color:#f87171;font-weight:800" class="mono">${fmtUSD(totCost)}</td>
          <td class="mono" style="color:#6ee7b7;font-weight:800">${fmtUSD(totNetToCenter)}</td>
        </tr>
      </tbody>
    </table>
    <p class="stat-note" style="margin-top:10px;text-align:center">الخامات ≈ ${fmtEGP(Math.round(totCost * DATA.pl.exchangeRate))} · عمولة المسوق ≈ ${fmtEGP(Math.round(totMkt * DATA.pl.exchangeRate))} · صافي التشغيل قبل OPEX ≈ ${fmtUSD(totNetToCenter)}</p>
  </div>
</section>
`);

/* ── 8. P&L ── */
const pl = DATA.pl;
main.insertAdjacentHTML('beforeend', `
<section id="pl">
  <div class="section-heading">
    <div class="icon">🧾</div>
    <h2>قائمة الدخل <span>الشهرية</span></h2>
  </div>
  ${pl.exchangeNote ? `<p class="stat-note" style="text-align:center;margin:-8px 0 16px;font-size:.85rem">${pl.exchangeNote}</p>` : ''}
  <div class="grid-2">
    <div class="card">
      <div class="card-title">📑 بالدولار الأمريكي (USD)</div>
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
      <div class="card-title">📑 بالجنيه المصري (EGP)</div>
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
const roi = DATA.roi;
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

  const extras = (data.roi.capex.extraItems || []).map(x => ({
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
const roiItems = [
  { label: 'صافي الربح الشهري',  value: fmtUSD(roi.monthlyNetProfit.usd),  color: 'green',  sub: fmtEGP(roi.monthlyNetProfit.egp) },
  { label: 'صافي الربح السنوي',  value: fmtUSD(roi.annualNetProfit.usd),   color: 'amber',  sub: fmtEGP(roi.annualNetProfit.egp)  },
  { label: 'استرداد رأس المال',  value: roi.paybackDays + ' يوم',           color: 'blue',   sub: 'فترة الاسترداد'                 },
  { label: 'العائد السنوي',      value: '+' + roi.roiPercent + '%',          color: 'red',    sub: 'ROI مذهل'                       }
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
      ${roi.capex.note ? `<div style="background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.25);border-radius:8px;padding:8px 12px;margin-bottom:12px;font-size:.8rem;color:#34d399">✓ ${roi.capex.note}</div>` : ''}
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
          <span style="font-weight:800;color:var(--accent3)">+${roi.roiPercent}%</span>
        </div>
        <div class="roi-bar-wrap">
          <div class="roi-bar" id="roiBar1" style="width:0%"></div>
        </div>
      </div>
      <div style="padding:10px 0;margin-top:8px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-size:.84rem;color:var(--text-muted)">نسبة استرداد رأس المال</span>
          <span style="font-weight:800;color:#60a5fa">في ${roi.paybackDays} يوماً فقط!</span>
        </div>
        <div class="roi-bar-wrap">
          <div class="roi-bar" id="roiBar2" style="width:0%;background:linear-gradient(90deg,var(--accent2),#93c5fd)"></div>
        </div>
      </div>
      <div style="margin-top:20px;padding:14px;background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.2);border-radius:10px;text-align:center">
        <div style="font-size:.84rem;color:var(--text-muted);margin-bottom:6px">الربح السنوي المتوقع</div>
        <div style="font-size:1.8rem;font-weight:900;color:#34d399">${fmtUSD(roi.annualNetProfit.usd)}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">${fmtEGP(roi.annualNetProfit.egp)} سنوياً</div>
      </div>
    </div>
  </div>
</section>
`);
}
