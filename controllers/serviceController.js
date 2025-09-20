const Service = require("../models/serviceSchema")
const serviceData = require("../config/data/servicedata");

const getServices = async(req , res)=>{
    try {
        const alldata = await Service.find({})
        res.render("services.ejs" , {alldata})
    } catch (error) {
        console.log(error , "Error");
    }
}
module.exports = {
    getServices
}