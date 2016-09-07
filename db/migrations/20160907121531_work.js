
exports.up = function(knex, Promise) {
 return knex.schema
   .createTable('work', function(table){
       //Primary key, id
       table.increments();
       table.string("title", 100).notNullable();
       table.integer("publication_year");
       table.string("publisher", 100);
       table.integer("author_id").notNullable().references("id").inTable('author');
   })
};

exports.down = function(knex, Promise) {
 return knex.schema
   .dropTableIfExists('work')
};
