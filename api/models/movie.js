const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema (
    {
        title:{type: String, require: true},
        director:{type: String, require: true},
        year:{type: Number, require: true},
        genre: {type: String, require: true, enum: ["Comedia romántica", "Ciencia ficción", "Animación", "Acción"]}
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model ("movies", movieSchema );
module.exports = Movie;