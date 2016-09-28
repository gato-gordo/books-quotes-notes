
var datRows = [
  //Thomas Mann
  [ 
    "Joseph and His Brothers",
    2005,
    "Everyman's Library",
    "978-1-4000-4001-8",
    1
  ],
  [
    "Doctor Faustus",
    1997,
    "Vintage International",
    "0-375-40054-0",
    1
  ],
  [
    "Buddenbrooks: the Decline of a Family",
    1993,
    "Vintage International",
    "",//ToDo: fill me in
    1
  ],
  [
    "The Magic Mountain",
    1995,
    "Vintage International",
    "0-679-44183-2",
    1
  ],
  [ 
    "Death in Venice and Other Stories",
    1989,
    "Vintage International",
    "0-679-72206-8",
    1
  ],
  //Friedrich Nietzsche
  [
    "The Gay Science",
    2001,
    "Cambridge University Press",
    "0-521-63645-0",
    2
  ],
  [
    "The Genealogy of Morals and Ecce Homo",
    1989,
    "Vintage Books",
    "0-679-72462-1",
    2
  ],
  [
    "Human, All Too Human: A Book for Free Spirits",
    1986,
    "Cambridge University Press",
    "0-521-567041",
    2
  ],
  [
    "Untimely Meditations",
    1997,
    "Cambridge University Press",
    "978-0-521-58584-2",
    2
  ],
  [
    "The Birth of Tragedy and Other Writings",
    1999,
    "Cambridge University Press",
    "978-0-521-63987-3",
    2
  ],
  [
    "Philosophy in the Tragic Age of the Greeks",
    1962,
    "Regnery Publishing, Inc.",
    "0-89526-710-1",
    2
  ],
  //Daniel Dennett
  [
    "Breaking the Spell: Religion as a Natural Phenomenon", 
    2006, 
    "Viking", 
    "0-670-03472-X",
    18
  ], 
  [
    "Elbow Room",
    1984,
    "MIT Press",
    "978-0-262-52779-8",
    18
  ],
  [
    "Brainchildren: Essays on Designing Minds",
    1998,
    "MIT Press",
    "0-262-54090-8",
    18
  ],
  [
    "Consciousness Explained",
    1991,
    "Little, Brown and Company",
    "0-316-18065-3",
    18
  ],
  [
    "Darwin's Dangerous Idea",
    1995,
    "Simon and Schuster",
    "0-684-80290-2",
    18
  ]
];

exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex('work').del()
    .then(function () {
      var rows = datRows.map( row => {
        return { 
          "title": row[0],
          "publication_year": row[1],
          "publisher": row[2],
          "isbn": row[3],
          "author_id": row[4],
        };
      });
      return knex().insert(rows).into('work');
    });
};