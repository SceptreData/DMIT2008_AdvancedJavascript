/*
 * DMIT2008 Advanced Javascript
 * LAB THREE
 * David Bergeron
 */
var API_KEY = 'AHGHSQCQOVT6Z8E0';
var ENDPOINT = 'https://www.alphavantage.co/query?function='; // const HistoryTemplate = Handlebars.templates['History']

/*
 * Represents a Stock object that can fetch and render Stock data.
 * @constructor
 * @param {Object} opts - options to set on the Stock object
 * @param {string} opts.symbol - the stock symbol to look up for the stock object.
 * @param {function} opts.template - the template function to use for rendering our stock.
 */

var Stock = function Stock(opts) {
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


Stock.prototype.getStock = function () {
  var _this = this;

  var symbol = this.symbol;
  return fetch("".concat(ENDPOINT, "GLOBAL_QUOTE&symbol=").concat(symbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // log and export all data
    if (data['Error Message']) {
      throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
    }

    var _data$GlobalQuote = data['Global Quote'],
        symbol = _data$GlobalQuote['01. symbol'],
        open = _data$GlobalQuote['02. open'],
        high = _data$GlobalQuote['03. high'],
        low = _data$GlobalQuote['04. low'],
        price = _data$GlobalQuote['05. price'],
        date = _data$GlobalQuote['07. latest trading day'],
        change = _data$GlobalQuote['09. change'];
    return Object.assign(_this.stockData, {
      symbol: symbol,
      open: open,
      high: high,
      low: low,
      price: price,
      date: date,
      change: change
    });
  })["catch"](function (err) {
    alert("There was an error: ".concat(err));
  });
};

Stock.prototype.render = function (targetElt) {
  var StockTemplate = Handlebars.templates['stock-current'];
  this.getStock().then(function (stockData) {
    targetElt.innerHTML = StockTemplate(stockData);
  });
};

Stock.prototype.isEmpty = function () {
  return Object.entries(this.stockData).length === 0;
};

export { Stock };