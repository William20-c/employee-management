const authService = require('../services/authService');

const registro = async(req, res) => {
    try {
        const {nombre, email, password, rol} = req.body;
        const usuario = await authService.registro(nombre,email,password,rol);
        res.status(201).json({message:'Usuario registrado con exito',usuario})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const login = async(req, res) => {
    try {
        const {correo, password} = req.body;
        const token = await authService.login(correo, password);
        res.status(200).json({message:'Usuario logeado con exito',token:token.token, usuario:token.usuario});
    } catch (error) {
        res.status(400).json({message:'Error al realizar la solicitud',error});
    }
}

module.exports = {registro, login};