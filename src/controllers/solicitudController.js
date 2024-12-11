const solicitudService = require('../services/solicitudService');

const createOrUpdate = async(req, res) => {
    try {
        const {id, id_empleado,codigo, resumen, } = req.body;

        if(!codigo || !id_empleado || !resumen)
            return res.status(400).json({message:'Todos los campos son obligatorios'});


        const resultado = await solicitudService.createOrUpdate({id, codigo, resumen, id_empleado});
        return res.status(200).json(resultado);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const getSolicitudEmpleado = async(req, res) => {
    try {
        const {id_empleado} = req.params;

        if(!id_empleado)
            return res.status(400).json({message:'El ID del empleado es obligatorio'});

        const resultado = await solicitudService.getSolicitudEmpleado({id_empleado});
        return res.status(200).json(resultado);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

const deleteSolicitud = async(req, res) => {
    try {
        const { id } = req.params;

        const resultado = await solicitudService.deleteSolicitud(id);

        return res.status(200).json({ message: 'Solicitud eliminada correctamente', data: resultado });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = { createOrUpdate, getSolicitudEmpleado, deleteSolicitud }