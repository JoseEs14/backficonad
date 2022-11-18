const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'constructora'
});

conexion.connect((err) => {
    if (err) {
        console.log('Ha ocurrido un error en la BD ' + err);
    } else {
        console.log('Conexion exitosa')
    }
})

module.exports = conexion;