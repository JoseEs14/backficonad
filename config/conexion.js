const mysql = require('mysql')
const conexion = mysql.createConnection({
   host: 'localhost',
   user: 'root', 
   port: 3306,
   database: 'constructora'
});

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error en la BD ' + err);
    }else{
        console.log('Conexion exitosa')
    }
})

module.exports=conexion;