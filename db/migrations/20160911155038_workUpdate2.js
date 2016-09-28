
exports.up = function(knex, Promise) {
  return knex.schema.table('work', function(table){
  		table.dropColumn('isbn');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('work', function(table){
  	table.string('isbn', 14);
  })
};

