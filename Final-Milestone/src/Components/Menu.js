import React, { useState, useEffect } from 'react';
import './Menu.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    try {
      fetch('http://localhost:4000/api/recipe/all-recipies', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          setFavoriteRecipes(res);
        });
    } catch {
      console.log('fail to fetch');
    }
  }, []);

  const handleDeleteRecipe = (recipeId) => {
    fetch(`http://localhost:4000/api/recipe/delete/${recipeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          // Recipe deleted successfully, you can update your UI accordingly
          console.log('Recipe deleted successfully');
          // You may want to refresh the recipe list after deletion
          const updatedRecipes = favoriteRecipes.filter((recipe) => recipe._id !== recipeId);
          setFavoriteRecipes(updatedRecipes);
        } else if (response.status === 404) {
          // Recipe not found, handle this case
          console.error('Recipe not found');
        } else {
          // Handle other error cases
          console.error('Error deleting recipe');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="menu-container">
      <h1>Your Favorite Recipes</h1>
      <MDBContainer fluid>
        <div className="card-container">
          {favoriteRecipes.length ? (
            favoriteRecipes.map((recipe) => (
              <div key={recipe._id}>
                <Link to={`/pasta/${recipe._id}`}>
                  <MDBCard className="card">
                    <img src={`http://localhost:4000/${recipe.image}`} className="card-img-top" alt={recipe.recipeName} />
                    <MDBCardBody>
                      <MDBCardTitle>{recipe.recipeName}</MDBCardTitle>
                      {/* Add a "Delete" button */}
                      <button onClick={() => handleDeleteRecipe(recipe._id)}>Delete</button>
                    </MDBCardBody>
                  </MDBCard>
                </Link>
              </div>
            ))
          ) : (
            <div className="fs-3">No recipes to see ... 😔</div>
          )}
        </div>
      </MDBContainer>
    </div>
  );
};

export default Menu;
