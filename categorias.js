const router = require ('express').Router()
const conexion = require('./config/conexion')

// Trae todos los datos
router.get('/',(req,res)=>{
    let sql = 'select * from categoria'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// Trae por id
router.get('/:id',(req,res)=>{
    const {id}=req.params
    let sql = 'select * from categoria where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// agregar datos
router.post('/',(req,res)=>{
    const{nombre}=req.body
    let sql =`insert into categoria(nombre) values ('${nombre}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// eliminar datos

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    let sql =`delete from categoria where id = ('${id}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// modificar datos
router.put('/:id',(req,res)=>{
    const{id}=req.params
    const{nombre}=req.body
    let sql =`update categoria set nombre = '${nombre}' where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

module.exports = router;