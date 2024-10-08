const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Professor extends Model { }

Professor.init({


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
                type: DataTypes.STRING,

        }
}, {
        sequelize,
        modelName: 'Professor',
        timestamps: false

})
module.exports = Professor
