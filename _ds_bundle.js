/* @ds-bundle: {"format":3,"namespace":"TheBlyTeamDesignSystem_5bb02e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AgentCard","sourcePath":"components/realestate/AgentCard.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"},{"name":"StatBlock","sourcePath":"components/realestate/StatBlock.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"befc1b45102e","components/core/Badge.jsx":"a8d8002ffcee","components/core/Button.jsx":"943d92bd62f1","components/core/Card.jsx":"943b419ed9b5","components/core/Checkbox.jsx":"bb3519990cab","components/core/IconButton.jsx":"7a5baf68d271","components/core/Input.jsx":"38ac3458d69c","components/core/Select.jsx":"4bdd8ea0864e","components/core/Switch.jsx":"d28aace1d957","components/core/Tabs.jsx":"bc9a0dc82a63","components/core/Tag.jsx":"bc3ac19c3b2f","components/realestate/AgentCard.jsx":"4607ab4d31bc","components/realestate/PropertyCard.jsx":"c9bd82fe5141","components/realestate/StatBlock.jsx":"2ea81065ea57","ui_kits/website/Footer.jsx":"c386911b195c","ui_kits/website/Header.jsx":"06d2dc464ebd","ui_kits/website/Home.jsx":"bbae4e632f0f","ui_kits/website/Screens.jsx":"37d0e6e6e340"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheBlyTeamDesignSystem_5bb02e = window.TheBlyTeamDesignSystem_5bb02e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-avatar{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;flex:none;
  background:var(--bly-blue-100);color:var(--bly-blue-700);font-family:var(--font-heading);font-weight:700;
  border-radius:var(--radius-circle);width:44px;height:44px;font-size:15px;line-height:1;
  box-shadow:inset 0 0 0 1px rgba(12,15,36,.05);}
.bly-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.bly-avatar--xs{width:28px;height:28px;font-size:11px;}
.bly-avatar--sm{width:36px;height:36px;font-size:13px;}
.bly-avatar--lg{width:64px;height:64px;font-size:21px;}
.bly-avatar--xl{width:96px;height:96px;font-size:30px;}
.bly-avatar--square{border-radius:var(--radius-lg);}
.bly-avatar--ring{box-shadow:0 0 0 2px #fff,0 0 0 4px var(--bly-blue-300);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-avatar-css")) {
  const s = document.createElement("style");
  s.id = "bly-avatar-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(n => n[0]?.toUpperCase() || "").join("");
}

/** Avatar — agent / client photo or initials fallback. */
function Avatar({
  src,
  name = "",
  size = "md",
  square = false,
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["bly-avatar", size !== "md" && `bly-avatar--${size}`, square && "bly-avatar--square", ring && "bly-avatar--ring", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", null, initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--font-body);font-weight:700;font-size:12px;
  line-height:1;letter-spacing:.02em;padding:5px 10px;border-radius:var(--radius-sm);white-space:nowrap;}
.bly-badge i[data-lucide],.bly-badge svg{width:13px;height:13px;stroke-width:2.25;}
.bly-badge--dot::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;}
.bly-badge--neutral{background:var(--surface-sunken);color:var(--text-body);}
.bly-badge--primary{background:var(--bly-blue-100);color:var(--bly-blue-700);}
.bly-badge--success{background:var(--color-success-soft);color:#2f7a2d;}
.bly-badge--danger{background:var(--color-danger-soft);color:#b21d22;}
.bly-badge--warning{background:var(--color-warning-soft);color:#8a6d18;}
.bly-badge--gold{background:var(--color-warning-soft);color:#8a6d18;}
.bly-badge--solid{background:var(--color-primary);color:#fff;}
.bly-badge--sale{background:var(--color-danger);color:#fff;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-badge-css")) {
  const s = document.createElement("style");
  s.id = "bly-badge-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Badge — small status / category label (For Sale, New, Pending). */
function Badge({
  variant = "neutral",
  dot = false,
  icon,
  children,
  className = "",
  ...rest
}) {
  const cls = ["bly-badge", `bly-badge--${variant}`, dot && "bly-badge--dot", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Self-injecting styles — keeps :hover/:focus/:active working in the bundle. */
const CSS = `
.bly-btn{--_h:44px;--_px:20px;--_fz:15px;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  height:var(--_h);padding:0 var(--_px);font-family:var(--font-body);font-weight:700;font-size:var(--_fz);
  line-height:1;letter-spacing:.01em;border:1.5px solid transparent;border-radius:var(--radius-md);cursor:pointer;
  white-space:nowrap;transition:var(--transition-base);text-decoration:none;-webkit-appearance:none;}
.bly-btn:focus-visible{outline:none;box-shadow:var(--ring);}
.bly-btn[disabled],.bly-btn[aria-disabled="true"]{opacity:.5;cursor:not-allowed;pointer-events:none;}
.bly-btn--sm{--_h:36px;--_px:14px;--_fz:13.5px;}
.bly-btn--lg{--_h:54px;--_px:28px;--_fz:17px;}
.bly-btn--pill{border-radius:var(--radius-pill);}
.bly-btn--full{display:flex;width:100%;}
.bly-btn svg,.bly-btn i[data-lucide]{width:1.15em;height:1.15em;stroke-width:2;}
.bly-btn--primary{background:var(--color-primary);color:var(--color-on-primary);}
.bly-btn--primary:hover{background:var(--color-primary-hover);}
.bly-btn--primary:active{background:var(--bly-blue-700);transform:translateY(.5px);}
.bly-btn--secondary{background:transparent;color:var(--color-primary);border-color:var(--color-primary);}
.bly-btn--secondary:hover{background:var(--bly-blue-050);}
.bly-btn--secondary:active{background:var(--bly-blue-100);}
.bly-btn--dark{background:var(--navy);color:#fff;}
.bly-btn--dark:hover{background:var(--charcoal-blue);}
.bly-btn--dark:active{transform:translateY(.5px);}
.bly-btn--ghost{background:transparent;color:var(--text-strong);}
.bly-btn--ghost:hover{background:var(--surface-sunken);}
.bly-btn--danger{background:var(--color-danger);color:#fff;}
.bly-btn--danger:hover{filter:brightness(.93);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-button-css")) {
  const s = document.createElement("style");
  s.id = "bly-button-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/**
 * Button — primary call-to-action and secondary actions.
 * Variants: primary | secondary | dark | ghost | danger. Sizes: sm | md | lg.
 */
function Button({
  variant = "primary",
  size = "md",
  pill = false,
  fullWidth = false,
  icon,
  iconRight,
  as = "button",
  disabled = false,
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["bly-btn", `bly-btn--${variant}`, size !== "md" && `bly-btn--${size}`, pill && "bly-btn--pill", fullWidth && "bly-btn--full", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    disabled: Tag === "button" ? disabled : undefined,
    "aria-disabled": disabled || undefined
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    "data-lucide": iconRight
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-card{background:var(--surface-card);border:1px solid var(--border);border-radius:var(--radius-xl);
  box-shadow:var(--shadow-sm);overflow:hidden;transition:var(--transition-base);}
.bly-card--pad{padding:var(--space-5);}
.bly-card--hover:hover{box-shadow:var(--shadow-lg);transform:translateY(-2px);}
.bly-card--flat{box-shadow:none;}
.bly-card--inverse{background:var(--surface-inverse);border-color:var(--border-on-dark);color:var(--text-on-dark);}
.bly-card--inverse :where(h1,h2,h3,h4,h5,h6){color:#fff;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-card-css")) {
  const s = document.createElement("style");
  s.id = "bly-card-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Card — general surface container. */
function Card({
  pad = true,
  hover = false,
  flat = false,
  inverse = false,
  as = "div",
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["bly-card", pad && "bly-card--pad", hover && "bly-card--hover", flat && "bly-card--flat", inverse && "bly-card--inverse", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-check{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-body);font-size:15px;
  color:var(--text-body);cursor:pointer;user-select:none;}
.bly-check input{position:absolute;opacity:0;width:0;height:0;}
.bly-check__box{flex:none;width:20px;height:20px;margin-top:1px;border:1.5px solid var(--border-strong);border-radius:6px;
  background:#fff;display:inline-flex;align-items:center;justify-content:center;transition:var(--transition-base);color:#fff;}
.bly-check__box i[data-lucide]{width:14px;height:14px;stroke-width:3;opacity:0;transform:scale(.6);transition:var(--transition-base);}
.bly-check:hover .bly-check__box{border-color:var(--color-primary);}
.bly-check input:checked + .bly-check__box{background:var(--color-primary);border-color:var(--color-primary);}
.bly-check input:checked + .bly-check__box i[data-lucide]{opacity:1;transform:scale(1);}
.bly-check input:focus-visible + .bly-check__box{box-shadow:var(--ring);}
.bly-check input:disabled ~ *{opacity:.5;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-check-css")) {
  const s = document.createElement("style");
  s.id = "bly-check-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Checkbox — single boolean choice with label. */
function Checkbox({
  label,
  id,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bly-check", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bly-check__box"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  })), label || children ? /*#__PURE__*/React.createElement("span", null, label || children) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-iconbtn{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--radius-md);
  border:1.5px solid transparent;cursor:pointer;transition:var(--transition-base);background:transparent;color:var(--text-strong);-webkit-appearance:none;}
.bly-iconbtn svg,.bly-iconbtn i[data-lucide]{width:20px;height:20px;stroke-width:2;}
.bly-iconbtn:focus-visible{outline:none;box-shadow:var(--ring);}
.bly-iconbtn[disabled]{opacity:.45;cursor:not-allowed;}
.bly-iconbtn--sm{width:36px;height:36px;border-radius:var(--radius-sm);}
.bly-iconbtn--sm svg,.bly-iconbtn--sm i[data-lucide]{width:17px;height:17px;}
.bly-iconbtn--lg{width:54px;height:54px;}
.bly-iconbtn--ghost:hover{background:var(--surface-sunken);}
.bly-iconbtn--outline{border-color:var(--border-strong);}
.bly-iconbtn--outline:hover{background:var(--surface-sunken);border-color:var(--text-muted);}
.bly-iconbtn--solid{background:var(--color-primary);color:#fff;}
.bly-iconbtn--solid:hover{background:var(--color-primary-hover);}
.bly-iconbtn--round{border-radius:var(--radius-pill);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-iconbtn-css")) {
  const s = document.createElement("style");
  s.id = "bly-iconbtn-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** IconButton — compact icon-only control (favorite, share, nav). */
function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  round = false,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["bly-iconbtn", `bly-iconbtn--${variant}`, size !== "md" && `bly-iconbtn--${size}`, round && "bly-iconbtn--round", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);}
.bly-field__label{font-weight:700;font-size:13.5px;color:var(--text-strong);}
.bly-field__req{color:var(--color-danger);margin-left:2px;}
.bly-input-wrap{position:relative;display:flex;align-items:center;}
.bly-input-wrap i[data-lucide]{position:absolute;left:14px;width:18px;height:18px;color:var(--text-muted);pointer-events:none;stroke-width:2;}
.bly-input{width:100%;height:46px;padding:0 14px;font-family:var(--font-body);font-size:15px;color:var(--text-body);
  background:#fff;border:1.5px solid var(--border-strong);border-radius:var(--radius-md);transition:var(--transition-base);-webkit-appearance:none;}
.bly-input::placeholder{color:var(--text-faint);}
.bly-input:hover{border-color:var(--text-muted);}
.bly-input:focus{outline:none;border-color:var(--color-primary);box-shadow:var(--ring);}
.bly-input--icon{padding-left:42px;}
.bly-input--error{border-color:var(--color-danger);}
.bly-input--error:focus{box-shadow:0 0 0 3px var(--color-danger-soft);}
.bly-input:disabled{background:var(--surface-sunken);color:var(--text-faint);cursor:not-allowed;}
.bly-field__hint{font-size:12.5px;color:var(--text-muted);}
.bly-field__hint--error{color:var(--color-danger);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-input-css")) {
  const s = document.createElement("style");
  s.id = "bly-input-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Input — labelled text field with optional leading icon + hint/error. */
function Input({
  label,
  icon,
  hint,
  error,
  required = false,
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? `bly-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "bly-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "bly-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "bly-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "bly-input-wrap"
  }, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: ["bly-input", icon && "bly-input--icon", error && "bly-input--error", className].filter(Boolean).join(" "),
    "aria-invalid": !!error
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: ["bly-field__hint", error && "bly-field__hint--error"].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-select-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);}
.bly-select-field__label{font-weight:700;font-size:13.5px;color:var(--text-strong);}
.bly-select-wrap{position:relative;display:flex;align-items:center;}
.bly-select-wrap i[data-lucide]{position:absolute;right:14px;width:18px;height:18px;color:var(--text-muted);pointer-events:none;}
.bly-select{width:100%;height:46px;padding:0 40px 0 14px;font-family:var(--font-body);font-size:15px;color:var(--text-body);
  background:#fff;border:1.5px solid var(--border-strong);border-radius:var(--radius-md);cursor:pointer;
  transition:var(--transition-base);-webkit-appearance:none;appearance:none;}
.bly-select:hover{border-color:var(--text-muted);}
.bly-select:focus{outline:none;border-color:var(--color-primary);box-shadow:var(--ring);}
.bly-select:disabled{background:var(--surface-sunken);color:var(--text-faint);cursor:not-allowed;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-select-css")) {
  const s = document.createElement("style");
  s.id = "bly-select-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Select — styled native dropdown. Pass options=[{value,label}] or children. */
function Select({
  label,
  options,
  placeholder,
  id,
  children,
  className = "",
  ...rest
}) {
  const fid = id || (label ? `bly-sel-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "bly-select-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "bly-select-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "bly-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: ["bly-select", className].filter(Boolean).join(" ")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-switch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);font-size:15px;color:var(--text-body);cursor:pointer;user-select:none;}
.bly-switch input{position:absolute;opacity:0;width:0;height:0;}
.bly-switch__track{flex:none;width:44px;height:26px;border-radius:999px;background:var(--grey-300);position:relative;transition:var(--transition-base);}
.bly-switch__thumb{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:var(--shadow-sm);transition:var(--transition-base);}
.bly-switch input:checked + .bly-switch__track{background:var(--color-primary);}
.bly-switch input:checked + .bly-switch__track .bly-switch__thumb{transform:translateX(18px);}
.bly-switch input:focus-visible + .bly-switch__track{box-shadow:var(--ring);}
.bly-switch input:disabled + .bly-switch__track{opacity:.5;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-switch-css")) {
  const s = document.createElement("style");
  s.id = "bly-switch-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Switch — on/off toggle. */
function Switch({
  label,
  id,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["bly-switch", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: id
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "bly-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bly-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-tabs{display:inline-flex;gap:2px;font-family:var(--font-body);}
.bly-tabs--line{border-bottom:1.5px solid var(--border);gap:24px;}
.bly-tab{appearance:none;background:none;border:none;cursor:pointer;font-family:var(--font-body);font-weight:700;
  font-size:14.5px;color:var(--text-muted);padding:10px 4px;transition:var(--transition-base);position:relative;white-space:nowrap;}
.bly-tabs--pill .bly-tab{padding:9px 16px;border-radius:var(--radius-pill);color:var(--text-body);}
.bly-tab:hover{color:var(--text-strong);}
.bly-tabs--line .bly-tab[aria-selected="true"]{color:var(--color-primary);}
.bly-tabs--line .bly-tab[aria-selected="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1.5px;height:2.5px;background:var(--color-primary);border-radius:2px;}
.bly-tabs--pill .bly-tab[aria-selected="true"]{background:var(--navy);color:#fff;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-tabs-css")) {
  const s = document.createElement("style");
  s.id = "bly-tabs-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Tabs — segmented navigation. Controlled via `value` + `onChange`. */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = "line",
  className = "",
  ...rest
}) {
  const cls = ["bly-tabs", `bly-tabs--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "tablist"
  }, rest), tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": value === v,
      className: "bly-tab",
      onClick: () => onChange && onChange(v)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-tag{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-body);font-weight:700;font-size:13px;
  line-height:1;padding:8px 14px;border-radius:var(--radius-pill);border:1.5px solid var(--border-strong);
  background:#fff;color:var(--text-body);cursor:default;transition:var(--transition-base);}
.bly-tag i[data-lucide],.bly-tag svg{width:14px;height:14px;stroke-width:2;}
.bly-tag--selectable{cursor:pointer;}
.bly-tag--selectable:hover{border-color:var(--color-primary);color:var(--color-primary);}
.bly-tag--selected{background:var(--bly-blue-100);border-color:var(--color-primary);color:var(--bly-blue-700);}
.bly-tag__x{display:inline-flex;margin:-2px -6px -2px 0;padding:2px;border-radius:50%;cursor:pointer;color:var(--text-muted);}
.bly-tag__x:hover{background:var(--surface-sunken);color:var(--text-strong);}
.bly-tag__x i[data-lucide]{width:13px;height:13px;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-tag-css")) {
  const s = document.createElement("style");
  s.id = "bly-tag-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** Tag / Chip — filters and neighborhood pills. Optional select + remove. */
function Tag({
  icon,
  selected = false,
  selectable = false,
  onRemove,
  children,
  className = "",
  ...rest
}) {
  const cls = ["bly-tag", selectable && "bly-tag--selectable", selected && "bly-tag--selected", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "bly-tag__x",
    role: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "x"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/realestate/AgentCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-agent{background:#fff;border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);
  overflow:hidden;transition:var(--transition-base);text-align:center;}
.bly-agent:hover{box-shadow:var(--shadow-md);}
.bly-agent__photo{aspect-ratio:1/1;background:linear-gradient(160deg,var(--bly-blue-100),var(--frosted-blue-100));overflow:hidden;display:flex;align-items:flex-end;justify-content:center;}
.bly-agent__photo img{width:100%;height:100%;object-fit:cover;}
.bly-agent__photo i[data-lucide]{width:64px;height:64px;color:var(--bly-blue-300);stroke-width:1.25;margin-bottom:24px;}
.bly-agent__body{padding:18px 18px 20px;}
.bly-agent__name{font-family:var(--font-heading);font-weight:700;font-size:18px;color:var(--text-strong);margin:0;}
.bly-agent__title{font-family:var(--font-body);font-size:13px;color:var(--color-primary);font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin:4px 0 0;}
.bly-agent__meta{display:flex;flex-direction:column;gap:6px;margin-top:14px;}
.bly-agent__meta a{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font-body);font-size:14px;color:var(--text-body);text-decoration:none;}
.bly-agent__meta a:hover{color:var(--color-primary);}
.bly-agent__meta i[data-lucide]{width:15px;height:15px;color:var(--text-muted);stroke-width:2;}
.bly-agent--row{display:flex;text-align:left;align-items:center;gap:16px;padding:16px;}
.bly-agent--row .bly-agent__body{padding:0;}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-agent-css")) {
  const s = document.createElement("style");
  s.id = "bly-agent-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** AgentCard — team member profile. `layout="row"` for compact list rows. */
function AgentCard({
  photo,
  name,
  title = "Realtor",
  phone,
  email,
  layout = "stack",
  className = "",
  ...rest
}) {
  if (layout === "row") {
    return /*#__PURE__*/React.createElement("article", _extends({
      className: ["bly-agent", "bly-agent--row", className].filter(Boolean).join(" ")
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
      src: photo,
      name: name,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bly-agent__body"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "bly-agent__name"
    }, name), /*#__PURE__*/React.createElement("p", {
      className: "bly-agent__title"
    }, title)));
  }
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ["bly-agent", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bly-agent__photo"
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name
  }) : /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user-round"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bly-agent__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "bly-agent__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "bly-agent__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "bly-agent__meta"
  }, phone && /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), phone), email && /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  }), email))));
}
Object.assign(__ds_scope, { AgentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/AgentCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-prop{background:#fff;border:1px solid var(--border);border-radius:var(--radius-xl);overflow:hidden;
  box-shadow:var(--shadow-sm);transition:var(--transition-base);display:flex;flex-direction:column;}
.bly-prop:hover{box-shadow:var(--shadow-lg);transform:translateY(-3px);}
.bly-prop__media{position:relative;aspect-ratio:4/3;background:
  linear-gradient(135deg,var(--bly-blue) 0%,var(--navy) 100%);overflow:hidden;}
.bly-prop__media img{width:100%;height:100%;object-fit:cover;}
.bly-prop__media-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);}
.bly-prop__media-ph i[data-lucide]{width:46px;height:46px;stroke-width:1.25;}
.bly-prop__badges{position:absolute;top:12px;left:12px;display:flex;gap:6px;}
.bly-prop__save{position:absolute;top:9px;right:9px;background:rgba(255,255,255,.92);backdrop-filter:blur(4px);border-radius:var(--radius-pill);}
.bly-prop__body{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px;}
.bly-prop__price{font-family:var(--font-heading);font-weight:900;font-size:24px;color:var(--text-strong);line-height:1;letter-spacing:-.01em;}
.bly-prop__addr{font-family:var(--font-body);font-size:14.5px;color:var(--text-body);line-height:1.4;}
.bly-prop__addr b{display:block;font-weight:700;color:var(--text-strong);font-size:15.5px;}
.bly-prop__facts{display:flex;gap:16px;padding-top:12px;border-top:1px solid var(--divider);margin-top:2px;}
.bly-prop__fact{display:flex;align-items:center;gap:6px;font-family:var(--font-body);font-size:13.5px;font-weight:700;color:var(--text-body);}
.bly-prop__fact i[data-lucide]{width:16px;height:16px;color:var(--text-muted);stroke-width:2;}
.bly-prop__fact span{font-weight:400;color:var(--text-muted);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-prop-css")) {
  const s = document.createElement("style");
  s.id = "bly-prop-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}
const STATUS = {
  "for-sale": {
    variant: "sale",
    label: "For Sale"
  },
  "new": {
    variant: "solid",
    label: "New"
  },
  "pending": {
    variant: "warning",
    label: "Pending"
  },
  "sold": {
    variant: "neutral",
    label: "Sold"
  },
  "open": {
    variant: "success",
    label: "Open House"
  }
};

/** PropertyCard — a single listing tile. */
function PropertyCard({
  image,
  price,
  address,
  city,
  beds,
  baths,
  sqft,
  status = "for-sale",
  featured = false,
  onSave,
  saved = false,
  className = "",
  ...rest
}) {
  const st = STATUS[status] || STATUS["for-sale"];
  return /*#__PURE__*/React.createElement("article", _extends({
    className: ["bly-prop", className].filter(Boolean).join(" ")
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: address
  }) : /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__media-ph"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "house"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__badges"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: st.variant
  }, st.label), featured && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "gold",
    icon: "star"
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__save"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    size: "sm",
    round: true,
    label: "Save",
    onClick: onSave,
    style: saved ? {
      color: "var(--color-danger)"
    } : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__price"
  }, price), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__addr"
  }, /*#__PURE__*/React.createElement("b", null, address), city), /*#__PURE__*/React.createElement("div", {
    className: "bly-prop__facts"
  }, beds != null && /*#__PURE__*/React.createElement("span", {
    className: "bly-prop__fact"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bed-double"
  }), beds, /*#__PURE__*/React.createElement("span", null, "bd")), baths != null && /*#__PURE__*/React.createElement("span", {
    className: "bly-prop__fact"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bath"
  }), baths, /*#__PURE__*/React.createElement("span", null, "ba")), sqft != null && /*#__PURE__*/React.createElement("span", {
    className: "bly-prop__fact"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "ruler"
  }), sqft, /*#__PURE__*/React.createElement("span", null, "sqft")))));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/realestate/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.bly-stat{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);}
