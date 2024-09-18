const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Provas extends Model {}

Provas.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING,
    },
    consulta: {
        type: DataTypes.STRING
    },
    ferramentas: {
        type: DataTypes.STRING
    },
    quaisfer: {
        type: DataTypes.STRING,
        allownull: false   
    },
    especificacoes: {
        type: DataTypes.TEXT
    },
    tempo: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.DATE
    },
    turma: {
        type: DataTypes.TEXT
    },
    disciplina: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Provas',
    timestamps: false
});

module.exports = Provas

//idprova - PrimaryKey - INT
//tipoprova - STRING
//consulta - STRING
//ferramentas - STRING
//quaisfer - STRING - allownull
//especificacoes - TEXT
//tempo - STRING
//data - DATE
//turma - DECIMAL
