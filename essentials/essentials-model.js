const db = require("../database/dbConfig.js");

module.exports = {
  find,
  addEssentials,
};

// Grab the default essentials
function find() {
  return db("Essentials").select("name");
}

// Add new essentials
function addEssentials(essential) {
  return db("Essentials").insert(essential);
}
