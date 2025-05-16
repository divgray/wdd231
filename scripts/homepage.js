document.addEventListener('DOMContentLoaded', () => {

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navbar');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    const courses = [
        { code: "CSE 110", credits: 2 },
        { code: "WDD 130", credits: 2 },
        { code: "CSE 111", credits: 2 },
        { code: "CSE 210", credits: 2 },
        { code: "WDD 131", credits: 2 },
        { code: "WDD 231", credits: 2 }
    ];

    const finishedCourses = ['CSE 110', 'CSE 111', 'WDD 130', 'WDD 131'];
    const courseListElement = document.getElementById('course-list');

    courses.forEach(course => {
        const li = document.createElement('li');
        li.className = "course-item";
        li.setAttribute('data-code', course.code);
        li.textContent = `${course.code} - ${course.credits} credits`;
        courseListElement.appendChild(li);
    });

    document.querySelectorAll('#course-list li').forEach(item => {
        const code = item.getAttribute('data-code');
        if (finishedCourses.includes(code)) {
            item.classList.add('finished');
        }
    });

    const filterButtons = document.querySelectorAll('.filter-buttons button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterType = this.textContent.trim();

            const courseListItems = document.querySelectorAll('#course-list li');
            courseListItems.forEach(item => {
                if (filterType === 'All' || item.getAttribute('data-code').startsWith(filterType)) {
                    item.style.display = 'list-item';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // add the other links here later.
    const courses = [
        { name: "Course Homepage", url: "https://divgray.github.io/wdd231/", class: "active" },
        { name: "Chamber Directory Page", url: "#" },
        { name: "Chamber Home Page", url: "#" },
        { name: "Chamber Join Page", url: "#" },
        { name: "Chamber Discover Page", url: "#" },
        { name: "Individual Website Project", url: "#" },
    ];
    const courseWorkList = document.getElementById("course-work-list");
    courseWorkList.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = course.url;
        anchor.textContent = course.name;
        li.appendChild(anchor);
        courseWorkList.appendChild(li);
    });
});