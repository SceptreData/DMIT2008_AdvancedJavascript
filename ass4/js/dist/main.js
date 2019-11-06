var _jsxFileName = "C:\\Users\\dbergeron2\\Documents\\DMIT2008_AdvancedJavascript\\ass4\\js\\src\\main.js";
import { StockSearch } from "./components/stock-search-form.js";
import { StockDisplay } from "./components/stock-price-display.js";
import { Stock } from "./stock.js";
ReactDOM.render(React.createElement(StockDisplay, {
  stock: new Stock({
    symbol: "msft"
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: this
}), document.querySelector(".stock-display"));