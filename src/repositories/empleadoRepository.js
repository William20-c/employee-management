const Empleado = require('../models/Empleado.js');

const findById = async(id) => {
    return await Empleado.findByPk(id);
}

const create = async(data) => {
    return await Empleado.create(data);
}

const update = async(id, data) => {
    return await Empleado.update(data, {where: {id}});
}

const getAll = async(offset, limit) => {
    return await Empleado.findAll({
        offset,
        limit,
        include: [{ model:'solicitudes', as: 'solicitudes' }]
    })
}

const deleteEmpleado = async(id) => {
    const empleado = await Empleado.findByPk(id);

    if (empleado) {
        return await empleado.destroy();
    }
}

module.exports = {findById, create, update, getAll, deleteEmpleado};