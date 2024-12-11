const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/',verifyToken,empleadoController.createOrUpdate);

router.get('/', authenticateToken, empleadoController.getAllEmpleados);

router.delete('/:id', authenticateToken, empleadoController.deleteEmpleado);

module.exports = router;