const UserCallBack = require("../controller/CallBackController");
const ProjectData = require("../controller/ProjectController");
const mocktest = require("../controller/mockController");
const tutorial = require("../controller/tutorialController");
const { register, login, dashboard, userQuery } = require("../controller/userController");
const userAuth = require("../middleware/auth_middle");
const routes = require("express").Router();


// MOCK Test
routes.get('/mocktest', mocktest)

// Project Data
routes.get("/project", ProjectData)

//  Tutorial Video
routes.get('/tutorial', tutorial)


// register User
routes.post("/register", register)

// login User
routes.post("/login", login)

// Auth Checking 
routes.get("/dashboard",userAuth , dashboard);

// Enquire Form
routes.post('/enquire', userQuery)

// CallBack Form 
routes.post('/callbackForm', UserCallBack)




module.exports = routes