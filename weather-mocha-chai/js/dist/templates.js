(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['forecast'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"forecast-detail\">\r\n    <p><strong>Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</strong></p>\r\n    <ul>\r\n        <li class=\"condition\"> Condition: "
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data}) : helper)))
    + "</li>\r\n        <li class=\"temp\">High: "
    + alias4(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data}) : helper)))
    + " Low: "
    + alias4(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data}) : helper)))
    + "</li>\r\n    </ul>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.forecast : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['weather'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"forecast\">\r\n"
    + ((stack1 = container.invokePartial(partials.forecast,depth0,{"name":"forecast","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>Weather Update</h1>\r\n<div class=\"details\">Location: "
    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"details\">Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"details\">Conditions: "
    + alias4(((helper = (helper = helpers.conditions || (depth0 != null ? depth0.conditions : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"conditions","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"details\">Current Temp: "
    + alias4(((helper = (helper = helpers.temp || (depth0 != null ? depth0.temp : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"temp","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"details\">Sunrise: "
    + alias4(((helper = (helper = helpers.sunrise || (depth0 != null ? depth0.sunrise : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunrise","hash":{},"data":data}) : helper)))
    + "</div>\r\n<div class=\"details\">Sunset: "
    + alias4(((helper = (helper = helpers.sunset || (depth0 != null ? depth0.sunset : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunset","hash":{},"data":data}) : helper)))
    + "</div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.forecast : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
})();