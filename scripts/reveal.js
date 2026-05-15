/* Lightweight reveal for sections — most reveals are handled in animations.js.
   This keeps a generic fallback for any element marked .reveal in HTML. */
export function initScrollReveal({ prefersReducedMotion = false } = {}) {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  if (prefersReducedMotion) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
}
