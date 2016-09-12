
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('work').del()
    .then(function () {
      var rows = [
        { 
          "title": "Joseph and His Brothers",
          "publication_year": 2005,
          "publisher": "Everyman's Library",
          "isbn": "978-1-4000-4001-8"
          "author_id": 1,
        },
        { 
          "title": "Doctor Faustus",
          "publication_year": 1997,
          "publisher": "Vintage International",
          "isbn": "0-375-40054-0"
          "author_id": 1,
        },
        { 
          "title": "Buddenbrooks: the Decline of a Family",
          "publication_year": 1993,
          "publisher": "Vintage International",
          "author_id": 1,
        },
        { 
          "title": "The Magic Mountain",
          "publication_year": 1995,
          "publisher": "Vintage International",
          "isbn": "0-679-44183-2"
          "author_id": 1,
        },
      ];
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};