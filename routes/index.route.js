const express = require('express');
const loginRouter = require('./login.route');
const satelliteRouter = require('./satellite.route');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/satellite', satelliteRouter);

module.exports = router;