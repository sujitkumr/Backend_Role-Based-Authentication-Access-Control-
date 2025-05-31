const express = require('express');
const router = express.Router();

const kpiController = require('../controllers/kpiController');


router.get('/', kpiController.getStats);

module.exports = router;
