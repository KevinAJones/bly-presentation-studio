// Loads the presentation brand context (fonts + brand variables) and the
// compiled component bundle. The decks define their own --p-* slide colors
// inline; this supplies the shared --f-*/brand vars + webfonts they reference.
(() => {
  const base = '../../_ds/the-bly-team-design-system-5bb02e0f-b205-42ed-b01a-5df3e52693f3';
  const kit = document.createElement('link');
  kit.rel = 'stylesheet';
  kit.href = '../presentation-kit.css';
  document.head.appendChild(kit);

  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.warn('ds-base.js: component bundle not loaded (' + s.src + ') — decks are self-contained and do not require it.');
  document.head.appendChild(s);
})();
