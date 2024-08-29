const express = require('express');
const router = express.Router();
const ControladorAlunos = require('.controlador/controladoralunos');

// Rota para criar um novo produto
router.post('/dadosalunos', controladoralunos.createDadosAlunos);

// Rota para obter todos os produtos
router.get('/dadosalunos', controladoralunos.getAllDadosAlunos);

// Rota para obter um produto pelo ID
router.get('/dadosalunos/:id', controladoralunos.getDadosAlunosById);

// Rota para atualizar um produto
router.put('/dadosalunos/:id', controladoralunos.updateDadosAlunos);

// Rota para deletar um produto
router.delete('/dadosalunos/:id', controladoralunos.deleteDadosAlunos);

module.exports = router;