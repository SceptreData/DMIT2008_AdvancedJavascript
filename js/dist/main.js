import { Stock } from './stock.js';
/** Track the current stock symbol */

var currentStock = null;
/**
 * Display the current price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */

var displayCurrentPriceData = function displayCurrentPriceData(el, data) {
  el.innerHTML = Handlebars.templates['stock-current'](data);
};
/**
 * Display the historical (5-day) price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */


var displayHistoricalData = function displayHistoricalData(el, data) {
  el.innerHTML = Handlebars.templates['stock-history'](data);
};
/**
 * Handle symbol form submit to fetch the desired symbol information.
 * @param {Stock} stock Stock object to fetch the current data for
 */


var fetchCurrentPrice = function fetchCurrentPrice(stock) {
  stock.getStockPrice().then(function (data) {
    return displayCurrentPriceData(document.querySelector('.stock-display'), data);
  });
};
/**
 * Handle view history click for the currently viewed stock.
 * @param {Stock} stock Stock object to fetch the history for
 */


var fetchHistory = function fetchHistory(stock) {
  stock.getStockFiveDayHistory().then(function (data) {
    displayHistoricalData(document.querySelector('.stock-display>.history'), data);
  });
}; // add the submit listener


document.querySelector('.frm.symbol').addEventListener('submit', function (evt) {
  fetchCurrentPrice(currentStock = new Stock({
    symbol: evt.target.elements['symbol'].value
  }));
  evt.preventDefault();
});
document.querySelector('.stock-display').addEventListener('click', function (evt) {
  if (evt.target && evt.target.matches('button.btn-history')) {
    fetchHistory(currentStock);
  }
});