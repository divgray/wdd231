const currentEvents = [
    {
        title: "Annual Business Forum",
        img: "./images/forum.webp",
        alt: "Local business forum.",
        desc: "Join industry leaders as they explore future business trends.",
        date: "June 6, 2025",
        moreDetails: "discover.html"
    },
    {
        title: "Networking Luncheon",
        img: "./images/luncheon.webp",
        alt: "Business luncheon gathering",
        desc: "Connect as you dine with local professionals at our monthly networking event.",
        date: "June 14, 2025",
        moreDetails: "discover.html"
    },
    {
        title: "Metropolitan Expo",
        img: "./images/expo.webp",
        alt: "Fun business fair",
        desc: "Where all the bright minds gather. Connect and Share new business ideas.",
        date: "June 21, 2025",
        moreDetails: "discover.html"
    },
    {
        title: "Job Fair",
        img: "./images/job-fair.webp",
        alt: "A local job fair",
        desc: "This monthly event creates dynamic opportunities for both hiring businesses and job seekers through meaningful networking and career advancement.",
        date: "June 30, 2025",
        moreDetails: "discover.html"
    }
];

function displayEvents(eventsArray) {
    const container = document.querySelector('.current-events');

    container.innerHTML = "";
    eventsArray.forEach(i => {
        const article = document.createElement('article');
        article.innerHTML = `
      <h3>${i.title}</h3>
      <img src="${i.img}" alt="${i.alt}" loading="lazy">
      <p>${i.desc}</p>
      <p><strong>Date:</strong> ${i.date}</p>
    `;
        container.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayEvents(currentEvents);
});
