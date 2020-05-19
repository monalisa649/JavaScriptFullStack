const express = require('express');
const morgan = require('morgan');//Ver respuestas del servidor al cliente

//Initialitation
const app = express();

//Load files

require('./routes/routeMovies');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //Interpreta datos del formulario como json
app.use(express.json()); // Soporta tipo de datos y peticiones http

//Routes

app.use('/api-rest', require('./routes/routeMovies'));






module.exports = app;