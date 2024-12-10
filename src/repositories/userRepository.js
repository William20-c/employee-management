const { User } = require('../models/User');

const findByEmail = async(email) => {
    return await User.findOne({where:{email}})
}

const createUser = async(nombre, correo,password,rol) => {
    return await User.create({nombre,correo,password,rol})
}


module.exports = { findByEmail, createUser }