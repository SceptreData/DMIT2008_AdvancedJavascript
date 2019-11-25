var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4b-react\\js\\src\\components\\previous-reports.js";

var PreviousReports = function PreviousReports(_ref) {
  var state = _ref.state;
  return React.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, state.length > 0 && state.map(function (stock) {
    return React.createElement("li", {
      key: stock.symbol,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, React.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, stock.symbol), React.createElement("div", {
      className: "prev-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, stock.price), React.createElement("div", {
      className: "prev-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, stock.date));
  }));
};

export { PreviousReports };