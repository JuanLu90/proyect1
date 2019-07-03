const dbConn = require('../config/db');
var express = require("express");
var router = express.Router();
var md5 = require("md5");
var jwt = require("jsonwebtoken");

const apiController = require('../controllers/apiController');


router.get("/", (req, res) => res.send("Responde with a resource"));

router.post("/auth", (request, response) => {

});

router.get('/player', apiController.list);
router.get('/player/:PlayerId', apiController.listbyid);
router.post('/player', apiController.save);
router.put('/player/:PlayerId', apiController.update);
router.delete('/player/:PlayerId', apiController.delete);



// router.put("/player/:PlayerId", (request, response) => {
//   const id = request.params.PlayerId;
//   const myquery = {
//     _id: new mongo.ObjectID(id)
//   };
//   const newvalues = {
//     $set: {
//       title: request.body.title,
//       author: request.body.author,
//       country: request.body.country,
//       pages: request.body.pages,
//       year: request.body.year,
//       language: request.body.language
//     }
//   };
//   global.dbo.collection("books").updateOne(myquery, newvalues);
//   global.dbo
//     .collection("books")
//     .find(myquery)
//     .toArray()
//     .then(documents => {
//       response.status(200).send(documents[0]);
//     });
// });





module.exports = router;
