var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4b-react\\js\\src\\app.js";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Stock } from "./stock.js";
import { StockDisplay } from "./components/stock-price-display.js";
import { StockSearch } from "./components/stock-search-form.js";
import { PreviousReports } from "./components/previous-reports.js";

var App = function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      symbol = _React$useState2[0],
      setSymbol = _React$useState2[1];

  var _React$useState3 = React.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      curStock = _React$useState4[0],
      setCurStock = _React$useState4[1];

  var _React$useState5 = React.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      prevReports = _React$useState6[0],
      setPrevReports = _React$useState6[1];

  React.useEffect(function () {
    var reports = _toConsumableArray(prevReports);

    if (reports.length > 5) {
      // Remove the oldest report.
      reports.shift();
    }

    reports.push(prevReports);
    setPrevReports(reports);
  }, [curStock]);
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, React.createElement(StockSearch, {
    submitCallback: setSymbol,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), React.createElement(StockDisplay, {
    stock: new Stock({
      symbol: symbol,
      setCurStock: setCurStock
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), React.createElement(PreviousReports, {
    state: prevReports,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

export { App };