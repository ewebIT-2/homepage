import { initFaq } from "./faq.js";
import { initScrollReveal } from "./reveal.js";
import { initMobileNav } from "./nav.js";
import { initProcessAnimation } from "./process-animation.js";
import {
  initThemeToggleEffects,
  playClick,
  playRadialReveal,
} from "./theme-toggle.js";
import { initAnimations } from "./animations.js";

const translations = {
  de: {
    meta: {
      title: "EWEB IT | Lokaler IT-Partner & Webdesign Studio Zürich für Schweizer KMU",
      description:
        "Lokaler IT-Partner für Schweizer KMU: Webdesign, Hosting, Microsoft 365, IT-Support, Backup und Cybersecurity — alles aus einer Hand, in der Schweiz.",
      keywords:
        "IT-Partner KMU, Webdesign Studio Zürich, IT-Support Schweiz, Microsoft 365 KMU, Hosting Schweiz, Managed IT Schweiz, Cybersecurity KMU, Webdesign Schweiz",
    },
    nav: {
      skip: "Zum Inhalt springen",
      aria: "Hauptnavigation",
      toggle: "Menü",
      why: "Warum wir",
      services: "Leistungen",
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
      eyebrow: "Webdesign · IT-Partner · Zürich",
      title:
        "Mehr Kunden mit einer <highlight>professionellen Schweizer Website</highlight>",
      lead:
        "Ihre neue Website in nur 4 Wochen – inklusive Hosting, Wartung und persönlichem Support. Keine Technik-Sorgen, nur Ergebnisse.",
      tagline:
        "Vom Webdesign zum IT-Partner — Hosting, Support, Microsoft 365 und mehr. Alles aus einer Hand, lokal in der Schweiz.",
      cta: "Projekt starten",
      available: "Aufträge für 2026 buchbar",
      spec: {
        studioLabel: "Studio",
        studio: "Zürich · Schweiz",
        deliveryLabel: "Lieferung",
        delivery: "In <em>4 Wochen</em>",
        scopeLabel: "Leistung",
        scope: "Design · Code · Hosting",
        estLabel: "Gegründet",
      },
    },
    ticker: {
      s1: "Zürich",
      s2: "Bern",
      s3: "Basel",
      s4: "Luzern",
      s5: "Winterthur",
      s6: "Webdesign",
      s7: "Hosting",
      s8: "Wartung",
      s9: "SEO",
      s10: "Handcoded",
    },
    sectionTag: {
      manifest: "Manifest",
      services: "Leistungen",
      pricing: "Pakete",
      care: "Care-Pläne",
      process: "Ablauf",
      work: "Referenzen",
      founder: "Gründer",
      faq: "FAQ",
      contact: "Kontakt",
    },
    trust: {
      eyebrow: "Vertrauenssignale",
      items: {
        swiss: { label: "Standort", value: "100% Schweiz" },
        compliance: { label: "Datenschutz", value: "DSG-konform" },
        response: { label: "Reaktion", value: "< 2h Geschäftszeit" },
        contact: { label: "Erreichbar", value: "Persönlich · direkt" },
      },
    },
    services: {
      eyebrow: "Was wir tun",
      title: "Drei Säulen — <highlight>eine</highlight> Beziehung",
      copy:
        "Vom ersten Pixel bis zur laufenden Betreuung. Wir wachsen mit Ihren Anforderungen und holen Schweizer Spezialisten dazu, wenn ein Projekt es verlangt — transparent, in Ihrem Namen.",
      pillars: {
        web: {
          tag: "Direkt von uns",
          title: "Web & Online-Präsenz",
          item1: "Handcoded Websites & Landingpages",
          item2: "Hosting in der Schweiz",
          item3: "Basis- & Local-SEO",
          item4: "Domain, E-Mail, Performance",
        },
        care: {
          tag: "Direkt von uns",
          title: "Managed IT-Care",
          item1: "Microsoft 365 / Google Workspace",
          item2: "IT-Support für Mitarbeitende",
          item3: "Backup & Endpoint-Schutz",
          item4: "Monitoring & Patch-Management",
        },
        advisory: {
          tag: "Mit Schweizer Partnern",
          title: "IT-Beratung & Projekte",
          item1: "Cloud-Migration · Azure / M365",
          item2: "Cybersecurity-Assessment",
          item3: "Individuelle Software & Integrationen",
          item4: "NIS2- & DSG-Readiness",
        },
      },
      footer: "Eine Hauptansprechperson — <highlight>für alles</highlight>.",
    },
    care: {
      eyebrow: "Laufende Betreuung",
      title: "Care-<highlight>Pläne</highlight>",
      copy:
        "Ihre IT verdient mehr als einen Anruf im Notfall. Monatliche Betreuung mit klaren Leistungen, Reaktionszeiten und transparenter Abrechnung.",
      badge: "Beliebt",
      currency: "CHF",
      period: "/Monat",
      annualNote: "10% Rabatt bei jährlicher Abrechnung. SLA werden im Vertrag schriftlich festgehalten.",
      basic: {
        name: "Care Basic",
        price: "ab 49",
        for: "Für kleine Webauftritte",
        item1: "Hosting & Website-Wartung",
        item2: "Monatlicher Status-Check",
        item3: "E-Mail-Support",
        item4: "DSG-konformer Backup",
      },
      plus: {
        name: "Care Plus",
        price: "ab 149",
        for: "Für Teams bis 5 Personen",
        item1: "Alles aus Basic",
        item2: "Microsoft 365 Verwaltung",
        item3: "Backup-Monitoring",
        item4: "2h Support pro Monat",
        item5: "Telefon-Hotline",
      },
      pro: {
        name: "Care Pro",
        price: "ab 349",
        for: "Für Teams bis 10 Personen",
        item1: "Alles aus Plus",
        item2: "Endpoint-Schutz",
        item3: "On- & Offboarding",
        item4: "6h Support pro Monat",
        item5: "Quartals-IT-Review",
      },
      custom: {
        name: "Care Custom",
        price: "ab 800",
        for: "Ab 10 Arbeitsplätzen",
        item1: "Massgeschneiderter Retainer",
        item2: "Definierte SLA",
        item3: "Dediziertes Onboarding",
        item4: "Strategie-Beratung",
      },
      footer: "Klare Leistungen, <highlight>schriftliche SLA</highlight>, keine Überraschungen.",
    },
    work: {
      eyebrow: "Worte unserer Kunden",
      title: "Was Schweizer KMU <highlight>sagen</highlight>",
      copy:
        "Wir wachsen mit Praxen, Kanzleien, Treuhand- und Handwerksbetrieben. Hier ein Auszug aus realer Zusammenarbeit.",
      quoteEyebrow: "Stimme",
      quote:
        "Endlich ein IT-Partner, der zuhört und in unserer Sprache spricht. Website, Hosting und unsere Microsoft-365-Verwaltung an einem Ort — Antworten innerhalb von Stunden, nicht Wochen.",
      attribution: "Praxisinhaberin · Zahnarztpraxis Zürich",
      attributionNote: "Name auf Wunsch anonymisiert",
      caseEyebrow: "Mini-Case",
      caseIndustry: "Zahnarztpraxis · Zürich",
      caseChallengeLabel: "Ausgangslage",
      caseChallenge: "Veraltete Website, keine Online-Terminanfrage, IT-Support per Zufallsprinzip.",
      caseApproachLabel: "Vorgehen",
      caseApproach: "Neue Website in 4 Wochen, Microsoft-365-Aufräumarbeit, Care-Plus-Retainer mit klarer SLA.",
      caseOutcomeLabel: "Ergebnis",
      caseOutcome: "+40% Online-Terminanfragen, definierte IT-Reaktionszeit, ein Ansprechpartner für alles.",
      placeholder: "Platzhalter — wird durch reale Referenz mit Einverständnis ersetzt.",
    },
    founder: {
      eyebrow: "Wer ist eweb IT?",
      title: "Ein Gesicht. <highlight>Eine</highlight> Verantwortung.",
      para1:
        "eweb IT wurde 2026 in Zürich gegründet — aus Frust über das, was Schweizer KMU im IT-Bereich oft erleben: lange Wartezeiten, intransparente Rechnungen, unverständliche Sprache. Wir machen es anders. Direkt, lokal, in Ihrer Sprache.",
      para2:
        "Sie sprechen immer mit derselben Person. Keine Tickets, keine Eskalationsstufen, keine ausgelagerten Hotlines. Wenn ein Spezialist gebraucht wird, holen wir ihn — transparent und in Ihrem Namen.",
      portraitAlt: "Porträt des Gründers von eweb IT",
      name: "Vorname Nachname",
      role: "Gründer & Inhaber · Zürich",
      tagline: "Persönlich. Lokal. Verantwortlich.",
      stats: {
        location: { label: "Studio", value: "Zürich, CH" },
        founded: { label: "Gegründet", value: "2026" },
        languages: { label: "Sprachen", value: "DE · EN" },
        focus: { label: "Fokus", value: "Schweizer KMU" },
      },
    },
    why: {
      eyebrow: "Warum eweb IT",
      title: "Machen Sie sich nie wieder Sorgen um Ihre <highlight>Website</highlight>",
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
      eyebrow: "Investition",
      title: "Pakete & <highlight>Preise</highlight>",
      switch: "Preismodell wählen",
      monthly: "Monatlich",
      lump: "Einmalzahlung",
      contextMonthly: "Flexible monatliche Betreuung inklusive Hosting und Wartung.",
      contextLump: "Einmalige Projektgebühr für Design und Entwicklung.",
      badge: "Beliebt",
      business: {
        name: "Business",
        priceMonthly: "ab CHF 80/Mt.",
        priceLump: "ab CHF 1120",
        item1: "Mehrere Unterseiten",
        item2: "Individuelles Layout",
        item3: "Content-Integration",
        item4: "Hosting & Wartung inkl.",
        item5: "Hosting separat",
      },
      onepager: {
        name: "Onepager",
        priceMonthly: "ab CHF 27/Mt.",
        priceLump: "ab CHF 420",
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
      eyebrow: "Vom Briefing zum Launch",
      badge: "Schnelle Umsetzung",
      title: "Webseite in <highlight>4 Wochen</highlight>",
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
      eyebrow: "Antworten",
      title: "Häufig gestellte <highlight>Fragen</highlight>",
      copy:
        "Durchstöbern Sie unsere FAQ für Antworten auf alles, was Sie über unsere Arbeit, unsere Preise, unseren Prozess und wie alles funktioniert wissen möchten.",
      filtersLabel: "FAQ nach Kategorien filtern",
      filters: {
        pricing: "Preise & Zahlung",
        process: "Ablauf",
        ownership: "Besitz & Betrieb",
        support: "Support",
        seo: "SEO & Datenschutz",
        it: "IT-Services",
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
      it: {
        q1: "Übernehmen Sie unsere bestehende IT?",
        a1: "Ja. Wir übernehmen schrittweise — beginnend mit einer kostenlosen IT-Standortbestimmung. Sie behalten jederzeit volle Kontrolle über Zugriffe, Daten und Verträge.",
        q2: "Arbeiten Sie mit Microsoft 365 und Google Workspace?",
        a2: "Ja. Wir richten beide Plattformen ein, migrieren bestehende Konten und übernehmen die laufende Verwaltung — Lizenzen, Postfächer, Sicherheit, Onboarding.",
        q3: "Wie schnell reagieren Sie bei einem IT-Notfall?",
        a3: "Bei kritischen Störungen reagieren wir innerhalb von 2 Stunden zu Geschäftszeiten. Konkrete SLA werden im Care-Vertrag schriftlich festgehalten.",
        q4: "Was ist in einem Care-Plan enthalten?",
        a4: "Hosting, Wartung, Microsoft-365-Verwaltung, Backup-Monitoring und Support-Stunden — je nach Tarif. Die vollständige Aufschlüsselung finden Sie im Care-Plan-Abschnitt oben.",
        q5: "Liefern Sie auch Cybersecurity und Cloud-Migration?",
        a5: "Ja — über Partnerschaften mit Schweizer Spezialisten. Wir koordinieren, dokumentieren und bleiben Ihre Hauptansprechperson. Vollständig transparent abgerechnet.",
      },
      footer: "Kurz und <highlight>transparent</highlight> beantwortet.",
    },
    contact: {
      eyebrow: "Anfrage starten",
      title: "Lassen Sie uns <highlight>sprechen</highlight>",
      copy: "Erzählen Sie uns kurz vom Projekt — Ziel, Umfang, Zeitrahmen. Wir antworten innerhalb von 24 Stunden mit ehrlichem Feedback und einem ersten Vorschlag.",
      or: "oder direkt",
      book: {
        eyebrow: "Schnell und unverbindlich",
        title: "Buchen Sie eine 30‑min <highlight>IT‑Standortbestimmung</highlight>",
        copy: "Wir hören uns Ihre Situation an, geben ehrliches Feedback und zeigen, wo der schnellste Hebel liegt. Kostenlos, ohne Verkaufsdruck.",
        cta: "Termin buchen",
        note: "30 Minuten · kostenlos · in DE oder EN",
        alt: "oder schreiben Sie uns",
      },
      form: {
        name: "Name",
        namePlaceholder: "Ihr Name",
        email: "E-Mail",
        emailPlaceholder: "ihre@email.ch",
        subject: "Betreff",
        subjectDefault: "Bitte wählen…",
        subjectProject: "Neues Projekt",
        subjectSupport: "Support",
        subjectGeneral: "Allgemeine Anfrage",
        message: "Nachricht",
        messagePlaceholder: "Wie können wir helfen?",
        send: "Senden",
        success: "Vielen Dank für Ihre Nachricht! Wir melden uns so schnell wie möglich.",
        error: "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.",
      },
      footer: "Wir freuen uns auf <highlight>Ihre</highlight> Anfrage.",
    },
    footer: {
      aboutTitle: "Über uns",
      about:
        "Schweizer Webdesign-Studio für schnelle, klare und wartbare Websites für KMU — und Ihr lokaler IT-Partner für Hosting, Support, Microsoft 365 und mehr. Standort: Schweiz.",
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
      title: "EWEB IT | Local IT Partner & Web Design Studio Zurich for Swiss SMBs",
      description:
        "Local IT partner for Swiss SMBs: web design, hosting, Microsoft 365, IT support, backup, and cybersecurity — all from one source, in Switzerland.",
      keywords:
        "Swiss IT partner, Web design Zurich, IT support Switzerland, Microsoft 365 SMB, hosting Switzerland, managed IT Switzerland, cybersecurity SMB",
    },
    nav: {
      skip: "Skip to content",
      aria: "Primary navigation",
      toggle: "Open menu",
      why: "Why Us",
      services: "Services",
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
      eyebrow: "Web Design · IT Partner · Zurich",
      title:
        "Win more clients with a <highlight>professional Swiss website</highlight>",
      lead:
        "Your new website in just 4 weeks – including hosting, maintenance, and personal support. No tech worries, just results.",
      tagline:
        "Grown from a web design studio into your local IT partner — hosting, support, Microsoft 365 and more. All from one source, in Switzerland.",
      cta: "Start a project",
      available: "Booking projects for 2026",
      spec: {
        studioLabel: "Studio",
        studio: "Zurich · Switzerland",
        deliveryLabel: "Delivery",
        delivery: "In <em>4 weeks</em>",
        scopeLabel: "Scope",
        scope: "Design · Code · Hosting",
        estLabel: "Established",
      },
    },
    ticker: {
      s1: "Zurich",
      s2: "Bern",
      s3: "Basel",
      s4: "Lucerne",
      s5: "Winterthur",
      s6: "Web Design",
      s7: "Hosting",
      s8: "Maintenance",
      s9: "SEO",
      s10: "Hand-coded",
    },
    sectionTag: {
      manifest: "Manifest",
      services: "Services",
      pricing: "Packages",
      care: "Care Plans",
      process: "Process",
      work: "Selected Work",
      founder: "Founder",
      faq: "FAQ",
      contact: "Contact",
    },
    trust: {
      eyebrow: "Trust signals",
      items: {
        swiss: { label: "Location", value: "100% Swiss" },
        compliance: { label: "Privacy", value: "FADP-compliant" },
        response: { label: "Response", value: "< 2h business hours" },
        contact: { label: "Reachable", value: "Direct · personal" },
      },
    },
    services: {
      eyebrow: "What we do",
      title: "Three pillars — <highlight>one</highlight> relationship",
      copy:
        "From the first pixel to ongoing care. We grow with your needs and bring in Swiss specialists when a project requires them — transparently, on your behalf.",
      pillars: {
        web: {
          tag: "Delivered by us",
          title: "Web & Online Presence",
          item1: "Hand-coded websites & landing pages",
          item2: "Hosting in Switzerland",
          item3: "Baseline & local SEO",
          item4: "Domain, email, performance",
        },
        care: {
          tag: "Delivered by us",
          title: "Managed IT Care",
          item1: "Microsoft 365 / Google Workspace",
          item2: "Workforce IT support",
          item3: "Backup & endpoint protection",
          item4: "Monitoring & patch management",
        },
        advisory: {
          tag: "With Swiss partners",
          title: "IT Advisory & Projects",
          item1: "Cloud migration · Azure / M365",
          item2: "Cybersecurity assessment",
          item3: "Custom software & integrations",
          item4: "NIS2 & FADP readiness",
        },
      },
      footer: "One primary contact — <highlight>for everything</highlight>.",
    },
    care: {
      eyebrow: "Ongoing care",
      title: "Care <highlight>Plans</highlight>",
      copy:
        "Your IT deserves more than an emergency call. Monthly care with clear deliverables, response times, and transparent billing.",
      badge: "Most popular",
      currency: "CHF",
      period: "/month",
      annualNote: "10% discount on annual billing. SLAs are committed to in writing in the Care contract.",
      basic: {
        name: "Care Basic",
        price: "from 49",
        for: "For small web presences",
        item1: "Hosting & website maintenance",
        item2: "Monthly status check",
        item3: "Email support",
        item4: "FADP-compliant backup",
      },
      plus: {
        name: "Care Plus",
        price: "from 149",
        for: "For teams up to 5 people",
        item1: "Everything in Basic",
        item2: "Microsoft 365 administration",
        item3: "Backup monitoring",
        item4: "2h support per month",
        item5: "Phone hotline",
      },
      pro: {
        name: "Care Pro",
        price: "from 349",
        for: "For teams up to 10 people",
        item1: "Everything in Plus",
        item2: "Endpoint protection",
        item3: "On- & offboarding",
        item4: "6h support per month",
        item5: "Quarterly IT review",
      },
      custom: {
        name: "Care Custom",
        price: "from 800",
        for: "10+ workstations",
        item1: "Tailored retainer",
        item2: "Defined SLAs",
        item3: "Dedicated onboarding",
        item4: "Strategy consulting",
      },
      footer: "Clear deliverables, <highlight>written SLAs</highlight>, no surprises.",
    },
    work: {
      eyebrow: "From our clients",
      title: "What Swiss SMBs <highlight>say</highlight>",
      copy:
        "We grow alongside dental practices, law firms, fiduciary offices, and trades businesses. Below: an excerpt from real engagements.",
      quoteEyebrow: "Voice",
      quote:
        "Finally an IT partner who listens and speaks our language. Website, hosting, and our Microsoft 365 administration in one place — answers within hours, not weeks.",
      attribution: "Practice Owner · Dental Practice Zurich",
      attributionNote: "Name anonymised on request",
      caseEyebrow: "Mini case",
      caseIndustry: "Dental practice · Zurich",
      caseChallengeLabel: "Starting point",
      caseChallenge: "Outdated website, no online appointment requests, ad-hoc IT support.",
      caseApproachLabel: "Approach",
      caseApproach: "New website in 4 weeks, Microsoft 365 cleanup, Care Plus retainer with clear SLA.",
      caseOutcomeLabel: "Outcome",
      caseOutcome: "+40% online appointment requests, defined IT response time, one contact for everything.",
      placeholder: "Placeholder — will be replaced with a real client reference once consent is given.",
    },
    founder: {
      eyebrow: "Who is eweb IT?",
      title: "One face. <highlight>One</highlight> accountable owner.",
      para1:
        "eweb IT was founded in 2026 in Zurich — out of frustration with what Swiss SMBs often experience in IT: long wait times, opaque invoices, technical jargon. We do it differently. Direct, local, in your language.",
      para2:
        "You always talk to the same person. No tickets, no escalation tiers, no outsourced hotlines. When a specialist is needed, we bring them in — transparently and on your behalf.",
      portraitAlt: "Portrait of the founder of eweb IT",
      name: "First Last",
      role: "Founder & Owner · Zurich",
      tagline: "Personal. Local. Accountable.",
      stats: {
        location: { label: "Studio", value: "Zurich, CH" },
        founded: { label: "Founded", value: "2026" },
        languages: { label: "Languages", value: "DE · EN" },
        focus: { label: "Focus", value: "Swiss SMBs" },
      },
    },
    why: {
      eyebrow: "Why eweb IT",
      title: "Never worry about your <highlight>website</highlight> again",
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
      eyebrow: "Investment",
      title: "Packages & <highlight>Pricing</highlight>",
      switch: "Choose pricing model",
      monthly: "Monthly",
      lump: "Lump Sum",
      contextMonthly: "Flexible monthly support including hosting and maintenance.",
      contextLump: "One-time project fee for design and development.",
      badge: "Best Value",
      business: {
        name: "Business",
        priceMonthly: "from CHF 80/mo.",
        priceLump: "from CHF 1120",
        item1: "Multiple pages",
        item2: "Custom layout",
        item3: "Content integration",
        item4: "Hosting & maintenance incl.",
        item5: "Hosting separate",
      },
      onepager: {
        name: "One-pager",
        priceMonthly: "from CHF 27/mo.",
        priceLump: "from CHF 420",
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
      eyebrow: "From brief to launch",
      badge: "Fast delivery",
      title: "Website in <highlight>4 weeks</highlight>",
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
      eyebrow: "Answers",
      title: "Frequently Asked <highlight>Questions</highlight>",
      copy:
        "Browse our FAQ for answers to everything you would like to know about what we do, what we charge, our process, and how everything works.",
      filtersLabel: "Filter FAQs by category",
      filters: {
        pricing: "Pricing & Payments",
        process: "Process",
        ownership: "Ownership",
        support: "Support",
        seo: "SEO & Privacy",
        it: "IT Services",
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
      it: {
        q1: "Do you take over our existing IT?",
        a1: "Yes. We take over step by step — starting with a free IT health check. You retain full control over access, data, and contracts at all times.",
        q2: "Do you work with Microsoft 365 and Google Workspace?",
        a2: "Yes. We set up either platform, migrate existing accounts, and handle ongoing administration — licences, mailboxes, security, onboarding.",
        q3: "How fast do you respond to an IT emergency?",
        a3: "For critical incidents we respond within 2 business hours. Concrete SLAs are committed to in writing in the Care contract.",
        q4: "What is included in a Care plan?",
        a4: "Hosting, maintenance, Microsoft 365 administration, backup monitoring, and support hours — depending on the tier. See the Care Plans section above for the full breakdown.",
        q5: "Do you also deliver cybersecurity and cloud migration?",
        a5: "Yes — through partnerships with Swiss specialists. We coordinate, document, and remain your primary contact. Billed fully transparently.",
      },
      footer: "Short and <highlight>transparent</highlight> answers.",
    },
    contact: {
      eyebrow: "Start an inquiry",
      title: "Let's <highlight>talk</highlight>",
      copy: "Tell us briefly about the project — goal, scope, timeline. We respond within 24 hours with honest feedback and a first proposal.",
      or: "or directly",
      book: {
        eyebrow: "Quick and no obligation",
        title: "Book a 30‑min <highlight>IT health check</highlight>",
        copy: "We listen to your situation, give honest feedback, and show where the quickest leverage lies. Free, no sales pressure.",
        cta: "Book a slot",
        note: "30 minutes · free · in DE or EN",
        alt: "or send us a message",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        subject: "Subject",
        subjectDefault: "Please select…",
        subjectProject: "New Project",
        subjectSupport: "Support",
        subjectGeneral: "General Inquiry",
        message: "Message",
        messagePlaceholder: "How can we help?",
        send: "Send",
        success: "Thank you for your message! We will get back to you as soon as possible.",
        error: "There was a problem sending your message. Please try again.",
      },
      footer: "We look forward to <highlight>your</highlight> inquiry.",
    },
    footer: {
      aboutTitle: "About",
      about:
        "Swiss web design studio for fast, clear, and maintainable websites for SMEs — and your local IT partner for hosting, support, Microsoft 365 and more. Location: Switzerland.",
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
    .replace(/<highlight>/g, '<span class="hl">')
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

  document.dispatchEvent(new CustomEvent("ewebit:lang-changed", { detail: { lang } }));
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

const urlTheme = new URLSearchParams(location.search).get("theme");
if (urlTheme === "dark" || urlTheme === "light") {
  setTheme(urlTheme);
} else if (storedTheme) {
  setTheme(storedTheme);
} else {
  setTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    playClick();
    playRadialReveal(themeToggle, nextTheme);
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
const pricingPanes = document.querySelectorAll("[data-pricing-pane]");
const pricingContextEl = document.querySelector("[data-pricing-context]");

function updatePricingIndicator(activeButton) {
  const pricingSwitch = activeButton.closest(".pricing-switch");
  const pricingIndicator = pricingSwitch?.querySelector(".pricing-indicator");
  updatePillIndicator(pricingSwitch, pricingIndicator, activeButton);
}

function setPricingModel(type) {
  pricingBtns.forEach((btn) => {
    const isActive = btn.getAttribute("data-pricing-toggle") === type;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (isActive) updatePricingIndicator(btn);
  });

  pricingPanes.forEach((pane) => {
    pane.classList.toggle("is-active", pane.dataset.pricingPane === type);
  });

  if (pricingContextEl) {
    const lang = document.body.getAttribute("data-lang") || "de";
    const ctxKey = type === "monthly" ? "pricing.contextMonthly" : "pricing.contextLump";
    pricingContextEl.setAttribute("data-i18n", ctxKey);
    const value = resolveKey(translations[lang] || translations.de, ctxKey);
    if (value !== undefined) pricingContextEl.textContent = String(value);
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

function initManifestStagger() {
  const grid = document.querySelector(".manifest-cards");
  if (!grid) return;
  if (prefersReducedMotion) { grid.classList.add("is-visible"); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });
  io.observe(grid);
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
initThemeToggleEffects({ sound: true });
initAnimations({ prefersReducedMotion });
initManifestStagger();
