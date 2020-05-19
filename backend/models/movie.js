const {Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: {type: String, require:true},
    author: {type: String, require: true},
    year: {type: String, require:true},
    image:{type: String},
    create_at:{type:Date, default:Date.now}
});

module.exports = model('Movie', movieSchema);