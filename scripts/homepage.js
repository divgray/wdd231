document.addEventListener("DOMContentLoaded", () => {
    // Hamburger
    const hamButton = document.getElementById("menu");
    const navigation = document.querySelector(".navbar");
    hamButton.addEventListener("click", () => {
        hamButton.classList.toggle("open");
        navigation.classList.toggle("open");
    });

    // footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Active link
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
    const courseListElement = document.getElementById("course-list");
    courses.forEach(course => {
        const li = document.createElement("li");
        li.className = "course-item";
        li.dataset.code = course.code;
        li.textContent = `${course.code} - ${course.credits} credits`;
        if (finishedCourses.includes(course.code)) {
            li.classList.add("finished");
        }
        courseListElement.appendChild(li);
    });

    const finishedCredits = courses
        .filter(course => finishedCourses.includes(course.code))
        .reduce((acc, course) => acc + course.credits, 0);
    document.getElementById("total-credits").textContent = finishedCredits;

    // button filter
    document.querySelectorAll(".filter-buttons button").forEach(button => {
        button.addEventListener("click", () => {
            const filterType = button.textContent.trim();
            document.querySelectorAll("#course-list li").forEach(item => {
                item.style.display =
                    filterType === "All" || item.dataset.code.startsWith(filterType)
                        ? "list-item"
                        : "none";
            });
        });
    });

    // coursework link
    const courseWorks = [
        { name: "Course Homepage", url: "https://divgray.github.io/wdd231/" },
        { name: "Chamber Directory Page", url: "#" },
        { name: "Chamber Home Page", url: "#" },
        { name: "Chamber Join Page", url: "#" },
        { name: "Chamber Discover Page", url: "#" },
        { name: "Individual Website Project", url: "#" },
    ];
    const courseWorkList = document.getElementById("course-work-list");
    courseWorkList.innerHTML = "";
    courseWorks.forEach(course => {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = course.url;
        anchor.textContent = course.name;
        li.appendChild(anchor);
        courseWorkList.appendChild(li);
    });
});