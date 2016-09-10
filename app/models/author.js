"use strict";

var db = require('../../db/');

var Author = {};

Author.all = function(){
  return db.select().from('author');
}

Author.create = function(authorData){
  return db("author").insert(authorData).returning('id');
}

Author.show = function(authorId){
  return db.select().from("author").where("id", authorId);
}

Author.update = function(authorId, authorData){
  return db("author").where("id", authorId).update(authorData).returning("id");
}

Author.destroy = function(authorId){
  return db("author").where("id", authorId).del();
}

module.exports = Author;