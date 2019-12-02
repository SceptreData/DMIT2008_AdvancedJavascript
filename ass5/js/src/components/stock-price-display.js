import React from 'react';

import {StockHistoryList} from './stock-history-list.js';
const StockPriceDisplay = (props) => {

    const {stock} = props;
    const [stockData,
        setStockData] = React.useState({});

    // only render this effect if the stock prop has changed, effectively only
    // firing once on component mount since props should be immutable
    React.useEffect(() => {
        if (stock.symbol) {
            stock
            .getStockPrice()
            .then(data => {
                if (data instanceof Object) {
                    setStockData({
                        ...data
                    });
                } else {
                    setStockData({
                        error: data
                    });
                }
            });
        }
    }, [props.stock]);

    const currencyFormat = value => (+ value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const handleClick = evt => {
        if (!stockData.history) {
            stock
                .getStockFiveDayHistory()
                .then(data => {
                    setStockData({
                        ...stock.stockData
                    });
                })
        }
    };

    return (
        <div>
            {stockData.symbol
                ? (
                    <React.Fragment>
                        <div className="details">
                            <div>Symbol: {stockData.symbol}</div>
                            <div>Date: {stockData.date}</div>
                            <div>Price: {currencyFormat(stockData.price)}</div>
                        </div>
                        <div>
                            <button className="btn-history" onClick={handleClick}>Previous 5 Days</button>
                            {stockData.history && 
                            <div className="history">
                                <StockHistoryList history={stockData.history}/>
                            </div>}
                        </div>
                    </React.Fragment>
                )
                : (
                    <React.Fragment>
                        <p>No stock data received.</p>
                        {stockData.error && <p>{stockData.error}</p>}
                    </React.Fragment>
                )}

        </div>
    );
};

export {StockPriceDisplay};