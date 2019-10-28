/*
 * DMIT2008 Advanced Javascript
 * LAB THREE
 * David Bergeron
 */

const API_KEY = 'AHGHSQCQOVT6Z8E0';
const ENDPOINT = 'https://www.alphavantage.co/query?function=';

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
        '05. price': price,
        '07. latest trading day': date
      } = data['Global Quote'];

      return Object.assign(this.stockData, {
        symbol,
        price,
        date
      });
    })
    .catch(err => {
      alert(`There was an error: ${err}`);
    });
};

Stock.prototype.getHistory = function() {
  return fetch(
    `${ENDPOINT}TIME_SERIES_DAILY&symbol=${this.symbol}&apikey=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      // log and export all data
      if (data['Error Message']) {
        throw new Error(
          `There was an error fulfilling your request. Be sure you've entered a valid symbol`
        );
      }

      // send only the most recent 5 days of data
      const fiveDays = Object.entries(data['Time Series (Daily)']).slice(0, 5);
      const history = fiveDays.map(day => {
        let {
          '1. open': open,
          '2. high': high,
          '3. low': low,
          '4. close': close
        } = day[1];

        return { open, high, low, close, date: day[0] };
      });

      return Object.assign(this.stockData, { history });
    })
    .catch(err => {
      console.log(err);
      alert(`There was an error: ${err}`);
    });
};

Stock.prototype.getCurrentAndFiveDayHistory = function() {
  return this.getStock().then(() => {
    return this.getHistory();
  });
};

Stock.prototype.isEmpty = function() {
  return Object.entries(this.stockData).length === 0;
};

export { Stock };
