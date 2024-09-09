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
            const Provas = await Provas.findAll();
            res.json(Provas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProvaById: async (req, res) => {
        try {
            const Provas = await Provas.findByPk(req.params.id);
            if (!Provas) {
                return res.status(404).send('Prova não encontrada');
            }
            res.json(Provas);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProva: async (req, res) => {
        try {
            const Provas = await Provas.findByPk(req.params.id);
            if (!Provas) {
                return res.status(404).send('Prova não encontrada');
            }
            await Provas.update(req.body);
            res.send('Prova atualizada com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProva: async (req, res) => {
        try {
            const Provas = await Provas.findByPk(req.params.id);
            if (!Provas) {
                return res.status(404).send('Prova não encontrada');
            }
            await Provas.destroy();
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