const buttons = document.querySelectorAll("[data-lang-toggle]");
const langSwitch = document.querySelector(".lang-switch");
const langIndicator = document.querySelector(".lang-indicator");
const themeToggle = document.querySelector("[data-theme-toggle]");
const storedTheme = localStorage.getItem("ewebit-theme");
const storedLang = localStorage.getItem("ewebit-lang");

function updateLangIndicator(activeButton) {
  if (!langSwitch || !langIndicator || !activeButton) {
    return;
  }

  const switchRect = langSwitch.getBoundingClientRect();
  const buttonRect = activeButton.getBoundingClientRect();
  const offsetX = buttonRect.left - switchRect.left;
  const offsetY = buttonRect.top - switchRect.top;

  langSwitch.style.setProperty("--indicator-x", `${offsetX}px`);
  langSwitch.style.setProperty("--indicator-y", `${offsetY}px`);
  langSwitch.style.setProperty("--indicator-w", `${buttonRect.width}px`);
  langSwitch.style.setProperty("--indicator-h", `${buttonRect.height}px`);
}

function setLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("ewebit-lang", lang);
  buttons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-toggle") === lang;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    if (isActive) {
      updateLangIndicator(button);
    }
  });
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

window.addEventListener("resize", () => {
  const activeButton = document.querySelector('.lang-btn[aria-pressed="true"]');
  updateLangIndicator(activeButton);
});

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Light Mode einschalten" : "Dark Mode einschalten"
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

const faqItems = document.querySelectorAll(".faq-grid details");
const faqFilterButtons = document.querySelectorAll("[data-faq-filter]");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function setFaqFilter(nextFilter) {
  const filter = nextFilter || "pricing";

  faqFilterButtons.forEach((button) => {
    const isActive = button.dataset.faqFilter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  faqItems.forEach((item) => {
    const matches =
      filter === "all" || item.dataset.faqCategory === filter;
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
