(async function () {
    const memberContainer = document.getElementById('memberContainer');
    const listViewBtn = document.getElementById('listView');
    const gridViewBtn = document.getElementById('gridView');

    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching member data: ', error);
            return [];
        }
    }

    async function displayMembers() {
        const members = await fetchMembers();
        let output = '';

        // int data membershil level to string.
        function membershipText(level) {
            switch (level) {
                case 1:
                    return 'Member';
                case 2:
                    return 'Silver';
                case 3:
                    return 'Gold';
                default:
                    return '';
            }
        }

        members.forEach(member => {
            output += `
        <div class="member-card">
          <img src="${member.image}" loading="lazy" alt="${member.name} logo">
          <div class="member-info">
            <h2>${member.name}</h2>
            <p><b>Address:</b> ${member.address}</p>
            <p><b>Phone: </b>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p><b>Membership Level: </b>${membershipText(member.membership)}</p>
            <p>" ${member.description} "</p>
          </div>
        </div>
      `;
        });

        memberContainer.innerHTML = output;
    }

    // grid view
    gridViewBtn.addEventListener('click', () => {
        memberContainer.classList.remove('list');
        memberContainer.classList.add('grid');
    });

    // list view
    listViewBtn.addEventListener('click', () => {
        memberContainer.classList.remove('grid');
        memberContainer.classList.add('list');
    });

    displayMembers();
})();


document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.getElementById("ham");
    const navigation = document.querySelector("nav");

    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
        navigation.classList.toggle("open");
    });
});

// footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;