// Test suite for the Stock module
import mocha from 'mocha';
import chai from 'chai';
import chaiAsPromissed from 'chai-as-promised';
import fetchMock from 'fetch-mock';

import { Stock } from '../js/dist/stock';

chai.use(chaiAsPromissed); // easier testing of async/promises
const should = chai.should();

// CONSTANTS
const API_KEY = 'AHGHSQCQOVT6Z8E0';
const ENDPOINT = 'https://www.alphavantage.co/query?function=';
const TEST_SYMBOL = 'AAPL';
const STOCK_URL = `${ENDPOINT}GLOBAL_QUOTE&symbol=${TEST_SYMBOL}&apikey=${API_KEY}`;
const HISTORY_URL = `${ENDPOINT}TIME_SERIES_DAILY&symbol=${TEST_SYMBOL}&apikey=${API_KEY}`;

const rawStockData = `{"Global Quote": { "01. symbol": "AAPL", "02. open": "244.5100", "03. high": "244.8000", "04. low": "241.8050", "05. price": "243.0800", "06. volume": "10420129", "07. latest trading day": "2019-10-24", "08. previous close": "243.1800", "09 . change": "-0.1000", "10. change percent": "-0.0411%"}}`;
const testStockData = {
  symbol: TEST_SYMBOL,
  price: '243.0800',
  date: '2019-10-24'
};

const rawHistoryData = `{"Time Series (Daily)": {"2019-10-24": {"1. open": "244.5100","2. high": "244.8000","3. low": "241.8100","4. close": "243.5800","5. volume": "15982273"},"2019-10-23": {"1. open": "242.1000","2. high": "243.2400","3. low": "241.2200","4. close": "243.1800","5. volume": "18957200"},"2019-10-22": {"1. open": "241.1600","2. high": "242.2000","3. low": "239.6200","4. close": "239.9600","5. volume": "20573400"},"2019-10-21": {"1. open": "237.5200","2. high": "240.9900","3. low": "237.3200","4. close": "240.5100","5. volume": "21811800"},"2019-10-18": {"1. open": "234.5900","2. high": "237.5800","3. low": "234.2900","4. close": "236.4100","5. volume": "24358400"}}}`;
const testHistory = [
  {
    open: '244.5100',
    high: '244.8000',
    low: '241.8100',
    close: '243.5800',
    date: '2019-10-24'
  },
  {
    open: '242.1000',
    high: '243.2400',
    low: '241.2200',
    close: '243.1800',
    date: '2019-10-23'
  },
  {
    open: '241.1600',
    high: '242.2000',
    low: '239.6200',
    close: '239.9600',
    date: '2019-10-22'
  },
  {
    open: '237.5200',
    high: '240.9900',
    low: '237.3200',
    close: '240.5100',
    date: '2019-10-21'
  },
  {
    open: '234.5900',
    high: '237.5800',
    low: '234.2900',
    close: '236.4100',
    date: '2019-10-18'
  }
];

describe('Stock constructor', function() {
  it('should exist', function() {
    should.exist(Stock);
  });

  describe('Constructor', function() {
    context('without attributes - new Stock()', function() {
      it('should create a new Stock object with default #symbol property', function() {
        let s = new Stock();
        s.should.have.property('symbol').that.is.empty;
      });
    });

    context('with attributes - new Stock({ attributes })', function() {
      it('should assign attribute values as properties on the instance', function() {
        // TODO: assert that when the constructor is called with an object of attributes
        // that the attributes are all assigned as properties on the insance
        const s = new Stock({
          symbol: TEST_SYMBOL,
          stockData: { ...testStockData }
        });
        s.should.have.property('symbol');
        s.symbol.should.equal(TEST_SYMBOL);

        s.should.have.property('stockData');
        s.stockData.should.deep.equal(testStockData);
      });
    });
  });
});

describe('Stock Methods', function() {
  let theStock;
  before('Setup fetchMock (intercepts fetch calls)', function() {
    fetchMock.get(STOCK_URL, rawStockData);
    theStock = new Stock({ symbol: TEST_SYMBOL });
  });
  describe('#getStock()', function() {
    it(`returns the symbol, price and date.`, async () => {
      let data = await theStock.getStock();
      data.symbol.should.equal(TEST_SYMBOL);
      data.price.should.equal(testStockData.price);
      data.date.should.equal(testStockData.date);
    });
  });

  it('Saves the data to its stockData property.', async function() {
    await theStock.getStock();
    theStock.stockData.should.deep.equal(testStockData);
  });

  before('Setup FetchMock for History (Reuse old StockObject)', function() {
    fetchMock.get(HISTORY_URL, rawHistoryData);
  });
  describe('#getStockHistory()', function() {
    it('returns an array of the previous five days open, high, low, close, and date', async () => {
      let { history } = await theStock.getHistory();
      history.length.should.equal(5);

      history.forEach((day, idx) => {
        day.should.have.property('open', testHistory[idx].open);
        day.should.have.property('high', testHistory[idx].high);
        day.should.have.property('low', testHistory[idx].low);
        day.should.have.property('close', testHistory[idx].close);
        day.should.have.property('date', testHistory[idx].date);
      });
      //  assert that the instance has the required data saved to its history
      // property
      theStock.stockData.history.should.deep.equal(testHistory);
    });
  });

  before(' Setup FetchMock for #getCurrentAndFiveDayHistory', function() {
    theStock = new Stock({ symbol: TEST_SYMBOL });
  });
  describe('#getCurrentAndFiveDayHistory', function() {
    it('Returns object containing stock price and array of five history objects.', async () => {
      const testStockWithHistory = { ...testStockData, history: testHistory };
      let sData = await theStock.getCurrentAndFiveDayHistory();

      // Check if Current Stock data matches test data
      sData.symbol.should.equal(TEST_SYMBOL);
      sData.price.should.equal(testStockWithHistory.price);
      sData.date.should.equal(testStockWithHistory.date);

      // Check each element to make sure it matches testHistory
      sData.history.forEach((day, idx) => {
        day.should.have.property('open', testHistory[idx].open);
        day.should.have.property('high', testHistory[idx].high);
        day.should.have.property('low', testHistory[idx].low);
        day.should.have.property('close', testHistory[idx].close);
        day.should.have.property('date', testHistory[idx].date);
      });

      sData.should.deep.equal(testStockWithHistory);
      theStock.stockData.should.deep.equal(testStockWithHistory);
    });
  });
  after(function() {
    fetchMock.restore();
  });
});
