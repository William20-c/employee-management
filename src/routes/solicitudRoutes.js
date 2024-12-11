const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const solicitudController = require('../controllers/solicitudController');

router.post('/', verifyToken, solicitudController.createOrUpdate);

router.get('/:id_empleado', verifyToken, solicitudController.getSolicitudEmpleado);

router.delete('/:id', verifyToken, solicitudController.deleteSolicitud);

module.exports = router;
