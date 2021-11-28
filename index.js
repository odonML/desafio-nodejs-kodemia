const express = require("express");
const cors = require("cors")
require("dotenv").config();
const postDevTo = require("./routes/post.routes");
const {dbConection} = require("./database/config");

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
