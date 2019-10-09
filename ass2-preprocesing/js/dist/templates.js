(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['history'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "<li class=\"history-item\">\r\n  <div class=\"report-date\">"
    + alias4((helpers.day||(depth0 && depth0.day)||alias3).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"day","hash":{},"data":data}))
    + "<span>"
    + alias4((helpers.month||(depth0 && depth0.month)||alias3).call(alias2,(depth0 != null ? depth0.date : depth0),{"name":"month","hash":{},"data":data}))
    + "</span></div>\r\n  <div class=\"report-open\">Open: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.open : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\r\n  <div class=\"report-close\">Close: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.close : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\r\n  <div class=\"report-change\">Change: <span>"
    + alias4((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.change : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\r\n</li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.history : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['stock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<div class=\"stock-display\">\r\n  <div class=\"details\">Symbol: <span class=\"symbol\">"
    + alias5(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"symbol","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n  <div class=\"details\">Date: <span class=\"date\">"
    + alias5(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"date","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n  <div class=\"details\">Open: <span class=\"open\">"
    + alias5((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.open : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\r\n  <div class=\"details\">Close: <span class=\"close\">"
    + alias5((helpers.cash||(depth0 && depth0.cash)||alias3).call(alias2,(depth0 != null ? depth0.close : depth0),{"name":"cash","hash":{},"data":data}))
    + "</span></div>\r\n  <button class=\"reveal-history-btn\">See five day report</button>\r\n</div>\r\n\r\n<ul class=\"five-day-report hidden\">\r\n"
    + ((stack1 = container.invokePartial(partials.history,depth0,{"name":"history","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});
})();