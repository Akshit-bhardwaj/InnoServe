const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const home = async (req, res) => {
  try {
    res.render("homePage.ejs", { user: req.session.user });
  } catch (err) {
    console.log(err, "Error");
  }
};

const aboutPage = async (req, res) => {
  try {
    res.render("aboutPage.ejs" , {user : req.session.user })
  } catch (error) {
    console.log(error, "Error");
  }
};

const formPage = async (req, res) => {
  try {
    res.render("Signupform.ejs", { user: req.session.user });
  } catch (err) {
    console.log(err, "Error");
  }
};

// Register

const register = async (req, res) => {
  try {
    const { username, email, phone, password, role } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.send("User already exist");
    }

    // Hash password.
    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      username,
      email,
      phone,
      password: hashPassword,
      role: role || "user",
    });

    const token = jwt.sign(
      { id: createUser._id, email: createUser.email },
      process.env.JWT_Secret_Key,
      { expiresIn: "30d" }
    );
    res.cookie("token", token);
    console.log(createUser, "User created");
    // Send json response (res.send hota hai vaise hi res.json hota hai ye data postman dikhta hai)
    // Iska database schema se koi matlab nahi hai ye mai khud bhejra hu.
    res.redirect("/login");
  } catch (err) {
    console.log(err, "Error");
  }
};

// Login page

const loginPage = async (req, res) => {
  try {
    res.render("loginForm.ejs", { user: req.session.user });
  } catch (error) {
    console.log(error, "Error");
  }
};

// Login function.

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.json({ message: "Invalid credential" });
    }
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, userExist.password);
    if (isPasswordValid) {
      // Token set.
      const token = jwt.sign(
        { id: userExist._id, role: userExist.role, email: userExist.email },
        process.env.JWT_Secret_Key,
        { expiresIn: "30d" }
      );
      res.cookie("token", token);
      req.session.user = userExist;

      // res.cookie("UserDetails", userExist);

      res.redirect("/home");
      // res.json({
      //   message: "Login Successful",
      //   id: userExist._id,
      //   email: userExist.email,
      //   username: userExist.username,
      //   token: token,
      // });
    } else {
      res.json({ message: "Invalid username / password" });
    }
  } catch (err) {
    console.log(err, "Error");
  }
};

const logout = async (req, res) => {
  try {
    const clearCookie = res.clearCookie("token"); //cookie se jwt delete.
    req.session.destroy(() => {
      res.redirect("/home");
    });
  } catch (error) {
    res.json({ message: "Error" });
  }
};

module.exports = {
  home,
  aboutPage,
  formPage,
  register,
  loginPage,
  login,
  logout,
};
