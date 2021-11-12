const humps = require('lodash-humps');
const satelliteService = require('../services/satellite.service');

const getSatelliteByName = async (req, res) => {
    const satname = req.params.satname;
    const offset = +req.query.offset;
    const limit = +req.query.limit;
    const result = await satelliteService.getSatelliteByName(satname, offset, limit);
    res.send(humps(result));
};

module.exports = {
    getSatelliteByName
};