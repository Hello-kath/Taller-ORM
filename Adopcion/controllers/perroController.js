const Perro = require("../models/perroModel");


//crear una registro de perro
const newPerro = async (req, res) => {
    try{
        const { nombre, raza, edad, tamaño, estado } = req.body;
        const nuevoPerro = new Perro({ nombre, raza, edad, tamaño, estado });
        await nuevoPerro.save();
        res.json({mensaje: nuevoPerro})
    }catch(e) {
        res.status(500).json({mensaje: "Error al realizar el registro del perrro"})
    }
}

module.exports = {newPerro}