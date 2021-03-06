(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock-current'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>Stock Viewer</h1>\n<div class=\"details\">symbol: "
    + alias4(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"symbol","hash":{},"data":data,"loc":{"start":{"line":2,"column":29},"end":{"line":2,"column":39}}}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":48}}}) : helper)))
    + "</div>\n<div class=\"details\">price: "
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":37}}}) : helper)))
    + "</div>\n<div><button class=\"btn-history\">Previous 5 Days</button></div>\n<div class=\"history\"></div>";
},"useData":true});
templates['stock-history'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"day-details\">\n    <div class=\"date\">Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":3,"column":28},"end":{"line":3,"column":36}}}) : helper)))
    + "</div>\n    <div class=\"details\">Open: "
    + alias4(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"open","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":39}}}) : helper)))
    + ", High: "
    + alias4(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data,"loc":{"start":{"line":4,"column":47},"end":{"line":4,"column":55}}}) : helper)))
    + ", Low: "
    + alias4(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data,"loc":{"start":{"line":4,"column":62},"end":{"line":4,"column":69}}}) : helper)))
    + ", Close: "
    + alias4(((helper = (helper = helpers.close || (depth0 != null ? depth0.close : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"close","hash":{},"data":data,"loc":{"start":{"line":4,"column":78},"end":{"line":4,"column":87}}}) : helper)))
    + "</div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();