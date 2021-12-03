const mongoose = require("mongoose"); //Importacion de mongoose
require("dotenv").config(); //VARIABLES DE ENTORNO

const URL = process.env.URL; //ACEDE a la url

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