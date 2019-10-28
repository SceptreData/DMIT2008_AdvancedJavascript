import { Stock } from './stock.js';
var StockTemplate = Handlebars.templates['stock-current'];
var HistoryTemplate = Handlebars.templates['stock-history'];
var form = document.querySelector('.frm');

(function () {
  var renderStock = function renderStock(stockObj, elt) {
    stockObj.getCurrentAndFiveDayHistory().then(function (stockData) {
      elt.innerHTML = StockTemplate(stockData);
      var history = stockData.history;
      var historyDiv = elt.querySelector('.history');
      var historyBtn = elt.querySelector('.btn-history');
      historyDiv.innerHTML = HistoryTemplate({
        history: history
      });
      historyBtn.addEventListener('click', function () {
        historyDiv.classList.toggle('hidden');
      });
    });
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var symbol = e.target.querySelector('[name=symbol]').value;
    var stockDisplay = document.querySelector('.stock-display');
    renderStock(new Stock({
      symbol: symbol
    }), stockDisplay);
  });
})();