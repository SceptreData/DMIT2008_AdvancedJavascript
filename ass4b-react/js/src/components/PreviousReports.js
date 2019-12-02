// import React from 'react' (What is this, NextJS??)
import { toCash } from "./util.js";

const PreviousReports = ({ state, viewCallback }) => {
  const lastFive = state.slice(-5, -1);
  const prevStocks = lastFive.map(stock => (
    <li
      className="prev-report"
      key={stock.symbol}
      onClick={() => viewCallback(stock)}
    >
      <h4>{stock.symbol}</h4>
      <div className="prev-price">{toCash(stock.price)}</div>
      <div className="prev-detail">{stock.date}</div>
    </li>
  ));

  if (prevStocks.length < 1) {
    return null;
  }

  return (
    <div className="previous-reports">
      <h2>Previous Reports</h2>
      <ul>{prevStocks}</ul>
    </div>
  );
};

export { PreviousReports };
