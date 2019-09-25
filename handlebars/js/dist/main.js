"use strict";

// let source = document.querySelector("#project-template").innerHTML;
// let template = Handlebars.compile(source);
Handlebars.registerHelper("cash", function (str) {
  return str.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
});

var renderProject = function renderProject(proj) {
  var project = document.querySelector(".project");
  project.innerHTML += Handlebars.templates['project'](proj);
}; // now, fetch projects and render the first one.


fetch("data/projects.json").then(function (data) {
  return data.json();
}).then(function (projects) {
  renderProject(projects[0]);
  renderProject(projects[1]);
});