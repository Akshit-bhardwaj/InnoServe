const mongoose = require("mongoose");

// Service schema.

const serviceSchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
