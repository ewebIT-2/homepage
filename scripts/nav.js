let _setActiveSiteLink = null;
let _getSiteLinks = null;

export function reinitSiteNavLinks() {
  if (!_setActiveSiteLink || !_getSiteLinks) return;
  _getSiteLinks().forEach((link) => {
    link.addEventListener("click", () => _setActiveSiteLink(link));
  });
}

export function initMobileNav({ breakpoint = 960 } = {}) {
  const nav = document.querySelector("#site-nav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const areaNav = nav?.querySelector(".area-nav");
  const areaLinks = areaNav?.querySelectorAll(".area-nav__link") ?? [];
  const connector = nav?.querySelector(".nav-connector");
  const connectorPath = connector?.querySelector(".nav-connector__path");

  if (!nav || !toggle) {
    return;
  }

  // Live getters — .site-nav is replaced on SPA navigation so we must not cache it
  const getSiteNav = () => nav?.querySelector(".site-nav");
  const getSiteLinks = () => Array.from(nav?.querySelectorAll(".site-nav a") ?? []);

  const navLinks = nav.querySelectorAll("a");

  const updateIndicators = () => {
    const siteNav = getSiteNav();
    const activeAreaLink = areaNav?.querySelector(".area-nav__link.is-active");
    const activeSiteLink = siteNav?.querySelector("a.is-active");
    if (!areaNav || !siteNav || !activeAreaLink || !activeSiteLink) {
      return;
    }

    areaNav.style.setProperty("--area-indicator-x", `${activeAreaLink.offsetLeft}px`);
    areaNav.style.setProperty("--area-indicator-y", `${activeAreaLink.offsetTop}px`);
    areaNav.style.setProperty("--area-indicator-w", `${activeAreaLink.offsetWidth}px`);
    areaNav.style.setProperty("--area-indicator-h", `${activeAreaLink.offsetHeight}px`);
    siteNav.style.setProperty("--site-indicator-x", `${activeSiteLink.offsetLeft}px`);
    siteNav.style.setProperty("--site-indicator-y", `${activeSiteLink.offsetTop}px`);
    siteNav.style.setProperty("--site-indicator-w", `${activeSiteLink.offsetWidth}px`);
    siteNav.style.setProperty("--site-indicator-h", `${activeSiteLink.offsetHeight}px`);

    if (!connector || !connectorPath || window.innerWidth <= breakpoint) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const areaRect = activeAreaLink.getBoundingClientRect();
    const siteRect = activeSiteLink.getBoundingClientRect();
    const startX = areaRect.left + areaRect.width / 2 - navRect.left;
    const startY = areaRect.bottom - navRect.top;
    const endX = siteRect.left + siteRect.width / 2 - navRect.left;
    const endY = siteRect.top - navRect.top;
    const direction = Math.sign(endX - startX) || 1;
    const middleY = startY + (endY - startY) / 2;
    const distance = Math.abs(endX - startX);
    const radius = Math.max(3, Math.min(8, distance / 4, Math.abs(endY - startY) / 2));
    const horizontalStartX = startX + direction * radius;
    const horizontalEndX = endX - direction * radius;

    connector.setAttribute("viewBox", `0 0 ${navRect.width} ${navRect.height}`);
    connectorPath.setAttribute(
      "d",
      [
        `M ${startX} ${startY}`,
        `Q ${startX} ${middleY} ${horizontalStartX} ${middleY}`,
        `L ${horizontalEndX} ${middleY}`,
        `Q ${endX} ${middleY} ${endX} ${endY}`,
      ].join(" "),
    );
  };

  const setActiveSiteLink = (activeLink) => {
    getSiteLinks().forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    updateIndicators();
  };

  // Expose to reinitSiteNavLinks so the router can re-attach after navigation
  _setActiveSiteLink = setActiveSiteLink;
  _getSiteLinks = getSiteLinks;

  areaLinks.forEach((link) => {
    link.addEventListener("click", () => {
      areaLinks.forEach((item) => {
        const isActive = item === link;
        item.classList.toggle("is-active", isActive);
        if (item instanceof HTMLButtonElement) {
          item.setAttribute("aria-pressed", isActive ? "true" : "false");
        } else if (isActive) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }
      });
      updateIndicators();
    });
  });

  getSiteLinks().forEach((link) => {
    link.addEventListener("click", () => setActiveSiteLink(link));
  });

  if (nav && "ResizeObserver" in window) {
    new ResizeObserver(updateIndicators).observe(nav);
  }

  let scrollTicking = false;
  const updateActiveSiteLinkFromScroll = () => {
    scrollTicking = false;
    const threshold = Math.min(window.innerHeight * 0.35, 280);
    const currentSiteLinks = getSiteLinks();
    let activeLink = currentSiteLinks[0];

    currentSiteLinks.forEach((link) => {
      const target = link.hash ? document.querySelector(link.hash) : null;
      if (target && target.getBoundingClientRect().top <= threshold) {
        activeLink = link;
      }
    });

    if (activeLink && !activeLink.classList.contains("is-active")) {
      setActiveSiteLink(activeLink);
    }
  };

  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      requestAnimationFrame(updateActiveSiteLinkFromScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  const setNavState = (isOpen) => {
    nav.classList.toggle("is-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("nav-open", isOpen);

    if (window.innerWidth <= breakpoint) {
      nav.setAttribute("aria-hidden", isOpen ? "false" : "true");
    } else {
      nav.removeAttribute("aria-hidden");
    }
  };

  const closeNav = () => setNavState(false);
  const openNav = () => setNavState(true);

  const toggleNav = () => {
    if (nav.classList.contains("is-open")) {
      closeNav();
      return;
    }
    openNav();
  };

  toggle.addEventListener("click", toggleNav);

  overlay?.addEventListener("click", closeNav);
  navLinks.forEach((link) => link.addEventListener("click", closeNav));
  nav.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest("a")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("hashchange", () => {
    closeNav();
  });

  window.addEventListener("resize", () => {
    updateIndicators();
    if (window.innerWidth > breakpoint) {
      closeNav();
      return;
    }
    nav.setAttribute("aria-hidden", nav.classList.contains("is-open") ? "false" : "true");
  });

  requestAnimationFrame(() => {
    updateActiveSiteLinkFromScroll();
    updateIndicators();
    requestAnimationFrame(() => {
      nav.classList.add("is-ready");
    });
  });
  setNavState(false);
}
