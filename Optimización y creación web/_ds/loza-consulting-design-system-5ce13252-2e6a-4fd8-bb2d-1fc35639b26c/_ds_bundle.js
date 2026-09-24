/* @ds-bundle: {"format":4,"namespace":"LOZAConsultingDesignSystem_5ce132","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"QuoteBlock","sourcePath":"components/core/QuoteBlock.jsx"},{"name":"StatCallout","sourcePath":"components/core/StatCallout.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"8a47362d2557","components/core/Button.jsx":"51d73b97e732","components/core/Card.jsx":"1a292d24ab98","components/core/QuoteBlock.jsx":"2d053305e15a","components/core/StatCallout.jsx":"4249b0c1a24e","components/core/Tag.jsx":"18f38d2eb3aa","components/feedback/Tooltip.jsx":"89e5ddd2a621","components/forms/Checkbox.jsx":"4359252d63e0","components/forms/Input.jsx":"b7774e13d2a2","components/forms/Radio.jsx":"1e16590c4e82","components/forms/Select.jsx":"a82e28fbbe93","components/navigation/Tabs.jsx":"a12e9fada64a","ui_kits/website/Chrome.jsx":"ac8693b955fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LOZAConsultingDesignSystem_5ce132 = window.LOZAConsultingDesignSystem_5ce132 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'navy',
  children
}) {
  const tones = {
    navy: {
      background: 'var(--navy)',
      color: '#fff'
    },
    gold: {
      background: 'var(--gold-100)',
      color: 'var(--gold-700)'
    },
    orange: {
      background: 'var(--orange-100)',
      color: 'var(--orange-700)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--navy)',
      border: '1px solid var(--border-default)'
    }
  };
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
  icon
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: '13px'
    },
    md: {
      padding: '12px 22px',
      font: '14px'
    },
    lg: {
      padding: '16px 30px',
      font: '16px'
    }
  };
  const base = {
    fontFamily: 'var(--font-condensed)',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--orange)',
      color: '#fff'
    },
    navy: {
      background: 'var(--navy)',
      color: '#fff'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--navy)',
      borderColor: 'var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--navy)'
    }
  };
  const hover = {
    primary: {
      background: 'var(--orange-600)'
    },
    navy: {
      background: 'var(--navy-700)'
    },
    secondary: {
      background: 'var(--navy-50)'
    },
    ghost: {
      background: 'var(--navy-50)'
    }
  };
  const [isHover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    ...(isHover && !disabled ? hover[variant] : {})
  };
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon && React.createElement('span', {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padded = true
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: padded ? 'var(--space-6)' : 0,
      transition: 'box-shadow var(--duration-standard) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  quote,
  attribution,
  tone = 'dark'
}) {
  const dark = tone === 'dark';
  return React.createElement('div', {
    style: {
      background: dark ? 'var(--navy)' : 'var(--surface-warm)',
      borderRadius: 'var(--radius-md)',
      padding: '28px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      lineHeight: 1.35,
      color: dark ? '#fff' : 'var(--navy-900)'
    }
  }, quote), attribution && React.createElement('div', {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: dark ? 'var(--gold-300)' : 'var(--gold-700)',
      marginTop: '14px'
    }
  }, attribution));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCallout.jsx
try { (() => {
function StatCallout({
  value,
  label,
  tone = 'light'
}) {
  const dark = tone === 'dark';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontWeight: 700,
      fontSize: '44px',
      lineHeight: 1,
      color: dark ? '#fff' : 'var(--navy)'
    }
  }, value), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '12px',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: dark ? 'var(--navy-200)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '13px',
      color: 'var(--text-primary)',
      background: 'var(--grey-100)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 8px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, children, onRemove && React.createElement('span', {
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, '\u00d7'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--navy-900)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    style: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--navy)'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error
}) {
  const [focused, setFocused] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--orange-600)' : focused ? 'var(--navy)' : 'var(--border-default)'}`,
      outline: focused ? `2px solid ${error ? 'var(--orange-100)' : 'var(--navy-100)'}` : 'none',
      outlineOffset: '0px',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: '12px',
      color: 'var(--orange-600)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, React.createElement('input', {
    type: 'radio',
    name,
    checked,
    onChange,
    style: {
      width: '16px',
      height: '16px',
      accentColor: 'var(--navy)'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: '13px',
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-default)',
      background: '#fff',
      color: 'var(--text-primary)'
    }
  }, options.map(o => React.createElement('option', {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 0',
      color: t === active ? 'var(--navy)' : 'var(--text-muted)',
      borderBottom: t === active ? '2px solid var(--orange)' : '2px solid transparent'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/** LOZA Consulting website nav — logo, section links, active-state underline. Not a design-system component (page chrome only). */
function Nav({
  active
}) {
  const items = [['Metodología', 'methodology.html'], ['Sobre mí', 'about.html'], ['Contacto', 'contact.html']];
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('a', {
    href: 'index.html'
  }, React.createElement('img', {
    src: '../../assets/logo/loza-logo.png',
    style: {
      height: '36px'
    }
  })), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '32px'
    }
  }, items.map(([label, href]) => React.createElement('a', {
    key: label,
    href,
    style: {
      fontFamily: 'var(--font-condensed)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: label === active ? 'var(--navy)' : 'var(--text-secondary)',
      cursor: 'pointer',
      borderBottom: label === active ? '2px solid var(--orange)' : '2px solid transparent',
      paddingBottom: '4px'
    }
  }, label))));
}
function Footer() {
  return React.createElement('footer', {
    style: {
      background: 'var(--navy)',
      color: 'var(--navy-200)',
      padding: '40px 0',
      marginTop: '80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: '13px'
    }
  }, React.createElement('span', null, '© LOZA Consulting'), React.createElement('span', null, 'San Pedro Sula, Honduras · Remoto en LATAM'), React.createElement('a', {
    href: '#',
    style: {
      color: 'var(--gold-300)'
    }
  }, 'linkedin.com/in/OmarLozanoZavala'));
}
window.Nav = Nav;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
