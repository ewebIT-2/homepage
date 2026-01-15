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
