const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/',verifyToken,empleadoController.createOrUpdate);

router.get('/', verifyToken, empleadoController.getEmpleados);

router.delete('/:id', verifyToken, empleadoController.deleteEmpleado);

router.get('/:id_user',verifyToken, empleadoController.getEmpleadoByIdUser);

module.exports = router;