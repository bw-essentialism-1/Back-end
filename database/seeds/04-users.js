exports.seed = function (knex) {
  return knex("Users").insert(
    { username: "Test_User", password: "Test_Password" });
};
