exports.seed = function (knex) {
  // Inserts seed entries
  return knex("Mission").insert([{ mission: "Default Mission" }]);
};
