function changeModalColor(modalId) {
    const modal = document.getElementById(modalId);
    const colors = ["#f0f0f0", "#ffe4b5", "#add8e6", "#98fb98"];
    let index = 0;

    setInterval(() => {
        modal.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 2000);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    changeModalColor(modalId);
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
