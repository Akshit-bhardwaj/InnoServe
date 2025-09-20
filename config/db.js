const mongoose = require("mongoose");

// Connection.
connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err, "Error");
  });

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/myWeb");
}

