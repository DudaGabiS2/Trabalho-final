const professor = require('../modelo/professor');


const professorController = {
    createprofessor: async (req, res) => {
        try {
            const novoprofessor = await professor.create(req.body);
            res.json(novoprofessor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllprofessor: async (req, res) => {
        try {
            const professor = await professor.findAll();
            res.json(professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getprofessorById: async (req, res) => {
        try {
            const professor = await professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('professor não encontrado');
            }
            res.json(professor);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateprofessor: async (req, res) => {
        try {
            const professor = await professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('professor não encontrado');
            }
            await professor.update(req.body);
            res.send('professor atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteprofessor: async (req, res) => {
        try {
            const professor = await professor.findByPk(req.params.id);
            if (!professor) {
                return res.status(404).send('professor não encontrado');
            }
            await professor.destroy();
            res.send('professor deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = professorController;