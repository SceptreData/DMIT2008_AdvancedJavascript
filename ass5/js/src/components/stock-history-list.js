import React from 'react';

const StockHistoryList = (props) => {
    const currencyFormat = value => (+ value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <React.Fragment>
            {props
                .history
                .map(day => (
                    <div className="day-details" key={day.date}>
                        <div className="date">Date: {day.date}</div>
                        <div className="details">Open: {currencyFormat(day.open)}, High: {currencyFormat(day.high)}, Low: {currencyFormat(day.low)}, Close: {currencyFormat(day.close)}</div>
                    </div>
                ))}
        </React.Fragment>
    );
};
export {StockHistoryList}