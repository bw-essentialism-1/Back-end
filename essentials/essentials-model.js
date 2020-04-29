const db = require("../database/dbConfig.js");

module.exports = {
  findById,
  addEssentials,
  removeEssentials,
};

// Grab the default essentials
function findById(user_id) {
  return db("Essentials").where({ user_id }).select("id", "name");
}

// Add new essentials
function addEssentials(user_id, essential) {
  return db("Essentials").insert(user_id, essential);
}

// Remove any essentials
function removeEssentials(id) {
  return db("Essentials").where({ id }).del();
}
