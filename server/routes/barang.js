var express = require('express');
var router = express.Router();
var models = require('../models/index');
const barangController = require('../controllers').barang;

/* GET users listing. */
router.get('/', barangController.list);
router.post('/', barangController.add);
router.put('/:id', barangController.update);
router.delete('/:id', barangController.delete);



module.exports = router;
