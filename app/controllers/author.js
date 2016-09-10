"use strict";

var Author = require('../models/author.js');
var ctrl = {};

ctrl.index = function(req, res){
  Author.all()
    .then( records => res.status(200).json(records))
    .catch( err => res.status(500).json(err) )
}
ctrl.read = function(req, res){
  Author.show(req.params.id)
    .then( author => res.status(200).json(author))
    .catch( err => res.status(500).json(err) )
}
ctrl.create = function(req, res){
  Author.create(req.body)
    .then( ids => res.status(201).send("Successfully created new author with id: " + ids[0]))
    .catch( err => res.status(500).json(err) )
};
ctrl.update = function(req, res){
  Author.update(req.params.id, req.body)
    .then( ids => res.status(200).send("Successfully updated author at id: " + ids[0]))
    .catch( err => res.status(500).json(err) )
}
ctrl.destroy = function(req, res){
  Author.destroy(req.params.id)
    .then( authorId => res.status(200).send( "Successfully deleted author."))
    .catch( err => res.status(500).send(err))
}

module.exports = ctrl;