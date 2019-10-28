/*
 * DMIT2008 Advanced Javascript
 * LAB THREE
 * David Bergeron
 */
var API_KEY = 'AHGHSQCQOVT6Z8E0';
var ENDPOINT = 'https://www.alphavantage.co/query?function=';
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
        price = _data$GlobalQuote['05. price'],
        date = _data$GlobalQuote['07. latest trading day'];
    return Object.assign(_this.stockData, {
      symbol: symbol,
      price: price,
      date: date
    });
  })["catch"](function (err) {
    alert("There was an error: ".concat(err));
  });
};

Stock.prototype.getHistory = function () {
  var _this2 = this;

  return fetch("".concat(ENDPOINT, "TIME_SERIES_DAILY&symbol=").concat(this.symbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // log and export all data
    if (data['Error Message']) {
      throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
    } // send only the most recent 5 days of data


    var fiveDays = Object.entries(data['Time Series (Daily)']).slice(0, 5);
    var history = fiveDays.map(function (day) {
      var _day$ = day[1],
          open = _day$['1. open'],
          high = _day$['2. high'],
          low = _day$['3. low'],
          close = _day$['4. close'];
      return {
        open: open,
        high: high,
        low: low,
        close: close,
        date: day[0]
      };
    });
    return Object.assign(_this2.stockData, {
      history: history
    });
  })["catch"](function (err) {
    console.log(err);
    alert("There was an error: ".concat(err));
  });
};

Stock.prototype.getCurrentAndFiveDayHistory = function () {
  var _this3 = this;

  return this.getStock().then(function () {
    return _this3.getHistory();
  });
};

Stock.prototype.isEmpty = function () {
  return Object.entries(this.stockData).length === 0;
};

export { Stock };