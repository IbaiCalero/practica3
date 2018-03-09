// JavaScript source code
var express = require('express');
var router = express.Router();

router.route('/').get(function (request, response) {
    response.render('index', {
    });
});

router.route('/contacto').get(function (request, response) {
        response.render('contacto', {
            titulo: 'Hola, te puedes poner en contacto desde tu casa de forma sencilla con nosotros',
            mensaje: 'Escribe aqui abajo que quieres comentarnos'
        });
});

router.route('/howWeWork').get(function (request, response) {
    response.render('howWeWork', {
        titulo: 'Tenemos dos opciones para ti!!',
        mensaje1: 'Si quieres puedes venir a nuetra tienda..',
        mensaje2: '... o te lo mandamos a casa o al trabajo a la hora que desees',
        foto1: '/imagenes/how/1.jpg',
        foto2: '/imagenes/how/2.jpg'
    });
});

router.route('/producto/1').get(function (request, response) {
        response.render('productos', {
            titulo: 'Bebidas para el desayuno',
            mensaje1: 'Cola Cao',
            foto1: '/imagenes/1/colacao.jpg',
            mensaje2: 'Tes de la India',
            foto2: '/imagenes/1/tes.jpg',
            mensaje3: 'Zumos variados',
            foto3: '/imagenes/1/zumos.jpg'
        });
    });

router.route('/producto/2').get(function (request, response) {
        response.render('productos', {
            titulo: 'Comida para el desayuno',
            mensaje1: 'Cereales',
            foto1: '/imagenes/2/cereales.jpg',
            mensaje2: 'Crossants',
            foto2: '/imagenes/2/croassants.jpg',
            mensaje3: 'Galletas',
            foto3: '/imagenes/2/galletas.jpg'
        });
    });

router.route('/producto/3').get(function (request, response) {
        response.render('productos', {
            titulo: 'El almuerzo',
            mensaje1: 'Bocadillos',
            foto1: '/imagenes/3/bocadillos.jpg',
            mensaje2: 'Fruta',
            foto2: '/imagenes/3/fruta.jpg',
            mensaje3: 'Sandwiches',
            foto3: '/imagenes/3/sandwiches.jpg'
        });
    });

module.exports = router;