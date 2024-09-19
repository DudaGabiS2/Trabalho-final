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

    loginProfessor: async (req, res) => {
        try {
            const user = await Professor.findOne({
                where: {
                    user: req.body.user,
                    senha: req.body.senha
                }
            });
                // Falta conferir se o usuario e senha do aluno sao iguais ao usuario e senha do req.body.user e senha)
            if (user.user === req.body.user && user.senha === req.body.senha) {
                    return res.status(200).json({ mensagem: 'Login bem-sucedido!' });
            } else {
                    return res.status(400).json({ mensagem: 'Usuário ou senha incorretos.' });
            }
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