const router = require("express").Router()

const userDB = require("./users-model")
const authenticated = require("../auth/authenticate-middleware")

router.get("/", authenticated, (req,res) => {
    userDB.find()
    .then(users => {
        res.json(users)
    })
    .catch(error => res.send(error))
})

module.exports = router