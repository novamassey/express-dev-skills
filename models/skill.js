const skills = [
    {id:123, skill: 'HTML', details: ['boilerplate', 'classes',  'ids',  'indentation','tables']},
    {id:456, skill:  'CSS', details: ['styling', 'media-queries', 'keyframe-animations', 'grid', 'flex-box']},
    {id:789, skill: 'Javascript', details: ['functions', 'loops', 'arrays', 'objects', 'classes', 'callback-functions', 'manipulating the DOM']}
]

module.exports = {
    getAll,
    getOne
};


function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id ===  id)
}