const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/database');
const { Empleado } = require('./Empleado');

const Solicitud = sequelize.define('Solicitud',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    codigo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    resumen:{ 
        type:DataTypes.STRING,
        allowNull:true
    },
    id_empleado:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: 'empleados',
            key:'id'
        },
        onDelete: 'CASCADE'
    }
},{
    tableName:'solicitudes',
    timestamps:true
});


module.exports = Solicitud;