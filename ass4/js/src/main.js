import { StockSearch } from "./components/stock-search-form.js";
import { StockDisplay } from "./components/stock-price-display.js";
import { Stock } from "./stock.js";

ReactDOM.render(
  <StockDisplay stock={new Stock({ symbol: "msft" })} />,
  document.querySelector(".stock-display")
);
