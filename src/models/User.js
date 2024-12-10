const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/database');

const User = sequelize.define('User',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:true
    },
    correo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:true
    },
    rol:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    tableName:'users',
    timestamps:true
});

module.exports = User;