var _jsxFileName = "/Users/davidbergeron/projects/edu/DMIT2008_AdvancedJavascript/ass4b-react/js/src/components/PreviousReports.js";
// import React from 'react' (What is this, NextJS??)
import { toCash } from "./util.js";

var PreviousReports = function PreviousReports(_ref) {
  var state = _ref.state,
      viewCallback = _ref.viewCallback;
  var lastFive = state.slice(-5, -1);
  var prevStocks = lastFive.map(function (stock) {
    return React.createElement("li", {
      className: "prev-report",
      key: stock.symbol,
      onClick: function onClick() {
        return viewCallback(stock);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, React.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, stock.symbol), React.createElement("div", {
      className: "prev-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, toCash(stock.price)), React.createElement("div", {
      className: "prev-detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, stock.date));
  });

  if (prevStocks.length < 1) {
    return null;
  }

  return React.createElement("div", {
    className: "previous-reports",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, React.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Previous Reports"), React.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, prevStocks));
};

export { PreviousReports };