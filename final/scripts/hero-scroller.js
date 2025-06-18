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


hero.addEventListener('scroll', () => {
    const index = Math.round(hero.scrollLeft / hero.clientWidth);
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        hero.scrollTo({
            left: index * hero.clientWidth,
            behavior: 'smooth'
        });
    });
});

hero.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
        e.preventDefault();
        hero.scrollLeft += e.deltaY;
    }
});
