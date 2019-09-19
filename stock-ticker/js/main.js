const form = document.querySelector('form');
const symbolField = document.querySelector('.symbol');
const dateField = document.querySelector('.date');
const openField = document.querySelector('.open');
const maxField = document.querySelector('.max');
const lowField = document.querySelector('.low');
const closeField = document.querySelector('.close');
const changeField = document.querySelector('.change');

const errorField = document.querySelector('.error');

const API_KEY = 'AHGHSQCQOVT6Z8E0';
//  const API_STR =
//    'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
const API_STR =
  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

form.addEventListener('submit', e => {
  e.preventDefault();
  clearError();
  let stock = form.elements.stock.value;
  if (isEmptyOrWhiteSpace(stock)) {
    logError('Input cannot be blank. Please enter a valid stock symbol.');
  } else {
    getStockReport(stock);
  }
});

function getStockReport(stock) {
  const query = buildStockQuery(stock);
  fetch(query)
    .then(res => res.json())
    .then(stockData => displayStockReport(stockData));
}

function displayStockReport(stockData) {
  const { 'Meta Data': metadata, 'Time Series (5min)': quotes } = stockData;
  const {
    ['2. Symbol']: symbol,
    ['3. Last Refreshed']: latestQuoteTime
  } = metadata;

  // Our quotes are stored as Key/Value pairs, with the key for each quote
  // being the time the quote was made.
  latestQuote = quotes[latestQuoteTime];
  const {
    ['1. open']: open,
    ['2. high']: max,
    ['3. low']: low,
    ['4. close']: close
  } = latestQuote;
  const change = open - close;

  // Output our data to the screen.
  symbolField.innerText = symbol;
  dateField.innerText = latestQuoteTime;
  openField.innerText = open;
  maxField.innerText = max;
  lowField.innerText = low;
  closeField.innerText = close;
  changeField.innerText = change;
}

function buildStockQuery(stock) {
  // return `${API_STR}${city}&appid=${API_KEY}`;
  console.log(`${API_STR}${stock}interval=5min&apikey=${API_KEY}`);
  return `${API_STR}${stock}&interval=5min&apikey=${API_KEY}`;
}

function convertDate(dateStr) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  // let date = Date.parse(dateStr);
  // return new Date(dateStr).toUTCString();

  let date = new Date(Date.now());
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

function logError(err) {
  errorField.innerText = err;
}

function clearError() {
  errorField.innerText = '';
}

function isEmptyOrWhiteSpace(str) {
  return !str || !str.trim();
}
