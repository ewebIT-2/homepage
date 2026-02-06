export function initFaq({ prefersReducedMotion = false } = {}) {
  const faqItems = document.querySelectorAll(".faq-grid details");
  const faqFilterButtons = document.querySelectorAll("[data-faq-filter]");

  if (!faqItems.length && !faqFilterButtons.length) {
    return;
  }

  function setFaqFilter(filter) {
    const resolvedFilter = filter || "pricing";
    faqFilterButtons.forEach((button) => {
      const isActive = button.dataset.faqFilter === resolvedFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    faqItems.forEach((item) => {
      const matches =
        resolvedFilter === "all" || item.dataset.faqCategory === resolvedFilter;
      const content = item.querySelector(".faq-content");

      item.classList.toggle("is-hidden", !matches);
      item.setAttribute("aria-hidden", matches ? "false" : "true");

      if (!matches) {
        item.open = false;
        item.classList.remove("is-closing");
        item.dataset.animating = "false";
        if (content) {
          content.style.height = "0px";
        }
      }
    });
  }

  faqFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setFaqFilter(button.dataset.faqFilter);
    });
  });

  if (faqFilterButtons.length) {
    const initialFilterButton =
      document.querySelector('[data-faq-filter][aria-pressed="true"]') ||
      faqFilterButtons[0];
    const initialFilter =
      initialFilterButton?.dataset.faqFilter || faqFilterButtons[0].dataset.faqFilter;
    setFaqFilter(initialFilter);
  }

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    const content = item.querySelector(".faq-content");
    let closeTimer;
    let openTimer;

    if (!summary || !content) {
      return;
    }

    content.style.height = item.open ? `${content.scrollHeight}px` : "0px";

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      if (prefersReducedMotion) {
        item.open = !item.open;
        content.style.height = item.open ? "auto" : "0px";
        return;
      }

      if (item.dataset.animating === "true") {
        return;
      }

      if (item.open) {
        item.dataset.animating = "true";
        const startHeight = content.scrollHeight;
        content.style.height = `${startHeight}px`;
        item.classList.add("is-closing");
        void content.offsetHeight;

        requestAnimationFrame(() => {
          content.style.height = "0px";
        });

        const onClose = (closeEvent) => {
          if (closeEvent.propertyName !== "height") {
            return;
          }
          item.classList.remove("is-closing");
          item.open = false;
          content.style.height = "0px";
          item.dataset.animating = "false";
          content.removeEventListener("transitionend", onClose);
          clearTimeout(closeTimer);
        };

        content.addEventListener("transitionend", onClose);
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          item.classList.remove("is-closing");
          item.open = false;
          content.style.height = "0px";
          item.dataset.animating = "false";
          content.removeEventListener("transitionend", onClose);
        }, 450);
        return;
      }

      item.dataset.animating = "true";
      item.open = true;
      content.style.height = "0px";
      const endHeight = content.scrollHeight;
      void content.offsetHeight;

      requestAnimationFrame(() => {
        content.style.height = `${endHeight}px`;
      });

      const onOpen = (openEvent) => {
        if (openEvent.propertyName !== "height") {
          return;
        }
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
      }, 450);
    });
  });
}
