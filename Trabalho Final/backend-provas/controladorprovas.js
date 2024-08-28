const Produto = require('../modelo/dadosprovas');

const ControladorProvas = {
    createProva: async (req, res) => {
        try {
            const novaProva = await Prova.create(req.body);
            res.json(novaProva);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProva: async (req, res) => {
        try {
            const prova = await Prova.findAll();
            res.json(prova);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProvaById: async (req, res) => {
        try {
            const prova = await Prova.findByPk(req.params.id);
            if (!prova) {
                return res.status(404).send('Prova não encontrada');
            }
            res.json(prova);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProva: async (req, res) => {
        try {
            const prova = await Prova.findByPk(req.params.id);
            if (!prova) {
                return res.status(404).send('Prova não encontrada');
            }
            await prova.update(req.body);
            res.send('Prova atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProva: async (req, res) => {
        try {
            const prova = await Prova.findByPk(req.params.id);
            if (!prova) {
                return res.status(404).send('Prova não encontrada');
            }
            await prova.destroy();
            res.send('Prova deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ControladorProvas;