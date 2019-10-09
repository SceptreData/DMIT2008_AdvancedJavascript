/*
 * DMIT-2008 Advanced Javascript
 * Assignment 1
 *
 * David Bergeron
 */

const API_KEY = 'AHGHSQCQOVT6Z8E0';
const API_ENDPOINT =
  'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
// 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=';

const form = document.querySelector('form');

// Create a field to display errors.
const errField = document.querySelector('.error');

Handlebars.registerPartial('history', Handlebars.templates['history']);

Handlebars.registerHelper("cash", str => {
  const cashVal = parseFloat(str)
  return  cashVal.toLocaleString("en-US", {style: "currency", currency: "USD"})
})

Handlebars.registerHelper("day", dateStr => {
  const date = new Date(dateStr);
  return (date.getDate() < 10 ? '0' : '') + date.getDate()
})

Handlebars.registerHelper("month", dateStr => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('default', {month: 'short'});
})

// Event that triggers on form submission. Checks for errors in the input, then
// retrieves the stock report.
form.addEventListener('submit', e => {
  e.preventDefault();

  clearError();
  let stock = form.elements.stock.value;
  if (isValidInput(stock)) {
    getStockReport(stock);
  }
});



const renderReport = stocks => {
  let report = document.querySelector('.stock-report');
  report.innerHTML += Handlebars.templates['stock'](stocks);

  const btn = report.querySelector('.reveal-history-btn')
  btn.addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('.five-day-report').classList.toggle('hidden')
  })
};

/*
 * Fetch and display out stock report.
 * @params {string} stock - the stock quote symbol to look up from vantage point.
 */
const getStockReport = stock => {
  const query = buildStockQuery(stock);
  fetch(query)
    .then(res => res.json())
    .then(stockData => displayStockReport(stockData));
};

const buildStockObj = (date, stock) => {
  const {
    ['1. open']: open,
    ['2. high']: max,
    ['3. low']: low,
    ['4. close']: close
  } = stock;
  const change = open - close;

  return { date, open, max, low, close, change };
};

const parseStockQuotes = (symbol, quotes, n) => {
  const sortedKeys = Object.keys(quotes).sort((a, b) => {
    return new Date(b) - new Date(a);
  });

  const parsedQuotes = [];
  for (let i = 0; i < n; i++) {
    const date = sortedKeys[i];
    const stock = quotes[date];
    const stockObj = buildStockObj(date, stock);
    stockObj.symbol = symbol;

    parsedQuotes.push(stockObj);
  }
  return parsedQuotes;
};
/*
 * This function displays a stock report from provided data.
 * @param {obj} stockData - The data object we retrieved from the API.
 */
const displayStockReport = stockData => {
  const { 'Meta Data': metadata, 'Time Series (Daily)': quotes } = stockData;
  const {
    ['2. Symbol']: symbol,
    ['3. Last Refreshed']: latestQuoteTime
  } = metadata;

  const history = parseStockQuotes(symbol, quotes, 6);
  const latestQuote = history.shift();
  renderReport({ ...latestQuote, history });

  // Output our data to the screen, limit to two decimal points.
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
/*
 * Logs Errors.
 * @param {string} err - Error message to display
 */
const logError = err => (errField.innerText = `Error: ${err}`);

// Clears our Error field.
const clearError = () => (errField.innerText = '');

const containsSpecialChars = str => !str.match(/^[a-z0-9.]+$/i);

//  Returns whether or not a str is empty or only whitespace.
const isEmptyOrWhiteSpace = str => !str || !str.trim();
