'use strict';
var express= require('express');
const connection = require('./DataBase/conexion');
var app= express();
var port=process.env.PORT || 1337;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extenden: false}));

connection.sync()
    .then(()=>{
        console.log('Base de datos sincronizada');
        app.listen(port, ()=>{
            console.log("La aplicaci'on corre en el puerto:"+port);
        })
    })
    .catch((error)=>{
    console.error('Error al sincronizar la base de datos:',error);
    });
