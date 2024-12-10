const { DataTypes } = require('sequelize');
const { sequelize } = require('../configs/database');

const Empleado = sequelize.define('Empleado',{
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha_ingreso:{
        type:DataTypes.DATE,
        allowNull:true
    },
    nombre:{ 
        type:DataTypes.STRING,
        allowNull:true
    },
    salario:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    id_user:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'users',
            key:'id'
        }
    }
},{
    tableName:'empleados',
    timestamps:true
});

module.exports = Empleado;