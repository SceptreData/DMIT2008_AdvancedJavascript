const form = document.querySelector("form");

const user = "davidfbergeron";
const API_KEY = "97960d8c86f9f5dff085d503974d3063";
const API_STR = "https://api.openweathermap.org/data/2.5/";
const API_IMG = "http://openweathermap.org/img/wn/"

let weatherLocation = document.querySelector(".location");
let weatherDate = document.querySelector(".date");
let weatherConditions = document.querySelector(".conditions");
let weatherTemp = document.querySelector(".temp");
let sunriseTime = document.querySelector(".sunrise");
let sunsetTime = document.querySelector(".sunset");

let forecast = document.querySelector('.forecast')

form.addEventListener("submit", e => {
  e.preventDefault();
  let city = form.elements.location.value;
  getWeatherFor(city);
});

function getCityQuery(city) {
  return `${API_STR}weather?q=${city}&units=metric&appid=${API_KEY}`;
}

function getForecastQuery(city) {
  return `${API_STR}forecast?q=${city}&units=metric&appid=${API_KEY}`
}

function getWeatherFor(city) {
  return fetch(getCityQuery(city))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      buildWeatherReport(data);
      return fetch(getForecastQuery(city))
        .then(res => res.json())
        .then(forecast => {
          buildForecastList(forecast.list);
        })
    });
}

function buildWeatherReport(city) {
  weatherLocation.innerText = city.name;
  weatherDate.innerText = new Date(city.dt);
  weatherConditions.innerText = city.weather[0].description;

  weatherTemp.innerText = `${city.main.temp}°C`;

  let { sunrise, sunset } = city.sys;
  sunriseTime.innerText = getClockTime(new Date(sunrise));
  sunsetTime.innerText = getClockTime(new Date(sunset));
}

function buildForecastList(forecastList){
  console.log(forecastList)
  for (let weatherEvent of forecastList){
    let [date, time] = weatherEvent.dt_txt.split(" ");
    let {temp} = weatherEvent.main;
    let {description, icon} = weatherEvent.weather[0]

    forecast.innerHTML += `
      <li>
        <div><time>${time}</time></div>
        <img src="${API_IMG}${icon}@2x.png" alt="Weather Condition Image"/>
        <div class="forecast-temp"> ${Math.round(temp)}°C</div>
        <div class="forecast-desc">${description}</div>
      </li>
    `
  }
}

// function convertKelvinToCelsius(kelvin) {
//   if (kelvin < 0) {
//     return "below absolute zero (0 K)";
//   } else {
//     return Math.floor(kelvin - 273.15);
//   }
// }

function getClockTime(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();
  return `${hours}:${mins}`;
}
