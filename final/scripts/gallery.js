async function loadGallery() {
    const imageContainer = document.getElementById('imageContainer');
    try {
        const response = await fetch("data/gallery.json");
        const data = await response.json();

        imageContainer.innerHTML = data.map(image => `
      <div class="gallery-view">
        <figure>
        <img src="${image.img}" loading="lazy" alt="A photo taken at the skatepark.">
        <span><b>" ${image.name} "</b></span>
        <p>${image.description}</p>
        <figcaption>${image.year}</figcaption>
        </figure>
      </div>
    `).join("");
    } catch (err) {
        console.error("Error loading gallery:", err);
    }
}
loadGallery();

const gridViewBtn = document.getElementById('gridView');
const listViewBtn = document.getElementById('listView');

gridViewBtn.addEventListener('click', () => {
    imageContainer.classList.remove('list');
    imageContainer.classList.add('grid');
});

listViewBtn.addEventListener('click', () => {
    imageContainer.classList.remove('grid');
    imageContainer.classList.add('list');
});