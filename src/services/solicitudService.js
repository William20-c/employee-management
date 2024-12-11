const path = require('path');
const fs = require('fs');
const solicitudRepository = require('../repositories/solicitudRepository');

const createOrUpdate = async (data, file) => {
    const {id, codigo,resumen, id_empleado} = data;
    if(!codigo || !id_empleado)
        throw new Error('El código y el ID del empleado son obligatorio');


    const existeSolicitud = await solicitudRepository.findById(id);
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