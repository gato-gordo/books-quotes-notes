
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('reference', function(tbl){
      tbl.integer('source_id').notNullable().references('id').inTable('work');
      tbl.integer('target_id').notNullable().references('id').inTable('work');
      tbl.primary(['source_id', 'target_id']);
    });
};

exports.down = function(knex, Promise) {
 return knex.schema
   .dropTable('reference');
};
