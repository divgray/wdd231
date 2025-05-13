const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', () => {
    // Get all filter buttons and the course list items
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const courseListItems = document.querySelectorAll('#course-list li');

    // Loop through each button and add a click event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the filter text from the button ("All", "CSE", or "WDD")
            const filterType = this.textContent.trim();

            // Iterate over each course list item
            courseListItems.forEach(item => {
                // If "All" is selected or the course starts with the filter text, show it; otherwise, hide it.
                if (filterType === 'All' || item.textContent.trim().startsWith(filterType)) {
                    item.style.display = 'list-item';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const finishedCourses = ['CSE 110', 'CSE 111', 'WDD 130', 'WDD 131']; // example finished courses
    const courseListItems = document.querySelectorAll('#course-list li');

    courseListItems.forEach(item => {
        if (finishedCourses.includes(item.textContent.trim())) {
            item.classList.add('finished');
        }
    });
});
