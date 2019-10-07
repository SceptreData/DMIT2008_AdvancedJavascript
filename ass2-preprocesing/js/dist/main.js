"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/*
 * DMIT-2008 Advanced Javascript
 * Assignment 1
 * 
 * David Bergeron
 */
var API_KEY = 'AHGHSQCQOVT6Z8E0';
var API_ENDPOINT = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='; // 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

var form = document.querySelector('form'); // Create a field to display errors.

var errField = document.querySelector('.error'); // Event that triggers on form submission. Checks for errors in the input, then
// retrieves the stock report.

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearError();
  var stock = form.elements.stock.value;

  if (isValidInput(stock)) {
    getStockReport(stock);
  }
});

var renderProject = function renderProject(proj) {
  var project = document.querySelector('.stocker');
  project.innerHTML += Handlebars.templates['stocker'](proj);
};
/*
 * Fetch and display out stock report.
 * @params {string} stock - the stock quote symbol to look up from vantage point.
 */


var getStockReport = function getStockReport(stock) {
  var query = buildStockQuery(stock);
  fetch(query).then(function (res) {
    return res.json();
  }).then(function (stockData) {
    return displayStockReport(stockData);
  });
};
/*
 * This function displays a stock report from provided data.
 * @param {obj} stockData - The data object we retrieved from the API.
 */


var displayStockReport = function displayStockReport(stockData) {
  console.log(stockData);
  var metadata = stockData['Meta Data'],
      quotes = stockData['Time Series (Daily)'];
  var symbol = metadata['2. Symbol'],
      latestQuoteTime = metadata['3. Last Refreshed'];
  console.log(quotes); // Our quotes are stored as Key/Value pairs, with the key for each quote
  // being the time the quote was made.

  var latestQuote = quotes[latestQuoteTime];
  var open = latestQuote['1. open'],
      max = latestQuote['2. high'],
      low = latestQuote['3. low'],
      close = latestQuote['4. close'];
  var change = open - close; // Output our data to the screen, limit to two decimal points.

  symbolField.innerText = symbol.toUpperCase();
  dateField.innerText = convertDate(latestQuoteTime);
  openField.innerText = Number(open).toFixed(2);
  maxField.innerText = Number(max).toFixed(2);
  lowField.innerText = Number(low).toFixed(2);
  closeField.innerText = Number(close).toFixed(2);
  changeField.innerText = change.toFixed(2);
};
/*
 * Convert a date string into a readable format.
 * @param {string} dateStr -  The date string we want to convert.
 */


var convertDate = function convertDate(dateStr) {
  var options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  var date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};
/*
 * Builds our API query with string concatenation
 * @param {string} stock - The stock quote string we want to look up.
 */


var buildStockQuery = function buildStockQuery(stock) {
  return "".concat(API_ENDPOINT).concat(stock, "&interval=5min&apikey=").concat(API_KEY);
};
/* Validates an input stock string.
 * @param {string} str - the Stock symbol string to validate.
 */


var isValidInput = function isValidInput(str) {
  var isValid = true;

  if (isEmptyOrWhiteSpace(str)) {
    logError('Input cannot be blank. Please enter a valid stock symbol.');
    isValid = (_readOnlyError("isValid"), false);
  } else if (containsSpecialChars(str)) {
    logError('Input cannot contain special characters. Enter a valid Stock symbol.');
    isValid = (_readOnlyError("isValid"), false);
  }

  return isValid;
};
/*
 * Logs Errors.
 * @param {string} err - Error message to display
 */


var logError = function logError(err) {
  return errField.innerText = "Error: ".concat(err);
}; // Clears our Error field.


var clearError = function clearError() {
  return errField.innerText = '';
};

var containsSpecialChars = function containsSpecialChars(str) {
  return !str.match(/^[a-z0-9.]+$/i);
}; //  Returns whether or not a str is empty or only whitespace.


var isEmptyOrWhiteSpace = function isEmptyOrWhiteSpace(str) {
  return !str || !str.trim();
};