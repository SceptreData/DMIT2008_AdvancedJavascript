const StockDisplay = ({ stock }) => {
  //   let { symbol, date, price } = stock.stockData;
  const [stockData, setStockData] = React.useState(null);

  React.useEffect(() => {
    stock.getStockPrice().then(data => setStockData({ ...data }));
  }, []);

  const cash = val =>
    (+val).toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div>
      {stockData ? (
        <React.Fragment>
          <h1>Stock Viewer</h1>
          <div className="details">
            symbol: {stockData.symbol} {stockData.date}
          </div>
          <div className="details">price: {stockData.price}</div>
          <div>
            <button className="btn-history">Previous 5 Days</button>
          </div>

          <div className="history"></div>
        </React.Fragment>
      ) : (
        <p>No stock data received.</p>
      )}
    </div>
  );
};

export { StockDisplay };
