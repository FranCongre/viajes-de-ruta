var express = require('express');
var router = express.Router();
var experienciasModel = require('../models/experienciasModel');
var consejosModel = require('../models/consejosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');



router.get('/experiencias', async function (req, res, next) {
    let experiencias = await experienciasModel.getExperiencias();

    experiencias = experiencias.map(experien => {
        if (experien.img_id) {
            const imagen = cloudinary.url(experien.img_id, {
                width: 400,
                height: 300,
                crop: 'scale'
            });
            return {
                ...experien,
                imagen
            }
        } else {
            return {
                ...experien,
                imagen: ''
            }
        }
    });

    res.json(experiencias)
})

// Endpoint para obtener consejos  
router.get('/consejos', async function (req, res, next) {
    try {
        let consejos = await consejosModel.getConsejos();
        res.json(consejos);
    } catch (error) {
        next(error); // Manejo de errores  
    }
});

//para envio de formulario sumate
router.post('/sumate', async (req, res) => {
    const mail = {
        to: 'francongre@gmail.com',
        subjet: 'Contacto Web',
        html: `${req.body.nombre} se contacta a traves de la web desde ${req.body.lugar}, para solicitar informacion a este mail ${req.body.email}
         <br> ademas dejo este comentario : ${req.body.texto} <br> su telefono es : ${req.body.telefono}`
    }
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_Host,
        port: process.env.SMTP_Port,
        auth: {
          user: process.env.SMTP_User,
          pass: process.env.SMTP_Pass
        } 
    });
    await transport.sendMail(mail)

    res.status(201).json({
        error : false,
        message : 'Mensaje Enviado'
    })
})

module.exports = router;