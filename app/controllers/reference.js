"use strict";

var ctrl = {};

ctrl.index = function(req, res){
  res.send(200, "All the references");
}
ctrl.read = function(req, res){
  res.send(200, "Reference at id: " + req.params.id)
}
ctrl.create = function(req, res){
  res.send(201, "Successfully created new reference")
};
ctrl.update = function(req, res){
  res.send(200, "Successfully updated reference at id: ", req.params.id);
}
ctrl.destroy = function(req, res){
  res.send(200, "Successfully deleted reference at id: ", req.params.id);
}

module.exports = ctrl;