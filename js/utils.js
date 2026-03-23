/** @param {string} id */
export const $ = id => document.getElementById(id);

export const fmt = n => n.toLocaleString('en-US');

export const fmtUSD = n => '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const fmtEGP = n => n.toLocaleString('en-US') + ' ج';
