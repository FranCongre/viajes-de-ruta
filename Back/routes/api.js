var express = require('express');
var router = express.Router();
var experienciasModel = require('../models/experienciasModel');
var cloudinary = require('cloudinary').v2;


router.get('/experiencias', async function (req,res,next){
    let experiencias = await experienciasModel.getExperiencias();

    experiencias = experiencias.map(experiencias => {
        if(experiencias.img_id) {
            const imagen = cloudinary.url(experiencias.img_id, {
                width: 400,
                height: 200,
                crop: 'fill'
            });
            return {
                ...experiencias,
                imagen
            } 
        } else {
            return{
                ...experiencias,
                imagen : ''
            }
        }
    });

    res.json(experiencias)
})

module.exports = router;