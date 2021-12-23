require("dotenv").config();
var express = require('express');
var jwt = require('jsonwebtoken');
var verifyRequest = require('../middlewares/verifyRequest');
var {
  loginController,
  signupController,
  resetPasswordController,
} = require('../controllers/auth.controller');
var router = express.Router();

/* GET */
// router.get('/', verifyRequest, async function (req, res, next) {
//   await indexController(req, res);
// });

/**
 * POST 
 * login existing user
 * request body { email: String, password: String }
 */
router.post('/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const c = await loginController(email, password);
    c == 1 ? res.status(200).json({
      message: "successfully logged in",
      code: c,
      token: jwt.sign(email, process.env.JWT_SECRET)
    }) :
      res.status(200).json({
        message: "invalid email or password",
        code: c,
      });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * GET
 * create a new user account
 * request body { email: String, password: String }
 */
router.post('/register', async function (req, res, next) {
  try {
    const { fullName, email, password, securityQuestion, securityQuestionAnswer } = req.body;
    const c = await signupController(fullName, email, password, securityQuestion, securityQuestionAnswer);
    c === 1 ? res.status(200).json({
      message: "account created",
      code: c
    }) :
      (c == 2 ? res.status(200).json({
        message: "could not create user, please try later",
        code: c
      }) :
        res.status(200).json({
          message: "email already registered",
          code: c
        }));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * GET
 * get a password reset link
 * request param email:String
 */
router.get('/reset-password/:email', async function (req, res, next) {

});

module.exports = router;
