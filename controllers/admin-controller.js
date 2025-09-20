const User = require("../models/user-model");
const Contact = require("../models/contactSchema");

// Default admin dashboard
const getAdminPage = async (req, res) => {
  try {
    const userExist = await User.findOne({});
    res.render("adminPage.ejs", { user: req.session.user })
  } catch (error) {
    console.error(error);
    res.status(500).render("adminPage.ejs", { 
      title: "Error", 
      users: [], 
      contacts: [] 
    });
  }
};

// Show all users
const getAllUser = async (req, res) => {
  try {
    const getUser = await User.find({}, { password: 0 });
    if (!getUser || getUser.length === 0) {
      return res.render("adminUserPage.ejs", { 
        title: "No Users Found", 
        users: [], 
        contacts: [] 
      });
    }
    console.log(getUser);
    res.render("adminUserPage.ejs", { 
      title: "All Users", 
      users: getUser, 
      contacts: [] 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("adminUserPage.ejs", { 
      title: "Error", 
      users: [], 
      contacts: [] 
    });
  }
};

const editPage = async(req , res )=>{
  try {
    const{id} = req.params
    const editPage = await User.findById(id)
    res.render("adminEditPage.ejs" , {user : editPage})
  } catch (error) {
    console.log(error , "Error");
  }
}

const editUser = async(req , res)=>{
  try {
    const{id} = req.params
    const{username , email , phone} = req.body
    const editUser = await User.findByIdAndUpdate(id , {username , email , phone } , {new : true})
    console.log(editUser);
    res.redirect("/admin/user")
  } catch (error) {
    console.log(error , "Error");
  }
}

// Delete user.

const deleteUser = async(req , res)=>{
  try {
    const{id} = req.params
    const deleteUser = await User.findByIdAndDelete(id)
    console.log(deleteUser , "User deleted");
    res.redirect("/admin/user")
  } catch (error) {
    console.log(error , "Error");
  }
}

// Show all contacts
const getAllContacts = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    if (!allContacts || allContacts.length === 0) {
      return res.render("adminContactPage.ejs", { 
        title: "No Contacts Found", 
        users: [], 
        contacts: [] 
      });
    }
    res.render("adminContactPage.ejs", { 
      title: "All Contacts", 
      users: [], 
      contacts: allContacts 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render("adminContactPage.ejs", { 
      title: "Error", 
      users: [], 
      contacts: [] 
    });
  }
};

const deleteContact = async(req , res)=>{
  try {
    const{id} = req.params
    const deleteContact = await Contact.findByIdAndDelete(id)
    console.log(deleteContact , "Contact deleted successfully");
    res.redirect("/admin/contact")
    
  } catch (error) {
    console.log(error , "Error");
    
  }
}


module.exports = {
  getAdminPage,
  getAllUser,
  editPage,
  editUser,
  deleteUser,
  getAllContacts,
  deleteContact
};
