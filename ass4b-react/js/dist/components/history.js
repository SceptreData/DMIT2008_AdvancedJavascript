var _jsxFileName = "/Users/davidbergeron/projects/edu/DMIT2008_AdvancedJavascript/ass4b-react/js/src/components/History.js";

var cash = function cash(value) {
  return +value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

var History = function History(_ref) {
  var data = _ref.data;
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.map(function (day) {
    return React.createElement("div", {
      className: "day-details",
      key: day.date,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, React.createElement("div", {
      className: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Date: ", day.date), React.createElement("div", {
      className: "details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Open: ", React.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, cash(day.open), " "), React.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), "High: ", React.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, cash(day.high), " "), React.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), "Low: ", React.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, cash(day.low), " "), React.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), "Close: ", React.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, cash(day.close), " ")));
  }));
};

export { History };