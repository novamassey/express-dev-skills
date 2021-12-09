var express = require('express');
var router = express.Router();

//Require the controller that exports skills CRUD functions
let skillsCtrl = require('../controllers/skills');

//All paths were mounted in server.js line 23 to '/'

//get skills
router.get('/', skillsCtrl.index);

//GET method "//skills/new" path. new controller action, new must come before show
//define a new or newLike function in controller next
router.get('/new', skillsCtrl.new);
//POST method, "/skills" path, create controller action, define function in controller when done
router.post('/', skillsCtrl.create);
//DELETE  methods,  '/skills/:id" path,  create a delete function in controller to render/redirect and model to change data
router.delete('/:id', skillsCtrl.delete);
//GET methods, '/skills/:id/edit, create a function in controller to render screen and function in model to change data
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);

router.get('/:id', skillsCtrl.show);

module.exports = router;
