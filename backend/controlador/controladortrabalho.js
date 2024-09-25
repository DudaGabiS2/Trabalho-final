const Trabalho = require('../modelo/Trabalho');

const controladorTrabalho = {
    createTrabalho: async (req, res) => {
        try {
            const trabalho = await Trabalho.create(req.body);
            res.json(trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllTrabalho: async (req, res) => {
        try {
            const trabalho = await Trabalho.findAll();
            res.json(trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getTrabalhoById: async (req, res) => {
        try {
            const trabalho = await Trabalho.findByPk(req.params.id);
            if (!trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            res.json(trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateTrabalho: async (req, res) => {
        try {
            const trabalho = await Trabalho.findByPk(req.params.id);
            if (!trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            await trabalho.update(req.body);
            res.send('Trabalho atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteTrabalho: async (req, res) => {
        try {
            const trabalho = await Trabalho.findByPk(req.params.id);
            if (!trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            await trabalho.destroy();
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