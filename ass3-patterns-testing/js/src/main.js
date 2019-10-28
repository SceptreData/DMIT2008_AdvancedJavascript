import { Stock } from './stock.js';

const StockTemplate = Handlebars.templates['stock-current'];
const HistoryTemplate = Handlebars.templates['stock-history'];

const form = document.querySelector('.frm');

(() => {
  const renderStock = (stockObj, elt) => {
    stockObj.getCurrentAndFiveDayHistory().then(stockData => {
      elt.innerHTML = StockTemplate(stockData);

      const { history } = stockData;
      const historyDiv = elt.querySelector('.history');
      const historyBtn = elt.querySelector('.btn-history');
      historyDiv.innerHTML = HistoryTemplate({ history });

      historyBtn.addEventListener('click', () => {
        historyDiv.classList.toggle('hidden');
      });
    });
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    const symbol = e.target.querySelector('[name=symbol]').value;
    const stockDisplay = document.querySelector('.stock-display');

    renderStock(new Stock({ symbol }), stockDisplay);
  });
})();
