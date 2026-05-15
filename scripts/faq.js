const COLLAPSED_LIMIT = 5;

export function initFaq({ prefersReducedMotion = false } = {}) {
  const list = document.querySelector(".faq-list");
  const faqItems = list ? Array.from(list.querySelectorAll(":scope > details")) : [];
  const faqFilterButtons = document.querySelectorAll("[data-faq-filter]");
  const toggle = document.querySelector("[data-faq-toggle]");
  const countEl = document.querySelector("[data-faq-hidden-count]");

  if (!faqItems.length && !faqFilterButtons.length) return;

  let activeFilter = "all";

  function setCollapsedState(collapsed) {
    if (!list) return;
    list.classList.toggle("is-collapsed", collapsed);
    if (toggle) toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
    updateToggleLabel(collapsed);
  }

  const TOGGLE_STR = {
    de: { more: "Alle Fragen anzeigen", less: "Weniger zeigen" },
    en: { more: "Show all questions",   less: "Show less" },
  };

  function updateToggleLabel(collapsed) {
    if (!toggle) return;
    const labelEl = toggle.querySelector(".faq-toggle__label");
    const lang = document.body.getAttribute("data-lang") === "en" ? "en" : "de";
    if (labelEl) labelEl.textContent = collapsed ? TOGGLE_STR[lang].more : TOGGLE_STR[lang].less;
    if (countEl) {
      const hidden = Math.max(0, faqItems.length - COLLAPSED_LIMIT);
      countEl.textContent = collapsed && hidden > 0 ? `+${hidden}` : "";
    }
  }

  document.addEventListener("ewebit:lang-changed", () => {
    if (toggle && list) updateToggleLabel(list.classList.contains("is-collapsed"));
  });

  function applyFilter(filter) {
    activeFilter = filter || "all";
    faqFilterButtons.forEach((button) => {
      const isActive = activeFilter !== "all" && button.dataset.faqFilter === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    faqItems.forEach((item) => {
      const matches = activeFilter === "all" || item.dataset.faqCategory === activeFilter;
      const content = item.querySelector(".faq-content");
      item.hidden = !matches;
      item.setAttribute("aria-hidden", matches ? "false" : "true");
      if (!matches) {
        item.open = false;
        item.dataset.animating = "false";
        if (content) content.style.height = "0px";
      }
    });

    if (list) list.classList.toggle("is-filtered", activeFilter !== "all");

    // Hide toggle button when a filter is active
    if (toggle) toggle.hidden = activeFilter !== "all";
  }

  faqFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.faqFilter;
      // Click same active filter to deselect
      if (activeFilter === filter) applyFilter("all");
      else applyFilter(filter);
    });
  });

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isCollapsed = list?.classList.contains("is-collapsed");
      setCollapsedState(!isCollapsed);
    });
  }

  // Initial state: collapsed, no filter
  applyFilter("all");
  setCollapsedState(true);

  // Reveal observer
  if (!prefersReducedMotion) {
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    faqItems.forEach(item => revealIO.observe(item));
  } else {
    faqItems.forEach(item => item.classList.add('is-visible'));
  }

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const content = item.querySelector(".faq-content");
    let closeTimer, openTimer;

    if (!summary || !content) return;

    content.style.height = item.open ? `${content.scrollHeight}px` : "0px";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (prefersReducedMotion) {
        item.open = !item.open;
        content.style.height = item.open ? "auto" : "0px";
        return;
      }

      if (item.dataset.animating === "true") return;

      if (item.open) {
        item.dataset.animating = "true";
        const startHeight = content.scrollHeight;
        content.style.height = `${startHeight}px`;
        void content.offsetHeight;

        requestAnimationFrame(() => { content.style.height = "0px"; });

        const onClose = (ev) => {
          if (ev.propertyName !== "height") return;
          item.open = false;
          content.style.height = "0px";
          item.dataset.animating = "false";
          content.removeEventListener("transitionend", onClose);
          clearTimeout(closeTimer);
        };

        content.addEventListener("transitionend", onClose);
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          item.open = false;
          content.style.height = "0px";
          item.dataset.animating = "false";
          content.removeEventListener("transitionend", onClose);
        }, 480);
        return;
      }

      item.dataset.animating = "true";
      item.open = true;
      content.style.height = "0px";
      const endHeight = content.scrollHeight;
      void content.offsetHeight;

      requestAnimationFrame(() => { content.style.height = `${endHeight}px`; });

      const onOpen = (ev) => {
        if (ev.propertyName !== "height") return;
        content.style.height = "auto";
        item.dataset.animating = "false";
        content.removeEventListener("transitionend", onOpen);
        clearTimeout(openTimer);
      };

      content.addEventListener("transitionend", onOpen);
      clearTimeout(openTimer);
      openTimer = setTimeout(() => {
        content.style.height = "auto";
        item.dataset.animating = "false";
        content.removeEventListener("transitionend", onOpen);
      }, 480);
    });
  });
}
