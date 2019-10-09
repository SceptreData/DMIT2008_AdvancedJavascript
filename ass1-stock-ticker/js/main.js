(function () {
  "use strict";

  function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

  /*
   * DMIT-2008 Advanced Javascript
   * Assignment 1
   * STOCK TICKER
   *
   * David Bergeron
   */
  var API_KEY = 'AHGHSQCQOVT6Z8E0';
  var API_ENDPOINT = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';
  var form = document.querySelector('form'); // Grab all the divs we will use to display stock info.

  var symbolField = document.querySelector('.symbol');
  var dateField = document.querySelector('.date');
  var openField = document.querySelector('.open');
  var maxField = document.querySelector('.max');
  var lowField = document.querySelector('.low');
  var closeField = document.querySelector('.close');
  var changeField = document.querySelector('.change'); // Create a field to display errors.

  var errField = document.querySelector('.error');
  /*
   * Register Event listener for the submit event.
   */

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    resetForm();
    var stock = form.elements.stock.value;

    if (isValidInput(stock)) {
      getStockReport(stock);
    }
  });
  /*
   * Fetch and display our stock report.
   * @params {string} stock - the stock quote symbol to look up from vantage point.
   */

  var getStockReport = function getStockReport(stock) {
    var query = buildStockQuery(stock);
    fetch(query).then(function (res) {
      return res.json();
    }).then(function (stockData) {
      if (stockData['Error Message']) {
        logError('Invalid Symbol. Please enter a valid stock symbol.');
      } else {
        displayStockReport(stockData);
      }
    });
  };
  /*
   * This function displays a stock report from provided data.
   * @param {obj} stockData - The data object we retrieved from the API.
   */


  var displayStockReport = function displayStockReport(stockData) {
    var metadata = stockData['Meta Data'],
        quotes = stockData['Time Series (5min)'];
    var symbol = metadata['2. Symbol'],
        latestQuoteTime = metadata['3. Last Refreshed']; // quotes are stored as Key/Value pairs, with the key for each quote
    // being the time the quote was made.

    latestQuote = quotes[latestQuoteTime];
    var _latestQuote = latestQuote,
        open = _latestQuote['1. open'],
        max = _latestQuote['2. high'],
        low = _latestQuote['3. low'],
        close = _latestQuote['4. close'];
    var change = open - close; // Output our data to the screen, limit to two decimal points.

    symbolField.innerText = symbol.toUpperCase();
    dateField.innerText = convertDate(latestQuoteTime);
    openField.innerText = "$".concat(Number(open).toFixed(2));
    maxField.innerText = "$".concat(Number(max).toFixed(2));
    lowField.innerText = "$".concat(Number(low).toFixed(2));
    closeField.innerText = "$".concat(Number(close).toFixed(2));
    changeField.innerText = "$".concat(change.toFixed(2));
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
  }; // Resets our form to initial state.


  var resetForm = function resetForm() {
    clearError();
    clearForm();
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
   * Logs Errors.
   * @param {string} err - Error message to display
   */


  var logError = function logError(err) {
    return errField.innerText = "Error: ".concat(err);
  }; // Clears our Error field.


  var clearError = function clearError() {
    return errField.innerText = '';
  }; // Clear out our form


  var clearForm = function clearForm() {
    var spans = Array.from(document.querySelectorAll('.details span'));
    spans.map(function (span) {
      return span.innerText = '';
    });
  };

  var containsSpecialChars = function containsSpecialChars(str) {
    return !str.match(/^[a-z0-9.]+$/i);
  }; //  Returns whether or not a str is empty or only whitespace.


  var isEmptyOrWhiteSpace = function isEmptyOrWhiteSpace(str) {
    return !str || !str.trim();
  };
})();
