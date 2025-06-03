async function loadSpotlights() {
    const response = await fetch("data/member.json");
    const data = await response.json();

    const goldAndSilverMembers = data.members.filter(member =>
        member.membership === 3 || member.membership === 2
    );


    const selectedSpotlights = [];
    while (selectedSpotlights.length < 3 && goldAndSilverMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);
        selectedSpotlights.push(goldAndSilverMembers.splice(randomIndex, 1)[0]);
    }

    const spotlightContainer = document.querySelector(".company-spotlights");
    spotlightContainer.innerHTML = selectedSpotlights.map(member => `
        <div class="spotlight">
            <img src="${member.image}" alt="${member.name} Logo" />
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            ${member.website ? `<p><a href="${member.website}">Visit</a></p>` : ""}
        </div>
    `).join("");
}

loadSpotlights();
