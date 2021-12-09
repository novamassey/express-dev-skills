const skills = [
    {id:123, skill: 'HTML', details: ['boilerplate', 'classes',  'ids',  'indentation','tables']},
    {id:456, skill:  'CSS', details: ['styling', 'media-queries', 'keyframe-animations', 'grid', 'flex-box']},
    {id:789, skill: 'Javascript', details: ['functions', 'loops', 'arrays', 'objects', 'classes', 'callback-functions', 'manipulating the DOM']}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    edit, 
    update
};


function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id ===  id)
}
function create(skillObj) {
    skillObj.id = Math.floor(Math.random() * 1000);
    skillObj.details = [];
    skills.push(skillObj);
}

function deleteOne(id) {
    const skillIndex = skills.findIndex(skill => skill.id === Number(id));
    skills.splice(skillIndex, 1);
}

function edit(skillObj) {
    skillObj.id = skillObj.id;
    skills.push(skillObj);
}


function update(id, updateSkill) {
   let skill = getOne(id);
   skill.skill = updateSkill;
}

//grab id and grab input from edit page as parameters
//set variable to getOne(do not need Skill becuase that exists only to export functions from model to controller)
//skill.skill to locate single instance of skill in data and set it equal to updateSkill the parameter that was entered on the edit page

