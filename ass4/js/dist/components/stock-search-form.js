var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4\\js\\src\\components\\stock-search-form.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StockSearch = function StockSearch() {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      search = _React$useState2[0],
      setSearch = _React$useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
  };

  return React.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, React.createElement("form", {
    className: "frm stock-search",
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, React.createElement("label", {
    htmlFor: "symbol",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Stock Symbol", React.createElement("input", {
    id: "symbol",
    name: "symbol",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), React.createElement("button", {
    onClick: handleSubmit,
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Get Quote")));
};

export { StockSearch };