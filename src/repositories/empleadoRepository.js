const Empleado = require('../models/Empleado.js');

const findById = async(id) => {
    return await Empleado.findByPk(id);
}

const findByIdUser = async(id_user) => {
    return await Empleado.findOne({
        where:{id_user}
    })
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
        limit
    })
}

const deleteEmpleado = async(id) => {
    const empleado = await Empleado.findByPk(id);

    if (empleado) {
        return await empleado.destroy();
    }
}

module.exports = {findById, create, update, getAll, deleteEmpleado, findByIdUser};