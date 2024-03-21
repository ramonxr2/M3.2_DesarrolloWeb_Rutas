const express = require('express');
const router = express.Router();

// Controlador de responsables
const responsableController = require('../controladores/responsableController.js');

// Rutas para los responsables
router.get('/', responsableController.getAll);
router.get('/:id', responsableController.getById);
router.post('/', responsableController.create);
router.put('/:id', responsableController.update);
router.delete('/:id', responsableController.delete);

module.exports = router;
