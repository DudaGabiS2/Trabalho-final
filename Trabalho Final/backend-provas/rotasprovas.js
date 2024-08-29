const express = require('express');
const router = express.Router();
const ControladorAlunos = require('.controlador/controladorprovas');

// Rota para criar um novo produto
router.post('/provas', controladorprovas.createProva);

// Rota para obter todos os produtos
router.get('/provas', controladorprovas.getAllProva);

// Rota para obter um produto pelo ID
router.get('/provas/:id', controladorprovas.getProvaById);

// Rota para atualizar um produto
router.put('/provas/:id', controladorprovas.updateProva);

// Rota para deletar um produto
router.delete('/provas/:id', controladorprovas.deleteProva);

module.exports = router;