const recipeModel = require('../models/recipes.model')

const addRecipe = (req, res) => {
    const {recipeName, ingredient, serves, instructions} = req.body
    const imagePath = `${req.file.path}`
    recipeModel.create({
        recipeName,
        ingredient,
        serves,
        instructions,
        image: imagePath,
    })
    res.send({status: true})
}

const getAllRecipe = (req, res) => {
    recipeModel.find()
    .then((result) => {
        res.send(result)
    })
}

module.exports = {addRecipe, getAllRecipe}