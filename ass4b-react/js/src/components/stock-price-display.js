import {History} from "./history.js"
const StockDisplay = ({ stock }) => {
  //   let { symbol, date, price } = stock.stockData;
  const [stockData, setStockData] = React.useState({});

  React.useEffect(() => {
    if (stock.symbol) {
      stock.getStockPrice().then(data => {
        if (data instanceof Object) {
          setStockData({ ...data });
        } else {
          setStockData({ error: data });
        }
      });
    }
  }, [stock]);

  const cash = val =>
    (+val).toLocaleString("en-US", { style: "currency", currency: "USD" });

  const handleClick = e => {
    if (!stockData.history){
    stock.getStockFiveDayHistory().then(data => {
      setStockData({
        ...stock.stockData
      })
    })
    }
  }

  return (
    <div>
      {stockData.symbol ? (
        <React.Fragment>
          <h1>Stock Viewer</h1>
          <div className="details">
            symbol: {stockData.symbol} {stockData.date}
          </div>
          <div className="details">price: {stockData.price}</div>
          <div>
            <button className="btn-history" onClick={handleClick}>Previous 5 Days</button>
          </div>
          { stockData.history &&
          <div className="history">
            <History data={stockData.history} />
          </div>}
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
