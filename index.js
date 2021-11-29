const express = require("express");

const cors = require("cors");
require("dotenv").config(); //VARIABLES DE ENTORNO

const postDevTo = require("./routes/post.routes"); //RUTAS de postDevTo
const {dbConection} = require("./database/config"); //Conection a la base de datos

const app = express();

app.use(cors());
app.use(express.json());

//coneccion a la base da datos
dbConection();

//rutas
app.use('/post', postDevTo);

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`run serven in port ${PORT}`);
});
//branch develop