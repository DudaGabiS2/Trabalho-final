const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');
const { uniqueId } = require('lodash');

class Dados extends Model {}

Dados.init({
    idaluno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    useraluno: {
        type: DataTypes.STRING,
        unique: true
    },
    senhaaluno: {
        type: DataTypes.STRING
    },
    turma: {
        type: DataTypes.DECIMAL
    }
}, {
    sequelize,
    modelName: 'dados',
    timestamps: false
});

module.exports = Dados

