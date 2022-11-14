const router = require ('express').Router()
const conexion = require('./config/conexion')

// Trae todos los datos
router.get('/con',(req,res)=>{
    let sql = 'select * from proyecto'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})


// Trae por id
router.get('/con/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from proyecto where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})
// Trae proyectos con gastos
router.get('/cong',(req,res)=>{
    let sql = 'select id_contrato, nombre, presupuesto, sum(importe) as gastos, proyecto.id from proyecto LEFT JOIN gasto ON proyecto.id=gasto.id_proyecto group by proyecto.id'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        } 
    })
});

// agregar datos
router.post('/add',(req,res)=>{
    const{id}=req.body
    const{nombre}=req.body
    const{presupuesto}=req.body
    const{id_contrato}=req.body
    let sql =`insert into proyecto(id,nombre,presupuesto,id_contrato) values ('${id}','${nombre}','${presupuesto}','${id_contrato}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// eliminar datos

router.delete('/del/:id',(req,res)=>{
    const{id}=req.params
    let sql =`delete from proyecto where id = ('${id}')`
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
    const{nombre}=req.body
    const{presupuesto}=req.body
    const{id_contrato}=req.body
    console.log('llegue')
    let sql =`update proyecto set nombre= '${nombre}',presupuesto= '${presupuesto}', id_contrato='${id_contrato}'where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

module.exports = router;