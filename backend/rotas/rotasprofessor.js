const express = require('express');
const router = express.Router();
const ProfessorController = require('../controlador/professorController');

// Rota para criar um novo produto
router.post('/', ProfessorController.createProfessor);

// Rota para obter todos os produtos
router.get('/', ProfessorController.getAllProfessor);

// Rota para obter um produto pelo ID
router.get('/:id', ProfessorController.getProfessorById);

// Rota para atualizar um produto
router.put('/:id', ProfessorController.updateProfessor);

// Rota para deletar um produto
router.delete('/:id', ProfessorController.deleteProfessor);


module.exports = router;