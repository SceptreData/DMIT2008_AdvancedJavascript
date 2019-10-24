import { Stock } from './stock.js';
var StockTemplate = Handlebars.templates['stock-current']; // const StockTemplate = Handlebars.templates['stock-current'];

var curStock = {};
var form = document.querySelector('.frm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var symbol = e.target.querySelector('[name=symbol]').value;
  var stockDisplay = document.querySelector('.stock-display');
  curStock = new Stock({
    symbol: symbol
  });
  curStock.render(stockDisplay); // curStock.getStock().then(stockData => curStock.render(stockDisplay));
});