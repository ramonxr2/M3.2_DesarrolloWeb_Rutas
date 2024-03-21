const express = require('express');
const router = express.Router();

// Controlador de ubicaciones
const ubicacionController = require('../controladores/ubicacionController.js');

// Rutas para las ubicaciones
router.get('/', ubicacionController.getAll);
router.get('/:id', ubicacionController.getById);
router.post('/', ubicacionController.create);
router.put('/:id', ubicacionController.update);
router.delete('/:id', ubicacionController.delete);

module.exports = router;
