// contact controller.

const Contact = require("../models/contactSchema");

const form = async (req, res) => {
  try {
    res.render("contactForm.ejs");
  } catch (error) {
    console.log(error, "Error");
    res.json({ message: "Error to render" });
  }
};

// To send query.
const contactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    const contactCreate = await Contact.create({ username, email, message });
    console.log(contactCreate, "Message send successfully");
    return res.redirect("/home");
  } catch (error) {
    console.log(error, "Error");
    return res.status(404).json({ message: "Something went wrong" });
  }
};

module.exports = {
  form,
  contactForm,
};
