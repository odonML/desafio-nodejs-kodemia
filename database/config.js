const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.URL;

const dbConection = async()=>{
    try{
        mongoose.connect(URL);
        console.log("DB conection On");
    }catch(err){
        console.log("error in conection", err);
    }
}

module.exports = {
    dbConection,
}