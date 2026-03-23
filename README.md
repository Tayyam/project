# Mining Repair Hub — static site

Open **`index.html`** via a **local HTTP server** (required for ES modules + fetching `asic_repair_knowledge_base.md`):

```bash
# from this folder
python -m http.server 8080
```

Then browse `http://localhost:8080/`.

## Layout

| Path | Role |
|------|------|
| `index.html` | Shell: header, nav, `#mainContent`, loads `js/app.js` |
| `css/main.css` | All styles |
| `js/data.js` | `export const DATA` — models, navigation, purchases, financials; **`importedConsumablesQuarterly.items`** = مستهلكات/قطع فقط (بدون أصول تشغيلية)، مرتبة في الواجهة حسب تكلفة الربع تنازلياً |
| `js/utils.js` | DOM helper + number formatters |
| `js/purchase-rows.js` | Table row templates for purchase tables |
| `js/sections.js` | `mountSections(...)` — injects all `<section>` tabs |
| `js/nav.js` | Tab switching + ROI bar animation |
| `js/kb.js` | Markdown hub loader (`marked` + `fetch`) |
| `js/app.js` | Entry: wires modules and bootstraps the page |
