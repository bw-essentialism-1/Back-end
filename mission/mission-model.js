const db = require("../database/dbConfig.js");

module.exports = {
  find,
  updateMission,
};

// Grab the default essentials
function find() {
  return db("Mission").select("mission");
}

// Add new essentials
function updateMission(mission) {
  return db("Mission").update(mission);
}
