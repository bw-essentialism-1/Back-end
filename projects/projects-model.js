const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  addProjects,
  removeProjects,
};

// Grab the default projects
function findById(user_id) {
  return db("Projects").where({ user_id }).select("id", "name");
}

// Add new essentials
function addProjects(project) {
  return db("Projects").insert(project);
}

// Remove any essentials
function removeProjects(id) {
  return db("Projects").where({ id }).del();
}
