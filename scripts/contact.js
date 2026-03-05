const form = document.getElementById("contact-form");
if (form) {
  const successEl = document.getElementById("contact-success");
  const errorEl = document.getElementById("contact-error");
  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot check — bots fill this hidden field
    if (form.querySelector('[name="_gotcha"]').value) return;

    // Client-side validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    hideStatus();
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showEl(successEl);
        form.reset();
        // Auto-hide success after 8 s
        setTimeout(() => hideEl(successEl), 8000);
      } else {
        showEl(errorEl);
      }
    } catch {
      showEl(errorEl);
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function showEl(el) {
  if (el) el.removeAttribute("hidden");
}

function hideEl(el) {
  if (el) el.setAttribute("hidden", "");
}

function hideStatus() {
  hideEl(document.getElementById("contact-success"));
  hideEl(document.getElementById("contact-error"));
}
