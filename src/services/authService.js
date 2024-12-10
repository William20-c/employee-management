const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secretKey, expiresIn} = require('../configs/jwtConfig');
const userRepository = require('../repositories/userRepository');

const registro = async(nombre, email, password, rol) => {
    const hashPassword = await bcrypt.hash(password,10);
    const usuario = await userRepository.createUser(nombre, email, correo,hashPassword, rol);
    return usuario;
}

const login = async(email, password) => {
    const usuario = await userRepository.findByEmail(email);

    if(!usuario) throw new Error('Usuario no encontrado');

    const verifyPassowrd = await bcrypt.compare(password,usuario.password);

    if(!verifyPassowrd) throw new Error('Contraseña incorrecta');

    const token = jwt.sign({
        id:usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol
    }, secretKey, {expiresIn});

    return token;
}

module.exports = {registro,login}