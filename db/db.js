const { Pool } = require('pg');
const dbConn = require('./dbConfig');

const pool = new Pool(dbConn);

const query = (text, params = []) => {
    return pool.query(text, params);
};

const connect = () => {
    return pool.connect();
}

module.exports = {
    query,
    connect
};