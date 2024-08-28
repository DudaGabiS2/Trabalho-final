const express = require('express');
const router = express.Router();
const ControladorAlunos = require('./controladoralunos');

// Rota para criar um novo produto
router.post('/dados', ControladorAlunos.createDados);

// Rota para obter todos os produtos
router.get('/dados', ControladorAlunos.getAllDados);

// Rota para obter um produto pelo ID
router.get('/dados/:id', ControladorAlunos.getDadosById);

// Rota para atualizar um produto
router.put('/dados/:id', ControladorAlunos.updateDados);

// Rota para deletar um produto
router.delete('/dados/:id', ControladorAlunos.deleteDados);

module.exports = router;