const router = require ('express').Router()
const conexion = require('./config/conexion')

// Trae todos los datos
router.get('/con',(req,res)=>{
    let sql = 'select * from contrato'
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
    let sql = 'select * from contrato where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// agregar datos
router.post('/add',(req,res)=>{
    const{id}=req.body
    const{alias}=req.body
    const{f_inicio}=req.body
    const{f_fin}=req.body
    let sql =`insert into contrato(id,alias,f_inicio,f_fin) values ('${id}','${alias}','${f_inicio}','${f_fin}')`
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
    let sql =`delete from contrato where id = ('${id}')`
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
    const{alias}=req.body
    const{f_inicio}=req.body
    const{f_fin}=req.body
    let sql =`update contrato set alias= '${alias}',f_inicio= '${f_inicio}',f_fin= '${f_inicio}'  where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

module.exports = router;