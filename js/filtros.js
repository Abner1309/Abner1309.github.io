const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const tag = btn.getAttribute("data-tag");

        cards.forEach(card => {
            card.style.display = (tag === "all" || card.dataset.tag === tag)
                ? "block"
                : "none";
        });
    });
});
