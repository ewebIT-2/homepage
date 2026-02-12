import { initFaq } from "./faq.js";
import { initScrollReveal } from "./reveal.js";
import { initMobileNav } from "./nav.js";
import { initProcessAnimation } from "./process-animation.js";

const translations = {
  de: {
    meta: {
      title: "EWEB IT | Webdesign Studio Zürich - Professionelle Websites für Schweizer KMU",
      description:
        "Webdesign Studio Zürich - günstige, professionelle Websites für KMU in der Schweiz. Handcoded, SEO-stark, mit Hosting & Wartung inklusive.",
      keywords:
        "Webdesign Studio Zürich, Günstige Websites Schweiz, Webdesign Agentur Zürich, Website erstellen lassen, KMU Webseite",
    },
    nav: {
      skip: "Zum Inhalt springen",
      aria: "Hauptnavigation",
      toggle: "Menü",
      why: "Warum wir",
      packages: "Pakete",
      process: "Ablauf",
      faq: "FAQ",
      contact: "Kontakt",
    },
    lang: {
      aria: "Sprachumschaltung",
      de: "Deutsch",
      en: "Englisch",
    },
    theme: {
      toggle: "Theme wechseln",
      light: "Light Mode einschalten",
      dark: "Dark Mode einschalten",
    },
    hero: {
      eyebrow: "Webdesign Agentur Zürich",
      title:
        "Mehr Kunden gewinnen mit einer <highlight>professionellen Schweizer Website</highlight>",
      lead:
        "Ihre neue Website in nur 4 Wochen – inklusive Hosting, Wartung und persönlichem Support. Keine Technik-Sorgen, nur Ergebnisse.",
      cta: "Projekt starten",
    },
    why: {
      eyebrow: "Warum eweb IT",
      title: "Machen Sie sich nie wieder Sorgen um Ihre Website",
      copy:
        "Wir bauen leistungsstarke Websites für Schweizer KMU, inkl. Hosting, Wartung und persönlichem Support. Handcoded für Performance, klar strukturiert für mehr Anfragen.",
      cards: {
        swiss: {
          title: "100% Schweiz",
          text: "Strategie, Entwicklung und Hosting in der Schweiz. DSG-konform und mit kurzen Wegen.",
        },
        maintenance: {
          title: "Full-Service Wartung & Hosting",
          text: "Updates, Backups, Monitoring und Support inklusive. Sie kümmern sich ums Business.",
        },
        response: {
          title: "Schnelle Reaktion",
          text: "Kurze Antwortzeiten und direkte Umsetzung. Keine Tickets, keine Warteschleifen.",
        },
        performance: {
          title: "Performance & Sichtbarkeit",
          text: "Schnelle Ladezeiten, sauberes SEO und klare Inhalte für bessere Rankings.",
        },
        design: {
          title: "Conversion-ready Design",
          text: "Mobile-first, klar strukturiert und auf Anfragen optimiert.",
        },
        pricing: {
          title: "Transparente Preise",
          text: "Klare Pakete, definierte Leistungen und keine Überraschungen.",
        },
      },
      footer: "Vertrauen Sie auf <highlight>Schweizer Handarbeit</highlight>.",
    },
    pricing: {
      title: "Pakete & Preise",
      switch: "Preismodell wählen",
      monthly: "Monatlich",
      lump: "Einmalzahlung",
      contextMonthly: "Flexible monatliche Betreuung inklusive Hosting und Wartung.",
      contextLump: "Einmalige Projektgebühr für Design und Entwicklung.",
      badge: "Beliebt",
      business: {
        name: "Business",
        priceMonthly: "ab CHF ___/Mt.",
        priceLump: "ab CHF ___",
        item1: "Mehrere Unterseiten",
        item2: "Individuelles Layout",
        item3: "Content-Integration",
        item4: "Hosting & Wartung inkl.",
        item5: "Hosting separat",
      },
      onepager: {
        name: "Onepager",
        priceMonthly: "ab CHF ___/Mt.",
        priceLump: "ab CHF ___",
        item1: "1 Seite, klare Struktur",
        item2: "Kontakt & CTA-Text",
        item3: "Basis-SEO & Performance",
        item4: "Hosting & Wartung inkl.",
        item5: "Hosting separat",
      },
      custom: {
        name: "Individuell",
        priceMonthly: "nach Absprache",
        priceLump: "nach Absprache",
        item1: "Komplexe Anforderungen",
        item2: "Integrationen & Beratung",
        item3: "Langfristige Betreuung",
      },
      disclaimer:
        "Hinweis: Das passende Paket wird nach einem gemeinsamen Beratungsgespräch individuell auf Ihre Bedürfnisse abgestimmt.",
      addons: "Add-ons: Zusätzliche Seiten, Content-Erstellung, Bildbearbeitung.",
      quote: "Für ein Angebot schreiben Sie uns",
    },
    process: {
      badge: "Schnelle Umsetzung",
      title: "Webseite in 4 Wochen",
      lead: "Ein klarer 4‑Wochen‑Plan – von Konzept bis Go‑Live.",
      cta: "Kostenlosen Check buchen",
      note: "30 Minuten. Keine Verpflichtung. Keine Kosten.",
      week: "Woche",
      step1: {
        title: "Kickoff & Strategie",
        text: "Ziele, Zielgruppe, Seitenstruktur und Inhalte klären. Zugriff auf Logo, Bilder, Texte.",
      },
      step2: {
        title: "Design & Inhalte",
        text: "Wireframes, Designrichtung, erste Entwürfe. Feedbackrunde und Anpassungen.",
      },
      step3: {
        title: "Umsetzung & Technik",
        text: "Seitenaufbau, Mobile-Optimierung, Basis‑SEO, Formulare & Tracking.",
      },
      step4: {
        title: "Feinschliff & Go‑Live",
        text: "Tests, Performance‑Feinschliff, letzte Korrekturen, Livegang & Übergabe.",
      },
      footer: "Klare Schritte, <highlight>kurze Wege</highlight>, schnell online.",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      copy:
        "Durchstöbern Sie unsere FAQ für Antworten auf alles, was Sie über unsere Arbeit, unsere Preise, unseren Prozess und wie alles funktioniert wissen möchten.",
      filtersLabel: "FAQ nach Kategorien filtern",
      filters: {
        pricing: "Preise & Zahlung",
        process: "Ablauf",
        ownership: "Besitz & Betrieb",
        support: "Support",
        seo: "SEO & Datenschutz",
      },
      pricing: {
        q1: "Was kostet es und was ist im Preis enthalten?",
        a1: "Sie erhalten klare Pakete inkl. Design, Umsetzung, Hosting, Wartung und Support. Extras (z. B. zusätzliche Seiten oder Content) sind transparent ausgewiesen.",
        q2: "Welche Zahlungsmodelle bieten Sie an?",
        a2: "Wir bieten monatliche Betreuungspakete oder eine einmalige Projektgebühr. Die Details stimmen wir transparent im Angebot ab.",
        q3: "Welche laufenden Kosten kommen nach dem Launch dazu?",
        a3: "Bei monatlichen Paketen ist Hosting & Wartung enthalten. Bei Einmalzahlung können Hosting und Support separat gebucht werden.",
      },
      process: {
        q1: "Wie lange dauert die Umsetzung und was brauchen Sie von uns?",
        a1: "Typisch 1 bis 4 Wochen. Wir brauchen Logo, Texte, Bilder und Zugang zur Domain. Fehlt etwas, unterstützen wir bei der Erstellung.",
        q2: "Wie viele Korrekturrunden sind enthalten?",
        a2: "Üblicherweise sind zwei Feedbackrunden enthalten. Weitere Anpassungen sind möglich und werden transparent abgestimmt.",
        q3: "Wer schreibt die Texte und liefert Bilder?",
        a3: "Sie können Inhalte liefern oder wir übernehmen Text, Fotos oder Bildauswahl. Wir beraten, was für Ihre Branche funktioniert.",
      },
      ownership: {
        q1: "Gehört die Website nach dem Launch uns?",
        a1: "Ja. Sie behalten volle Kontrolle über Domain, Inhalte und Dateien. Wir stellen alles so auf, dass Sie jederzeit wechseln oder selbst weiterführen können.",
        q2: "Können wir die Website später selbst pflegen?",
        a2: "Ja. Auf Wunsch erhalten Sie ein einfaches CMS oder eine Einweisung, damit Sie Inhalte eigenständig aktualisieren können.",
        q3: "Was passiert, wenn wir die Agentur wechseln?",
        a3: "Kein Problem. Sie erhalten alle Zugangsdaten und Dateien, und wir unterstützen auf Wunsch bei der Übergabe.",
      },
      support: {
        q1: "Wie laufen Änderungen und Support nach dem Go-live?",
        a1: "Kleine Anpassungen erledigen wir schnell per Mail. Laufende Betreuung gibt es als Paket oder auf Abruf.",
        q2: "Was passiert bei technischen Problemen oder Ausfällen?",
        a2: "Wir überwachen die Verfügbarkeit und reagieren bei Störungen schnell. Auf Wunsch bieten wir Service-Level mit festen Reaktionszeiten.",
        q3: "Wie schnell können Sie kleine Änderungen umsetzen?",
        a3: "Kleine Updates erledigen wir meist innerhalb weniger Tage. Dringende Anpassungen können priorisiert werden.",
      },
      seo: {
        q1: "Wie sieht es mit SEO, Tracking und Datenschutz aus?",
        a1: "Basis-SEO ist inklusive. Tracking richten wir DSG/DSGVO-konform ein und beraten zu Cookie-Hinweisen.",
        q2: "Unterstützen Sie Google Business Profile und lokale Listings?",
        a2: "Ja. Wir helfen bei Einrichtung oder Optimierung Ihres Google-Profils und prüfen relevante lokale Verzeichnisse.",
        q3: "Wie messen wir den Erfolg der Website?",
        a3: "Wir definieren gemeinsam Ziele wie Anfragen, Anrufe oder Buchungen und richten datenschutzkonformes Tracking ein.",
      },
      footer: "Kurz und <highlight>transparent</highlight> beantwortet.",
    },
    contact: {
      title: "Kontakt",
      footer: "Wir freuen uns auf <highlight>Ihre</highlight> Anfrage.",
    },
    footer: {
      aboutTitle: "Über uns",
      about:
        "Schweizer Webdesign-Studio für schnelle, klare und wartbare Websites für KMU. Standort: Schweiz.",
      quickTitle: "Quick Links",
      legalTitle: "Rechtliches",
      socialTitle: "Social",
      linkedin: "LinkedIn",
      copy: "&copy; <year></year> EWEB IT. Schweizer Webdesign & Entwicklung.",
      legalImprint: "Impressum",
      legalPrivacy: "Datenschutzerklärung",
      legalAgb: "AGB",
    },
  },
  en: {
    meta: {
      title: "EWEB IT | Web Design Agency Zurich - Professional Websites for Swiss SMEs",
      description:
        "Web design studio Zurich - affordable, professional websites for SMEs in Switzerland. Hand-coded, SEO-ready, with hosting & maintenance included.",
      keywords:
        "Web design agency Zurich, cheap websites Switzerland, professional web design, Swiss SME website, website design Zurich",
    },
    nav: {
      skip: "Skip to content",
      aria: "Primary navigation",
      toggle: "Open menu",
      why: "Why Us",
      packages: "Packages",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    lang: {
      aria: "Language switch",
      de: "German",
      en: "English",
    },
    theme: {
      toggle: "Toggle theme",
      light: "Enable light mode",
      dark: "Enable dark mode",
    },
    hero: {
      eyebrow: "Web Design Agency Zurich",
      title:
        "Get more customers with a <highlight>professional Swiss website</highlight>",
      lead:
        "Your new website in just 4 weeks – including hosting, maintenance, and personal support. No tech worries, just results.",
      cta: "Start your project",
    },
    why: {
      eyebrow: "Why eweb IT",
      title: "Never worry about your website again",
      copy:
        "We build high-performance websites for Swiss SMEs with hosting, maintenance, and personal support included. Hand-coded for speed, structured for more inquiries.",
      cards: {
        swiss: {
          title: "100% Swiss",
          text: "Strategy, development, and hosting in Switzerland. DSG/GDPR-compliant with short communication paths.",
        },
        maintenance: {
          title: "Full-Service Maintenance & Hosting",
          text: "Updates, backups, monitoring, and support included. You focus on the business.",
        },
        response: {
          title: "Fast Response",
          text: "Short response times and direct implementation. No tickets, no queues.",
        },
        performance: {
          title: "Performance & Visibility",
          text: "Fast load times, clean SEO, and clear content for better rankings.",
        },
        design: {
          title: "Conversion-ready design",
          text: "Mobile-first, clearly structured, and optimized for inquiries.",
        },
        pricing: {
          title: "Transparent pricing",
          text: "Clear packages, defined scope, no surprises.",
        },
      },
      footer: "Trust <highlight>Swiss craftsmanship</highlight>.",
    },
    pricing: {
      title: "Packages & Pricing",
      switch: "Choose pricing model",
      monthly: "Monthly",
      lump: "Lump Sum",
      contextMonthly: "Flexible monthly support including hosting and maintenance.",
      contextLump: "One-time project fee for design and development.",
      badge: "Best Value",
      business: {
        name: "Business",
        priceMonthly: "from CHF ___/mo.",
        priceLump: "from CHF ___",
        item1: "Multiple pages",
        item2: "Custom layout",
        item3: "Content integration",
        item4: "Hosting & maintenance incl.",
        item5: "Hosting separate",
      },
      onepager: {
        name: "One-pager",
        priceMonthly: "from CHF ___/mo.",
        priceLump: "from CHF ___",
        item1: "Single page, clear structure",
        item2: "Contact & CTA copy",
        item3: "Basic SEO & performance",
        item4: "Hosting & maintenance incl.",
        item5: "Hosting separate",
      },
      custom: {
        name: "Custom",
        priceMonthly: "in consultation",
        priceLump: "in consultation",
        item1: "Complex requirements",
        item2: "Integrations & consulting",
        item3: "Long-term support",
      },
      disclaimer:
        "Note: The right package is tailored to your needs after a personal consultation.",
      addons: "Add-ons: Additional pages, content creation, image editing.",
      quote: "For a quote",
    },
    process: {
      badge: "Fast delivery",
      title: "Website in 4 weeks",
      lead: "A clear 4-week plan from concept to go-live.",
      cta: "Book a free check",
      note: "30 minutes. No obligation. No cost.",
      week: "Week",
      step1: {
        title: "Kickoff & strategy",
        text: "Align goals, audience, site structure, and content. Collect logo, images, copy.",
      },
      step2: {
        title: "Design & content",
        text: "Wireframes, design direction, first drafts. Feedback round and refinements.",
      },
      step3: {
        title: "Build & setup",
        text: "Page build, mobile optimization, baseline SEO, forms & tracking.",
      },
      step4: {
        title: "Polish & go-live",
        text: "Testing, performance polish, final fixes, launch and handover.",
      },
      footer: "Clear steps, <highlight>short feedback loops</highlight>, fast go-live.",
    },
    faq: {
      title: "Frequently Asked Questions",
      copy:
        "Browse our FAQ for answers to everything you would like to know about what we do, what we charge, our process, and how everything works.",
      filtersLabel: "Filter FAQs by category",
      filters: {
        pricing: "Pricing & Payments",
        process: "Process",
        ownership: "Ownership",
        support: "Support",
        seo: "SEO & Privacy",
      },
      pricing: {
        q1: "What does it cost and what is included?",
        a1: "You get clear packages including design, build, hosting, maintenance, and support. Extras (like additional pages or content) are listed separately.",
        q2: "Which payment models do you offer?",
        a2: "We offer monthly support packages or a one-time project fee. Details are agreed transparently in the proposal.",
        q3: "What ongoing costs are there after launch?",
        a3: "Monthly packages include hosting & maintenance. With lump sum projects, hosting and support can be booked separately.",
      },
      process: {
        q1: "How long does delivery take and what do you need from us?",
        a1: "Typically 1 to 4 weeks. We need your logo, text, images, and domain access. If something is missing, we help create it.",
        q2: "How many revision rounds are included?",
        a2: "Typically two feedback rounds are included. Additional changes are possible and agreed transparently.",
        q3: "Who provides copy and images?",
        a3: "You can supply content or we can handle copy, photography, or image sourcing. We advise what works for your industry.",
      },
      ownership: {
        q1: "Do we own the website after launch?",
        a1: "Yes. You keep full control of the domain, content, and files. We set it up so you can move or self-manage anytime.",
        q2: "Can we maintain the website ourselves later?",
        a2: "Yes. We can provide a simple CMS or a handover session so you can update content independently.",
        q3: "What happens if we change agencies?",
        a3: "No problem. You receive all access and files, and we can support a smooth handover if needed.",
      },
      support: {
        q1: "How do changes and support work after go-live?",
        a1: "Small changes are handled quickly by email. Ongoing care is available via packages or on-demand.",
        q2: "What happens if there are technical issues or downtime?",
        a2: "We monitor availability and respond quickly to issues. If needed, we offer service levels with defined response times.",
        q3: "How fast can you handle small updates?",
        a3: "Small updates are usually done within a few days. Urgent changes can be prioritized.",
      },
      seo: {
        q1: "What about SEO, tracking, and privacy?",
        a1: "Basic SEO is included. We set up tracking compliant with DSG/GDPR and advise on cookie notices.",
        q2: "Do you help with Google Business Profile and local listings?",
        a2: "Yes. We can set up or optimize your Google profile and review relevant local directories.",
        q3: "How do we measure website success?",
        a3: "We define goals such as inquiries, calls, or bookings and set up privacy-compliant tracking.",
      },
      footer: "Short and <highlight>transparent</highlight> answers.",
    },
    contact: {
      title: "Contact",
      footer: "We look forward to <highlight>your</highlight> inquiry.",
    },
    footer: {
      aboutTitle: "About",
      about:
        "Swiss web design studio for fast, clear, and maintainable websites for SMEs. Location: Switzerland.",
      quickTitle: "Quick Links",
      legalTitle: "Legal",
      socialTitle: "Social",
      linkedin: "LinkedIn",
      copy: "&copy; <year></year> EWEB IT. Swiss web design & development.",
      legalImprint: "Imprint",
      legalPrivacy: "Privacy policy",
      legalAgb: "Terms and conditions",
    },
  },
};

const buttons = document.querySelectorAll("[data-lang-toggle]");
const langSwitch = document.querySelector(".lang-switch");
const langIndicator = document.querySelector(".lang-indicator");
const themeToggle = document.querySelector("[data-theme-toggle]");
const favicon = document.querySelector("[data-favicon]");
const storedTheme = localStorage.getItem("ewebit-theme");
const storedLang = localStorage.getItem("ewebit-lang");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function resolveKey(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function formatMarkup(value) {
  return String(value)
    .replace(/<highlight>/g, '<span class="highlight">')
    .replace(/<\/highlight>/g, "</span>")
    .replace(/<year>/g, '<span class="footer-year" data-current-year>')
    .replace(/<\/year>/g, "</span>");
}

function applyTranslations(lang) {
  const locale = translations[lang] || translations.de;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = resolveKey(locale, key);
    if (value === undefined) {
      return;
    }
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = formatMarkup(value);
    } else {
      el.textContent = String(value);
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mappings = el.dataset.i18nAttr
      .split(";")
      .map((item) => item.trim())
      .filter(Boolean);

    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(":");
      if (!attr || !key) {
        return;
      }
      const value = resolveKey(locale, key.trim());
      if (value === undefined) {
        return;
      }
      el.setAttribute(attr.trim(), String(value));
    });
  });

  updateThemeLabel(lang);
  updateCurrentYear();
}

