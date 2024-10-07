const express = require('express');
const router = express.Router();

const AdopController = require('../controllers/adoptanteController');

router.post('/adoptantes', AdopController.crearAdop)

module.exports = router;