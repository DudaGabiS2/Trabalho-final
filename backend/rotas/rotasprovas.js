const express = require('express');
const router = express.Router();
const controladorprovas = require('../controlador/controladorprovas');

// Rota para criar um novo produto
router.post('/', controladorprovas.createProvas);

// Rota para obter todos os produtos
router.get('/', controladorprovas.getAllProvas);

// Rota para obter um produto pelo ID
router.get('/:id', controladorprovas.getProvaById);

// Rota para atualizar um produto
router.put('/:id', controladorprovas.updateProva);

// Rota para deletar um produto
router.delete('/:id', controladorprovas.deleteProva);

module.exports = router;