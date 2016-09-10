"use strict";

var ctrl = {};

ctrl.index = function(req, res){
  res.send(200, "All the works");
}
ctrl.read = function(req, res){
  res.send(200, "Work at id: " + req.params.id)
}
ctrl.create = function(req, res){
  res.send(201, "Successfully created new work")
};
ctrl.update = function(req, res){
  res.send(200, "Successfully updated work at id: ", req.params.id);
}
ctrl.destroy = function(req, res){
  res.send(200, "Successfully deleted work at id: ", req.params.id);
}

module.exports = ctrl;