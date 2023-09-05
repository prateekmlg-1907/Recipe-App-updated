import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Home.css';

const Home = (props) => {
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    try {
      fetch('http://localhost:4000/api/recipe/all-recipies', {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => {
          res = res.sort((a, b) => b.updatedAt - a.updatedAt)
          setLatestRecipes(res)
          console.log(props.name)
        })
    } catch {
      console.log('fail to fetch');
    }
  }, [])

  return (
    <div>
        <div className="hero-section">
          <div className="pt-3" >
      <img src="https://wallpapershome.com/images/pages/pic_h/403.jpg" alt="Hero" className="hero-image" />
      <div className="hero-text">
        <h1 className="hero-heading">Welcome to Crave Crafters!</h1>
        <p className="hero-subtitle">Your Ultimate Food Recipe Destination</p>
        </div>
      </div>
    </div>
      
      <div className="featured-recipes">
        <MDBContainer>
          <h2>Featured Recipes</h2>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard>
                <img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?cs=srgb&dl=pexels-engin-akyurt-1438672.jpg&fm=jpg" alt="Recipe" />
                <MDBCardBody>
                  <MDBCardTitle>Delicious Pasta</MDBCardTitle>
                  <MDBCardText>A mouthwatering pasta recipe that's easy to make.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <img src="https://static.toiimg.com/photo/90396846.cms" alt="Recipe" />
                <MDBCardBody>
                  <MDBCardTitle>Refreshing Smoothie</MDBCardTitle>
                  <MDBCardText>Stay cool with this energizing and healthy smoothie recipe.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <img src="https://images.unsplash.com/photo-1617470702892-e01504297e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVtYWRlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Recipe" />
                <MDBCardBody>
                  <MDBCardTitle>Homemade Pizza</MDBCardTitle>
                  <MDBCardText>Create your own pizza masterpiece with this simple recipe.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className="popular-categories">
        <MDBContainer>
          <h2>Popular Categories</h2>
          <MDBRow>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Italian Cuisine</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Healthy Eats</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>Decadent Desserts</MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className="latest-posts">
        <MDBContainer>
          <h2>Latest Posts</h2>
          <MDBRow>
            {
              latestRecipes.map((ele) => (
                <MDBCol md="6">
                  <MDBCard>
                    <img src={"http://localhost:4000/" + ele.image} alt="Post" />
                    <MDBCardBody>
                      <MDBCardTitle>{ele.recipeName}</MDBCardTitle>
                      {/* <MDBCardText>Discover new tastes from around the world in this culinary journey.</MDBCardText> */}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
            }
            {/* <MDBCol md="6">
              <MDBCard>
                <img src="https://c0.wallpaperflare.com/preview/34/77/288/spices-cook-season-ingredients.jpg" alt="Post" />
                <MDBCardBody>
                  <MDBCardTitle>Seasonal Ingredients</MDBCardTitle>
                  <MDBCardText>Celebrate the season with recipes featuring fresh, local produce.</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Home;
