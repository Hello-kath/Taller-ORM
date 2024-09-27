const {Alquiler, Cliente, Auto} = require('../models/alquileres')

exports.crearAlquiler = async (req, res) => {
    const {fechaInicio, fechaFin, idCliente, idAuto } = req.body;
    try {
        // verificar si el cliente y el auto existen
        const cliente = await Cliente.findByPk(idCliente);
        const auto = await Auto.findByPk(idAuto);

        if (!cliente) {
            return res.status(404).json({ mensaje: "el cliente no existe" });
        }
        if (!auto || auto.estadoDisponi !== 'disponible') {
            return res.status(404).json({ mensaje: "Auto no disponible" });
        }

        // Crear el registro 
        const newAlquiler = await Alquiler.create({
            idCliente,
            idAuto,
            fechaInicio,
            fechaFin
        });

        // Actualizar el estado de disponibilidad del auto
        auto.estadoDisponi = 'no disponible';
        await auto.save();

        res.json(newAlquiler);
    } catch (e) {
        console.error(e); 
        res.json({ mensaje: "Error al crear el alquiler" });
    }
};
