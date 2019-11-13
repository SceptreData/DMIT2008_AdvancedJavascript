import { StockDisplay } from "./components/stock-price-display.js";
import { StockSearch } from "./components/stock-search-form.js";
import { Stock } from "./stock.js";

const App = () => {
  const [symbol, setSymbol] = React.useState("");
  return (
    <React.Fragment>
      <StockSearch submitCallback={setSymbol} />
      <StockDisplay stock={new Stock({ symbol: symbol })} />
    </React.Fragment>
  );
};

export { App };
