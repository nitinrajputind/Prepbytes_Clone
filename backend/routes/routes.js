const { register, login, dashboard } = require("../controller/userController");
const userAuth = require("../middleware/auth_middle");
const routes = require("express").Router();


// register User
routes.post("/register", register)

// login User
routes.post("/login", login)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);




module.exports = routes