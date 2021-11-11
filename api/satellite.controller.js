const { Pool } = require('pg');
const dbConn = require('../dbConfig');
const humps = require('lodash-humps');

const pool = new Pool(dbConn);

const getSatelliteByName = async (req, res) => {
    const satname = req.params.satname;
    const result = await pool.query("select norad_id, satellite_name from satellite where satellite_name ilike '%' || $1 ||'%' limit 10", [satname]);
    res.send(humps(result.rows));
};

module.exports = {
    getSatelliteByName
};