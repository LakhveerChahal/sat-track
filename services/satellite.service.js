const pool = require('../db/db');
const queries = require('../queries/satellite-queries/satellite.queries');

const getSatelliteByName = async (satname) => {
    const result = await pool.query(queries.getSatellitesByName, [satname]);
    return result.rows;
};

module.exports = {
    getSatelliteByName
};