
const express =  require("express")
const { register, login } = require("../controllers/userController")

const route = express.Router()

route.post("/signup" , register)

route.post("/login" , login)


module.exports = route

