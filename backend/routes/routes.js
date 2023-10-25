const mocktest = require("../controller/MockController");
const { register, login, dashboard } = require("../controller/userController");
const userAuth = require("../middleware/auth_middle");
const routes = require("express").Router();


// MOCK Test
routes.get('/mocktest', mocktest)

// register User
routes.post("/register", register)

// login User
routes.post("/login", login)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);




module.exports = routes