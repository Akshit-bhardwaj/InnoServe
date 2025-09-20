// dummyData.js (seed file)

// 1. Dependencies import
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const serviceData = require("./config/data/servicedata"); 
const Service = require("./models/serviceSchema"); 

// 2. MongoDB connection
const MONGO_URI = "mongodb://127.0.0.1:27017/myWeb"; // apne DB ka naam dal

const seedDB = async () => {
  try {
    // saara purana data delete karo
    await Service.deleteMany({});
    console.log(" Old services deleted");

    // naya data insert karo
    await Service.insertMany(serviceData);
    console.log(" Dummy services inserted successfully");
     mongoose.connection.close();

    // connection band karo
    mongoose.connection.close();
  } catch (error) {
    console.error(" Error seeding database:", error);
  }
};

// run
seedDB();
