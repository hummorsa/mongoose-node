var express = require('express');
var router = express.Router();
var standupCtr = require('../controllers/standup.server.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtr.list(req, res);
});


/* POST filter by member */
router.post('/',function(req,res){
  return standupCtr.filterByMember(req,res);
});


/* GET New Note page. */
router.get('/newnote', function(req, res) {
  return standupCtr.getNote(req, res);
});

/* POST New Note page. */
router.post('/newnote', function(req, res) {
    return standupCtr.create(req, res);
});



module.exports = router;
