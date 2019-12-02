var _jsxFileName = "/Users/davidbergeron/projects/edu/DMIT2008_AdvancedJavascript/ass4b-react/js/src/app.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { StockDisplay } from "./components/StockDisplay.js";
import { StockSearch } from "./components/StockSearch.js";
import { PreviousReports } from "./components/PreviousReports.js";
import { isEmptyObject } from "./components/util.js";

var App = function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      symbol = _React$useState2[0],
      setSymbol = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      stockData = _React$useState4[0],
      setStockData = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      prevReports = _React$useState6[0],
      setPrevReports = _React$useState6[1];

  React.useEffect(function () {
    function storeReport() {
      var reports = _toConsumableArray(prevReports);

      if (reports.length > 6) {
        // Remove the oldest report.
        reports.shift();
      } // Make sure StockData isn't empty or the same as our last stock.


      var isUnique = !prevReports.some(function (stock) {
        return stock.symbol === symbol;
      });

      if (!isEmptyObject(stockData) && isUnique) {
        reports.push(stockData);
      }

      setPrevReports(reports);
    }

    storeReport();
  }, [stockData]);

  var viewPreviousStock = function viewPreviousStock(prevStock) {
    var stocks = []; // Hm I probably should have just used array.filter

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = prevReports[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var stock = _step.value;

        if (stock.symbol !== prevStock.symbol) {
          stocks.push(stock);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    setPrevReports(stocks);
    setSymbol(prevStock.symbol);
  };

  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, React.createElement(StockSearch, {
    submitCallback: setSymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), React.createElement(StockDisplay, {
    stockData: stockData,
    setStockData: setStockData,
    symbol: symbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), React.createElement(PreviousReports, {
    state: prevReports,
    viewCallback: viewPreviousStock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

export { App };