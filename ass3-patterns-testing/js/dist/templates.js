(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock-current'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<h1>Stock Viewer</h1>\n<div class=\"details\">symbol: "
    + alias5(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"symbol","hash":{},"data":data}) : helper)))
    + " "
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"details\">price: "
    + alias5(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n<div><button class=\"btn-history\">Previous 5 Days</button></div>\n<div class=\"history\"></div>";
},"useData":true});
templates['stock-history'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"day-details\">\n    <div class=\"date\">Date: "
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"details\">Open: "
    + alias5(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"open","hash":{},"data":data}) : helper)))
    + ", High: "
    + alias5(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"high","hash":{},"data":data}) : helper)))
    + ", Low: "
    + alias5(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"low","hash":{},"data":data}) : helper)))
    + ", Close: "
    + alias5(((helper = (helper = helpers.close || (depth0 != null ? depth0.close : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"close","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();