function updateCurrentYear() {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-current-year]").forEach((el) => {
    el.textContent = String(year);
  });
}

function updatePillIndicator(container, indicator, activeButton) {
  if (!container || !indicator || !activeButton) {
    return;
  }

  const containerRect = container.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  const offsetX = buttonRect.left - containerRect.left;
  const offsetY = buttonRect.top - containerRect.top;

  container.style.setProperty("--indicator-x", `${offsetX}px`);
  container.style.setProperty("--indicator-y", `${offsetY}px`);
  container.style.setProperty("--indicator-w", `${buttonRect.width}px`);
  container.style.setProperty("--indicator-h", `${buttonRect.height}px`);
}

function updateLangIndicator(activeButton) {
  updatePillIndicator(langSwitch, langIndicator, activeButton);
}

function setLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("ewebit-lang", lang);
  applyTranslations(lang);

  buttons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-toggle") === lang;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (isActive) {
      updateLangIndicator(button);
    }
  });
}

function updateThemeLabel(lang = document.body.getAttribute("data-lang") || "de") {
  if (!themeToggle) {
    return;
  }
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const key = isDark ? "theme.light" : "theme.dark";
  const label = resolveKey(translations[lang] || translations.de, key);
  if (label) {
    themeToggle.setAttribute("aria-label", label);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang-toggle");
    setLanguage(lang);
  });
});

