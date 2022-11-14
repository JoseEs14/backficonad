const router = require ('express').Router()
const conexion = require('./config/conexion')
// Trae todas las obras
router.get('/',(req,res)=>{
    let sql = 'select * from obra'
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
    let sql = 'select * from obra where id = ?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

// agregar obras
router.post('/',(req,res)=>{
    const{nombre}=req.body
    const{descripcion}=req.body
    let sql =`insert into obra values (0,'${nombre}','${descripcion}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// eliminar obra

router.delete('/:id',(req,res)=>{
    const{id}=req.params
    let sql =`delete from obra where id = ('${id}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

// modificar obra
router.put('/:id',(req,res)=>{
    const{id}=req.params
    const{nombre}=req.body
    const{descripcion}=req.body
    let sql =`update obra set nombre = '${nombre}',descripcion = '${descripcion}' where id = '${id}'`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});

//trae conceptos de una obra
router.get('/:id/:c',(req,res)=>{
    const {id}=req.params
    let sql = `select * from concepto where id_obra = '${id}'`
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})

//add conceptos a una obra
router.post('/:id/:c',(req,res)=>{
    const {id}=req.params
    const{nombre}=req.body
    const{fecha}=req.body
    const{cantidad}=req.body
    const{total}=req.body
    const{id_categoria}=req.body
    const{proveedor}=req.body
    const{m_pago}=req.body
    let sql =`insert into concepto values (0,'${id}','${fecha}','${nombre}','${cantidad}','${total}','${id_categoria}','${proveedor}','${m_pago}')`
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})
// eliminar conceptos de una obra

router.delete('/:id/:idc',(req,res)=>{
    const{id}=req.params
    const{idc}=req.params
    let sql =`delete from concepto where id_concepto = ('${idc}')`
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json({status: 'se armo'})
        }
    })
});
// modificar conceptos de una obra

router.put('/:id/:idc',(req,res)=>{
    const {id}=req.params
    const{idc}=req.params
    const{nombre}=req.body
    const{fecha}=req.body
    const{cantidad}=req.body
    const{total}=req.body
    const{id_categoria}=req.body
    const{proveedor}=req.body
    const{m_pago}=req.body
    let sql =`update concepto set fecha='${fecha}',nombre='${nombre}',cantidad='${cantidad}',total='${total}',id_categoria='${id_categoria}',proveedor='${proveedor}',m_pago='${m_pago}' where id_concepto = '${idc}'`
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err
        else{
            res.json(rows)
        }
    })
})


module.exports = router;