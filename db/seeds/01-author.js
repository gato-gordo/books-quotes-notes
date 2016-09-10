
exports.seed = function(knex, Promise) {
	var rows = [
		{id: 1, last_name: 'Mann', first_name: 'Thomas'},
		{id: 2, last_name: 'Nietzsche', first_name: 'Friedrich'},
		{id: 3, last_name: 'Joyce', first_name: 'James'},
		{id: 4, last_name: 'Pynchon', first_name: 'Thomas'},
    {id: 5, last_name: 'Schopenhauer', first_name: 'Arthur'},
    {id: 6, last_name: 'Borges', first_name: 'Jorge Luis'},
    {id: 7, last_name: 'Wallace', first_name: 'David Foster'},
    {id: 8, last_name: 'James', first_name: 'William'},
    {id: 9, last_name: 'Wagner', first_name: 'Richard'},
    {id: 10, last_name: 'Musil', first_name: 'Robert'},
    {id: 11, last_name: 'Wittgenstein', first_name: 'Ludwig'},
    {id: 12, last_name: 'Musil', first_name: 'Robert'},
 		{id: 13, last_name: 'Freud', first_name: 'Sigmund'},
 		{id: 14, last_name: 'Marx', first_name: 'Karl'},
 		{id: 15, last_name: 'Dreyfus', first_name: 'Hubert'},
		{id: 16, last_name: 'Heidegger', first_name: 'Martin'},
		{id: 17, last_name: 'Williams', first_name: 'Bernard'},
		{id: 18, last_name:  'Dennett', first_name: 'Daniel'},
	  {id: 19, last_name: 'Nussbaum', first_name: 'Martha'},
	  {id: 20, last_name: 'Kitcher', first_name: 'Philip'},
	  {id: 21, last_name: 'Geuss', first_name: 'Raymond'},
	  {id: 22, last_name: 'Kafka', first_name: 'Franz'},
	  {id: 23, last_name: 'Taylor', first_name: 'Charles'},
	  {id: 24, last_name: 'Descartes', first_name: 'Rene'},
	  {id: 25, last_name: 'Adorno', first_name: 'Theodor W'},
	  {id: 26, last_name: 'Aristotle', first_name: ''},
	  {id: 27, last_name: 'Plato', first_name: ''}
	];
  // Deletes ALL existing entries
  return knex('author').del()
    .then(function () {
    	return knex('author').insert(rows);
    });
};
