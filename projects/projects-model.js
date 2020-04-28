const db = require("../database/dbConfig.js");

module.exports = {
  find,
  addProjects,
  removeProjects,
};

// Grab the default projects
function find() {
  return db("Projects").select("id", "name");
}

// Add new essentials
function addProjects(project) {
  return db("Projects").insert(project);
}

// Remove any essentials
function removeProjects(id) {
  return db("Projects").where({ id }).del();
}
