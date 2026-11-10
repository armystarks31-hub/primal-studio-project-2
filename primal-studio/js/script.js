// Photography category filters. All six images remain available without JS.
const filterButtons = document.querySelectorAll("[data-filter]");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    let visible = 0;
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.hidden = selected !== "all" && item.dataset.category !== selected;
      if (!item.hidden) visible++;
    });
    document.querySelector("#gallery-status").textContent = `${visible} images shown`;
  });
});

// Accessible enlarged-image dialog. Escape closes the native dialog.
const lightbox = document.querySelector("#lightbox");
if (lightbox) {
  document.querySelectorAll("[data-lightbox]").forEach(button => {
    button.addEventListener("click", () => {
      const source = button.querySelector("img");
      const enlarged = document.querySelector("#lightbox-image");
      enlarged.src = source.src;
      enlarged.alt = source.alt;
      document.querySelector("#lightbox-caption").textContent = button.closest("figure").querySelector("figcaption").textContent;
      lightbox.showModal();
    });
  });
  lightbox.querySelector(".close-dialog").addEventListener("click", () => lightbox.close());
}

// Style comparison reveal, controlled by a keyboard-accessible range input.
const comparisonRange = document.querySelector("#comparison-range");
if (comparisonRange) {
  comparisonRange.addEventListener("input", () => {
    document.querySelector(".comparison").style.setProperty("--reveal", `${comparisonRange.value}%`);
    document.querySelector("#comparison-value").value = `${comparisonRange.value}%`;
  });
}

// Class checkout preview. Prices are stored in cents on the package options.
const bookingForm = document.querySelector("#booking-demo");
if (bookingForm) {
  const packageSelect = bookingForm.querySelector("#booking-package");
  const checkoutResult = bookingForm.querySelector("#checkout-result");
  const formatPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  const updateSummary = () => {
    const selected = packageSelect.selectedOptions[0];
    const subtotal = Number(selected.dataset.price);
    const deposit = Math.round(subtotal * 0.30);
    bookingForm.querySelector("#booking-total").value = formatPrice.format(subtotal / 100);
    bookingForm.querySelector("#booking-deposit").value = formatPrice.format(deposit / 100);
    bookingForm.querySelector("#booking-balance").value = formatPrice.format((subtotal - deposit) / 100);
    bookingForm.querySelector("#booking-venue").textContent = `Setting: ${selected.dataset.venue}`;
    checkoutResult.textContent = "";
  };
  bookingForm.addEventListener("change", updateSummary);
  document.querySelectorAll("[data-package]").forEach(link => {
    link.addEventListener("click", () => {
      packageSelect.value = link.dataset.package;
      updateSummary();
    });
  });
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    checkoutResult.textContent = "Demo complete. No payment was taken and no appointment was created.";
  });
  updateSummary();
  bookingForm.querySelector('button[type="submit"]').disabled = false;
}
