var _jsxFileName = "/Users/davidbergeron/projects/edu/DMIT2008_AdvancedJavascript/ass4b-react/js/src/components/StockDisplay.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { History } from "./History.js";
import { Stock } from "../stock.js";
import { toCash } from "./util.js";

var StockDisplay = function StockDisplay(_ref) {
  var stockData = _ref.stockData,
      setStockData = _ref.setStockData,
      symbol = _ref.symbol;
  React.useEffect(function () {
    if (symbol) {
      var stock = new Stock({
        symbol: symbol
      });
      stock.getStockPrice().then(function (data) {
        if (data instanceof Object) {
          setStockData(_objectSpread({}, data));
        } else {
          setStockData({
            error: data
          });
        }
      });
    }
  }, [symbol]);

  var handleHistoryClick = function handleHistoryClick(e) {
    if (!stockData.history) {
      var stock = new Stock({
        symbol: stockData.symbol
      });
      stock.getStockFiveDayHistory().then(function (history) {
        setStockData(_objectSpread({}, stockData, {}, history));
      });
    }
  };

  return React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, stockData && stockData.symbol ? React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, React.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Stock Viewer"), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, React.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, stockData.date)), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Symbol: ", React.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, stockData.symbol)), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Price: ", React.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, toCash(stockData.price))), React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, React.createElement("button", {
    className: "btn-history",
    onClick: handleHistoryClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Previous 5 Days")), stockData.history && React.createElement("div", {
    className: "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, React.createElement(History, {
    data: stockData.history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))) : React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, React.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "No stock data received."), stockData.error && React.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, stockData.error)));
};

export { StockDisplay };