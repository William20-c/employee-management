const empleadoService = ('../services/empleadoService.js');

const createOrUpdate = async(req, res) => {
    try {
        const {id, nombre, fecha_ingreso, salario} = req.body;

        if(!id || !nombre || !fecha_ingreso || !salario)
            return res.status(400).json({message:'Todos los campos son obligatorio'});

        const resultado = await empleadoService.createOrUpdate({id, nombre,fecha_ingreso,salario});

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}

const getAllEmpleados = async(req, res) => {
    try {
        const {pagina = 1,  totalPagina } = req.query;

        const empleados = await empleadoService.getAllEmpleados(pagina, totalPagina);

        return res.status(200).json(empleados);

    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await empleadoService.deleteEmpleado(id);

        return res.status(200).json({ message: 'Empleado eliminado correctamente', data: result });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrUpdate, getAllEmpleados, deleteEmpleado }