# Mining Repair Hub — static site

Open **`index.html`** via a **local HTTP server** (required for ES modules + fetching `asic_repair_knowledge_base.md`):

```bash
# from this folder
python -m http.server 8080
```

Then browse `http://localhost:8080/`.

**Netlify:** [`netlify.toml`](netlify.toml) sets `publish = "."` and redirects `/sources/*` → `/asic_repair_kb/sources/*` (old broken image URLs). The KB renderer rewrites `../sources/…` links to `/asic_repair_kb/sources/…` in [`js/kb.js`](js/kb.js). **Deploy must include** `asic_repair_kb/sources/` (large trees sometimes stay untracked — if images still 404, confirm the folder is in git and not excluded by `.gitignore`).

**Knowledge base (Markdown):** start at [`asic_repair_knowledge_base.md`](asic_repair_knowledge_base.md) — includes [YouTube Zeus playlists](asic_repair_kb/components/youtube_learning.md), [engineer spec — Madinaty](asic_repair_kb/components/engineer_job_spec_madinaty.md), and [post-repair cleaning protocol](asic_repair_kb/components/post_repair_cleaning_protocol.md).

## Layout

| Path | Role |
|------|------|
| `index.html` | Shell: header, nav, `#mainContent`, loads `js/app.js` |
| `css/main.css` | All styles |
| `js/data.js` | `export const DATA` — models, navigation, purchases, financials; **`importedConsumablesQuarterly.items`** للمستهلكات المستوردة + **`localConsumablesQuarterly.items`** للاستهلاكات المحلية، وكلاهما مرتّب في الواجهة حسب تكلفة الربع تنازلياً |
| `js/utils.js` | DOM helper + number formatters |
| `js/purchase-rows.js` | Table row templates for purchase tables |
| `js/sections.js` | `mountSections(...)` — injects all `<section>` tabs |
| `js/nav.js` | Tab switching + ROI bar animation |
| `js/kb.js` | Markdown hub loader (`marked` + `fetch`) |
| `js/app.js` | Entry: wires modules and bootstraps the page |
