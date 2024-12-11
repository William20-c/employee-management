const jwt = require('jsonwebtoken');
const {secrectKey} = require('../configs/jwtConfig');

const verifyToken = (req, res, next) => {
    const Authorization = req.header('Authorization');

    if(!Authorization) return res.status(401).json({message:'Acceso no autorizado'})

    const token = Authorization.split(' ')[1];

    if(!token) return res.status(401).json({message:'Acceso no autorizado'})

    try {
        const usuarioToken = jwt.verify(token, 'employee');
        req.user = usuarioToken;
        next();
    } catch (error) {
        return res.status(400).json({message:'Token inválido'});
    }
}

module.exports = verifyToken;