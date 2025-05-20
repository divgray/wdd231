// Asynchronously fetch member data from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

// Function to display member cards on the page
function displayMembers(members) {
    const container = document.getElementById('memberContainer');
    container.innerHTML = '';  // Clear any existing content
    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
      <img src="${member.icon}" loading="lazy" alt="${member.name} Logo">
      <h2>${member.name}</h2>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p><strong>Membership:</strong> ${getMembershipLevel(member.membership)}</p>
      <p>${member.description}</p>
    `;
        container.appendChild(card);
    });
}

// Helper function to convert numeric membership level to text
function getMembershipLevel(level) {
    switch (level) {
        case 1: return 'Member';
        case 2: return 'Silver';
        case 3: return 'Gold';
        default: return 'Unknown';
    }
}

// Toggle function to change between grid and list view
document.getElementById('toggleView').addEventListener('click', function () {
    const container = document.getElementById('memberContainer');
    if (container.classList.contains('grid')) {
        container.classList.remove('grid');
        container.classList.add('list');
    } else {
        container.classList.remove('list');
        container.classList.add('grid');
    }
});

// Initialize the page by fetching member data
fetchMembers();
