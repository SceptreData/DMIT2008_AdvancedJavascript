var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4\\js\\src\\components\\stock-price-display.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { History } from "./history.js";

var StockDisplay = function StockDisplay(_ref) {
  var stock = _ref.stock;

  //   let { symbol, date, price } = stock.stockData;
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockData = _React$useState2[0],
      setStockData = _React$useState2[1];

  React.useEffect(function () {
    if (stock.symbol) {
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
  }, [stock]);

  var cash = function cash(val) {
    return (+val).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  var handleClick = function handleClick(e) {
    if (!stockData.history) {
      stock.getStockFiveDayHistory().then(function (data) {
        setStockData(_objectSpread({}, stock.stockData));
      });
    }
  };

  return React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, stockData.symbol ? React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, React.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Stock Viewer"), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "symbol: ", stockData.symbol, " ", stockData.date), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "price: ", stockData.price), React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, React.createElement("button", {
    className: "btn-history",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Previous 5 Days")), stockData.history && React.createElement("div", {
    className: "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, React.createElement(History, {
    data: stockData.history,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))) : React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, React.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "No stock data received."), stockData.error && React.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, stockData.error)));
};

export { StockDisplay };