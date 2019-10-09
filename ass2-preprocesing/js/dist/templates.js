(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['history'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<li>\n  <div class=\"report-date\"><span>"
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div>\n  <div class=\"report-open\">"
    + alias5(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"open","hash":{},"data":data}) : helper)))
    + "</div>\n  <div class=\"report-close\">"
    + alias5(((helper = (helper = helpers.close || (depth0 != null ? depth0.close : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"close","hash":{},"data":data}) : helper)))
    + "</div>\n</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['stock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"stock-display\">\n  <div class=\"details\">Symbol: <span class=\"symbol\">"
    + alias5(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"symbol","hash":{},"data":data}) : helper)))
    + "</span></div>\n  <div class=\"details\">Date: <span class=\"date\">"
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div>\n  <div class=\"details\">Open: <span class=\"open\">"
    + alias5(((helper = (helper = helpers.open || (depth0 != null ? depth0.open : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"open","hash":{},"data":data}) : helper)))
    + "</span></div>\n  <div class=\"details\">Close: <span class=\"close\">"
    + alias5(((helper = (helper = helpers.close || (depth0 != null ? depth0.close : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"close","hash":{},"data":data}) : helper)))
    + "</span></div>\n</div>\n\n<ul class=\"five-day-report\">\n"
    + ((stack1 = container.invokePartial(partials.history,depth0,{"name":"history","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});
})();