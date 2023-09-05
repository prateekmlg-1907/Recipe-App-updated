const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName:{
        type: String,
        required: true
    },
    ingredient:{
        type: Object,
        required: true 
    },
    serves:{
        type: String,
        required: true 
    },
    instructions:{
        type: String,
        required: true 
    },
    image:{
        type: String,
        required: true 
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('recipes', recipeSchema)