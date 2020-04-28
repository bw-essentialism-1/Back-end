const db = require("../database/dbConfig.js");

module.exports = {
  find,
  addEssentials,
  removeEssentials,
};

// Grab the default essentials
function find() {
  return db("Essentials").select("id", "name");
}

// Add new essentials
function addEssentials(essential) {
  return db("Essentials").insert(essential);
}

// Remove any essentials
function removeEssentials(id) {
  return db("Essentials").where({ id }).del();
}
