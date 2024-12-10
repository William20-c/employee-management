const authService = require('../services/authService');

const registro = async(req, res) => {
    try {
        const {nombre, email, password, rol} = req.body;
        const usuario = await authService(nombre,email,password,rol);
        res.status(201).json({message:'Usuario registrado con existo',usuario})
    } catch (error) {
        res.status(400).json({message:'Error al realizar la solicitud',error})
    }
}

const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const token = authService.login(email, password);
        res.status(200).json({token});
    } catch (error) {
        res.status(400).json({message:'Error al realizar la solicitud',error});
    }
}

module.exports = {registro, login};