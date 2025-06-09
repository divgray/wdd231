fetch('data/highlights.json')
    .then(response => response.json())
    .then(data => {
        let gridContainer = document.querySelector('.highlights');
        data.forEach((item, index) => {
            let card = document.createElement('section');
            card.classList.add('card');
            card.id = `card${index + 1}`;

            card.innerHTML = `
          <img src="${item.img}" alt="Image of ${item.name}" loading="lazy">
          <h3>${item.name}</h3>
          <address>From ${item.location}</address>
          <h4>${item.trickshot}</h4>
        `;
            gridContainer.appendChild(card);
        });
    })
    .catch(err => console.error('Error fetching JSON data:', err));
    