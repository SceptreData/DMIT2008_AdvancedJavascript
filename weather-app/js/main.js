const form = document.querySelector("form");

const user = "davidfbergeron";
const API_KEY = "97960d8c86f9f5dff085d503974d3063";
const API_STR = "https://api.openweathermap.org/data/2.5/weather?q=";

let weatherLocation = document.querySelector(".location");
let weatherDate = document.querySelector(".date");
let weatherConditions = document.querySelector(".conditions");
let weatherTemp = document.querySelector(".temp");
let sunriseTime = document.querySelector(".sunrise");
let sunsetTime = document.querySelector(".sunset");

form.addEventListener("submit", e => {
  e.preventDefault();
  let city = form.elements.location.value;
  getWeatherFor(city);
});

function getCityQuery(city) {
  return `${API_STR}${city}&appid=${API_KEY}`;
}

function getWeatherFor(city) {
  return fetch(getCityQuery(city))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      buildWeatherReport(data);
    });
}

function buildWeatherReport(city) {
  weatherLocation.innerText = city.name;
  weatherDate.innerText = new Date(city.dt);
  weatherConditions.innerText = city.weather[0].description;

  let curTemp = convertKelvinToCelsius(city.main.temp);
  weatherTemp.innerText = `${curTemp}°C`;

  let { sunrise, sunset } = city.sys;
  sunriseTime.innerText = getClockTime(new Date(sunrise));
  sunsetTime.innerText = getClockTime(new Date(sunset));
}

function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return Math.floor(kelvin - 273.15);
  }
}

function getClockTime(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();
  return `${hours}:${mins}`;
}
