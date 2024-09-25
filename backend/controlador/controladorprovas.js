const Provas = require('../modelo/Provas');

const controladorProvas = {
    createProvas: async (req, res) => {
        try {
            const novaProvas = await Provas.create(req.body);
            res.json(novaProvas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProvas: async (req, res) => {
        try {
            const provas = await Provas.findAll();
            res.json(provas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProvaById: async (req, res) => {
        try {
            const provas = await Provas.findByPk(req.params.id);
            if (!provas) {
                return res.status(404).send('Prova não encontrada');
            }
            res.json(provas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProva: async (req, res) => {
        try {
            const provas = await Provas.findByPk(req.params.id);
            if (!provas) {
                return res.status(404).send('Prova não encontrada');
            }
            await provas.update(req.body);
            res.send('Prova atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProva: async (req, res) => {
        try {
            const provas = await Provas.findByPk(req.params.id);
            if (!provas) {
                return res.status(404).send('Prova não encontrada');
            }
            await provas.destroy();
            res.send('Prova deletada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = controladorProvas;