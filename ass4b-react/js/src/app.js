import { StockDisplay } from "./components/StockDisplay.js";
import { StockSearch } from "./components/StockSearch.js";
import { PreviousReports } from "./components/PreviousReports.js";

import { isEmptyObject } from "./components/util.js";

const App = () => {
  const [symbol, setSymbol] = React.useState("");
  const [stockData, setStockData] = React.useState({});
  const [prevReports, setPrevReports] = React.useState([]);

  React.useEffect(() => {
    function storeReport() {
      let reports = [...prevReports];
      if (reports.length > 6) {
        // Remove the oldest report.
        reports.shift();
      }

      // Make sure StockData isn't empty or the same as our last stock.
      let isUnique = !prevReports.some(stock => stock.symbol === symbol);
      if (!isEmptyObject(stockData) && isUnique) {
        reports.push(stockData);
      }
      setPrevReports(reports);
    }

    storeReport();
  }, [stockData]);

  const viewPreviousStock = prevStock => {
    let stocks = [];
    // Hm I probably should have just used array.filter
    for (let stock of prevReports) {
      if (stock.symbol !== prevStock.symbol) {
        stocks.push(stock);
      }
    }
    setPrevReports(stocks);
    setSymbol(prevStock.symbol);
  };

  return (
    <React.Fragment>
      <StockSearch submitCallback={setSymbol} />
      <StockDisplay
        stockData={stockData}
        setStockData={setStockData}
        symbol={symbol}
      />
      <PreviousReports state={prevReports} viewCallback={viewPreviousStock} />
    </React.Fragment>
  );
};

export { App };
