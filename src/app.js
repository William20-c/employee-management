const express = require('express');
const { connectDB, sequelize } = require('./configs/database');
const Empleado = require('./models/Empleado');
const Solicitud = require('./models/Solicitud');
const User = require('./models/User');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/auth',authRoutes);

connectDB();

/*Empleado.sync({alter: true})
    .then(() => console.log('Sincronización correcta: Empleados'))
    .catch(console.error);

User.sync({alter: true})
    .then(() => console.log('Sincronización correcta: User'))
    .catch(console.error);

Solicitud.sync({alter: true})
    .then(() => console.log('Sincronización correcta: Solicitud'))
    .catch(console.error);*/

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
