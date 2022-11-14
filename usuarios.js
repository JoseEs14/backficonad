const router = require ('express').Router()
const conexion = require('./config/conexion')
// Trae todos los datos
router.get('/con',(req,res)=>{
    let sql = 'select * from user'
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
    let sql = 'select * from user where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// agregar datos
router.post('/add',(req,res)=>{
    const{nombre}=req.body
    let sql =`insert into user(nombre) values ('${nombre}')`
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
    let sql =`delete from user where id = ('${id}')`
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
    let sql =`update user set nombre = '${nombre}' where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

module.exports = router;