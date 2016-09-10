"use strict";

var db = require('../../db/');

var Model = Reference = {};
var table = 'reference';

Model.all = function(){
  return db.select().from(table);
}

Model.create = function(recordData){
  return db(table).insert(recordData).returning('id');
}

Model.show = function(recordId){
  return db.select().from(table).(recordId);
}

Model.update = function(recordId, recordData){
  return db(table).where("id", recordId).update(recordData).returning("id");
}

Model.destroy = function(recordId){
  return db(table).where("id", recordId).del();
}

module.exports = Model;