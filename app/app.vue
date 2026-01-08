<template>
  <div class="page">
    <NuxtRouteAnnouncer />
    <header class="site-header">
      <div class="logo">ewebIT</div>
      <nav class="nav">
        <a href="#leistungen">Leistungen</a>
        <a href="#prozess">Prozess</a>
        <a href="#projekte">Projekte</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <button class="btn btn-primary">Projekt starten</button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Webdesign Agentur aus Hamburg</span>
          <h1>
            Websites, die verkaufen, Vertrauen schaffen und sich einfach gut
            anfuhlen.
          </h1>
          <p>
            Wir gestalten markenstarke Auftritte und setzen sie mit Nuxt
            performanter als je zuvor um. Vom Launch bis zur Weiterentwicklung
            begleiten wir dich als kreativer Partner.
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary">Kostenloses Erstgesprach</button>
            <button class="btn btn-ghost">Portfolio ansehen</button>
          </div>
          <div class="trust-row">
            <span>Trusted by</span>
            <div class="trust-logos">
              <span>Nordlicht</span>
              <span>Studio 42</span>
              <span>Hansea</span>
              <span>Wavelab</span>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <div class="card-top">
            <span class="pill">Performance</span>
            <span class="pill">UX</span>
            <span class="pill">Brand</span>
          </div>
          <div class="card-metric">
            <span class="metric-label">Conversion Uplift</span>
            <strong>+38%</strong>
            <div class="metric-bar">
              <span></span>
            </div>
          </div>
          <div class="card-metric">
            <span class="metric-label">Page Speed</span>
            <strong>98/100</strong>
            <div class="metric-bar metric-bar-alt">
              <span></span>
            </div>
          </div>
          <div class="card-quote">
            "Sie haben unsere Launch-Strategie verstanden und pixelgenau
            umgesetzt."
          </div>
        </div>
      </section>

      <section class="metrics">
        <div>
          <strong>120+</strong>
          <span>Webprojekte live</span>
        </div>
        <div>
          <strong>6 Wochen</strong>
          <span>durchschnittliche Launchzeit</span>
        </div>
        <div>
          <strong>92%</strong>
          <span>Wiederbeauftragungen</span>
        </div>
        <div>
          <strong>4.9/5</strong>
          <span>Client Satisfaction</span>
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-header">
          <span class="eyebrow">Leistungen</span>
          <h2>Wir bauen digitale Erlebnisse mit klarer Wirkung.</h2>
          <p>
            Strategie, Design und Entwicklung arbeiten bei uns Hand in Hand. So
            entstehen Seiten, die Stories erzahlen, Leads generieren und
            langfristig wachsen.
          </p>
        </div>
        <div class="card-grid">
          <article class="info-card">
            <h3>Brand &amp; Webdesign</h3>
            <p>Visuelle Identitat, die sich in jedem Scroll einfuhlt.</p>
            <ul>
              <li>Designsysteme</li>
              <li>UI/UX Prototyping</li>
              <li>Content Struktur</li>
            </ul>
          </article>
          <article class="info-card">
            <h3>Nuxt Entwicklung</h3>
            <p>Performante Frontends mit sauberen Komponenten.</p>
            <ul>
              <li>Animationen &amp; Motion</li>
              <li>SEO &amp; Lighthouse</li>
              <li>Headless Ready</li>
            </ul>
          </article>
          <article class="info-card">
            <h3>Launch &amp; Growth</h3>
            <p>Wir bleiben nach dem Launch an deiner Seite.</p>
            <ul>
              <li>Conversion Optimierung</li>
              <li>Experiment Roadmaps</li>
              <li>Content Support</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="prozess" class="section split">
        <div class="section-header">
          <span class="eyebrow">Prozess</span>
          <h2>Klare Schritte, schnelle Ergebnisse.</h2>
          <p>
            Unser Ablauf schafft Transparenz und Tempo. Du weisst in jeder Woche
            genau, was passiert und wann wir live gehen.
          </p>
        </div>
        <div class="steps">
          <div class="step">
            <span>01</span>
            <div>
              <h3>Discovery Sprint</h3>
              <p>Ziele, Zielgruppen und Wettbewerber in einem Fokus-Workshop.</p>
            </div>
          </div>
          <div class="step">
            <span>02</span>
            <div>
              <h3>Design System</h3>
              <p>Typografie, Farben, Komponenten und Motion als Blueprint.</p>
            </div>
          </div>
          <div class="step">
            <span>03</span>
            <div>
              <h3>Build &amp; Iterate</h3>
              <p>Nuxt Komponenten, Performance Tests und Live-Preview.</p>
            </div>
          </div>
          <div class="step">
            <span>04</span>
            <div>
              <h3>Launch &amp; Optimize</h3>
              <p>Deploy, Tracking Setup und laufende Verbesserungen.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projekte" class="section">
        <div class="section-header">
          <span class="eyebrow">Ausgewahlte Projekte</span>
          <h2>Design, das Marken zum Gesprächsthema macht.</h2>
        </div>
        <div class="case-grid">
          <article class="case-card">
            <div class="case-badge">SaaS Platform</div>
            <h3>Nordwind Analytics</h3>
            <p>Neupositionierung mit modularer Produktseite.</p>
            <div class="case-tags">
              <span>Brand</span>
              <span>UX</span>
              <span>Nuxt</span>
            </div>
          </article>
          <article class="case-card">
            <div class="case-badge">E-Commerce</div>
            <h3>Studio Fjord</h3>
            <p>Storytelling-Shops mit klarer Conversion Journey.</p>
            <div class="case-tags">
              <span>Shop UX</span>
              <span>SEO</span>
              <span>Motion</span>
            </div>
          </article>
          <article class="case-card">
            <div class="case-badge">Real Estate</div>
            <h3>Harbor Estates</h3>
            <p>Hochwertige Exposes mit interaktiven Karten.</p>
            <div class="case-tags">
              <span>Webflow to Nuxt</span>
              <span>Lead Gen</span>
              <span>CMS Ready</span>
            </div>
          </article>
        </div>
      </section>

      <section class="section testimonials">
        <div class="section-header">
          <span class="eyebrow">Stimmen</span>
          <h2>Kunden, die mit uns wachsen.</h2>
        </div>
        <div class="testimonial-grid">
          <article>
            <p>
              "ewebIT hat unseren Relaunch in sechs Wochen umgesetzt und unsere
              Leads verdoppelt."
            </p>
            <span>Anna Keller, Growth Lead bei Hansea</span>
          </article>
          <article>
            <p>
              "Endlich eine Agentur, die Design und Code gleich ernst nimmt."
            </p>
            <span>Jonas Brandt, CEO Nordlicht</span>
          </article>
          <article>
            <p>
              "Wir haben sofort gespurt, dass hier Strategie statt Bauchgefuhl
              dahintersteckt."
            </p>
            <span>Mira Lange, Founder Studio 42</span>
          </article>
        </div>
      </section>

      <section id="kontakt" class="section cta">
        <div>
          <span class="eyebrow">Letzter Schritt</span>
          <h2>Bereit fur einen Auftritt, der auffallt?</h2>
          <p>
            Erzahl uns kurz von deinem Projekt. Wir melden uns innerhalb von 48
            Stunden mit einer klaren Empfehlung.
          </p>
        </div>
        <button class="btn btn-primary btn-large">Projekt anfragen</button>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <strong>ewebIT Webdesignagentur</strong>
        <span>Schaufenster 12, 20457 Hamburg</span>
      </div>
      <div class="footer-links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">Kontakt</a>
      </div>
      <div class="footer-meta">hello@ewebit.de · +49 40 1234 5678</div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "ewebIT Webdesignagentur",
  meta: [
    {
      name: "description",
      content:
        "ewebIT gestaltet performante Nuxt-Websites fur Marken, die sichtbar wachsen wollen.",
    },
  ],
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  color-scheme: light;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  background-color: #f7f4ef;
  color: #1f1a16;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(
      circle at 10% 10%,
      rgba(255, 202, 155, 0.55),
      transparent 55%
    ),
    radial-gradient(
      circle at 90% 0%,
      rgba(134, 214, 210, 0.55),
      transparent 50%
    ),
    linear-gradient(120deg, #f8f0e8 0%, #f1f6f4 100%);
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

.page {
  position: relative;
  padding: 24px 6vw 48px;
  overflow: hidden;
}

.page::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(31, 26, 22, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(31, 26, 22, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.25;
  pointer-events: none;
}

.site-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 12px 0 32px;
}

.logo {
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav {
  display: flex;
  gap: 24px;
  font-size: 0.95rem;
}

.nav a {
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.nav a:hover {
  opacity: 1;
}

.btn {
  border-radius: 999px;
  padding: 12px 22px;
  border: 1px solid transparent;
  font-weight: 600;
  background: transparent;
  cursor: pointer;
}

.btn-primary {
  background: #1f1a16;
  color: #f7f4ef;
}

.btn-ghost {
  border-color: #1f1a16;
}

.btn-large {
  padding: 16px 36px;
  font-size: 1rem;
}

.hero {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
  align-items: center;
  padding: 32px 0 56px;
}

.hero-copy h1 {
  font-family: "Fraunces", "Times New Roman", serif;
  font-size: clamp(2.5rem, 3vw + 2rem, 4.1rem);
  margin: 16px 0 18px;
  line-height: 1.05;
}

.hero-copy p {
  max-width: 540px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.eyebrow {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  opacity: 0.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 24px 0;
}

.trust-row {
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.8;
}

.trust-logos {
  display: flex;
  gap: 16px;
  font-weight: 600;
}

.hero-card {
  background: #fffaf4;
  padding: 28px;
  border-radius: 32px;
  box-shadow: 0 24px 60px rgba(31, 26, 22, 0.12);
  display: grid;
  gap: 20px;
  animation: float 6s ease-in-out infinite;
}

.card-top {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pill {
  background: rgba(31, 26, 22, 0.08);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
}

.card-metric strong {
  font-size: 2rem;
  display: block;
  margin: 6px 0 10px;
}

.metric-bar {
  background: rgba(31, 26, 22, 0.12);
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
}

.metric-bar span {
  display: block;
  height: 100%;
  width: 82%;
  background: #1f1a16;
  border-radius: 999px;
}

.metric-bar-alt span {
  width: 95%;
  background: #d86a42;
}

.card-quote {
  font-style: italic;
  font-size: 0.95rem;
  opacity: 0.75;
}

.metrics {
  position: relative;
  z-index: 1;
  margin: 16px 0 56px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 24px;
  background: #ffffffc4;
  backdrop-filter: blur(12px);
  padding: 24px;
  border-radius: 24px;
}

.metrics strong {
  font-size: 1.6rem;
  display: block;
}

.section {
  position: relative;
  z-index: 1;
  padding: 56px 0;
}

.section-header {
  max-width: 680px;
}

.section-header h2 {
  font-family: "Fraunces", "Times New Roman", serif;
  font-size: clamp(2rem, 2vw + 1.5rem, 3rem);
  margin: 16px 0;
}

.section-header p {
  font-size: 1.05rem;
  line-height: 1.6;
}

.card-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 32px;
}

.info-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(31, 26, 22, 0.08);
}

.info-card ul {
  padding-left: 18px;
  line-height: 1.7;
}

.split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
}

.steps {
  display: grid;
  gap: 18px;
}

.step {
  display: flex;
  gap: 16px;
  background: #fffaf4;
  padding: 18px 20px;
  border-radius: 18px;
}

.step span {
  font-weight: 700;
  color: #d86a42;
}

.case-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 28px;
}

.case-card {
  background: #1f1a16;
  color: #f7f4ef;
  padding: 28px;
  border-radius: 28px;
  display: grid;
  gap: 14px;
  min-height: 220px;
}

.case-badge {
  background: rgba(255, 255, 255, 0.15);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.85rem;
  width: fit-content;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.85rem;
}

.case-tags span {
  background: rgba(255, 255, 255, 0.18);
  padding: 6px 12px;
  border-radius: 999px;
}

.testimonials {
  background: #fffaf4;
  border-radius: 32px;
  padding: 56px 36px;
}

.testimonial-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 24px;
}

.testimonial-grid article {
  background: #ffffff;
  padding: 22px;
  border-radius: 20px;
  box-shadow: 0 14px 30px rgba(31, 26, 22, 0.08);
  font-size: 0.95rem;
  line-height: 1.6;
}

.testimonial-grid span {
  display: block;
  margin-top: 12px;
  font-weight: 600;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: #1f1a16;
  color: #f7f4ef;
  border-radius: 32px;
  padding: 48px;
}

.cta h2 {
  margin: 12px 0;
}

.site-footer {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 48px 0 16px;
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  gap: 18px;
}

.footer-meta {
  opacity: 0.7;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 720px) {
  .nav {
    display: none;
  }

  .site-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta {
    flex-direction: column;
    align-items: flex-start;
  }

  .metrics {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
</style>
