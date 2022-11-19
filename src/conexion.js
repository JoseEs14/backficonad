const mysql = require('mysql')
const conexion = mysql.createPool({
    host: process.env.DB_HOST || 'sqloserver.mysql.database.azure.com',
    user: process.env.DB_USER || 'maeqadmin@sqloserver',
    password: process.env.DB_PASSWORD || 'm4eqbdpa$$w0rd',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'constructora'
});


module.exports = conexion;