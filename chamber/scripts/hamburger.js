document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.getElementById("ham");
    const navigation = document.querySelector("nav");

    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
        navigation.classList.toggle("open");
    });
});
