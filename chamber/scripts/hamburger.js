document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.getElementById("ham");

    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
    });
});
