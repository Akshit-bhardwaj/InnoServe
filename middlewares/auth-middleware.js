const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return next(); // token nahi hai to guest hi rahega
    }

    const verifyToken = jwt.verify(token, process.env.JWT_Secret_Key);
    const checkUser = await User.findById(verifyToken.id);
    if (!checkUser) {
      return next();
    }

    req.user = checkUser;
    req.session.user = checkUser; // ✅ Session mei bhi save
    next();
  } catch (error) {
    console.log(error, "Error");
    next(); // agar error hua tab bhi proceed karo (guest mode)
  }
};

module.exports = authentication;
