const Trabalho = require('../modelo/Trabalho');

const controladorTrabalho = {
    createTrabalho: async (req, res) => {
        try {
            const novoTrabalho = await Trabalho.create(req.body);
            res.json(novoTrabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllTrabalho: async (req, res) => {
        try {
            const Trabalho = await Trabalho.findAll();
            res.json(Trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getTrabalhoById: async (req, res) => {
        try {
            const Trabalho = await Trabalho.findByPk(req.params.id);
            if (!Trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            res.json(Trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateTrabalho: async (req, res) => {
        try {
            const Trabalho = await Trabalho.findByPk(req.params.id);
            if (!Trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            await Trabalho.update(req.body);
            res.send('Trabalho atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteTrabalho: async (req, res) => {
        try {
            const Trabalho = await Trabalho.findByPk(req.params.id);
            if (!Trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            await Trabalho.destroy();
            res.send('Trabalho deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = controladorTrabalho;