const mongoose = require('mongoose');

// crear un archivo en la coleccion con los siguientes datos
const perroSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    raza:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: false
    },
    tamaño:{
        type: String,
        required: false
    },
    estado:{
        type: String,
        required: true
    }
});

const perro = mongoose.model('perros', perroSchema)

module.exports = perro