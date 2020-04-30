exports.seed = function (knex) {
  return knex("Mission").insert({ mission: "Default Mission" } );
};
