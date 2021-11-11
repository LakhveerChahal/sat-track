const { Pool } = require('pg');
const dbConn = require('../dbConfig');

const pool = new Pool(dbConn);

const login = async (req, res) => {
    const result = await pool.query("select * from satellite");
    res.send(result);
};

module.exports = {
    login
};