"use strict";

// const myKey = "7ba13cc604ef265217ce5631a71a1021"
// const myLat = "14.608764920752025"
//const myLong = "121.0219389138099"

document.addEventListener("DOMContentLoaded", () => {
    const currentDateEl = document.getElementById("current-date");
    const currentTemp = document.getElementById("current-temp");
    const weatherIcon = document.getElementById("weather-icon");
    const captionDesc = document.getElementById("weather-desc");
    const windEl = document.getElementById("wind");
    const forecastContainer = document.getElementById("forecast");

    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    currentDateEl.textContent = today.toLocaleDateString('en-US', options);

    const apiKey = "7ba13cc604ef265217ce5631a71a1021";
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=14.608764920752025&lon=121.0219389138099&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=14.608764920752025&lon=121.0219389138099&units=imperial&appid=${apiKey}`;

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

    async function fetchForecast() {
        try {
            const res = await fetch(forecastUrl);
            if (res.ok) {
                const data = await res.json();
                displayForecast(data);
            } else {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error("Error fetching forecast:", error);
            forecastContainer.innerHTML = `<p>Error loading forecast data. Please check your internet.</p>`;
        }
    }

    function displayForecast(data) {
        const dailyForecast = {};
        const todayDateStr = new Date().toISOString().split("T")[0];

        data.list.forEach((entry) => {
            const [date] = entry.dt_txt.split(" ");
            if (date !== todayDateStr && !dailyForecast[date]) {
                dailyForecast[date] = entry;
            }
        });

        const forecastDates = Object.keys(dailyForecast).slice(0, 3);
        const forecastHTMLArr = [`<h3>3-Day Forecast</h3><div class="forecast-cards">`];

        forecastDates.forEach((date) => {
            const entry = dailyForecast[date];
            const forecastDate = new Date(entry.dt * 1000);
            const options = { weekday: "short", month: "short", day: "numeric" };
            const dayString = forecastDate.toLocaleDateString("en-US", options);
            const dayTemp = Math.round(entry.main.temp);
            const dayIcon = `https://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`;
            const dayDesc = entry.weather[0].description;

            forecastHTMLArr.push(`
        <div class="forecast-day">
          <p>${dayString}</p>
          <img src="${dayIcon}" alt="${dayDesc}">
          <p>${dayTemp}&deg;F</p>
        </div>
      `);
        });

        forecastHTMLArr.push(`</div>`);
        forecastContainer.innerHTML = forecastHTMLArr.join("");
    }

    fetchCurrent();
    fetchForecast();
});

document.addEventListener('DOMContentLoaded', function () {
    const weatherIcon = document.getElementById('weather-icon');
    const iconUrl = getWeatherIconUrl();
    if (iconUrl) {
        weatherIcon.src = iconUrl;
    } else {
        weatherIcon.src = "images/see.webp";
    }
});
