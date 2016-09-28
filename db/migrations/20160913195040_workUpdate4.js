
exports.up = function(knex, Promise) {
  return knex.schema.table('work', function(table){
  		table.dropColumn('author_id');
  });
};

exports.down = function(knex, Promise) {
	return knex.schema.table('work', function(table){
  	table.integer("author_id").notNullable().references("id").inTable('author');
  });
};

