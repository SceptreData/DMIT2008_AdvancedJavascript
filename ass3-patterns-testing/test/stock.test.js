// Test suite for the Stock module
import mocha from 'mocha';
import chai from 'chai';
import chaiAsPromissed from 'chai-as-promised';
import fetchMock from 'fetch-mock';

// TODO: import Stock from the stock.js file

chai.use(chaiAsPromissed); // easier testing of async/promises

// TODO: choose your desired assertion style

// NOTE: all tests are currently pending. Your task is to create the assertions,
// then remove the pending status and see that all tests are currently failing.
// Then, progresively implement the changes to your codebase so that each test
// passes.
describe('Stock constructor', function () {
    xit('should exist', function () {
        // TODO: assert that the Stock function exists
    });

    describe('Constructor', function () {
        context('without attributes - new Stock()', function () {
            xit('should create a new Stock object with default #symbol property', function () {
                // TODO: assert #symbol should be an empty string
                // TODO: assert #stockData should be an empty object
            });
        });

        context('with attributes - new Stock({ attributes })', function () {
            xit('should assign attribute values as properties on the instance', function () {
                // TODO: assert that when the constructor is called with an object of attributes
                // that the attributes are all assigned as properties on the insance
            });
        });
    });

    describe('#getStockPrice()', function () {
        xit('returns the symbol, price, and date', function () {
            // TODO: assert that the method resolves an object that has at a minimum the
            // required properties
            // TODO: assert that the instance has the required data saved to its stockData
            // property
        });
    });

    describe('#getStockFiveDayHistory()', function () {
        xit('returns an array of the previous five days open, high, low, close, and date', function () {
            // TODO: assert that the method resolves an array with five objects that each
            // contain at a minimum the required properties
            // TODO: assert that the instance has the required data saved to its stockData
            // property
        });
    });

    // TODO: define a suite to test the #getCurrentAndFiveDayHistory method. This
    // method should resolve an object that contains both the current stock price
    // details (see test above) and the array of five history objects

});
