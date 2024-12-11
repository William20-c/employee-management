const path = require('path');
const fs = require('fs');
const solicitudRepository = require('../repositories/solicitudRepository');

const createOrUpdate = async (data) => {
    const {id, codigo,resumen, id_empleado} = data;
    if(!codigo || !id_empleado)
        throw new Error('El código y el ID del empleado son obligatorio');


    const existeSolicitud = id ? await solicitudRepository.findById(id) : null;
    if(existeSolicitud){
        await solicitudRepository.update(id, {codigo, resumen, id_empleado})
        return {message: 'Solicitud actualizada existosamente'}
    }

    await solicitudRepository.create({
        codigo,
        resumen,
        id_empleado
    });

    return {message:'Solicitud creada con exito'}

}

const getSolicitudEmpleado = async (data) => {
    const {id_empleado} = data;
    if(!id_empleado)
        throw new Error('El ID del empleado es obligatorio');

    return await solicitudRepository.getAllSolicitudEmpleado(
        id_empleado
    );

}

const deleteSolicitud = async(id) => {
    if(!id)
        throw new Error('El ID de la sdolicitud es obligatoria');

    return await solicitudRepository.deleteSolicitud(id);
}



module.exports = {createOrUpdate, getSolicitudEmpleado, deleteSolicitud}