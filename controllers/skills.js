module.exports = {
    index, 
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit, 
    update
};

const Skill = require('../models/skill')

//create a function that on request responses with all skills
function index(req, res) {
    res.render('skills/index', { 
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
}

//after routing  to the  new page we need to define the new function
function newSkill (req, res) {
    res.render('skills/new');
}

function create (req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill (req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit (req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function update(req, res) {
    Skill.update(req.params.id, req.body.skill);
    res.redirect('/skills');
}

//use Skill variable to use updte function from model, params are the req.params.id and req.body to  access req body object and skill refers to the name of the input
//req.body.skill(from views edit.ejs), last step is to render the redirect to hte skills page which should have update information