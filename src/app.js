const express = require('express');
const { connectDB, sequelize } = require('./configs/database');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const solicitudRoutes = require('./routes/solicitudRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.json());

app.use('/api/auth',authRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/solicitud', solicitudRoutes);

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
