const userDB = require('../database/dbConfig')


module.exports = {
    add,
    find,
    findBy,
    findById,
}


async function add(user){
const [id] = await userDB("users").insert(user, "id")

return findById(id)
}


function find(){
    return userDB("users")
.select('id', 'username', 'password')
}

function findBy(filter){
    return userDB("users").where(filter)
}
function findById(id){
    return userDB("users")
    .where({ id })
    .first()
}