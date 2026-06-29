import { reinitSiteNavLinks } from "./nav.js";
import { initPageAnimations } from "./animations.js";
import { initScrollReveal } from "./reveal.js";
import { initFaq } from "./faq.js";
import { initProcessAnimation } from "./process-animation.js";
import { initContactForm } from "./contact.js";

let _prefersReducedMotion = false;

function reinitPage() {
  reinitSiteNavLinks();
  initScrollReveal({ prefersReducedMotion: _prefersReducedMotion });
  initFaq({ prefersReducedMotion: _prefersReducedMotion });
  initProcessAnimation({ prefersReducedMotion: _prefersReducedMotion });
  initPageAnimations();
  initContactForm();
}

async function navigateTo(href, push = true) {
  try {
    const res = await fetch(href);
    if (!res.ok) { location.href = href; return; }

    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    // Update <title> and meta description
    document.title = doc.title;
    const newMeta = doc.querySelector('meta[name="description"]');
    const curMeta = document.querySelector('meta[name="description"]');
    if (newMeta && curMeta) curMeta.setAttribute("content", newMeta.getAttribute("content") ?? "");

    // Replace <main>
    const newMain = doc.querySelector("main");
    const curMain = document.querySelector("main");
    if (newMain && curMain) curMain.replaceWith(newMain);

    // Replace .site-nav (page-specific section links differ per page)
    const newSiteNav = doc.querySelector(".site-nav");
    const curSiteNav = document.querySelector(".site-nav");
    if (newSiteNav && curSiteNav) curSiteNav.replaceWith(newSiteNav);

    // Sync area-nav active state
    doc.querySelectorAll(".area-nav__link").forEach((newLink) => {
      const linkHref = newLink.getAttribute("href");
      const curLink = document.querySelector(`.area-nav__link[href="${linkHref}"]`);
      if (!curLink) return;
      const isActive = newLink.classList.contains("is-active");
      curLink.classList.toggle("is-active", isActive);
      if (isActive) curLink.setAttribute("aria-current", "page");
      else curLink.removeAttribute("aria-current");
    });

    if (push) history.pushState({ href }, "", href);
    window.scrollTo({ top: 0, behavior: "instant" });

    reinitPage();
  } catch {
    // Fall back to a real navigation on fetch failure
    location.href = href;
  }
}

export function initRouter({ prefersReducedMotion = false } = {}) {
  _prefersReducedMotion = prefersReducedMotion;

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    const rawHref = link.getAttribute("href");
    if (!rawHref) return;
    if (rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;
    if (rawHref.startsWith("#")) return;

    let url;
    try { url = new URL(rawHref, location.href); } catch { return; }

    if (url.origin !== location.origin) return;
    // Same page, different hash — let the browser handle the scroll
    if (url.pathname === location.pathname && url.search === location.search) return;

    e.preventDefault();
    navigateTo(url.href);
  });

  window.addEventListener("popstate", () => {
    navigateTo(location.href, false);
  });
}
