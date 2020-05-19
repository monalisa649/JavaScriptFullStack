const {Router} = require('express');

const route = Router();

const movieController = require('../controllers/moviesController');

route.get('/movie/:id?', movieController.getMovie);
route.get('/movies', movieController.getMovies);
route.post('/savemovie', movieController.saveMovie);
route.put('/movieupdate/:id?', movieController.movieUpdate);
route.delete('movie/:id?', movieController.movieDelete);


module.exports = route;