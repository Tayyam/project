import { fmt } from './utils.js';

export function purchaseImportRow(item) {
  const isZeus = item.source === 'Zeus Mining';
  const btnColor = isZeus
    ? 'rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.35);color:#6ee7b7'
    : 'rgba(59,130,246,.12);border:1px solid rgba(59,130,246,.35);color:#93c5fd';
  const btnHoverIn = isZeus
    ? "this.style.background='rgba(16,185,129,.25)';this.style.borderColor='rgba(16,185,129,.6)'"
    : "this.style.background='rgba(59,130,246,.25)';this.style.borderColor='rgba(59,130,246,.6)'";
  const btnHoverOut = isZeus
    ? "this.style.background='rgba(16,185,129,.12)';this.style.borderColor='rgba(16,185,129,.35)'"
    : "this.style.background='rgba(59,130,246,.12)';this.style.borderColor='rgba(59,130,246,.35)'";
  return `
    <tr>
      <td>
        ${item.badge ? `<span class="badge-better">${item.badge}</span>` : ''}
        ${item.name}
      </td>
      <td class="mono">${item.model}</td>
      <td style="color:var(--text-muted);font-size:.82rem;max-width:220px">${item.function || '—'}</td>
      <td>
        <span style="color:${isZeus ? '#34d399' : '#60a5fa'};font-weight:700">${item.price}</span>
        ${item.priceBefore ? `<span class="price-old">${item.priceBefore}</span>` : ''}
      </td>
      <td>
        ${item.saving
          ? `<span class="saving-tag">✓ ${item.saving}</span>`
          : `<span style="color:var(--text-muted);font-size:.8rem">—</span>`}
      </td>
      <td>
        <a href="${item.url}" target="_blank" rel="noopener" style="
          display:inline-flex;align-items:center;gap:5px;
          background:${btnColor};
          padding:4px 10px;border-radius:6px;
          font-size:.75rem;text-decoration:none;white-space:nowrap;
          transition:background .2s,border-color .2s;
        "
        onmouseover="${btnHoverIn}"
        onmouseout="${btnHoverOut}"
        >🔗 ${item.source}</a>
      </td>
    </tr>`;
}

export function purchaseLocalRow(item) {
  const price = fmt(item.price) + ' ج';
  return `
    <tr>
      <td>${item.name}</td>
      <td class="mono">${item.model}</td>
      <td style="color:var(--text-muted)">${item.function}</td>
      <td class="amber">${price}</td>
    </tr>`;
}
