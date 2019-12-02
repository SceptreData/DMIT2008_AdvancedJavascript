import { History } from "./History.js";
import { Stock } from "../stock.js";

import { toCash } from "./util.js";

const StockDisplay = ({ stockData, setStockData, symbol }) => {
  React.useEffect(() => {
    if (symbol) {
      let stock = new Stock({ symbol });
      stock.getStockPrice().then(data => {
        if (data instanceof Object) {
          setStockData({ ...data });
        } else {
          setStockData({ error: data });
        }
      });
    }
  }, [symbol]);

  const handleHistoryClick = e => {
    if (!stockData.history) {
      let stock = new Stock({ symbol: stockData.symbol });
      stock.getStockFiveDayHistory().then(history => {
        setStockData({
          ...stockData,
          ...history
        });
      });
    }
  };

  return (
    <div>
      {stockData && stockData.symbol ? (
        <React.Fragment>
          <h1>Stock Viewer</h1>
          <div className="details">
            <span>{stockData.date}</span>
          </div>
          <div className="details">
            Symbol: <span>{stockData.symbol}</span>
          </div>
          <div className="details">
            Price: <span>{toCash(stockData.price)}</span>
          </div>
          <div>
            <button className="btn-history" onClick={handleHistoryClick}>
              Previous 5 Days
            </button>
          </div>
          {stockData.history && (
            <div className="history">
              <History data={stockData.history} />
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>No stock data received.</p>
          {stockData.error && <p>{stockData.error}</p>}
        </React.Fragment>
      )}
    </div>
  );
};

export { StockDisplay };
