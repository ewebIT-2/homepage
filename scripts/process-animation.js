export function initProcessAnimation({ prefersReducedMotion = false } = {}) {
  const timeline = document.querySelector(".process-timeline");
  if (!timeline) return;

  const items = Array.from(timeline.querySelectorAll(".process-item"));
  if (!items.length) return;

  let highlightBar = timeline.querySelector(".process-highlight-bar");
  if (!highlightBar) {
    highlightBar = document.createElement("div");
    highlightBar.className = "process-highlight-bar";
    timeline.appendChild(highlightBar);
  }

  const supportsScrollTimeline =
    typeof CSS !== "undefined" &&
    (CSS.supports("view-timeline-name: --process") ||
      CSS.supports("animation-timeline: view()"));

  if (supportsScrollTimeline) {
    timeline.dataset.scrollTimeline = "true";
  } else {
    highlightBar.style.transition = prefersReducedMotion
      ? "none"
      : "height 120ms linear";
  }

  function getTrackOffsetPx() {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return 0.5 * rootFontSize;
  }

  function setActiveItem(activeIndex) {
    items.forEach((item, index) => {
      item.classList.toggle("is-active", index === activeIndex);
    });
  }

  function updateActiveItem(viewportCenter) {
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

    setActiveItem(closestIndex);
  }

  function updateHighlightBar(viewportCenter) {
    if (supportsScrollTimeline) return;

    const rect = timeline.getBoundingClientRect();
    const trackOffset = getTrackOffsetPx();
    const trackHeight = Math.max(0, rect.height - 2 * trackOffset);
    const progress = Math.min(
      1,
      Math.max(0, (viewportCenter - rect.top) / rect.height)
    );
    const height = trackHeight * progress;
    highlightBar.style.height = `${height}px`;
  }

  function update() {
    const rect = timeline.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.5;

    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      setActiveItem(-1);
      if (!supportsScrollTimeline) {
        highlightBar.style.height = "0";
      }
      return;
    }

    updateActiveItem(viewportCenter);
    updateHighlightBar(viewportCenter);
  }

  let ticking = false;
  function handleScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleScroll);

  update();
}
