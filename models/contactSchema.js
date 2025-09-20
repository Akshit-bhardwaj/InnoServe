// Schema.

const mongoose = require("mongoose");
// const { required } = require("../validator/auth-validator");

// Creating schema

const contactSchema = mongoose.Schema({
  username: {
    type: String,
    required : true,
  },
  email: {
    type: String,
    required : true,
  },
  message: {
    type: String,
    required : true
  },
});
module.exports = mongoose.model("Contact", contactSchema);
