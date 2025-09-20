const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error(" Database connection failed:", err.message);
    process.exit(1); // fatal error, exit process
  }
}

module.exports = connectDB;


