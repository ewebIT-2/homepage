export function initMobileNav({ breakpoint = 900 } = {}) {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");

  if (!nav || !toggle) {
    return;
  }

  const navLinks = nav.querySelectorAll("a");

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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > breakpoint) {
      closeNav();
      return;
    }
    nav.setAttribute("aria-hidden", nav.classList.contains("is-open") ? "false" : "true");
  });

  setNavState(false);
}
