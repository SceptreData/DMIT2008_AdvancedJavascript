/**
 * Display the current price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */
var displayCurrentPriceData = function displayCurrentPriceData(el, data) {
  var _data$GlobalQuote = data["Global Quote"],
      symbol = _data$GlobalQuote["01. symbol"],
      price = _data$GlobalQuote["05. price"],
      date = _data$GlobalQuote["07. latest trading day"];
  el.innerHTML = Handlebars.templates["stock-current"]({
    symbol: symbol,
    price: price,
    date: date
  });
};
/**
 * Display the historical (5-day) price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */


var displayHistoricalData = function displayHistoricalData(el, data) {
  // modify data to contain an array of day objects
  var fiveDays = data.map(function (day) {
    var _day$ = day[1],
        open = _day$["1. open"],
        high = _day$["2. high"],
        low = _day$["3. low"],
        close = _day$["4. close"];
    return {
      open: open,
      high: high,
      low: low,
      close: close,
      date: day[0]
    };
  });
  el.innerHTML = Handlebars.templates["stock-history"]({
    history: fiveDays
  });
};
/**
 * Handle symbol form submit to fetch the desired symbol information.
 * @param {Event} evt Event object for this listener function
 */


var fetchCurrentPrice = function fetchCurrentPrice(evt) {
  evt.preventDefault(); // get the symbol

  var symbol = evt.target.elements["symbol"].value;
  fetch("".concat(ENDPOINT, "GLOBAL_QUOTE&symbol=").concat(symbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // log and export all data
    if (data["Error Message"]) {
      throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
    } // good symbol


    currentSymbol = symbol;
    displayCurrentPriceData(document.querySelector(".stock-display"), data);
  })["catch"](function (err) {
    alert("There was an error: ".concat(err));
  });
};
/**
 * Handle view history click for the currently viewed stock.
 * @param {Event} evt Event object for this listener function
 */


var fetchHistory = function fetchHistory(evt) {
  // TODO: error check for currentSymbol value
  fetch("".concat(ENDPOINT, "TIME_SERIES_DAILY&symbol=").concat(currentSymbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    // log and export all data
    if (data["Error Message"]) {
      throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
    } // send only the most recent 5 days of data


    var fiveDays = Object.entries(data["Time Series (Daily)"]).slice(0, 5);
    displayHistoricalData(document.querySelector(".stock-display>.history"), fiveDays);
  })["catch"](function (err) {
    alert("There was an error: ".concat(err));
  });
}; // add the submit listener


document.querySelector(".frm.symbol").addEventListener("submit", fetchCurrentPrice);
document.querySelector(".stock-display").addEventListener("click", function (evt) {
  if (evt.target && evt.target.matches("button.btn-history")) {
    fetchHistory(evt);
  }
});