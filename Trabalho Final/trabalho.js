const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Trabalho extends Model {}

Trabalho.init({
    idtrabalho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipotrabalho: {
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
        type: DataTypes.STRING
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
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'trabalho',
    timestamps: false
})

module.exports = trabalho