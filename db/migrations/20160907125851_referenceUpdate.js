
exports.up = function(knex, Promise) {
  return knex.schema
    .table('reference', function(tbl){
      tbl.text('reference_text');
      tbl.integer('source_page_number');
      tbl.integer('target_page_number');
    })
};

exports.down = function(knex, Promise) {
 return knex.schema
   .table('reference', function(table){
     table.dropColumn('reference_text');
     table.dropColumn('source_page_number');
     table.dropColumn('target_page_number');
   })

};
