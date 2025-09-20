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
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const app = express();

connectDB()

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
    secret: process.env.SESSION_SECRET,  // ✅ env se le raha hai
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


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`✅ Server running on port ${PORT}`);
});

