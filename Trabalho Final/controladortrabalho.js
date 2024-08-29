const trabalho = require('../modelo/trabalho');

const controladortrabalho = {
    createtrabalho: async (req, res) => {
        try {
            const novotrabalho = await trabalho.create(req.body);
            res.json(novotrabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAlltrabalho: async (req, res) => {
        try {
            const trabalho = await trabalho.findAll();
            res.json(trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    gettrabalhoById: async (req, res) => {
        try {
            const trabalho = await trabalho.findByPk(req.params.id);
            if (!trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            res.json(trabalho);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updatetrabalho: async (req, res) => {
        try {
            const trabalho = await trabalho.findByPk(req.params.id);
            if (!trabalho) {
                return res.status(404).send('Trabalho não encontrado');
            }
            await trabalho.update(req.body);
            res.send('Trabalho atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deletetrabalho: async (req, res) => {
        try {
            const trabalho = await trabalho.findByPk(req.params.id);
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

module.exports = controladortrabalho;