/**
 * Display the current price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */
const displayCurrentPriceData = (el, data) => {
  let {
    "01. symbol": symbol,
    "05. price": price,
    "07. latest trading day": date
  } = data["Global Quote"];

  el.innerHTML = Handlebars.templates["stock-current"]({ symbol, price, date });
};

/**
 * Display the historical (5-day) price and other information for a stock.
 * @param {HTMLElement} el DOM element parent for the display of the data.
 * @param {Object} data The returned stock symbol data
 */
const displayHistoricalData = (el, data) => {
  // modify data to contain an array of day objects
  let fiveDays = data.map(day => {
    let {
      "1. open": open,
      "2. high": high,
      "3. low": low,
      "4. close": close
    } = day[1];

    return { open, high, low, close, date: day[0] };
  });

  el.innerHTML = Handlebars.templates["stock-history"]({ history: fiveDays });
};

/**
 * Handle symbol form submit to fetch the desired symbol information.
 * @param {Event} evt Event object for this listener function
 */
const fetchCurrentPrice = evt => {
  evt.preventDefault();
  // get the symbol
  const symbol = evt.target.elements["symbol"].value;

  fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      // log and export all data
      if (data["Error Message"]) {
        throw new Error(
          `There was an error fulfilling your request. Be sure you've entered a valid symbol`
        );
      }
      // good symbol
      currentSymbol = symbol;
      displayCurrentPriceData(document.querySelector(".stock-display"), data);
    })
    .catch(err => {
      alert(`There was an error: ${err}`);
    });
};

/**
 * Handle view history click for the currently viewed stock.
 * @param {Event} evt Event object for this listener function
 */
const fetchHistory = evt => {
  // TODO: error check for currentSymbol value
  fetch(
    `${ENDPOINT}TIME_SERIES_DAILY&symbol=${currentSymbol}&apikey=${API_KEY}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      // log and export all data
      if (data["Error Message"]) {
        throw new Error(
          `There was an error fulfilling your request. Be sure you've entered a valid symbol`
        );
      }
      // send only the most recent 5 days of data
      let fiveDays = Object.entries(data["Time Series (Daily)"]).slice(0, 5);
      displayHistoricalData(
        document.querySelector(".stock-display>.history"),
        fiveDays
      );
    })
    .catch(err => {
      alert(`There was an error: ${err}`);
    });
};

// add the submit listener
document
  .querySelector(".frm.symbol")
  .addEventListener("submit", fetchCurrentPrice);
document.querySelector(".stock-display").addEventListener("click", evt => {
  if (evt.target && evt.target.matches("button.btn-history")) {
    fetchHistory(evt);
  }
});
