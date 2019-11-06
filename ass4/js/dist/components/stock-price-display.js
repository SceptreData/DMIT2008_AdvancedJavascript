var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4\\js\\src\\components\\stock-price-display.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StockDisplay = function StockDisplay(_ref) {
  var stock = _ref.stock;

  //   let { symbol, date, price } = stock.stockData;
  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockData = _React$useState2[0],
      setStockData = _React$useState2[1];

  React.useEffect(function () {
    stock.getStockPrice().then(function (data) {
      return setStockData(_objectSpread({}, data));
    });
  }, []);

  var cash = function cash(val) {
    return (+val).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  return React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, stockData ? React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, React.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Stock Viewer"), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "symbol: ", stockData.symbol, " ", stockData.date), React.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "price: ", stockData.price), React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, React.createElement("button", {
    className: "btn-history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Previous 5 Days")), React.createElement("div", {
    className: "history",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })) : React.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "No stock data received."));
};

export { StockDisplay };