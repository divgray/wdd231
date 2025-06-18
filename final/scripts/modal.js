// Ensure the DOM is loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Modal elements
    const modal = document.getElementById("globalImageModal");
    const modalImage = document.getElementById("globalModalImage");
    const closeBtn = document.getElementById("globalCloseBtn");

    // Global click event listener - adjust the selector if needed
    document.body.addEventListener("click", function (event) {
        // If you want every image to be clickable, you can check:
        if (event.target.tagName === "IMG") {
            // Optionally, require a specific class:
            // if (!event.target.classList.contains("modalable")) return;

            // Open modal with the clicked image
            modalImage.src = event.target.src;
            modal.style.display = "flex"; // Using flex ensures it's centered
        }
    });

    // Close modal on clicking the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Optionally, close modal when clicking outside the modal content
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
