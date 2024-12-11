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

const deleteSolicitud = async (id) => {
    const solicitud = await Solicitud.findByPk(id);

    if (solicitud) {
        return await solicitud.destroy();
    }
};

const getAllSolicitudEmpleado = async (id_empleado) => {
    return await Solicitud.findAll({
        where: { id_empleado:id_empleado }
    });
};

module.exports = { findById, create, update, deleteSolicitud,getAllSolicitudEmpleado };
