/*
 * DMIT2008 Advanced Javascript
 * LAB THREE
 * David Bergeron
 */

const API_KEY = 'AHGHSQCQOVT6Z8E0';
const ENDPOINT = 'https://www.alphavantage.co/query?function=';

// const HistoryTemplate = Handlebars.templates['History']

/*
 * Represents a Stock object that can fetch and render Stock data.
 * @constructor
 * @param {Object} opts - options to set on the Stock object
 * @param {string} opts.symbol - the stock symbol to look up for the stock object.
 * @param {function} opts.template - the template function to use for rendering our stock.
 */
const Stock = function(opts) {
  this.symbol = '';
  this.stockData = {};
  this.history = [];

  if (opts) {
    Object.assign(this, opts);
  }
};

/**
 * Fetches stock data for the stock object.
 * @returns {Promise} Promise object resolves the retrieved stock data:
 * {open, high, low, close, date}
 */
Stock.prototype.getStock = function() {
  const symbol = this.symbol;

  return fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // log and export all data
      if (data['Error Message']) {
        throw new Error(
          `There was an error fulfilling your request. Be sure you've entered a valid symbol`
        );
      }

      const {
        '01. symbol': symbol,
        '02. open': open,
        '03. high': high,
        '04. low': low,
        '05. price': price,
        '07. latest trading day': date,
        '09. change': change
      } = data['Global Quote'];
      return Object.assign(this.stockData, {
        symbol,
        open,
        high,
        low,
        price,
        date,
        change
      });
    })
    .catch(err => {
      alert(`There was an error: ${err}`);
    });
};

Stock.prototype.render = function(targetElt) {
  const StockTemplate = Handlebars.templates['stock-current'];
  this.getStock().then(stockData => {
    targetElt.innerHTML = StockTemplate(stockData);
  });
};

Stock.prototype.isEmpty = function() {
  return Object.entries(this.stockData).length === 0;
};

export { Stock };
