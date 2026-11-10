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
