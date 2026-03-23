import { DATA } from './data.js';
import { $, fmt, fmtUSD, fmtEGP } from './utils.js';
import { purchaseImportRow, purchaseLocalRow, benchOrgRow } from './purchase-rows.js';
import { mountSections } from './sections.js';
import { initNavigation } from './nav.js';
import { setupKnowledgeBase } from './kb.js';

const main = $('mainContent');
if (main) {
  mountSections(main, DATA, { fmt, fmtUSD, fmtEGP }, { purchaseImportRow, purchaseLocalRow, benchOrgRow });
}

const modelTags = $('modelTagsContainer');
if (modelTags) {
  DATA.models.forEach(m => {
    const el = document.createElement('span');
    el.className = 'model-tag';
    el.textContent = m;
    modelTags.appendChild(el);
  });
}

initNavigation(DATA);
setupKnowledgeBase(DATA);
