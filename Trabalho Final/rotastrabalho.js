const express = require('express');
const router = express.Router();
const controladortrabalho = require('../controlador/controladortrabalho');

// Rota para criar um novo produto
router.post('/', controladortrabalho.createtrabalho);

// Rota para obter todos os produtos
router.get('/', controladortrabalho.getAlltrabalho);

// Rota para obter um produto pelo ID
router.get('/:id', controladortrabalho.gettrabalhoById);

// Rota para atualizar um produto
router.put('/:id', controladortrabalho.updateProduto);

// Rota para deletar um produto
router.delete('/:id', controladortrabalho.deletetrabalho);

module.exports = router;
