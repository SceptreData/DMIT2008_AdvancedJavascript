import React from 'react';

import {StockSearchForm} from './stock-search-form.js';
import {StockPriceDisplay} from './stock-price-display.js';
import {Stock} from '../stock.js';

const App = () => {
    const [symbol,
        setSymbol] = React.useState('');
    return (
        <React.Fragment>
            <h1>Stock Viewer</h1>
            <StockSearchForm submitCallback={setSymbol}/>
            <StockPriceDisplay stock={new Stock({symbol: symbol})}/>
        </React.Fragment>
    );
};

export {App};