import {Stock} from './stock.js';
/** Track the current stock symbol */
let currentStock = null;

/**
 * Display the current price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */
const displayCurrentPriceData = (el, data) => {
    el.innerHTML = Handlebars.templates['stock-current'](data);
};

/**
 * Display the historical (5-day) price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */
const displayHistoricalData = (el, data) => {
    el.innerHTML = Handlebars.templates['stock-history'](data);
};

/**
 * Handle symbol form submit to fetch the desired symbol information.
 * @param {Stock} stock Stock object to fetch the current data for
 */
const fetchCurrentPrice = (stock) => {
    stock
        .getStockPrice()
        .then(data => displayCurrentPriceData(document.querySelector('.stock-display'), data));
};

/**
 * Handle view history click for the currently viewed stock.
 * @param {Stock} stock Stock object to fetch the history for
 */
const fetchHistory = (stock) => {
    stock
        .getStockFiveDayHistory()
        .then(data => {
            displayHistoricalData(document.querySelector('.stock-display>.history'), data);
        });
};

// add the submit listener
document
    .querySelector('.frm.symbol')
    .addEventListener('submit', evt => {
        fetchCurrentPrice(currentStock = new Stock({symbol: evt.target.elements['symbol'].value}));
        evt.preventDefault();
    });
document
    .querySelector('.stock-display')
    .addEventListener('click', evt => {
        if (evt.target && evt.target.matches('button.btn-history')) {
            fetchHistory(currentStock);
        }
    });