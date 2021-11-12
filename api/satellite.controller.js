const humps = require('lodash-humps');
const satelliteService = require('../services/satellite.service');

const getSatelliteByName = async (req, res) => {
    const satname = req.params.satname;
    const result = await satelliteService.getSatelliteByName(satname);
    res.send(humps(result));
};

module.exports = {
    getSatelliteByName
};