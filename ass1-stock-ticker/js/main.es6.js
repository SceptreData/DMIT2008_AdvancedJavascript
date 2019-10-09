/*
 * DMIT-2008 Advanced Javascript
 * Assignment 1
 * STOCK TICKER
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

/*
 * Register Event listener for the submit event.
 */
form.addEventListener('submit', e => {
  e.preventDefault();

  resetForm();
  let stock = form.elements.stock.value;
  if (isValidInput(stock)) {
    getStockReport(stock);
  }
});

/*
 * Fetch and display our stock report.
 * @params {string} stock - the stock quote symbol to look up from vantage point.
 */
const getStockReport = stock => {
  const query = buildStockQuery(stock);
  fetch(query)
    .then(res => res.json())
    .then(stockData => {
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
const displayStockReport = stockData => {
  const { 'Meta Data': metadata, 'Time Series (5min)': quotes } = stockData;
  const {
    ['2. Symbol']: symbol,
    ['3. Last Refreshed']: latestQuoteTime
  } = metadata;

  // quotes are stored as Key/Value pairs, with the key for each quote
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
  dateField.innerText = convertDate(latestQuoteTime);
  openField.innerText = `$${Number(open).toFixed(2)}`;
  maxField.innerText = `$${Number(max).toFixed(2)}`;
  lowField.innerText = `$${Number(low).toFixed(2)}`;
  closeField.innerText = `$${Number(close).toFixed(2)}`;
  changeField.innerText = `$${change.toFixed(2)}`;
};

/*
 * Builds our API query with string concatenation
 * @param {string} stock - The stock quote string we want to look up.
 */
const buildStockQuery = stock => {
  return `${API_ENDPOINT}${stock}&interval=5min&apikey=${API_KEY}`;
};

/* Validates an input stock string.
 * @param {string} str - the Stock symbol string to validate.
 */
const isValidInput = str => {
  const isValid = true;
  if (isEmptyOrWhiteSpace(str)) {
    logError('Input cannot be blank. Please enter a valid stock symbol.');
    isValid = false;
  } else if (containsSpecialChars(str)) {
    logError(
      'Input cannot contain special characters. Enter a valid Stock symbol.'
    );
    isValid = false;
  }

  return isValid;
};

// Resets our form to initial state.
const resetForm = () => {
  clearError();
  clearForm();
};

/*
 * Convert a date string into a readable format.
 * @param {string} dateStr -  The date string we want to convert.
 */
const convertDate = dateStr => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  let date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/*
 * Logs Errors.
 * @param {string} err - Error message to display
 */
const logError = err => (errField.innerText = `Error: ${err}`);

// Clears our Error field.
const clearError = () => (errField.innerText = '');

// Clear out our form
const clearForm = () => {
  let spans = Array.from(document.querySelectorAll('.details span'));
  spans.map(span => (span.innerText = ''));
};

const containsSpecialChars = str => !str.match(/^[a-z0-9.]+$/i);

//  Returns whether or not a str is empty or only whitespace.
const isEmptyOrWhiteSpace = str => !str || !str.trim();
