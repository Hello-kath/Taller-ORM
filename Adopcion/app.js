const express = require('express');
const app = express();
app.use(express.json());
const conexionDB = require('./config/db');
require('dotenv')
conexionDB();

const perroR = require('./routes/perroRoute')
const adopR = require('./routes/adoptanteRoute')

app.use("/api", perroR)
app.use("/api", adopR)

const PORT = process.env.puertoAdop 
app.listen(PORT, () =>{
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})