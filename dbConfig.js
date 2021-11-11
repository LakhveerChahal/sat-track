const host = process.env.HOST || 'db.plovsfmlykwsczfaqkyn.supabase.co';
const password = process.env.PASSWORD || '@lakhveer123';
const db_port = process.env.DB_PORT || 5432;

const dbCon = {
    user: 'postgres',
    host: host,
    database: 'postgres',
    password: password,
    port: db_port
}

module.exports = dbCon;