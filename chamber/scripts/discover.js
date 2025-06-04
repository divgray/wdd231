fetch('data/discover.json')
    .then(response => response.json())
    .then(data => {
        let gridContainer = document.querySelector('.discover-grid');
        data.forEach((item, index) => {
            let card = document.createElement('section');
            card.classList.add('card');
            card.id = `card${index + 1}`;

            card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="Image of ${item.name}">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button onclick="window.location.href='detail.html'">Learn More</button>
        `;
            gridContainer.appendChild(card);
        });
    })
    .catch(err => console.error('Error fetching JSON data:', err));

const lastVisitKey = 'lastVisit';
const currentTime = Date.now();
const lastVisit = localStorage.getItem(lastVisitKey);
let message = '';

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const diffTime = currentTime - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
        message = "Back so soon! Awesome!";
    } else {
        message = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
    }
}

// Update localStorage
localStorage.setItem(lastVisitKey, currentTime);

document.querySelector('.visitor-message').textContent = message;