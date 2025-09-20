// dummyData.js (seed file)

// 1. Dependencies import
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config()
const serviceData = require("./config/data/servicedata"); 
const Service = require("./models/serviceSchema"); 

// 2. MongoDB connection
const MONGO_URI = process.env.MONGO_URI; 

const seedDB = async () => {
  try {
    // ✅ Connect to DB
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected for seeding");

    // saara purana data delete karo
    await Service.deleteMany({});
    console.log("Old services deleted");

    // naya data insert karo
    await Service.insertMany(serviceData);
    console.log("Dummy services inserted successfully ✅");

    // ✅ connection band karo
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// run
seedDB();