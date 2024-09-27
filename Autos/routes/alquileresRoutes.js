const express = require('express')
const router = express.Router()
const alquilerController = require('../controllers/alquileresController')

router.post('/alquiler', alquilerController.crearAlquiler)
module.exports = router