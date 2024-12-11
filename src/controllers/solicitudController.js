const solicitudService = require('../services/solicitudService');

const createOrUpdate = async(req, res) => {
    try {
        const {id, codigo, resumen, id_emplado} = req.body;

        if(!codigo || !id_emplado)
            return res.status(400).json({message:'El código y el ID del empleado son obligatorios'});

        const resultado = await solicitudService.createOrUpdate({id, codigo, resumen, id_emplado});
        return res.status(200).json(resultado);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = { createOrUpdate }