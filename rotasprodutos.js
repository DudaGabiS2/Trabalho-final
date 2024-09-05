const express = require('express');
const router = express.Router();
const ProdutoController = require('../controlador/professorController');

// Rota para criar um novo produto
router.post('/professor', professorController.createprofessor);

// Rota para obter todos os produtos
router.get('/professor', professorController.getAllprofessor);

// Rota para obter um produto pelo ID
router.get('/professor/:id', professorController.getprofessorById);

// Rota para atualizar um produto
router.put('/professor/:id', professorController.updateprofessor);

// Rota para deletar um produto
router.delete('/professor/:id', professorController.deleteprofessor);


module.exports = router;