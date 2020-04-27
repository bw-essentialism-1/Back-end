
exports.up = function(knex) {
  return knex.schema
  .createTable('Users', tbl => {
      tbl.increments();
      tbl.text('username', 255)
        .unique()
        .notNullable()
        .index();
      tbl.text('password', 255)
        .notNullable();
  })
  .createTable('Essentials', tbl => {
      tbl.increments();
      tbl.text('name', 255)
        .unique()
        .notNullable()
        .index();
  })
  .createTable('Projects', tbl => {
      tbl.increments();
      tbl.text('name', 255)
        .notNullable()
        .index();
      tbl.text('notes', 255)
        .index();
      tbl.integer('user_id', 255)
        .notNullable()
        .references('id')
        .inTable('Users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('Users_Essentials', tbl => {
      tbl.integer('user_id', 255)
        .notNullable()
        .references('id')
        .inTable('Users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.integer('ess_id', 255)
        .notNullable()
        .references('id')
        .inTable('Essentials')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.unique(['user_id', 'ess_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Users_Essentials')
    .dropTableIfExists('Projects')
    .dropTableIfExists('Essentials')
    .dropTableIfExists('Users');
};