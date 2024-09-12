const Professor = require('../modelo/professor');


const ProfessorController = {
    createProfessor: async (req, res) => {
        try {
            const novoProfessor = await Professor.create(req.body);
            res.json(novoProfessor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllProfessor: async (req, res) => {
        try {
            const Professor = await Professor.findAll();
            res.json(Professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getProfessorById: async (req, res) => {
        try {
            const Professor = await Professor.findByPk(req.params.id);
            if (!Professor) {
                return res.status(404).send('Professor não encontrado');
            }
            res.json(Professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateProfessor: async (req, res) => {
        try {
            const Professor = await Professor.findByPk(req.params.id);
            if (!Professor) {
                return res.status(404).send('Professor não encontrado');
            }
            await Professor.update(req.body);
            res.send('Professor atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteProfessor: async (req, res) => {
        try {
            const Professor = await Professor.findByPk(req.params.id);
            if (!Professor) {
                return res.status(404).send('Professor não encontrado');
            }
            await Professor.destroy();
            res.send('Professor deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ProfessorController;