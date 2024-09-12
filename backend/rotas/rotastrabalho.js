const express = require('express');
const router = express.Router();
const controladortrabalho = require('../controlador/controladortrabalho');

// Rota para criar um novo produto
router.post('/', controladortrabalho.createTrabalho);

// Rota para obter todos os produtos
router.get('/', controladortrabalho.getAllTrabalho);

// Rota para obter um produto pelo ID
router.get('/:id', controladortrabalho.getTrabalhoById);

// Rota para atualizar um produto
router.put('/:id', controladortrabalho.updateTrabalho);

// Rota para deletar um produto
router.delete('/:id', controladortrabalho.deleteTrabalho);

module.exports = router;
