/**
 * Studio Kinetik — animation orchestration
 *  - Page veil intro
 *  - Custom cursor (dot + delayed ring) with magnetic + hover states
 *  - Hero word-by-word reveal
 *  - Scroll progress bar
 *  - Magnetic CTA pull
 *  - 3D card tilt
 *  - Counter-up
 *  - Header shrink
 *  - Section title clip-path reveal
 */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCoarse = window.matchMedia('(pointer: coarse)').matches;

export function initAnimations() {
  initPageVeil();
  initScrollProgress();
  initHeaderShrink();
  initHeroReveal();
  initSectionTitleReveal();
  initMarquee();
  if (!isCoarse) initCursor();
  if (!isCoarse && !reduceMotion) initMagnetic();
  if (!isCoarse && !reduceMotion) initTilt();
  initCounters();
}

// Called after every SPA navigation — skips the one-time global inits
export function initPageAnimations() {
  const h1 = document.querySelector('.hero-title');
  if (h1 && !h1.querySelector('.word')) splitHeroTitle();
  initSectionTitleReveal();
  initMarquee();
  if (!isCoarse && !reduceMotion) initMagnetic();
  if (!isCoarse && !reduceMotion) initTilt();
  initCounters();
}

/* ─────────────── Page veil intro ─────────────── */
function initPageVeil() {
  const veil = document.querySelector('[data-page-veil]');
  if (!veil) return;
  const countEl = veil.querySelector('[data-page-veil-count]');
  if (reduceMotion) {
    veil.classList.add('is-gone');
    return;
  }
  let n = 0;
  if (countEl) {
    const step = () => {
      n = Math.min(100, n + Math.floor(Math.random() * 18) + 3);
      countEl.textContent = String(n).padStart(2, '0');
      if (n < 100) setTimeout(step, 60 + Math.random() * 80);
      else setTimeout(() => veil.classList.add('is-gone'), 320);
    };
    step();
  } else {
    setTimeout(() => veil.classList.add('is-gone'), 800);
  }
}

/* ─────────────── Scroll progress ─────────────── */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;
  let ticking = false;
  const tick = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const r = max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max));
    bar.style.setProperty('--scroll', r.toFixed(4));
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }, { passive: true });
  tick();
}

/* ─────────────── Header shrink ─────────────── */
function initHeaderShrink() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  let last = window.scrollY;
  let accumulated = 0;
  let ticking = false;

  const tick = () => {
    const y = window.scrollY;
    const delta = y - last;

    if (y <= 40) {
      header.classList.remove('is-shrunk');
      accumulated = 0;
    } else if (Math.sign(delta) !== Math.sign(accumulated)) {
      accumulated = delta;
    } else {
      accumulated += delta;
    }

    if (accumulated > 22) {
      header.classList.add('is-shrunk');
      accumulated = 0;
    } else if (accumulated < -10) {
      header.classList.remove('is-shrunk');
      accumulated = 0;
    }

    last = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(tick);
      ticking = true;
    }
  }, { passive: true });
  tick();
}

/* ─────────────── Hero word reveal ─────────────── */
export function splitHeroTitle() {
  const h1 = document.querySelector('.hero-title');
  if (!h1) return;
  // Walk text nodes inside h1 and wrap each word in <span class="word"><span>w</span></span>
  // Preserve element nodes (like <span class="hl">) by recursing into them.
  let wordIdx = 0;
  const fragment = document.createDocumentFragment();

  const processNode = (node, into) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = node.textContent.split(/(\s+)/);
      parts.forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          const sp = document.createElement('span');
          sp.className = 'word word--space';
          sp.setAttribute('aria-hidden', 'true');
          into.appendChild(sp);
          into.appendChild(document.createTextNode(' '));
        } else {
          const w = document.createElement('span');
          w.className = 'word';
          const inner = document.createElement('span');
          inner.textContent = part;
          inner.style.setProperty('--word-delay', `${100 + wordIdx * 70}ms`);
          w.appendChild(inner);
          into.appendChild(w);
          wordIdx++;
        }
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // clone element shell, recurse into its children
      const clone = node.cloneNode(false);
      Array.from(node.childNodes).forEach(child => processNode(child, clone));
      into.appendChild(clone);
    }
  };

  Array.from(h1.childNodes).forEach(child => processNode(child, fragment));

  h1.innerHTML = '';
  h1.appendChild(fragment);

  if (reduceMotion) {
    h1.classList.add('is-revealed');
  } else {
    requestAnimationFrame(() => h1.classList.add('is-revealed'));
  }
}

function initHeroReveal() {
  splitHeroTitle();
  // re-split on language change so new translations animate
  document.addEventListener('ewebit:lang-changed', () => {
    const h1 = document.querySelector('.hero-title');
    if (!h1) return;
    h1.classList.remove('is-revealed');
    splitHeroTitle();
  });
}

