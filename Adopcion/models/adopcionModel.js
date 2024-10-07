const mongoose = require('mongoose');

// crear un archivo en la coleccion con los siguientes datos
const adopcionSchema = new mongoose.Schema({
    perro: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'perros', 
        required: true
    },
    adoptante: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'adoptantes', 
        required: true
    },
    fechaAdopcion: {
        type: Date,
        required: true
    }
});

const adoptante = mongoose.model('adopcion', adopcionSchema)

module.exports = adoptante