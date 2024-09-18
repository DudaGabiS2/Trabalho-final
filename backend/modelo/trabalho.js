const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Trabalho extends Model {}

Trabalho.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.STRING
    },
    cab: {
        type: DataTypes.STRING
    },
    infocab: {
        type: DataTypes.STRING,
        allownull: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    assunto: {
        type: DataTypes.TEXT
    },
    explicacao: {
        type: DataTypes. TEXT
    },
    referencia: {
        type: DataTypes.STRING
    },
    ap: {
        type: DataTypes.STRING
    },
    detap: {
        type: DataTypes.TEXT,
        allownull: true
    },
    dataentrega: {
        type: DataTypes.DATE
    },
    dataap: {
        type: DataTypes.DATE,
        allownull: true
    },
    turma: {
        type: DataTypes.TEXT
    }
}, {
    sequelize,
    modelName: 'Trabalho',
    timestamps: false
})

module.exports = Trabalho