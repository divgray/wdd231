document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("globalImageModal");
    const modalImage = document.getElementById("globalModalImage");
    const closeBtn = document.getElementById("globalCloseBtn");


    document.body.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {

            modalImage.src = event.target.src;
            modal.style.display = "flex";
        }
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
