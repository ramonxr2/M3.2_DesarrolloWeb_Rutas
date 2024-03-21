const express = require('express');
const router = express.Router();

// Controlador de activos
const activoController = require('../controladores/activoController.js');

// Rutas para los activos
router.get('/', activoController.getAll);
router.get('/:id', activoController.getById);
router.post('/', activoController.create);
router.put('/:id', activoController.update);
router.delete('/:id', activoController.delete);

module.exports = router;
