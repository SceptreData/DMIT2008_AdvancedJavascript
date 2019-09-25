// let source = document.querySelector("#project-template").innerHTML;
// let template = Handlebars.compile(source);


Handlebars.registerHelper("cash", str => {
  return str.toLocaleString("en-US", { style: "currency", currency: "USD" });
});



const renderProject = proj => {
  let project = document.querySelector(".project");
  project.innerHTML += Handlebars.templates['project'](proj);
};


// now, fetch projects and render the first one.
fetch("data/projects.json")
  .then(data => {
    return data.json();
  })
  .then(projects => {
    renderProject(projects[0]);
    renderProject(projects[1]);
  });
