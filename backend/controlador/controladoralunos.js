const Alunos = require('../modelo/alunos');

const ControladorAlunos = {
    createAlunos: async (req, res) => {
        try {
            const novosalunos = await Alunos.create(req.body);
            res.json(novosalunos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    loginAluno: async (req, res) => {
        try {
            const aluno = await Alunos.findOne({
                where: {
                    user: req.body.user
                }
            });
                // Falta conferir se o usuario e senha do aluno sao iguais ao usuario e senha do req.body.user e senha)
            if (user === user.aluno && senha === senha.aluno) {
                    return res.status(200).json({ mensagem: 'Login bem-sucedido!' });
            } else {
                    return res.status(400).json({ mensagem: 'Usuário ou senha incorretos.' });
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllAlunos: async (req, res) => {
        try {
            const alunos = await Alunos.findAll();
            res.json(alunos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAlunosById: async (req, res) => {
        try {
            const alunos = await Alunos.findByPk(req.params.id);
            if (!alunos) {
                return res.status(404).send('Dados não encontrados');
            }
            res.json(alunos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateAlunos: async (req, res) => {
        try {
            const alunos = await Alunos.findByPk(req.params.id);
            if (!alunos) {
                return res.status(404).send('Aluno não encontrado');
            }
            await Alunos.update(req.body);
            res.send('Aluno atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteAlunos: async (req, res) => {
        try {
            const alunos = await Alunos.findByPk(req.params.id);
            if (!alunos) {
                return res.status(404).send('Aluno não encontrado');
            }
            await Alunos.destroy();
            res.send('Aluno deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = ControladorAlunos;