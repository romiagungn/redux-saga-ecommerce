var express = require('express');
var router = express.Router();
// var models = require('../models/index');
const barangController = require('../sequelize/controllers').barang;

/* GET users listing. */
router.get('/', barangController.list);
router.get('/:id', barangController.getById);
router.post('/', barangController.add);
router.put('/:id', barangController.update);
router.delete('/:id', barangController.delete);



module.exports = router;
