const express = require('express');
const router = express.Router();

const perroController = require('../controllers/perroController');

router.post('/perros', perroController.newPerro)

module.exports = router;