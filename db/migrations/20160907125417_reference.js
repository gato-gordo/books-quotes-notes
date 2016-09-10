
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('reference', function(tbl){
      tbl.increments();
      tbl.integer('source_id').notNullable().references('id').inTable('work').onDelete('CASCADE');
      tbl.integer('target_id').notNullable().references('id').inTable('work').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
 return knex.schema
   .dropTable('reference');
};
