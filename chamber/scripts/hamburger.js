document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.getElementById("ham");

    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
        // The adjacent sibling rule takes care of showing/hiding the nav
    });
});
