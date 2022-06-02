const { User } = require("./../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { message, codes } = require("./../utils/constants");

const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      role: req.body.role,
      password: await bcrypt.hash(req.body.password, 12),
    });
    res.status(codes.SUCCESS_CODE).json({
      status: message.SUCCESS,
      data: {
        users: newUser,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // if user exist and password is correct ?
    var userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      const passwordValid = await bcrypt.compare(password, userExist.password);
      user = userExist;

      //jwt
      const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      //   check password is correct
      if (passwordValid) {
        res.status(codes.SUCCESS_CODE).json({
          status: message.SUCCESS,
          message: message.LOGIN_SUCCESS,
          token,
        });
      } else {
        res.status(codes.FAIL_CODE).json({ error: message.PASS_INCORRECT });
      }
    } else {
      res.status(codes.FAIL_CODE).json({ error: message.USER_NOT_FOUND });
    }
  } catch (error) {
    return next("hello", error);
  }
};

module.exports = {
  signup,
  login,
};
