"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * DMIT-2008 Advanced Javascript
 * Assignment 1
 *
 * David Bergeron
 */
var API_KEY = 'AHGHSQCQOVT6Z8E0';
var API_ENDPOINT = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='; // 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

var form = document.querySelector('form');
var historyBtn = document.querySelector('.reveal-history-btn'); // Create a field to display errors.

var errField = document.querySelector('.error');
Handlebars.registerPartial('history', Handlebars.templates['history']);
Handlebars.registerHelper("cash", function (str) {
  var cashVal = parseFloat(str);
  return cashVal.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
});
Handlebars.registerHelper("day", function (dateStr) {
  var date = new Date(dateStr);
  return (date.getDate() < 10 ? '0' : '') + date.getDate();
});
Handlebars.registerHelper("month", function (dateStr) {
  var date = new Date(dateStr);
  return date.toLocaleDateString('default', {
    month: 'short'
  });
});
historyBtn.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.five-day-report').classList.toggle('hidden');
}); // Event that triggers on form submission. Checks for errors in the input, then
// retrieves the stock report.

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearError();
  var stock = form.elements.stock.value;

  if (isValidInput(stock)) {
    getStockReport(stock);
  }
});

var renderReport = function renderReport(stocks) {
  var report = document.querySelector('.stock-report');
  report.innerHTML += Handlebars.templates['stock'](stocks);
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

var buildStockObj = function buildStockObj(date, stock) {
  var open = stock['1. open'],
      max = stock['2. high'],
      low = stock['3. low'],
      close = stock['4. close'];
  var change = open - close;
  return {
    date: date,
    open: open,
    max: max,
    low: low,
    close: close,
    change: change
  };
};

var parseStockQuotes = function parseStockQuotes(symbol, quotes, n) {
  var sortedKeys = Object.keys(quotes).sort(function (a, b) {
    return new Date(b) - new Date(a);
  });
  var parsedQuotes = [];

  for (var i = 0; i < n; i++) {
    var date = sortedKeys[i];
    var stock = quotes[date];
    var stockObj = buildStockObj(date, stock);
    stockObj.symbol = symbol;
    parsedQuotes.push(stockObj);
  }

  return parsedQuotes;
};
/*
 * This function displays a stock report from provided data.
 * @param {obj} stockData - The data object we retrieved from the API.
 */


var displayStockReport = function displayStockReport(stockData) {
  var metadata = stockData['Meta Data'],
      quotes = stockData['Time Series (Daily)'];
  var symbol = metadata['2. Symbol'],
      latestQuoteTime = metadata['3. Last Refreshed'];
  var history = parseStockQuotes(symbol, quotes, 6);
  var latestQuote = history.shift();
  renderReport(_objectSpread({}, latestQuote, {
    history: history
  })); // Output our data to the screen, limit to two decimal points.
  // symbolField.innerText = symbol.toUpperCase();
  // dateField.innerText = convertDate(latestQuoteTime);
  // openField.innerText = Number(open).toFixed(2);
  // maxField.innerText = Number(max).toFixed(2);
  // lowField.innerText = Number(low).toFixed(2);
  // closeField.innerText = Number(close).toFixed(2);
  // changeField.innerText = change.toFixed(2);
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