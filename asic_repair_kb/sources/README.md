# Local Zeus / manual mirrors (HTML + images)

Offline copies of official Zeus Mining pages used by the ASIC repair knowledge base. **Copyright remains with Zeus Mining, Bitmain, and original authors** — mirrors are for repair reference only.

## Layout

Each slug folder contains:

- `index.html` — saved page (image `src` rewritten to `./images/` for local viewing)
- `images/` — assets referenced from `/Upload/image/...` on zeusbtc.com
- `manifest.json` — fetch metadata + ordered list of image URLs and local paths

PDF-only folder: `whatsminer_m30s_user_manual/WhatsMiner-M30S-Manual.pdf`

## Refresh mirrors

From the workspace root (`analyze/`):

```bash
python scripts/fetch_zeus_kb_source.py --all
```

Emit markdown tables of mirrored images from `manifest.json`:

```bash
python scripts/emit_image_tables.py s19_hash_guide apw12_repair_guide
```

Or one slug:

```bash
python scripts/fetch_zeus_kb_source.py s19_hash_guide
```

Requires network access. Re-run after Zeus updates pages; compare `manifest.json` `fetched_at`.

## Optional: Regenerating Gemini vision drafts

The repair guides under [`../components/`](../components/) already include **Vision model supplements** distilled from a vision pass over the mirrored JPEGs. Treat those bullets as **draft** — confirm critical numbers against `index.html`, the photo, and a meter/scope.

Use [`scripts/gemini_analyze_image.py`](../../scripts/gemini_analyze_image.py) only when you want **fresh** model output (e.g. after Zeus updates figures). **Do not commit API keys** (use `.env` from repo root). Set `GEMINI_MODEL` in [Google AI Studio](https://aistudio.google.com/).

```bash
pip install -r scripts/requirements-gemini.txt
```

Write outputs to any **writable folder** (example: `build/gemini_out/<slug>/`). Default prompt (if present): [`scripts/prompts/gemini_repair_extract.txt`](../../scripts/prompts/gemini_repair_extract.txt). Useful flags: `--prompt-file`, `--resume`, `--write-index`, `--limit`, `--delay`.

Single-image example:

```bash
python scripts/gemini_analyze_image.py asic_repair_kb/sources/s19_hash_guide/images/202108/16280673436987379.jpg --out-dir build/gemini_scratch
```

Batch example:

```bash
python scripts/gemini_analyze_image.py --slug s19_hash_guide --out-dir build/gemini_out/s19_hash_guide --resume --write-index --delay 0.35
```

**Skipped by design:** `whatsminer_support_hub` has no mirrored article images. **`whatsminer_m30s_user_manual`** is PDF-only for this toolchain — use a PDF viewer or external text extraction.

## Slug map

| Slug | Component(s) |
|------|----------------|
| `s19_hash_guide` | FILE 1 S19 hashboard, FILE 5 S19 control (§VI–VII) |
| `whatsminer_m30s_m31s_m32_hash` | FILE 2 M30S/M31S/M32 hashboard |
| `whatsminer_support_hub` | FILE 3 M30/M50 troubleshooting hub (no mirrored images — vision batch N/A) |
| `whatsminer_m30_m50_test_fixture` | FILE 4 test fixture tutorial |
| `whatsminer_m50_manual_blog` | FILE 6 M50 manual (blog) |
| `whatsminer_m30s_user_manual` | FILE 6 M30S PDF |
| `apw12_repair_guide` | FILE 7 APW12 (main guide) |
| `apw12_1215a_manual` | FILE 7 APW12 1215A supplement |

### Planned slugs (not mirrored until fetch — see [knowledge_in_progress.md](../components/knowledge_in_progress.md))

| Slug | Topic |
|------|--------|
| `whatsminer_solutions` | Whatsminer troubleshooting & solutions (article) |
| `s19_control_flashing` | S19 control board card / firmware flashing tutorial |
| `picobt_universal_manual` | PicoBT universal tester user manual |
| `whatsminer_cb_repair` | Whatsminer control board inspection & repair |
| `whatsminer_psu_repair` | How to repair Whatsminer PSU (article) |
| `psu_output_tester` | Antminer + Whatsminer PSU output tester usage |
| `whatsminer_p21_psu_manual` | WhatsMiner P21 Series PSU Manual (PDF) |

## Git

Downloaded HTML/images are large. To exclude from git, uncomment the line in the repo [`.gitignore`](../../.gitignore) for `asic_repair_kb/sources/`.
