const express = require('express');
const multer = require('multer');
const recipeModel = require('../models/recipes.model'); // Import the recipeModel
const { addRecipe, getAllRecipe, getRecipe, deleteRecipe } = require('../controller/recipe.controller');

const storage = multer.diskStorage({
  destination: (res, file, cb) => (
    cb(null, './recipeImage')
  ),
  filename: (res, file, cb) => (
    cb(null, Date.now() + '-' + file.originalname)
  )
})

const upload = multer({ storage })

const router = express.Router()

router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;

    // Perform a database search for recipes that match the query
    const searchResults = await recipeModel.find({
      recipeName: { $regex: query, $options: 'i' }, // Case-insensitive search
    });

    if (searchResults.length === 0) {
      // If no matching recipes are found, return a 404 status
      return res.status(404).json({ message: 'No matching recipes found.' });
    }

    // If matching recipes are found, return them in the response
    res.status(200).json(searchResults);
  } catch (error) {
    console.error('Error searching for recipes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/add', upload.single('recipe-image'), addRecipe);
router.get('/all-recipies', getAllRecipe);
router.get('/recipe-details/:id', getRecipe);
router.delete('/delete-recipe/:id', deleteRecipe);

module.exports = router;
