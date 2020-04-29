exports.up = function (knex) {
  return knex.schema
    .createTable("Users", (tbl) => {
      tbl.increments();
      tbl.text("username", 255).unique().notNullable().index();
      tbl.text("password", 255).notNullable();
    })
    .createTable("Essentials", (tbl) => {
      tbl.increments();
      tbl.text("name", 255).unique().notNullable().index();
      tbl
        .integer("user_id", 255)
        .notNullable()
        .references("id")
        .inTable("Users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("Projects", (tbl) => {
      tbl.increments();
      tbl.text("name", 255).unique().notNullable().index();
      tbl
        .integer("user_id", 255)
        .notNullable()
        .references("id")
        .inTable("Users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("Mission", (tbl) => {
      tbl.increments();
      tbl.text("mission", 255).notNullable().index();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Mission")
    .dropTableIfExists("Projects")
    .dropTableIfExists("Essentials")
    .dropTableIfExists("Users");
};
