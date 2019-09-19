/*
 * DMIT-2008 Advanced Javascript
 * Assignment 1
 * 
 * David Bergeron
 */

const API_KEY = 'AHGHSQCQOVT6Z8E0';
const API_ENDPOINT =
  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

const form = document.querySelector('form');

// Grab all the divs we will use to display stock info.
const symbolField = document.querySelector('.symbol');
const dateField = document.querySelector('.date');
const openField = document.querySelector('.open');
const maxField = document.querySelector('.max');
const lowField = document.querySelector('.low');
const closeField = document.querySelector('.close');
const changeField = document.querySelector('.change');

// Create a field to display errors.
const errField = document.querySelector('.error');


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


const getStockReport = stock => {
  const query = buildStockQuery(stock);
  fetch(query)
    .then(res => res.json())
    .then(stockData => displayStockReport(stockData));
}


const displayStockReport = stockData => {
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

  // Output our data to the screen, limit to two decimal points.
  symbolField.innerText = symbol.toUpperCase();
  dateField.innerText = latestQuoteTime;
  openField.innerText = Number(open).toFixed(2);
  maxField.innerText = Number(max).toFixed(2);
  lowField.innerText = Number(low).toFixed(2);
  closeField.innerText = Number(close).toFixed(2);
  changeField.innerText = change.toFixed(2);
}


const convertDate = dateStr => {
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


const buildStockQuery = stock => {
  return `${API_ENDPOINT}${stock}&interval=5min&apikey=${API_KEY}`;
}


const logError = err => errField.innerText = `Error: ${err}`;


const clearError = ()=> errField.innerText = '';


const isEmptyOrWhiteSpace = str => !str || !str.trim();