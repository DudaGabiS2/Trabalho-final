// Rota de login
app.post('/login', (req, res) => {
    const { user, senha } = req.body;

    if (!user || !senha) {
        return res.status(400).json({ message: 'Usuário e senha são necessários' });
    }
});