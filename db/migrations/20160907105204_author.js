
exports.up = function(knex, Promise) {
  return knex.schema
    
    //Authors Table
    .createTable('author', function(table){
      //Primary key, id
      table.increments();
      table.string('last_name', 25).notNullable();
      table.string('first_name', 25).notNullable();
    })

};

exports.down = function(knex, Promise) {
 return knex.schema
  .dropTableIfExists('author')
};
