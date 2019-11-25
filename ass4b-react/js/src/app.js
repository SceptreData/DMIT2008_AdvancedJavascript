
import { Stock } from "./stock.js";
import { StockDisplay } from "./components/stock-price-display.js";
import { StockSearch } from "./components/stock-search-form.js";
import { PreviousReports } from "./components/previous-reports.js"

const App = () => {
  const [symbol, setSymbol] = React.useState("");
  const [curStock, setCurStock] = React.useState({});

  const [prevReports, setPrevReports] = React.useState([]);

  React.useEffect(()=>{
      let reports = [...prevReports];
      if (reports.length > 5){
        // Remove the oldest report.
        reports.shift();
      }
      reports.push(prevReports);
      setPrevReports(reports);
    }, [curStock]
  );

  return (
    <React.Fragment>
      <StockSearch submitCallback={setSymbol} />
      <StockDisplay stock={new Stock({ symbol: symbol, setCurStock})} />
      <PreviousReports state={prevReports} />
    </React.Fragment>
  );
};

export { App };
