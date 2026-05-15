export function initProcessAnimation({ prefersReducedMotion = false } = {}) {
  const timeline = document.querySelector(".process-timeline");
  if (!timeline) return;

  const items = Array.from(timeline.querySelectorAll(".process-step"));
  if (!items.length) return;

  function setActiveItem(activeIndex) {
    items.forEach((item, index) => {
      item.classList.toggle("is-active", index === activeIndex);
    });
  }

  function updateActiveItem() {
    const viewportCenter = window.innerHeight * 0.5;
    let closestIndex = -1;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const tlRect = timeline.getBoundingClientRect();
    if (tlRect.bottom < 0 || tlRect.top > window.innerHeight) {
      setActiveItem(-1);
      return;
    }
    setActiveItem(closestIndex);
  }

  let ticking = false;
  function handleScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveItem();
      ticking = false;
    });
  }

  // also reveal-on-scroll for steps
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  items.forEach(it => revealObserver.observe(it));

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);
  updateActiveItem();
}
