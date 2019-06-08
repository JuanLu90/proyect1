var express = require('express');
var router = express.Router();

const teamController = require('../controllers/teamController');

router.get('/', teamController.list);
router.post('/add', teamController.save);
router.get('/delete/:id', teamController.delete);
router.get('/update/:id', teamController.edit);
router.post('/update/:id', teamController.update);


// -------- Orders By --------
router.get('/orderbyname', teamController.orderByName);



module.exports = router;