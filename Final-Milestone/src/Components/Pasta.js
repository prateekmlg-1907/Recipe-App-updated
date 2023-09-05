import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Pasta.css';
import { useParams } from 'react-router-dom';

const Pasta = () => {
    const {id}= useParams();
    const [recipe, setRecipe] = useState([]);
  return (
    <div className="delicious-pasta-page">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <h1 className="mb-4">{recipe.RecipeName}</h1>
            <img
              src={"https:localhost:4000/"+recipe.RecipeImage}
              alt="Delicious Pasta"
              className="recipe-image"
            />
            <h2 className="mt-4">Ingredients</h2>
            <ul className="recipe-ingredients">
              <li>250g of pasta</li>
              <li>2 cloves of garlic, minced</li>
              <li>1 cup heavy cream</li>
              <li>1/2 cup grated Parmesan cheese</li>
              <li>Salt and pepper to taste</li>
              {/* Add more ingredients as needed */}
            </ul>
            <h2 className="mt-4">Instructions</h2>
            <ol className="recipe-instructions">
              <li>Cook the pasta according to package instructions until al dente. Drain and set aside.</li>
              <li>In a large skillet, sauté the minced garlic in a bit of olive oil until fragrant.</li>
              <li>Pour in the heavy cream and simmer for a few minutes until it thickens slightly.</li>
              <li>Stir in the grated Parmesan cheese until the sauce is smooth and creamy.</li>
              <li>Add the cooked pasta to the skillet and toss to coat it in the sauce.</li>
              <li>Season with salt and pepper to taste.</li>
              <li>Serve hot, garnished with fresh parsley and additional Parmesan cheese if desired.</li>
              {/* Add more instructions as needed */}
            </ol>
          </MDBCol>
          <MDBCol md="6">
            {/* You can add additional content or images here */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Pasta;