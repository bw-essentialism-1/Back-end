const db = require("../database/dbConfig.js");

module.exports = {
  find,
  addEssentials,
  addUsersEssentials
};

// Grab the default essentials
function find() {
  return db("Essentials").select("id", "name");
}

// Add new essentials
function addEssentials(essential) {
  return db("Essentials").insert(essential);
}

// Add users essentials
function addUsersEssentials(IDs) {
  return db ("UsersEssentials").insert(IDs)
}
