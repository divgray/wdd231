// Function to load the gallery images from your gallery.json file
async function loadGallery() {
    const imageContainer = document.getElementById('imageContainer');
    try {
        const response = await fetch("data/gallery.json");
        const data = await response.json();

        // Map over the fetched data to create your gallery items
        imageContainer.innerHTML = data.map(image => `
      <div class="gallery-view">
        <img src="${image.img}" loading="lazy" alt="A photo taken at the skatepark.">
      </div>
    `).join("");
    } catch (err) {
        console.error("Error loading gallery:", err);
    }
}
loadGallery();

// Toggles for grid and list views (if still needed)
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