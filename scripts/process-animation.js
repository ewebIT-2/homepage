export function initProcessAnimation({ prefersReducedMotion = false } = {}) {
  const timeline = document.querySelector(".process-timeline");
  if (!timeline) return;

  const items = timeline.querySelectorAll(".process-item");
  if (items.length === 0) return;

  // Create the highlight bar element
  const highlightBar = document.createElement("div");
  highlightBar.className = "process-highlight-bar";
  timeline.appendChild(highlightBar);

  // Animation timing constants (in milliseconds)
  const PAUSE_DURATION = 2000;
  const TRANSITION_DURATION = 500;
  const RESET_DURATION = 300;
  const RESET_PAUSE = 2500;

  let currentIndex = 0;
  let animationId = null;
  let isAnimating = false;

  function getTagPosition(index) {
    const item = items[index];
    if (!item) return 0;
    const tag = item.querySelector(".process-tag");
    if (!tag) return 0;
    const timelineRect = timeline.getBoundingClientRect();
    const tagRect = tag.getBoundingClientRect();
    return tagRect.top - timelineRect.top + tagRect.height / 2;
  }

  function setActiveItem(index) {
    items.forEach((item, i) => {
      item.classList.toggle("is-active", i === index);
    });
  }

  // Track offset: 0.5rem converted to pixels (matches CSS top: 0.5rem)
  function getTrackTopOffset() {
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return 0.5 * rootFontSize;
  }

  function animateBarToIndex(targetIndex, duration) {
    return new Promise((resolve) => {
      const trackTop = getTrackTopOffset();
      const endPos = getTagPosition(targetIndex);
      let height;

      // For the last item, extend bar to the full track length
      if (targetIndex === items.length - 1) {
        const timelineRect = timeline.getBoundingClientRect();
        // Track ends at bottom: 0.5rem, so full height is timeline height - 1rem (top + bottom offsets)
        const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        height = timelineRect.height - (1 * rootFontSize);
      } else {
        // Calculate height from track top to target tag position
        height = Math.max(0, endPos - trackTop);
      }

      highlightBar.style.transition = `height ${duration}ms ease`;
      // Don't override top - let CSS handle it (top: 0.5rem)
      highlightBar.style.height = `${height}px`;

      setTimeout(resolve, duration);
    });
  }

  function resetBar(duration) {
    return new Promise((resolve) => {
      highlightBar.style.transition = `height ${duration}ms ease`;
      highlightBar.style.height = "0";
      setTimeout(resolve, duration);
    });
  }

  function delay(ms) {
    return new Promise((resolve) => {
      animationId = setTimeout(resolve, ms);
    });
  }

  async function runAnimationLoop() {
    if (!isAnimating) return;

    // Reset state - bar starts at track top with no height
    currentIndex = 0;
    highlightBar.style.height = "0";

    // Animate bar to first item and activate it simultaneously
    setActiveItem(0);
    await animateBarToIndex(0, TRANSITION_DURATION);
    if (!isAnimating) return;
    await delay(PAUSE_DURATION);
    if (!isAnimating) return;

    // Transition through weeks 2, 3, 4
    for (let i = 1; i < items.length; i++) {
      if (!isAnimating) return;
      // Activate card at the START of bar animation (synchronized)
      setActiveItem(i);
      await animateBarToIndex(i, TRANSITION_DURATION);
      if (!isAnimating) return;
      await delay(PAUSE_DURATION);
      if (!isAnimating) return;
    }

    // Reset the bar
    setActiveItem(-1); // Remove active from all
    await resetBar(RESET_DURATION);
    if (!isAnimating) return;

    // Pause before restarting
    await delay(RESET_PAUSE);

    // Restart the loop
    if (isAnimating) {
      runAnimationLoop();
    }
  }

  function startAnimation() {
    if (isAnimating) return;
    isAnimating = true;
    runAnimationLoop();
  }

  function stopAnimation() {
    isAnimating = false;
    if (animationId) {
      clearTimeout(animationId);
      animationId = null;
    }
    // Reset visual state
    setActiveItem(-1);
    highlightBar.style.height = "0";
  }

  // Skip animation if user prefers reduced motion
  if (prefersReducedMotion) {
    return;
  }

  // Set up IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(timeline);
}
