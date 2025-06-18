async function loadHighlights() {
    const response = await fetch("data/gallery.json");
    const data = await response.json();

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }

    // Select a few (e.g., 5) random highlights
    const selectedHighlights = data.slice(0, 3);

    const highlightContainer = document.querySelector(".highlights");
    highlightContainer.innerHTML = selectedHighlights.map(image => `
        <div class="highlight">
            <img src="${image.img}" alt="A photo taken at the Skate Park" loading="lazy" />
        </div>
    `).join("");
}

loadHighlights();
