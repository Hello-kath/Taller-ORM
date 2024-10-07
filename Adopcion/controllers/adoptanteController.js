const Adoptante = require("../models/adoptanteModel");


//registrar al doptante
const crearAdop = async (req, res) => {
    try{
        const { nombre, correo, direccion} = req.body;
        const nuevoUser = new Adoptante({ nombre, correo, direccion});
        await nuevoUser.save();
        res.json({mensaje: nuevoUser})
    }catch(e) {
        res.status(500).json({mensaje: "Error al realizar el registro del adoptante"})
    }
}

module.exports = {crearAdop}