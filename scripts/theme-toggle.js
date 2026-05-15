/* Audio click + radial-reveal veil for theme toggle.
   The visual sun↔moon morph is handled by CSS in styles.css. */

let ctx = null;
let buf = null;

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function ensureBuf(ac) {
  if (buf && buf.sampleRate === ac.sampleRate) return buf;
  const rate = ac.sampleRate;
  const len = Math.floor(rate * 0.006);
  const b = ac.createBuffer(1, len, rate);
  const ch = b.getChannelData(0);
  for (let i = 0; i < len; i++) {
    const t = i / len;
    const sine = Math.sin(2 * Math.PI * 3400 * t);
    const noise = Math.random() * 2 - 1;
    ch[i] = (sine * 0.6 + noise * 0.4) * (1 - t) ** 3;
  }
  buf = b;
  return b;
}

let lastClick = 0;
export function playClick() {
  const now = performance.now();
  if (now - lastClick < 80) return;
  lastClick = now;
  try {
    const ac = getCtx();
    if (!ac) return;
    const b = ensureBuf(ac);
    const src = ac.createBufferSource();
    const gain = ac.createGain();
    src.buffer = b;
    gain.gain.value = 0.08;
    src.connect(gain);
    gain.connect(ac.destination);
    src.start();
  } catch {
    /* silent */
  }
}

/* Radial reveal — paints the next theme color outward from the toggle */
export function playRadialReveal(originEl, nextTheme) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const veil = document.createElement("div");
  veil.className = "theme-veil";
  veil.style.left = cx + "px";
  veil.style.top = cy + "px";
  veil.style.background = nextTheme === "dark" ? "#0B0A07" : "#F2EDDE";
  document.body.appendChild(veil);

  requestAnimationFrame(() => veil.classList.add("is-running"));

  veil.addEventListener(
    "animationend",
    () => { veil.remove(); },
    { once: true }
  );
}

export function initThemeToggleEffects({ sound = true } = {}) {
  const btn = document.querySelector("[data-theme-toggle]");
  if (!btn) return;

  btn.addEventListener("pointerdown", () => {
    if (sound) playClick();
  });
}
