import { $ } from './utils.js';

export function animateRoiBars() {
  setTimeout(() => {
    const b1 = document.getElementById('roiBar1');
    const b2 = document.getElementById('roiBar2');
    if (b1) b1.style.width = '100%';
    if (b2) b2.style.width = '100%';
  }, 100);
}

/** @param {object} DATA — site model from `data.js` */
export function initNavigation(DATA) {
  const navEl = $('navInner');
  if (!navEl) return;

  function switchTab(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const sec = document.getElementById(id);
    if (sec) sec.classList.add('active');
    document.querySelector(`[data-target="${id}"]`)?.classList.add('active');
    if (id === 'roi') animateRoiBars();
  }

  DATA.navigation.forEach((nav, i) => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (i === 0 ? ' active' : '');
    btn.textContent = nav.label;
    btn.dataset.target = nav.id;
    btn.onclick = () => switchTab(nav.id);
    navEl.appendChild(btn);
  });
}
