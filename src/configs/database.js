const { Sequelize } = require('sequelize')
require('dotenv').config();

//Conexión de la base de datos
const sequelize = new Sequelize(
    process.env.POSTGRES_DB,process.env.POSTGRES_USER,process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect: 'postgres',
        logging: false
    }
);

const connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Conexión creada con exito');
    } catch (error) {
        console.error('Error al conectar al base datos PostgreSQL:', error);
        process.exit(1);
    }
}

module.exports = {
    sequelize,
    connectDB
}