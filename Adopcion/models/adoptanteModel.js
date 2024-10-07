const mongoose = require('mongoose');

// crear un archivo en la coleccion con los siguientes datos
const adoptanteSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: false
    }
});

const adoptante = mongoose.model('adoptantes', adoptanteSchema)

module.exports = adoptante