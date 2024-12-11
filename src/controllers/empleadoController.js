const empleadoService = require('../services/empleadoService');

const createOrUpdate = async(req, res) => {
    try {
        const {id, nombre, fecha_ingreso, salario, correo} = req.body;

        if( !nombre || !fecha_ingreso || !salario)
            return res.status(400).json({message:'Todos los campos son obligatorio'});

        const resultado = await empleadoService.createOrUpdate({id, nombre,fecha_ingreso,salario,correo});

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}

const getEmpleados = async(req, res) => {
    try {
        const {pagina = 1,  totalPagina } = req.query;

        const empleados = await empleadoService.getAllEmpleados(pagina, totalPagina);

        return res.status(200).json({
            empleados:empleados,
            totalRegistros:empleados.count
        });

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await empleadoService.deleteEmpleado(id);

        return res.status(200).json({ message: 'Empleado eliminado correctamente', data: resultado });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getEmpleadoByIdUser = async(req, res) => {
    try {
        const {id_user} = req.params;
        if(!id_user)
            return res.status(400).json({message:'El usuario no existe'})

        const resultado = await empleadoService.getEmpleadoByIdUser(id_user);

        return res.status(200).json({message:'Perfil encontrado', empleado:resultado})
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({message:error.message})
    }
}

module.exports = { createOrUpdate, getEmpleados, deleteEmpleado, getEmpleadoByIdUser }