if (storedLang) {
  setLanguage(storedLang);
} else {
  const initialLang = document.body.getAttribute("data-lang") || "de";
  setLanguage(initialLang);
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    updateThemeLabel();
  }
  if (favicon) {
    favicon.setAttribute(
      "href",
      theme === "dark" ? "assets/images/dark.svg" : "assets/images/light.svg"
    );
  }
  localStorage.setItem("ewebit-theme", theme);
}

function triggerThemeAnimation() {
  if (!themeToggle) {
    return;
  }
  themeToggle.classList.remove("is-animating");
  void themeToggle.offsetWidth;
  themeToggle.classList.add("is-animating");
}

if (storedTheme) {
  setTheme(storedTheme);
} else {
  setTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    triggerThemeAnimation();
  });
  themeToggle.addEventListener("animationend", (event) => {
    if (event.animationName === "accentPulse") {
      themeToggle.classList.remove("is-animating");
    }
  });
}

const pricingBtns = document.querySelectorAll("[data-pricing-toggle]");
const monthlyGrid = document.getElementById("pricing-monthly");
const lumpSumGrid = document.getElementById("pricing-lump-sum");

function updatePricingIndicator(activeButton) {
  const pricingSwitch = activeButton.closest(".pricing-switch");
  const pricingIndicator = pricingSwitch?.querySelector(".pricing-indicator");
  updatePillIndicator(pricingSwitch, pricingIndicator, activeButton);
}

