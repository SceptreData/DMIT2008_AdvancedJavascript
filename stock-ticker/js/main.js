const form = document.querySelector("form");

const user = "davidfbergeron";
const API_KEY = "AHGHSQCQOVT6Z8E0";
const API_STR =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";

form.addEventListener("submit", e => {
  e.preventDefault();
  let city = form.elements.location.value;
  getStockReport(city);
});

function getStockReport(stock) {
  return fetch(buildStockQuery(stock))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // buildWeatherReport(data);
    });
}

function buildStockQuery(stock) {
  // return `${API_STR}${city}&appid=${API_KEY}`;
  console.log(`${API_STR}${stock}interval=5min&apikey=${API_KEY}`);
  return `${API_STR}${stock}&interval=5min&apikey=${API_KEY}`;
}

// function buildWeatherReport(city) {
//   weatherLocation.innerText = city.name;
//   weatherDate.innerText = new Date(city.dt);
//   weatherConditions.innerText = city.weather[0].description;

//   let curTemp = convertKelvinToCelsius(city.main.temp);
//   weatherTemp.innerText = `${curTemp}°C`;

//   let { sunrise, sunset } = city.sys;
//   sunriseTime.innerText = getClockTime(new Date(sunrise));
//   sunsetTime.innerText = getClockTime(new Date(sunset));
// }

function getClockTime(date) {
  let hours = date.getHours();
  let mins = date.getMinutes();
  return `${hours}:${mins}`;
}
