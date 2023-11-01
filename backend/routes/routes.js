const mocktest = require("../controller/mockController");
const { register, login, dashboard, userQuery } = require("../controller/userController");
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

// Enquire Form

routes.post('/enquire', userQuery)




module.exports = routes