import { Stock } from "./stock.js";
var StockTemplate = Handlebars.templates["stock-current"];
var curStock = {};
var form = document.querySelector(".frm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var symbol = e.target.querySelector("[name=symbol]").value;
  var stockDisplay = document.querySelector(".stock-display");
  curStock = new Stock(symbol);
  curStock.render(stockDisplay, StockTemplate);
});