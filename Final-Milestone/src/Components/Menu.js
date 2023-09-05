import React, { useState, useEffect } from 'react';
import './Menu.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // useEffect(() => {
  // Simulated favorite recipes data (replace this with actual data from your backend)
  // const initialFavoriteRecipes = [
  //   {
  //     id: 1,
  //     title: 'Pasta Carbonara',
  //     description: 'Delicious pasta with creamy sauce.',
  //     image: 'https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc='
  //   },
  //   {
  //     id: 2,
  //     title: 'Grilled Salmon',
  //     description: 'Healthy and flavorful grilled salmon.',
  //     image: 'https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=Y8RYbZFcvec-FXMMuoU-qkprC3TUFNiw3Ysoe8Drn6g='
  //   },
  //   {
  //     id: 3,
  //     title: 'Mushroom Risotto',
  //     description: 'Creamy risotto with sautéed mushrooms.',
  //     image: 'https://assets.epicurious.com/photos/5c191ba2b950cf635908c333/16:9/w_1712,h_963,c_limit/Oven-Risotto-with-Mushrooms-recipe-13122018'
  //   },
  //   {
  //     id: 4,
  //     title: 'Chicken Parmesan',
  //     description: 'Breaded chicken topped with marinara and melted cheese.',
  //     image: 'https://media.istockphoto.com/id/1205365946/photo/chicken-parmigiana-traditional-italian-comfort-dish-chicken-breast-covered-in-breadcrumbs.jpg?s=612x612&w=0&k=20&c=7IJpGeog9E62Ot1Cx3YlQ5r7HCB5P4vbKxqJrvokPno='
  //   },
  //   {
  //     id: 5,
  //     title: 'Chocolate Lava Cake',
  //     description: 'Decadent chocolate cake with a gooey molten center.',
  //     image: 'https://media.istockphoto.com/id/541267186/photo/chocolate-fondant-with-strawberries-and-powdered-sugar.jpg?s=612x612&w=0&k=20&c=6a_-IAUELw0zVMR0vjVtr9UiDg_GAN-S3eowoDGsMhI='
  //   },
  //   // Add more favorite recipes here...
  // ];

  // Fetch favorite recipes data from the backend and update the state
  // setFavoriteRecipes(initialFavoriteRecipes);
  // }, []); // Empty dependency array
  useEffect(() => {
    try {
      fetch('http://localhost:4000/api/recipe/all-recipies', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          setFavoriteRecipes(res)

        })
    } catch {
      console.log('fail to fetch');
    }
  }, [])

  return (
    <div className="menu-container">
      <h1>Your Favorite Recipes</h1>
      <MDBContainer fluid>
        <div className="card-container">
          {favoriteRecipes.length ? favoriteRecipes.map(recipe => (
            <Link to={'/pasta/'+ recipe._id}>
              <MDBCard key={recipe.id} className="card">
                <img src={"http://localhost:4000/" + recipe.image} className="card-img-top" alt={recipe.title} />
                <MDBCardBody>
                  <MDBCardTitle>{recipe.recipeName}</MDBCardTitle>
                  {/* <MDBCardText>{recipe.}</MDBCardText> */}
                </MDBCardBody>
              </MDBCard>
            </Link>
          )) : 
          <div className="fs-3">No recipies to see ... 😔</div>}
        </div>
      </MDBContainer>
    </div>
  );
};

export default Menu;