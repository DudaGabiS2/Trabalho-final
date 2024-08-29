const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const { uniqueId } = require('lodash');

class DadosProvas extends Model {}

Dados.init({
    idprova: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoprova: {
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
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'dadosprovas',
    timestamps: false
});

module.exports = DadosProvas

//idprova - PrimaryKey - INT
//tipoprova - STRING
//consulta - STRING
//ferramentas - STRING
//quaisfer - STRING - allownull
//especificacoes - TEXT
//tempo - STRING
//data - DATE
//turma - DECIMAL
