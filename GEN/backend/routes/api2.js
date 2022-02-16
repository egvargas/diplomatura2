var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


router.get('/novedades', async function (req, res, next) {
    
    let novedades = await novedadesModel.getNovedades();

    // se agrega la imagen que adjuntamos:
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        }else {
            return {
                ...novedad,
                imagen: ''
            }
        }
}); 
    res.json(novedades);
});

router.post('/contacto', async (req,res) => {
    
    const mail = {
        to: 'gasolero.cs@gmail.com',
        subject : 'Contacto Web',
        html:  `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo:
        ${req.body.email} <br> Ademas, hizo el siguiente comentario: ${req.body.mensaje}</br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth :{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }
    });

    await transport.sendMail(mail)

        res.status(201).json({
            error: false,
            message: 'Mensaje Enviado'

        });

    });

    module.exports = router;