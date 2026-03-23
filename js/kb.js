/** Markdown hub + nested `.md` under `asic_repair_kb/` */
export function setupKnowledgeBase(DATA) {
  const kb = DATA.knowledgeBase;
  const root = document.getElementById('kbRoot');
  const status = document.getElementById('kbStatus');
  const toolbar = document.getElementById('kbToolbar');
  const btnBack = document.getElementById('kbBackHub');
  if (!root || !status) return;

  const hubPath = kb.file;
  const failMsg =
    '<p style="color:#fca5a5;margin:0;line-height:1.85">لم يُفتح <code style="color:#fdba74">' +
    hubPath +
    '</code> أو أحد المكوّنات. شغّل الصفحة عبر <strong>خادم محلي</strong> من جذر المشروع (مجلد يحتوي <code>index.html</code> و <code>asic_repair_kb/</code>). <code>file://</code> لا يكفي لجلب الـ Markdown.</p>';

  if (typeof marked === 'undefined' || typeof marked.parse !== 'function') {
    status.innerHTML = '<div style="padding:4px 0"><p style="color:#f87171;margin:0">تعذّر تحميل مكتبة <code>marked</code> من CDN.</p></div>';
    return;
  }
  if (typeof marked.use === 'function') marked.use({ gfm: true });

  function setToolbar(isSubPage) {
    if (toolbar) toolbar.style.display = isSubPage ? 'block' : 'none';
  }

  function renderMd(text, path) {
    root.innerHTML = marked.parse(text);
    root.hidden = false;
    status.style.display = 'none';
    setToolbar(path !== hubPath);
  }

  function loadMd(path, pushHistory) {
    return fetch(path, { cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      })
      .then(function (md) {
        renderMd(md, path);
        if (pushHistory) history.pushState({ kbPath: path }, '', '');
      });
  }

  root.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (!a || !root.contains(a)) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('#')) return;
    if (!href.endsWith('.md')) return;
    e.preventDefault();
    loadMd(href, true).catch(function () {
      alert('تعذّر فتح الملف:\n' + href);
    });
  });

  if (btnBack) {
    btnBack.addEventListener('click', function () {
      loadMd(hubPath, false).then(function () {
        history.replaceState({ kbPath: hubPath }, '', '');
      }).catch(function () {});
    });
  }

  window.addEventListener('popstate', function (ev) {
    var path = (ev.state && ev.state.kbPath) || hubPath;
    loadMd(path, false).catch(function () {
      loadMd(hubPath, false).catch(function () {});
    });
  });

  history.replaceState({ kbPath: hubPath }, '', '');
  loadMd(hubPath, false).catch(function () {
    status.innerHTML = '<div style="padding:4px 0">' + failMsg + '</div>';
  });
}
