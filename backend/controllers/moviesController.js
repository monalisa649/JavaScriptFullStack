const Movie = require('../models/movie');

var controller ={
    getMovie: async function  (req, res) {
        var movieId =  req.params.id;
        if(movieId == null) return res.status(404)
        .send({message:'Id does not exist'});

        await Movie.findById(movieId, (err, movie)=>{
            
            if(err) return res.status(500)
            .send({message: 'Error returnig data'});

            if(!movie) return res.status(404)
            .send({message:'Id does not exist'});

            return res.status(200)
            .send({movie});
        });
        
    },

    getMovies: async function (req, res){
        await Movie.find((err,movie)=>{
            if(err) return res.status(500)
            .send({message: 'Error returning data'});

            if(!movie) return res.status(404)
            .send({message: 'There is no movies to show'});

            return res.status(200)
            .send({movie});
        });
    },

   saveMovie : async function (req,res){
       const { title, author, year, image} = req.body;
       const newMovie = new Movie({title,author,year,image});
       await newMovie.save((err, movieStorage)=>{
        if(err) return res.status(500)
        .send({message: 'Error returnin data'});

        if(!movieStorage) return res.status(404)
        .send({message:'Movie no save'});

        return res.status(200)
        .send({movie : movieStorage});
       });
   },
   
   movieUpdate : async function(req,res){
    var movieId =  req.params.id;
    var update =req.body;

    await Movie.findByIdAndUpdate(movieId, update, {new:true}, (err, movieUpdate )=>{
        if(err) return res.status(500)
        .send({message:'Error movie no saved'});

        if(!movieUpdate) return res.status(404)
        .send({message:'Movie no exixt'});

        return res.status(200)
        .send({movie:movieUpdate});
    });

   },

   movieDelete : async function(req, res){
    var movieId =  req.params.id;

    await Movie.findOneAndRemove(movieId,(err, movieRemove)=>{
        if (err) return res.status(500)
        .send({message:'Error movie no remove'});

        if(!movieRemove) return res.status(404)
        .send({message:'Movie no exist'});
        
        return res.status(200)
        .send({movie:movieRemove});
    });
   }
};

module.exports =controller;