const userRepository = require('../repositories/userRepository');
const empleadoRepository = require('../repositories/empleadoRepository.js');
const solicitudRepository = require('../repositories/solicitudRepository.js');
const bcrypt = require('bcrypt');
const Empleado = require('../models/Empleado.js');

const createOrUpdate = async(data) => {
    const {id, nombre, fecha_ingreso, salario} = data;
    const existe = empleadoRepository.findById(id);

    let user = await userRepository.findByEmail(correo);

    if (!user) {
        const hashedPassword = await bcrypt.hash('123456', 10);
        user = await userRepository.create({
            nombre,
            correo,
            password: hashedPassword,
            rol: 'empleado',
        });
    }

    if(existe){
        await empleadoRepository.update(id, {nombre, fecha_ingreso, salario, id_user: user.id});
        return {message:'Empleado actualizado'};
    }

    await empleadoRepository.create({nombre, fecha_ingreso, salario,id_user: user.id});
    
    return {message:'Empleado creado exitosamente'};
}

const getAllEmpleados = async(pagina, totalPagina) => {
    const offset = (pagina - 1) * totalPagina;
    const limit = parseInt(totalPagina, 10);

    const empleado = await empleadoRepository.getAll(offset, limit);

    return limit;
}

const deleteEmpleado = async(id) => {
    await solicitudRepository.deleteByEmpleadoId(id);

    const empleado = await empleadoRepository.deleteEmpleado(id);

    return empleado;
}

module.exports = { createOrUpdate, getAllEmpleados, deleteEmpleado }