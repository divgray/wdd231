const urlParams = new URLSearchParams(window.location.search);

function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

document.getElementById('display-first-name').textContent = capitalize(urlParams.get('first-name'));
document.getElementById('display-last-name').textContent = capitalize(urlParams.get('last-name'));
document.getElementById('display-email').textContent = urlParams.get('email') || '';
document.getElementById('display-mobile').textContent = urlParams.get('mobile') || '';
document.getElementById('display-business').textContent = urlParams.get('business-name') || '';
document.getElementById('display-timestamp').textContent = urlParams.get('timestamp') || '';
