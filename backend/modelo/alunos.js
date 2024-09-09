const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { uniqueId } = require('lodash');

class Alunos extends Model {}

Alunos.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: DataTypes.STRING,
        unique: true
    },
    senha: {
        type: DataTypes.STRING
    },
    turma: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'Alunos',
    timestamps: false
});

module.exports = Alunos

