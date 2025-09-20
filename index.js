const express = require("express");
const session = require("express-session");
const path = require("path");
const methodOverride = require("method-override");
const connect = require("./config/db");
const authRouter = require("./router/authRouter");
const contactRouter = require("./router/contactRouter");
const adminRouter = require("./router/admin-router");
const serviceRouter = require("./router/serviceRouter");
const authMiddleware = require("./middlewares/auth-middleware");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use(
  session({
    secret: "yoursecretkey", // kuch bhi random secret rakhlo   
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// ✅ Har request pe user ko res.locals mei daal do
app.use((req, res, next) => {
  res.locals.user = req.session.user || null; // agar session mei user hai to pass karo
  next();
});

// Routes
app.use("/", authRouter);
app.use("/", contactRouter);
app.use("/", adminRouter);
app.use("/", serviceRouter);


app.listen(3000, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Server is running port 3000...");
  }
});
