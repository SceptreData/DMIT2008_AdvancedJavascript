"use strict";

var source = document.querySelector("#project-template").innerHTML;
var template = Handlebars.compile(source);
Handlebars.registerHelper("cash", function (str) {
  return str.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
});

var renderProject = function renderProject(proj) {
  var project = document.querySelector(".project");
  project.innerHTML += template(proj); // document.querySelector(".tbl-managers tbody").innerHTML = managers;
}; // now, fetch projects and render the first one.


fetch("data/projects.json").then(function (data) {
  return data.json();
}).then(function (projects) {
  renderProject(projects[0]);
  renderProject(projects[1]);
});