"use strict";

var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/reference');

router.get('/', ctrl.index);
router.get('/:id', ctrl.read);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router;