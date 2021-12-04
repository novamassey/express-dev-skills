var express = require('express');
var router = express.Router();

//Require the controller that exports skills CRUD functions
let skillsCtrl = require('../controllers/skills');

//All paths were mounted in server.js line 23 to '/'

//get skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
