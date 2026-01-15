const buttons = document.querySelectorAll("[data-lang-toggle]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const storedTheme = localStorage.getItem("ewebit-theme");
const storedLang = localStorage.getItem("ewebit-lang");

function setLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("ewebit-lang", lang);
  buttons.forEach((button) => {
    const isActive = button.getAttribute("data-lang-toggle") === lang;
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
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
  });
}
