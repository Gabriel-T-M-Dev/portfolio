document.getElementById("language-toggle").addEventListener("click", function () {
    const elements = document.querySelectorAll("[data-text-pt]");
    const isPortuguese = this.innerText === "PT";

    elements.forEach(el => {
        el.innerText = isPortuguese ? el.getAttribute("data-text-pt") : el.getAttribute("data-text-en");
    });

    // Toggle button text to show the other language option
    this.innerText = isPortuguese ? "EN" : "PT";
});
