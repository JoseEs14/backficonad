require('./conexion')

const express = require('express');

const PORT = process.env.PORT || 3000

const app = express();

//admitir tipos de dato
app.use(express.json())

app.set('port',PORT)

app.use('/api/users',require('./usuarios')) 
app.use('/api/obras',require('./obras')) 
app.use('/api/categorias',require('./categorias'))
app.use('/api/metodo',require('./metodo')) 
app.use('/api/contrato',require('./contrato')) 
app.use('/api/proyecto',require('./proyecto'))
app.use('/api/gasto',require('./gasto')) 


app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('No se pudo iniciar el servidor' + error)
    }else{
        console.log('servidor iniciado en el puerto: '+PORT)
    }
})