/* ─────────────── Section title clip-path reveal ─────────────── */
function initSectionTitleReveal() {
  const targets = document.querySelectorAll('.section-title, .hero-bottom__lead, .hero-spec, .manifest-cards, .pricing-stage, .process-step, .faq-list details, .contact-form, .contact-direct');
  targets.forEach(el => {
    if (el.matches('.section-title')) el.classList.add('reveal');
    else if (!el.matches('.process-step') && !el.matches('details')) el.classList.add('reveal');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

  targets.forEach(el => io.observe(el));
}

/* ─────────────── Marquee — build items, duplicate for seamless loop ─────────────── */
const MARQUEE_CANTONS = [
  "Zürich", "Bern", "Luzern", "Uri", "Schwyz", "Obwalden", "Nidwalden",
  "Glarus", "Zug", "Freiburg", "Solothurn", "Basel-Stadt", "Basel-Landschaft",
  "Schaffhausen", "Appenzell A. Rh.", "Appenzell I. Rh.", "St. Gallen",
  "Graubünden", "Aargau", "Thurgau", "Tessin", "Waadt", "Wallis",
  "Neuenburg", "Genf", "Jura",
];

const MARQUEE_TERMS = [
  "Webdesign", "IT-Support", "Microsoft 365", "Hosting", "Wartung", "SEO",
  "Backup", "Cybersecurity", "Cloud", "Managed IT", "Endpoint-Schutz",
  "Performance", "Mobile-First", "Responsive", "Accessibility", "Lighthouse",
  "Care-Plan", "SLA", "Standortbestimmung", "M365 Admin", "Patch Management",
  "Conversion", "Analytics", "Landing Page", "Onepager", "Branding",
  "Typografie", "Microcopy", "Storytelling", "HTML", "CSS", "JavaScript",
  "JAMstack", "Headless CMS", "Core Web Vitals", "WCAG", "DSGVO",
  "DSG-konform", "FADP", "Handcoded", "Swiss Made", "Made in CH",
  "Visual Identity", "Prototyping", "Wireframing", "A/B Testing",
  "Static Sites", "Edge Hosting", "IT-Sprechstunde",
];

function buildMarqueeItems() {
  // Interleave cantons + terms so cities and jargon alternate
  const items = [];
  const max = Math.max(MARQUEE_CANTONS.length, MARQUEE_TERMS.length);
  for (let i = 0; i < max; i++) {
    if (MARQUEE_CANTONS[i]) items.push(MARQUEE_CANTONS[i]);
    if (MARQUEE_TERMS[i])   items.push(MARQUEE_TERMS[i]);
  }
  return items;
}

function initMarquee() {
  const track = document.querySelector("[data-marquee-track]");
  if (!track || track.children.length > 0) return;

  const items = buildMarqueeItems();

  const makeSet = () => {
    const frag = document.createDocumentFragment();
    items.forEach((text) => {
      const item = document.createElement("span");
      item.className = "marquee__item";
      item.textContent = text;
      frag.appendChild(item);

      const sep = document.createElement("span");
      sep.className = "marquee__sep";
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = "/";
      frag.appendChild(sep);
    });
    return frag;
  };

  // Duplicate the set for seamless infinite loop (translateX -50% lands on copy boundary)
  track.appendChild(makeSet());
  track.appendChild(makeSet());
}

/* ─────────────── Custom cursor ─────────────── */
function initCursor() {
  const cursor = document.querySelector('[data-cursor]');
  if (!cursor) return;
  const dot = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');
  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let rx = x, ry = y;
  let active = false;

  const onMove = (e) => {
    x = e.clientX; y = e.clientY;
    if (!active) {
      cursor.classList.add('is-on');
      active = true;
    }
    dot.style.setProperty('--cursor-x', `${x}px`);
    dot.style.setProperty('--cursor-y', `${y}px`);
  };

  const tick = () => {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.setProperty('--ring-x', `${rx}px`);
    ring.style.setProperty('--ring-y', `${ry}px`);
    requestAnimationFrame(tick);
  };
  tick();

  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseleave', () => cursor.classList.remove('is-on'));

  // hover states on interactive elements
  const hoverSel = 'a, button, [role="button"], summary, input, textarea, select, [data-magnetic]';
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSel)) cursor.classList.add('is-hover');
  });
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSel)) cursor.classList.remove('is-hover');
  });
}

/* ─────────────── Magnetic CTA ─────────────── */
function initMagnetic() {
  const els = document.querySelectorAll('[data-magnetic]');
  els.forEach(el => {
    const strength = parseFloat(el.dataset.magnetic || '0.25');
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.setProperty('--mag-x', `${dx}px`);
      el.style.setProperty('--mag-y', `${dy}px`);
    });
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--mag-x', '0px');
      el.style.setProperty('--mag-y', '0px');
    });
  });
}

/* ─────────────── 3D Tilt on cards ─────────────── */
function initTilt() {
  const cards = document.querySelectorAll('.card--manifest, .card--pricing');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 6; // degrees
      const ry = (px - 0.5) * 8;
      card.style.setProperty('--tilt-x', `${rx}deg`);
      card.style.setProperty('--tilt-y', `${ry}deg`);
      // also drive the radial gradient glow
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

/* ─────────────── Counter-up ─────────────── */
function initCounters() {
  const els = document.querySelectorAll('[data-counter]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-counter'), 10);
      if (Number.isNaN(target) || reduceMotion) {
        el.textContent = String(target);
        io.unobserve(el);
        return;
      }
      const start = performance.now();
      const duration = 1400;
      const from = Math.max(0, target - 60);
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        const v = Math.round(from + (target - from) * eased);
        el.textContent = String(v);
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.3 });
  els.forEach(el => io.observe(el));
}
