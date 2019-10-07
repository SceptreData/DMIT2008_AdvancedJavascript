(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['stock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"stock-display\">\r\n    <div class=\"details\">Symbol: <span class=\"symbol\">"
    + alias5(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"symbol","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Date: <span class=\"date\">"
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Open: <span class=\"open\">"
    + alias5(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"open","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Highest: <span class=\"max\">"
    + alias5(((helper = (helper = helpers.max || (depth0 != null ? depth0.max : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"max","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Lowest: <span class=\"low\">"
    + alias5(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"low","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Close: <span class=\"close\">"
    + alias5(((helper = (helper = helpers.close || (depth0 != null ? depth0.close : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"close","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n    <div class=\"details\">Change: <span class=\"change\">"
    + alias5(((helper = (helper = helpers.change || (depth0 != null ? depth0.change : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"change","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n</div>\r\n";
},"useData":true});
})();