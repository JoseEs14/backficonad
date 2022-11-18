const router = require ('express').Router()
const conexion = require('./config/conexion')
// Trae todos los datos
router.get('/con',(req,res)=>{
    let sql = 'select * from gasto'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

 

// Trae por id
//Puede que cambiemos el id por un parámetro más común como la categoría
router.get('/con/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from gasto where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// Trae por nombre de proyecto
router.get('/conn/:nombre',(req,res)=>{
    const {nombre}=req.params
    let sql = 'select * from gasto where id_proyecto = (select proyecto.id from proyecto where UPPER(nombre) LIKE UPPER(?))'
    conexion.query(sql,[nombre],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

router.get('/cona/:alias',(req,res)=>{
    const {alias}=req.params
    let sql = 'select * from gasto WHERE id_proyecto = ANY (select proyecto.id from proyecto where id_contrato = (select contrato.id from contrato where UPPER(alias) LIKE UPPER(?)))'
    conexion.query(sql,[alias],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// agregar datos
router.post('/add',(req,res)=>{
    const{concepto}=req.body
    const{cantidad}=req.body
    const{unidad}=req.body
    const{proveedor}=req.body
    const{importe}=req.body
    const{fecha}=req.body
    const{observaciones}=req.body
    const{id_proyecto}=req.body 
    const{id_pago}=req.body
    let sql =`insert into gasto(concepto,cantidad,unidad,proveedor,importe,fecha,observaciones,id_proyecto,id_pago) values ('${concepto}',
    '${cantidad}','${unidad}','${proveedor}','${importe}','${fecha}','${observaciones}','${id_proyecto}','${id_pago}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// eliminar datos
//Puede que cambiemos el id por un parámetro más común como el concepto o la fecha incluso
router.delete('/del/:id',(req,res)=>{
    const{id}=req.params
    let sql =`delete from gasto where id = ('${id}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// modificar datos
router.put('/upd/:id',(req,res)=>{
    const{id}=req.params
    const{concepto}=req.body
    const{cantidad}=req.body
    const{unidad}=req.body
    const{proveedor}=req.body
    const{importe}=req.body
    const{fecha}=req.body
    const{observaciones}=req.body
    const{id_proyecto}=req.body
    const{id_pago}=req.body
    let sql =`update gasto set concepto = '${concepto}', cantidad = '${cantidad}', concepto = '${concepto}', unidad = '${unidad}',
    proveedor = '${proveedor}', importe = '${importe}', fecha = '${fecha}', observaciones = '${observaciones}', id_proyecto = '${id_proyecto}',
    id_pago = '${id_pago}' where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{ 
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

module.exports = router;