function setPricingModel(type) {
  const isMonthly = type === "monthly";

  pricingBtns.forEach((btn) => {
    const isActive = btn.getAttribute("data-pricing-toggle") === type;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (isActive) {
      updatePricingIndicator(btn);
    }
  });

  if (monthlyGrid && lumpSumGrid) {
    monthlyGrid.classList.toggle("is-hidden", !isMonthly);
    lumpSumGrid.classList.toggle("is-hidden", isMonthly);
  }
}

pricingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-pricing-toggle");
    setPricingModel(type);
  });
});

if (pricingBtns.length) {
  setPricingModel("monthly");
}

function initCtaWaitingAnimation() {
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (!isCoarsePointer) return;

  const ctas = document.querySelectorAll(".cta-primary, .process-cta");
  if (!ctas.length) return;

  const delayMs = 240;

  ctas.forEach((cta) => {
    cta.addEventListener(
      "click",
      (event) => {
        if (event.defaultPrevented) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        const href = cta.getAttribute("href");
        if (!href || href.startsWith("javascript:")) return;
        if (cta.getAttribute("target") === "_blank") return;

        event.preventDefault();
        cta.classList.add("is-active");

        window.setTimeout(() => {
          cta.classList.remove("is-active");
          window.location.href = href;
        }, delayMs);
      },
      { passive: false }
    );
  });
}

window.addEventListener("resize", () => {
  const activePricingBtn = document.querySelector(
    '.pricing-btn[aria-pressed="true"]'
  );
  if (activePricingBtn) {
    updatePricingIndicator(activePricingBtn);
  }
  const activeLangBtn = document.querySelector('.lang-btn[aria-pressed="true"]');
  updateLangIndicator(activeLangBtn);
});

initMobileNav();
initFaq({ prefersReducedMotion });
initScrollReveal({ prefersReducedMotion });
initProcessAnimation({ prefersReducedMotion });
initCtaWaitingAnimation();
