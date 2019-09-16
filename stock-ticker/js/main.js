const form = document.querySelector("form");
const symbol = document.querySelector(".symbol");
const date = document.querySelector(".date");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

const user = "davidfbergeron";
const API_KEY = "AHGHSQCQOVT6Z8E0";
const API_STR =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=";

form.addEventListener("submit", e => {
  e.preventDefault();
  let stock = form.elements.stock.value;
  getStockReport(stock);
});

function getStockReport(stock) {
  const query = buildStockQuery(stock);
  fetch(query)
    .then(res => res.json())
    .then(stockData => displayStockReport(stockData));
}

function displayStockReport(stockData) {
  const { "Meta Data": meta, "Time Series (5min)": stockQuotes } = stockData;

  const stockSymbol = meta["2. Symbol"].toUpperCase();
  console.log(stockSymbol);
  const latest = meta["3. Last Refreshed"];
  const quote = stockQuotes[latest];
  const quoteDate = latest.split(" ")[0];

  symbol.innerText = stockSymbol;
  date.innerText = quoteDate;
  console.log(quote);
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
