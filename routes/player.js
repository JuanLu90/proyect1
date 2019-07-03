var express = require('express');
var router = express.Router();

const playerController = require('../controllers/playerController');



// -------- Orders By --------
router.get('/orderbygoals', playerController.orderByGoals);
router.get('/orderbyname', playerController.orderByName);
router.get('/orderbysurname', playerController.orderBySurname);
router.get('/orderbyage', playerController.orderByAge);
router.get('/orderbyposition', playerController.orderByPosition);
router.get('/orderbyteam', playerController.orderByTeam);



module.exports = router;