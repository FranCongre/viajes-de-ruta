var express = require('express');
var router = express.Router();
var experienciasModel = require('../../../models/experienciasModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
var uploader = util.promisify(cloudinary.uploader.upload);
var destroy = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function (req, res, next) {

  var experiencias = await experienciasModel.getExperiencias();

  experiencias = experiencias.map(experien => {
    if (experien.img_id) {
      var imagen = cloudinary.image(experien.img_id, {
        with: 100,
        height: 100,
        crop: 'pad'
      });
      return {
        ...experien,
        imagen
      }
    } else {
      return {
        ...experien,
        imagen
      }
    }
  })

  res.render('admin/experiencias-admin/inicio', {
    layout: 'admin/experiencias-admin/layout',
    experiencias
  });

});

//formulario agregar
router.get('/agregar', (req, res, next) => {
  res.render('admin/experiencias-admin/agregar', {
    layout: 'admin/experiencias-admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {
    //agregar imagen
    var img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
    var imagen = req.files.imagen;
    var img_id = (await uploader(imagen.tempFilePath)).public_id;
    }


    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.texto != "") {

      await experienciasModel.insertarExperiencias({
        ...req.body,
        img_id
      });
      res.redirect('/admin/experiencias-admin/inicio')
    } else {
      res.render('admin/experiencias-admin/agregar', {
        layout: 'admin/experiencias-admin/layout',
        error: true,
        message: '*Todos los campos son requieridos*'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/experiencias-admin/agregar', {
      layout: 'admin/experiencias-admin/layout',
      error: true,
      message: '**No se cargo Experiencias'
    })
  }
});

//**eliminar Experiencias**
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
    let experiencias = await experienciasModel.getExperienciasById(id);
    if(experiencias.img_id) {
      await(destroy(experiencias.img_id))
    }

  await experienciasModel.deleteExperienciasById(id);
  res.redirect('/admin/experiencias-admin/inicio');
});

//modificar
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  var Experiencias = await experienciasModel.getExperienciasById(id)
  res.render('admin/experiencias-admin/modificar', {
    layout: 'admin/experiencias-admin/layout',
    Experiencias
  });
});
//para modificar formulario
router.post('/modificar', async (req, res, next) => {
  try {
    let img_id = req.body.img_original;

    let borrar_img_vieja = false;

    console.log('hola',req.body.img_original, 'hola')

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var Experiencias = await experienciasModel.getExperienciasById(req.body.id)

    var obj = {
      titulo: req.body.titulo,
      texto: req.body.texto,
      img_id : img_id === '' ? Experiencias.img_id : img_id
    }
    if (req.body.titulo  != "" && req.body.texto != "") {
      await experienciasModel.modificarExperienciasById(obj, req.body.id)
      res.redirect('/admin/experiencias-admin/inicio')
    } else {
      res.render('admin/experiencias-admin/modificar', {
        layout: 'admin/experiencias-admin/layout',
        error: true,
        message: '*Todos los campos son requieridos*'
      })
    } console.log('aca',experienciasModel.modificarExperienciasById)
  } catch (error) {
    console.error("error especifico",error)
    res.render('admin/experiencias-admin/modificar', {
      layout: 'admin/experiencias-admin/layout',
      error: true,
      message: '**No se modifico Experiencias'
    })
  }
});



module.exports = router;