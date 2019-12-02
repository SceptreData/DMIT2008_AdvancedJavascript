var _jsxFileName = "/Users/davidbergeron/projects/edu/DMIT2008_AdvancedJavascript/ass4b-react/js/src/components/previous-reports.js";

var PreviousReports = function PreviousReports(_ref) {
  var state = _ref.state;
  var prevStocks = state.map(function (stock) {
    return React.createElement("li", {
      key: stock.symbol,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      __self: this
    }, React.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, stock.symbol), React.createElement("div", {
      className: "prev-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, stock.price), React.createElement("div", {
      className: "prev-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, stock.date));
  });
  if (prevStocks.length == 0) return null;
  return React.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, prevStocks);
};

export { PreviousReports };