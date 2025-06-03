// Set the timestamp field to the current date/time (ISO format) on page load.
function setTimestamp() {
    document.getElementById('timestamp').value = new Date().toISOString();
}

// Open modal by setting its display property to block.
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close modal by setting its display property to none.
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close any open modal if the user clicks outside the modal content.
window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}