const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const solicitudController = require('../controllers/solicitudController');

router.post('/solicitud', authenticateToken, solicitudController.createOrUpdate);

module.exports = router;
