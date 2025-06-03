"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const currentDateEl = document.getElementById("current-date");
    const currentTemp = document.getElementById("current-temp");
    const weatherIcon = document.getElementById("weather-icon");
    const captionDesc = document.getElementById("weather-desc");
    const windEl = document.getElementById("wind");

    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    currentDateEl.textContent = today.toLocaleDateString('en-US', options);

    const apiKey = "7ba13cc604ef265217ce5631a71a1021";
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=14.608764920752025&lon=121.0219389138099&units=imperial&appid=${apiKey}`;

    async function fetchCurrent() {
        try {
            const res = await fetch(currentUrl);
            if (res.ok) {
                const data = await res.json();
                displayCurrent(data);
            } else {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error("Error fetching current weather:", error);
        }
    }

    function displayCurrent(data) {
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const desc = data.weather[0].description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        captionDesc.textContent = desc;
        windEl.textContent = `Wind: ${data.wind.speed} mph`;
    }

    fetchCurrent();
});
