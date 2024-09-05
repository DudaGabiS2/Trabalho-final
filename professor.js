const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class professor extends Model { }

professor.init({
                            

            idprofessor: {                     
                type: DataTypes.INTEGER,
                primaryKey: true
               
        },    
        
            userprofessor: {  
              type: DataTypes.STRING,         
              unique: true          

        },
        senhaprofessor: {                    
              type: DataTypes.STRING,
              unique: true 

        },                                   
            disciplina: {   
                type: DataTypes.STRING
        }
}, {
        sequelize,
        modelName: 'professor',
        timestamps: false

})
module.exports = professor
