const Solicitud = require('../models/Solicitud');

const findById = async (id) => {
    return await Solicitud.findOne({ where: { id } });
};

const create = async (data) => {
    return await Solicitud.create(data);
};

const update = async (id, data) => {
    return await Solicitud.update(data, { where: { id } });
};

const deleteByEmpleadoId = async (id_empleado) => {
    await Solicitud.destroy({
        where: { id_empleado }
    });
};

module.exports = { findById, create, update, deleteByEmpleadoId };