.bly-stat--center{align-items:center;text-align:center;}
.bly-stat__icon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:var(--radius-md);
  background:var(--bly-blue-050);color:var(--color-primary);margin-bottom:4px;}
.bly-stat__icon i[data-lucide]{width:22px;height:22px;stroke-width:2;}
.bly-stat__value{font-family:var(--font-heading);font-weight:900;font-size:40px;line-height:1;letter-spacing:-.02em;color:var(--text-strong);}
.bly-stat__value.display{font-family:var(--font-display);font-weight:800;}
.bly-stat__label{font-size:14px;color:var(--text-muted);line-height:1.4;}
.bly-stat--inverse .bly-stat__value{color:#fff;}
.bly-stat--inverse .bly-stat__label{color:var(--text-on-dark-muted);}
.bly-stat--inverse .bly-stat__icon{background:rgba(255,255,255,.1);color:var(--frosted-blue);}
`;
if (typeof document !== "undefined" && !document.getElementById("bly-stat-css")) {
  const s = document.createElement("style");
  s.id = "bly-stat-css";
  s.textContent = CSS;
  document.head.appendChild(s);
}

/** StatBlock — a headline metric ("500+ homes sold"). */
function StatBlock({
  value,
  label,
  icon,
  align = "start",
  inverse = false,
  display = false,
  className = "",
  ...rest
}) {
  const cls = ["bly-stat", align === "center" && "bly-stat--center", inverse && "bly-stat--inverse", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "bly-stat__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon
  })), /*#__PURE__*/React.createElement("span", {
    className: ["bly-stat__value", display && "display"].filter(Boolean).join(" ")
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "bly-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* The Bly Team — site footer. Deep-navy, white reversed logo + eXp co-brand. */
const FOOTER_CSS = `
.site-foot{background:var(--navy);color:var(--text-on-dark-muted);font-family:var(--font-body);}
.site-foot__top{max-width:var(--container-wide);margin:0 auto;padding:56px var(--gutter) 40px;display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;}
.site-foot__logo{height:46px;margin-bottom:18px;}
.site-foot__blurb{font-size:14px;line-height:1.6;max-width:280px;margin:0 0 18px;}
.site-foot__social{display:flex;gap:10px;}
.site-foot__social a{width:38px;height:38px;border-radius:50%;border:1px solid var(--border-on-dark);display:inline-flex;align-items:center;justify-content:center;color:#fff;transition:var(--transition-base);}
.site-foot__social a:hover{background:var(--color-primary);border-color:var(--color-primary);}
.site-foot__social i[data-lucide]{width:17px;height:17px;}
.site-foot h5{font-family:var(--font-heading);font-weight:700;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#fff;margin:0 0 16px;}
.site-foot ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:11px;}
.site-foot ul a{color:var(--text-on-dark-muted);font-size:14px;text-decoration:none;cursor:pointer;}
.site-foot ul a:hover{color:#fff;}
.site-foot__bottom{border-top:1px solid var(--border-on-dark);}
.site-foot__bottom-in{max-width:var(--container-wide);margin:0 auto;padding:20px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:20px;}
.site-foot__bottom-in .cobrand{display:flex;align-items:center;gap:16px;}
.site-foot__bottom-in .cobrand img{height:24px;}
.site-foot__bottom-in .rule{width:1px;height:26px;background:var(--border-on-dark);}
.site-foot__exp{display:flex;flex-direction:column;line-height:1.05;}
.site-foot__exp .e1{font-family:var(--font-heading);font-weight:900;font-size:17px;color:#fff;}
.site-foot__exp .e2{font-size:8.5px;letter-spacing:.32em;text-transform:uppercase;color:var(--text-on-dark-muted);margin-top:2px;}
.site-foot__copy{font-size:12.5px;}
@media(max-width:900px){.site-foot__top{grid-template-columns:1fr 1fr;}}
`;
if (!document.getElementById("site-foot-css")) {
  const s = document.createElement("style");
  s.id = "site-foot-css";
  s.textContent = FOOTER_CSS;
  document.head.appendChild(s);
}
function SiteFooter() {
  const col = (title, items) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, title), /*#__PURE__*/React.createElement("ul", null, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", null, i)))));
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-foot__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "site-foot__logo",
    src: "../../assets/logos/bly-logo-white.png",
    alt: "The Bly Team"
  }), /*#__PURE__*/React.createElement("p", {
    className: "site-foot__blurb"
  }, "A better way to buy and sell real estate across the Greater Houston & Galveston area."), /*#__PURE__*/React.createElement("div", {
    className: "site-foot__social"
  }, ["instagram", "facebook", "youtube", "linkedin"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    "aria-label": s
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s
  }))))), col("Buy", ["Search Homes", "Cash Offer", "Mortgage Calculator", "Affordability"]), col("Sell", ["Home Valuation", "Why List With Us", "Home Sale Calculator"]), col("Communities", ["League City", "Galveston", "Friendswood", "Houston", "Kemah"])), /*#__PURE__*/React.createElement("div", {
    className: "site-foot__bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-foot__bottom-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/bly-logo-white.png",
    alt: "The Bly Team"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rule"
  }), /*#__PURE__*/React.createElement("span", {
    className: "site-foot__exp"
  }, /*#__PURE__*/React.createElement("span", {
    className: "e1"
  }, "eXp"), /*#__PURE__*/React.createElement("span", {
    className: "e2"
  }, "Realty"))), /*#__PURE__*/React.createElement("span", {
    className: "site-foot__copy"
  }, "\xA9 The Bly Team \xB7 217 East Main Street, League City, TX \xB7 All rights reserved"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* The Bly Team — site header / nav. Composes Button + IconButton. */
const {
  Button,
  IconButton
} = window.TheBlyTeamDesignSystem_5bb02e;
const HEADER_CSS = `
.site-head{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);
  border-bottom:1px solid var(--border);}
.site-head__bar{max-width:var(--container-wide);margin:0 auto;padding:14px var(--gutter);display:flex;align-items:center;gap:28px;}
.site-head__logo{height:42px;cursor:pointer;flex:none;}
.site-head__nav{display:flex;gap:26px;margin-left:8px;}
.site-head__nav a{font-family:var(--font-body);font-weight:700;font-size:14.5px;color:var(--text-body);cursor:pointer;text-decoration:none;transition:var(--transition-color);}
.site-head__nav a:hover,.site-head__nav a.is-active{color:var(--color-primary);}
.site-head__right{margin-left:auto;display:flex;align-items:center;gap:14px;}
.site-head__phone{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-body);font-weight:700;font-size:14.5px;color:var(--text-strong);text-decoration:none;}
.site-head__phone i[data-lucide]{width:16px;height:16px;color:var(--color-primary);}
@media(max-width:900px){.site-head__nav,.site-head__phone{display:none;}}
`;
if (!document.getElementById("site-head-css")) {
  const s = document.createElement("style");
  s.id = "site-head-css";
  s.textContent = HEADER_CSS;
  document.head.appendChild(s);
}
function SiteHeader({
  active,
  onNav
}) {
  const links = [["buy", "Buy"], ["sell", "Sell"], ["communities", "Communities"], ["team", "Team"], ["reviews", "Reviews"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "site-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-head__bar"
  }, /*#__PURE__*/React.createElement("img", {
    className: "site-head__logo",
    src: "../../assets/logos/bly-logo-color.png",
    alt: "The Bly Team",
    onClick: () => onNav("home")
  }), /*#__PURE__*/React.createElement("nav", {
    className: "site-head__nav"
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: active === k ? "is-active" : "",
    onClick: () => onNav(k === "buy" ? "search" : k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "site-head__right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "site-head__phone",
    href: "tel:8329325435"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone"
  }), "(832) 932-5435"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: "search",
    onClick: () => onNav("search")
  }, "Search homes"))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Bly Team — Home screen sections. */
const {
  Button,
  PropertyCard,
  StatBlock
} = window.TheBlyTeamDesignSystem_5bb02e;
const HOME_CSS = `
.home-hero{position:relative;background:radial-gradient(120% 140% at 80% 0%,#16306a 0%,var(--navy) 55%);color:#fff;overflow:hidden;}
.home-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(transparent 60%,rgba(0,0,0,.25));pointer-events:none;}
.home-hero__in{position:relative;z-index:2;max-width:var(--container-wide);margin:0 auto;padding:84px var(--gutter) 72px;}
.home-hero .eyebrow{color:var(--frosted-blue);}
.home-hero h1{font-family:var(--font-display);font-weight:800;font-size:clamp(40px,6vw,76px);line-height:1.02;letter-spacing:-.03em;color:#fff;margin:14px 0 18px;max-width:14ch;}
.home-hero p.lede{font-size:19px;line-height:1.55;color:rgba(255,255,255,.82);max-width:54ch;margin:0 0 32px;}
.home-search{background:#fff;border-radius:var(--radius-xl);box-shadow:var(--shadow-xl);padding:14px;display:flex;gap:10px;max-width:760px;align-items:center;}
.home-search__field{flex:1;display:flex;align-items:center;gap:10px;padding:0 14px;}
.home-search__field i[data-lucide]{width:20px;height:20px;color:var(--text-muted);}
.home-search__field input{border:none;outline:none;font-family:var(--font-body);font-size:16px;width:100%;color:var(--text-body);background:transparent;}
.home-search__sep{width:1px;height:32px;background:var(--border);}
.home-search__type{border:none;outline:none;font-family:var(--font-body);font-weight:700;font-size:15px;color:var(--text-body);background:transparent;cursor:pointer;padding:0 8px;}
.home-stats{display:flex;gap:48px;margin-top:48px;flex-wrap:wrap;}
.home-stats .bly-stat__value{font-size:34px;}

.sectn{max-width:var(--container-wide);margin:0 auto;padding:var(--section-y) var(--gutter);}
.sectn__head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:32px;}
.sectn__head h2{font-family:var(--font-heading);font-weight:900;font-size:clamp(28px,3.4vw,40px);letter-spacing:-.015em;color:var(--text-strong);margin:6px 0 0;}
.sectn__head p{color:var(--text-muted);margin:0;font-size:16px;}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media(max-width:900px){.grid-3{grid-template-columns:1fr;}}

.hoods{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
.hood{position:relative;height:200px;border-radius:var(--radius-lg);overflow:hidden;cursor:pointer;
  background:linear-gradient(160deg,var(--slate-blue),var(--navy));display:flex;align-items:flex-end;padding:18px;color:#fff;
  box-shadow:var(--shadow-sm);transition:var(--transition-base);}
.hood:nth-child(2){background:linear-gradient(160deg,#3c6bb0,#0b1f45);}
.hood:nth-child(3){background:linear-gradient(160deg,#5a83c0,#16264a);}
.hood:nth-child(4){background:linear-gradient(160deg,#2f5598,#0a1733);}
.hood:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);}
.hood h3{font-family:var(--font-heading);font-weight:700;font-size:19px;color:#fff;margin:0;position:relative;z-index:2;}
.hood span{position:relative;z-index:2;font-size:13px;color:rgba(255,255,255,.8);}
.hood__c{position:relative;z-index:2;}
@media(max-width:900px){.hoods{grid-template-columns:1fr 1fr;}}

.why{background:var(--surface-subtle);}
.why__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.why__card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-xl);padding:28px;box-shadow:var(--shadow-xs);}
.why__card .ic{width:48px;height:48px;border-radius:var(--radius-md);background:var(--bly-blue-050);color:var(--color-primary);display:flex;align-items:center;justify-content:center;margin-bottom:16px;}
.why__card .ic i[data-lucide]{width:24px;height:24px;}
.why__card h3{font-family:var(--font-heading);font-weight:700;font-size:19px;color:var(--text-strong);margin:0 0 8px;}
.why__card p{font-size:14.5px;line-height:1.6;color:var(--text-muted);margin:0;}
@media(max-width:900px){.why__grid{grid-template-columns:1fr;}}

.cta{background:var(--navy);color:#fff;border-radius:var(--radius-2xl);padding:56px;display:flex;align-items:center;justify-content:space-between;gap:40px;flex-wrap:wrap;}
.cta h2{font-family:var(--font-display);font-weight:800;font-size:clamp(30px,4vw,46px);letter-spacing:-.02em;color:#fff;margin:0 0 12px;max-width:18ch;}
.cta p{color:rgba(255,255,255,.8);font-size:17px;margin:0;max-width:42ch;}
.cta__actions{display:flex;gap:14px;flex-wrap:wrap;}
`;
if (!document.getElementById("home-css")) {
  const s = document.createElement("style");
  s.id = "home-css";
  s.textContent = HOME_CSS;
  document.head.appendChild(s);
}
const FEATURED = [{
  price: "$489,000",
  address: "1204 Marina Bay Dr",
  city: "League City, TX 77573",
  beds: 4,
  baths: 3,
  sqft: "2,640",
  status: "for-sale",
  featured: true
}, {
  price: "$615,000",
  address: "58 Grand Beach Blvd",
  city: "Galveston, TX 77550",
  beds: 3,
  baths: 2,
  sqft: "1,980",
  status: "new"
}, {
  price: "$329,900",
  address: "3110 Pine Hollow Ln",
  city: "Dickinson, TX 77539",
  beds: 3,
  baths: 2,
  sqft: "1,610",
  status: "open"
}];
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "home-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-hero__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Houston & Galveston Real Estate"), /*#__PURE__*/React.createElement("h1", null, "Find your new home."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Your trusted resource for buying and selling across Galveston & Harris County \u2014 with real-time listings and guidance at every step."), /*#__PURE__*/React.createElement("div", {
    className: "home-search"
  }, /*#__PURE__*/React.createElement("div", {
    className: "home-search__field"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "City, ZIP, or address",
    defaultValue: "League City, TX"
  })), /*#__PURE__*/React.createElement("span", {
    className: "home-search__sep"
  }), /*#__PURE__*/React.createElement("select", {
    className: "home-search__type"
  }, /*#__PURE__*/React.createElement("option", null, "For Sale"), /*#__PURE__*/React.createElement("option", null, "For Rent"), /*#__PURE__*/React.createElement("option", null, "Sold")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "search",
    onClick: () => onNav("search")
  }, "Search")), /*#__PURE__*/React.createElement("div", {
    className: "home-stats"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1,200+",
    label: "Homes sold",
    inverse: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "$480M",
    label: "Closed volume",
    inverse: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4.9\u2605",
    label: "Client rating",
    inverse: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "12",
    label: "Communities",
    inverse: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sectn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sectn__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "On the market"), /*#__PURE__*/React.createElement("h2", null, "Featured listings")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => onNav("search")
  }, "See all homes")), /*#__PURE__*/React.createElement("div", {
    className: "grid-3"
  }, FEATURED.map((p, i) => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: i
  }, p, {
    onClick: () => onNav("listing"),
    style: {
      cursor: "pointer"
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sectn",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sectn__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Explore"), /*#__PURE__*/React.createElement("h2", null, "Our neighborhoods"))), /*#__PURE__*/React.createElement("div", {
    className: "hoods"
  }, [["Galveston", "Island living"], ["League City", "Family favorite"], ["Friendswood", "Top schools"], ["Kemah", "Waterfront"]].map(([n, d]) => /*#__PURE__*/React.createElement("div", {
    className: "hood",
    key: n,
    onClick: () => onNav("search")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hood__c"
  }, /*#__PURE__*/React.createElement("h3", null, n), /*#__PURE__*/React.createElement("span", null, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sectn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sectn__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why list with us"), /*#__PURE__*/React.createElement("h2", null, "A better way to buy & sell"))), /*#__PURE__*/React.createElement("div", {
    className: "why__grid"
  }, [["map", "Local expertise", "Deep knowledge of the Houston & Galveston market — pricing, timing, and neighborhoods."], ["handshake", "Personalized service", "We tailor every step to your goals, whether you're buying your first home or selling your fifth."], ["zap", "Fast response", "We prioritize your time with quick, clear communication from first call to closing."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    className: "why__card",
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic
  })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "sectn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Ready to make your move?"), /*#__PURE__*/React.createElement("p", null, "Talk to a Bly Team agent today and get expert guidance for your next chapter.")), /*#__PURE__*/React.createElement("div", {
    className: "cta__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "calendar-check"
  }, "Schedule a consult"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav("team"),
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,.4)"
    }
  }, "Meet the team")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The Bly Team — Search results, Listing detail, and Team screens. */
const {
  Button,
  IconButton,
  PropertyCard,
  AgentCard,
  StatBlock,
  Badge,
  Tag,
  Input,
  Select,
  Checkbox,
  Switch
} = window.TheBlyTeamDesignSystem_5bb02e;
const SCREENS_CSS = `
.page{max-width:var(--container-wide);margin:0 auto;padding:36px var(--gutter) 64px;}
.page__title{font-family:var(--font-heading);font-weight:900;font-size:32px;letter-spacing:-.015em;color:var(--text-strong);margin:0 0 4px;}
.page__sub{color:var(--text-muted);margin:0 0 24px;font-size:15px;}
.filters{display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:#fff;border:1px solid var(--border);
  border-radius:var(--radius-lg);padding:14px 16px;box-shadow:var(--shadow-xs);margin-bottom:26px;}
.filters .grow{flex:1;min-width:200px;}
.filters__divider{width:1px;height:30px;background:var(--border);}
.results-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
@media(max-width:1000px){.results-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:700px){.results-grid{grid-template-columns:1fr;}}

.ld{max-width:var(--container-wide);margin:0 auto;padding:24px var(--gutter) 64px;}
.ld__back{display:inline-flex;align-items:center;gap:6px;color:var(--text-muted);font-weight:700;font-size:14px;cursor:pointer;margin-bottom:18px;background:none;border:none;font-family:var(--font-body);}
.ld__back:hover{color:var(--color-primary);}
.ld__gallery{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:1fr 1fr;gap:10px;height:440px;margin-bottom:28px;}
.ld__ph{background:linear-gradient(150deg,var(--bly-blue),var(--navy));border-radius:var(--radius-lg);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.45);}
.ld__ph:first-child{grid-row:1/3;}
.ld__ph i[data-lucide]{width:40px;height:40px;stroke-width:1.25;}
.ld__ph.alt{background:linear-gradient(150deg,#3c6bb0,#0b1f45);}
.ld__ph.alt2{background:linear-gradient(150deg,#5a83c0,#16264a);}
.ld__body{display:grid;grid-template-columns:1.7fr 1fr;gap:40px;}
.ld__price{font-family:var(--font-heading);font-weight:900;font-size:38px;letter-spacing:-.02em;color:var(--text-strong);margin:0;}
.ld__addr{font-size:17px;color:var(--text-body);margin:4px 0 0;}
.ld__facts{display:flex;gap:28px;margin:22px 0;padding:18px 0;border-top:1px solid var(--divider);border-bottom:1px solid var(--divider);}
.ld__fact{display:flex;flex-direction:column;gap:3px;}
.ld__fact b{font-family:var(--font-heading);font-size:22px;color:var(--text-strong);font-weight:700;}
.ld__fact span{font-size:13px;color:var(--text-muted);}
.ld h3{font-family:var(--font-heading);font-weight:700;font-size:20px;color:var(--text-strong);margin:0 0 10px;}
.ld p.desc{font-size:15.5px;line-height:1.7;color:var(--text-body);}
.ld__aside{position:sticky;top:90px;align-self:start;background:#fff;border:1px solid var(--border);border-radius:var(--radius-xl);padding:22px;box-shadow:var(--shadow-md);}
.ld__form{display:flex;flex-direction:column;gap:12px;margin-top:16px;}
@media(max-width:900px){.ld__body{grid-template-columns:1fr;}.ld__gallery{grid-template-columns:1fr;grid-template-rows:1fr;height:280px;}.ld__ph:not(:first-child){display:none;}.ld__ph:first-child{grid-row:auto;}}

.team-hero{background:var(--surface-subtle);}
.team-hero__in{max-width:var(--container-wide);margin:0 auto;padding:60px var(--gutter) 40px;text-align:center;}
.team-hero h1{font-family:var(--font-display);font-weight:800;font-size:clamp(34px,4.5vw,56px);letter-spacing:-.025em;color:var(--text-strong);margin:10px 0 12px;}
.team-hero p{font-size:18px;color:var(--text-muted);max-width:60ch;margin:0 auto;}
.team-stats{display:flex;gap:48px;justify-content:center;margin-top:36px;flex-wrap:wrap;}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
@media(max-width:1000px){.team-grid{grid-template-columns:1fr 1fr;}}
`;
if (!document.getElementById("screens-css")) {
  const s = document.createElement("style");
  s.id = "screens-css";
  s.textContent = SCREENS_CSS;
  document.head.appendChild(s);
}
const LISTINGS = [{
  price: "$489,000",
  address: "1204 Marina Bay Dr",
  city: "League City, TX 77573",
  beds: 4,
  baths: 3,
  sqft: "2,640",
  status: "for-sale",
  featured: true
}, {
  price: "$615,000",
  address: "58 Grand Beach Blvd",
  city: "Galveston, TX 77550",
  beds: 3,
  baths: 2,
  sqft: "1,980",
  status: "new"
}, {
  price: "$329,900",
  address: "3110 Pine Hollow Ln",
  city: "Dickinson, TX 77539",
  beds: 3,
  baths: 2,
  sqft: "1,610",
  status: "open"
}, {
  price: "$725,000",
  address: "902 Lafayette St",
  city: "Friendswood, TX 77546",
  beds: 5,
  baths: 4,
  sqft: "3,420",
  status: "for-sale"
}, {
  price: "$415,000",
  address: "217 Bradford Ave",
  city: "Kemah, TX 77565",
  beds: 3,
  baths: 3,
  sqft: "2,100",
  status: "pending"
}, {
  price: "$268,500",
  address: "4405 Avenue R",
  city: "Galveston, TX 77550",
  beds: 2,
  baths: 1,
  sqft: "1,140",
  status: "for-sale"
}];
function SearchScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "page__title"
  }, "Homes for sale"), /*#__PURE__*/React.createElement("p", {
    className: "page__sub"
  }, "Galveston & Harris County \xB7 ", LISTINGS.length, " listings"), /*#__PURE__*/React.createElement("div", {
    className: "filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grow",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "City, ZIP, or address",
    style: {
      height: 42
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "filters__divider"
  }), /*#__PURE__*/React.createElement(Tag, {
    selectable: true,
    selected: true
  }, "For Sale"), /*#__PURE__*/React.createElement(Tag, {
    selectable: true
  }, "3+ beds"), /*#__PURE__*/React.createElement(Tag, {
    selectable: true
  }, "2+ baths"), /*#__PURE__*/React.createElement("span", {
    className: "filters__divider"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Waterfront"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: "sliders-horizontal"
  }, "More filters"))), /*#__PURE__*/React.createElement("div", {
    className: "results-grid"
  }, LISTINGS.map((p, i) => /*#__PURE__*/React.createElement(PropertyCard, _extends({
    key: i
  }, p, {
    onClick: () => onNav("listing"),
    style: {
      cursor: "pointer"
    }
  })))));
}
function ListingScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ld"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ld__back",
    onClick: () => onNav("search")
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left"
  }), "Back to results"), /*#__PURE__*/React.createElement("div", {
    className: "ld__gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ld__ph"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ld__ph alt"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ld__ph alt2"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ld__body"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "sale"
  }, "For Sale"), /*#__PURE__*/React.createElement(Badge, {
    variant: "gold",
    icon: "star"
  }, "Featured")), /*#__PURE__*/React.createElement("h1", {
    className: "ld__price"
  }, "$489,000"), /*#__PURE__*/React.createElement("p", {
    className: "ld__addr"
  }, "1204 Marina Bay Dr \xB7 League City, TX 77573"), /*#__PURE__*/React.createElement("div", {
    className: "ld__facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ld__fact"
  }, /*#__PURE__*/React.createElement("b", null, "4"), /*#__PURE__*/React.createElement("span", null, "Bedrooms")), /*#__PURE__*/React.createElement("div", {
    className: "ld__fact"
  }, /*#__PURE__*/React.createElement("b", null, "3"), /*#__PURE__*/React.createElement("span", null, "Bathrooms")), /*#__PURE__*/React.createElement("div", {
    className: "ld__fact"
  }, /*#__PURE__*/React.createElement("b", null, "2,640"), /*#__PURE__*/React.createElement("span", null, "Sq Ft")), /*#__PURE__*/React.createElement("div", {
    className: "ld__fact"
  }, /*#__PURE__*/React.createElement("b", null, "2019"), /*#__PURE__*/React.createElement("span", null, "Year built")), /*#__PURE__*/React.createElement("div", {
    className: "ld__fact"
  }, /*#__PURE__*/React.createElement("b", null, "0.18"), /*#__PURE__*/React.createElement("span", null, "Acres"))), /*#__PURE__*/React.createElement("h3", null, "About this home"), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, "A beautifully maintained waterfront home in the heart of League City. Light-filled open living spaces flow to a covered patio and private dock. Minutes from Kemah Boardwalk, top-rated schools, and the marina. This is the kind of home that makes the move feel easy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "waves"
  }, "Waterfront"), /*#__PURE__*/React.createElement(Tag, {
    icon: "anchor"
  }, "Private dock"), /*#__PURE__*/React.createElement(Tag, {
    icon: "trees"
  }, "Covered patio"), /*#__PURE__*/React.createElement(Tag, {
    icon: "car"
  }, "3-car garage"))), /*#__PURE__*/React.createElement("aside", {
    className: "ld__aside"
  }, /*#__PURE__*/React.createElement(AgentCard, {
    layout: "row",
    name: "Deborah Bly",
    title: "Team Lead \xB7 Realtor"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ld__form"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    icon: "mail",
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    icon: "phone",
    placeholder: "(000) 000-0000"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    icon: "calendar-check"
  }, "Schedule a tour"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    icon: "phone"
  }, "Request a call")))));
}
const TEAM = [["Deborah Bly", "Team Lead · Realtor"], ["Buyer Specialist", "Realtor"], ["Listing Specialist", "Realtor"], ["Client Care", "Transaction Coordinator"]];
function TeamScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    className: "team-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-hero__in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Meet the team"), /*#__PURE__*/React.createElement("h1", null, "A team you can trust."), /*#__PURE__*/React.createElement("p", null, "To serve as a trusted adviser to our community, clients, and friends \u2014 dedicated to making your move a great experience."), /*#__PURE__*/React.createElement("div", {
    className: "team-stats"
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "1,200+",
    label: "Homes sold",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4.9\u2605",
    label: "Client rating",
    align: "center"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "15+",
    label: "Years serving Houston",
    align: "center"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-grid"
  }, TEAM.map(([n, t]) => /*#__PURE__*/React.createElement(AgentCard, {
    key: n,
    name: n,
    title: t,
    phone: "(832) 932-5435",
    email: "clientcare@agentbly.com"
  })))));
}
Object.assign(window, {
  SearchScreen,
  ListingScreen,
  TeamScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AgentCard = __ds_scope.AgentCard;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
