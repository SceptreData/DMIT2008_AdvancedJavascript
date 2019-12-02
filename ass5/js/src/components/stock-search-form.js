import React from 'react';
   

const StockSearchForm = (props) => {
    const [symbol,
        setSymbol] = React.useState('');

    const {submitCallback} = props;

    const handleSubmit = evt => {
        evt.preventDefault();
        submitCallback(symbol);
    };

    return (
        <div>
            <form className="frm stock-search" onSubmit={handleSubmit}>
                <label htmlFor="symbol">Stock Symbol:
                    <input
                        type="text"
                        id="symbol"
                        name="symbol"
                        value={symbol}
                        onChange={(evt) => {
                        setSymbol(evt.target.value)
                    }}/>
                </label>
                <button type="submit">Get Quote</button>
            </form>
        </div>
    );
};

export {StockSearchForm};