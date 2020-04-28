exports.seed = function (knex) {
  return knex("Projects").insert([{ name: "Default Project" }]);
};
