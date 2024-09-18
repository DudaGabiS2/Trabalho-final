const express = require('express');
const router = express.Router();
const ControladorAlunos = require('../controlador/controladoralunos');

// Rota para criar um novo produto
router.post('/', ControladorAlunos.createAlunos);

// Rota para login
router.post('/login', ControladorAlunos.loginAluno);

// Rota para obter todos os produtos
router.get('/', ControladorAlunos.getAllAlunos);

// Rota para obter um produto pelo ID
router.get('/:id', ControladorAlunos.getAlunosById);

// Rota para atualizar um produto
router.put('/:id', ControladorAlunos.updateAlunos);

// Rota para deletar um produto
router.delete('/:id', ControladorAlunos.deleteAlunos);

module.exports = router;