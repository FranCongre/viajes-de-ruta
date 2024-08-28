var express = require('express');
var router = express.Router();
var consejosModel = require('../../../models/consejosModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

    var consejos = await consejosModel.getConsejos();

    res.render('admin/consejosadmin/inicio', {
        layout: 'admin/consejosadmin/layout',
        consejos
    });
    
  });
  
//formulario agregar
router.get('/agregar', (req, res, next) =>{
  res.render('admin/consejosadmin/agregar', { 
    layout: 'admin/consejosadmin/layout'
   });
});

router.post('/agregar', async (req, res, next) =>{
  try{
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.texto != "") {
      await consejosModel.insertarConsejo(req.body);
      res.redirect('/admin/consejosadmin/inicio')
    } else {
      res.render('admin/consejosadmin/agregar', {
        layout: 'admin/consejosadmin/layout',
        error: true,
        message: '*Todos los campos son requieridos*'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/consejosadmin/agregar',{
      layout: 'admin/consejosadmin/layout',
      error: true,
      message: '**No se cargo Consejo'
    })
  }
});

//**eliminar consejo**
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await consejosModel.deleteConsejoById(id);
  res.redirect('/admin/consejosadmin/inicio');
});

//modificar
router.get('/modificar/:id', async (req, res, next) =>{
  var id = req.params.id;
  var consejo = await consejosModel.getConsejoById(id)
  res.render('admin/consejosadmin/modificar', { 
    layout: 'admin/consejosadmin/layout',
    consejo
   });
});
//para modificar
router.post('/modificar', async (req, res, next) =>{
  try{
    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      texto: req.body.texto
    }
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.texto != "") {
      await consejosModel.modificarConsejoById(obj, req.body.id)
      res.redirect('/admin/consejosadmin/inicio')
    } else {
      res.render('admin/consejosadmin/modificar', {
        layout: 'admin/consejosadmin/layout',
        error: true,
        message: '*Todos los campos son requieridos*'
      })
    }  } catch (error){
    console.log(error)
    res.render('admin/consejosadmin/modificar',{
      layout: 'admin/consejosadmin/layout',
      error: true,
      message: '**No se modifico Consejo'
    })
  }
});

  module.exports = router;

