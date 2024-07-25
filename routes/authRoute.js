const express = require('express');
const { registerController, loginController ,testController} = require('../controllers/authController.js');
const{registerSignin,isAdmin}=require('../middleswares/authMiddleware.js')
const router = express.Router();

// Register route
router.post('/register', registerController);

// Login route
router.post('/login', loginController);

router.get('/test',registerSignin,isAdmin,  testController)

module.exports = router;

