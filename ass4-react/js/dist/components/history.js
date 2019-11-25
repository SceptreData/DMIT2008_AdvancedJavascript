var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4\\js\\src\\components\\history.js";

var cash = function cash(value) {
  return +value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

var History = function History(_ref) {
  var data = _ref.data;
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.map(function (day) {
    return React.createElement("div", {
      className: "day-details",
      key: day.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, React.createElement("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Date: ", day.date), React.createElement("div", {
      className: "details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Open: ", cash(day.open), "High: ", cash(day.high), "Low: ", cash(day.low), "Close: ", cash(day.close)));
  }));
};

export { History };