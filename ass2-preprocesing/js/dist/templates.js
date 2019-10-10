(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['history'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "<li class=\"history-item\">\n  <div class=\"report-date\">"
    + alias4((helpers.day||(depth0 && depth0.day)||alias3).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"day","hash":{},"data":data}))
    + "<span>"
    + alias4((helpers.month||(depth0 && depth0.month)||alias3).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"month","hash":{},"data":data}))
    + "</span></div>\n  <div class=\"report-open\">Open: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.open : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\n  <div class=\"report-close\">Close: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.close : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\n  <div class=\"report-change\">Change: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.change : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\n</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['stock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "<div class=\"stock-display\">\n  <div class=\"details\">Symbol: <span class=\"symbol\">"
    + alias4(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"symbol","hash":{},"data":data}) : helper)))
    + "</span></div>\n  <div class=\"details\">Date: <span class=\"date\">"
    + alias4((helpers.longDate||(depth0 && depth0.longDate)||alias3).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"longDate","hash":{},"data":data}))
    + "</span></div>\n  <div class=\"details\">Open: <span class=\"open\">"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.open : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\n  <div class=\"details\">Close: <span class=\"close\">"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.close : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\n  <button class=\"reveal-history-btn\">Toggle History</button>\n</div>\n\n<ul class=\"five-day-report hidden\">\n"
    + ((stack1 = container.invokePartial(partials.history,depth0,{"name":"history","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});
})();