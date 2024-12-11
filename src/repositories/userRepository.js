const  User = require('../models/User');

const findByEmail = async(correo) => {
    return await User.findOne({where:{correo}})
}

const createUser = async(usuario) => {
    return await User.create(usuario)
}


module.exports = { findByEmail, createUser }