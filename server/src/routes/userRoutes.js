const express=require("express");
const router=express.Router();
const userController=require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/api',userController.getData);
router.post('/login',authController.login);
router.post('/signup',authController.signUp);
router.post("/create-checkout-session", userController.checkout);
module.exports=router;