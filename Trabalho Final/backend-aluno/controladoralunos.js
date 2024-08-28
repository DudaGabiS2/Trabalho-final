const Produto = require('../modelo/dadosalunos');

const ControladorAlunos = {
    createDados: async (req, res) => {
        try {
            const novosDados = await DadosAlunos.create(req.body);
            res.json(novosDados);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllDados: async (req, res) => {
        try {
            const dadosalunos = await DadosAlunos.findAll();
            res.json(dadosalunos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getDadosById: async (req, res) => {
        try {
            const dadosalunos = await DadosAlunos.findByPk(req.params.id);
            if (!dadosalunos) {
                return res.status(404).send('Dados não encontrados');
            }
            res.json(dadosalunos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateDados: async (req, res) => {
        try {
            const dadosalunos = await DadosAlunos.findByPk(req.params.id);
            if (!dadosalunos) {
                return res.status(404).send('Dados não encontrados');
            }
            await dadosalunos.update(req.body);
            res.send('Dados atualizados com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteDados: async (req, res) => {
        try {
            const dadosalunos = await DadosAlunos.findByPk(req.params.id);
            if (!dadosalunos) {
                return res.status(404).send('Dados não encontrados');
            }
            await dadosalunos.destroy();
            res.send('Dados deletados com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ControladorAlunos;