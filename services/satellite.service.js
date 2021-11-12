const pool = require('../db/db');
const queries = require('../queries/satellite-queries/satellite.queries');

const getSatelliteByName = async (satname, offset, limit) => {
    const result = await pool.query(queries.getSatellitesByName, [satname, offset, limit]);
    return result.rows;
};

module.exports = {
    getSatelliteByName
};