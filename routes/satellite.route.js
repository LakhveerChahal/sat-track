const express = require('express');
const satelliteController = require('../api/satellite.controller');

const router = express.Router();

router.route('/:satname').get(satelliteController.getSatelliteByName);

module.exports = router;