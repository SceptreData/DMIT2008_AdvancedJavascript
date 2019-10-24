import { Stock } from './stock.js';

const StockTemplate = Handlebars.templates['stock-current'];
// const StockTemplate = Handlebars.templates['stock-current'];
let curStock = {};

const form = document.querySelector('.frm');
form.addEventListener('submit', e => {
  e.preventDefault();
  let symbol = e.target.querySelector('[name=symbol]').value;
  let stockDisplay = document.querySelector('.stock-display');
  curStock = new Stock({ symbol: symbol });
  curStock.render(stockDisplay);

  // curStock.getStock().then(stockData => curStock.render(stockDisplay));
});
