// const hero = document.querySelector('.hero');
// const dots = document.querySelectorAll('.dot');

// hero.addEventListener('scroll', () => {
//     // Calculate the index of the centered image
//     const index = Math.round(hero.scrollLeft / hero.clientWidth);
//     dots.forEach((dot, i) => {
//         if (i === index) {
//             dot.classList.add('active');
//         } else {
//             dot.classList.remove('active');
//         }
//     });
// });
const hero = document.getElementById('hero');
const dots = document.querySelectorAll('.dot');

// When the hero element scrolls, update which dot is active.
hero.addEventListener('scroll', () => {
    // Determine the index of the slide in view.
    const index = Math.round(hero.scrollLeft / hero.clientWidth);
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
});

// Add click events to each dot to scroll to the corresponding slide.
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        hero.scrollTo({
            left: index * hero.clientWidth,
            behavior: 'smooth'
        });
    });
});

// (Optional) Convert vertical wheel scrolling to horizontal scrolling.
hero.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        hero.scrollLeft += e.deltaY;
    }
});
