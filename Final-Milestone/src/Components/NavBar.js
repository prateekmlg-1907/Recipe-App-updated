import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import './Navbar.css';
import image1 from './Crave Crafters.png';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';

const NavBar = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  async function handleLogout() {
    try {
      await fetch('http://localhost:4000/api/auth/clear-cookies', {
        method: 'GET',
        credentials: 'include'
      })
    } catch {
      console.log('something went wrong')
    }
  }

  useEffect(() => {
    try {
      fetch('http://localhost:4000/api/auth/user', {
        method: 'GET',
        credentials: 'include'
      })
        .then((res) => (res.json()))
        .then((json) => {
          if (json['status']) {
            setAuth(true);
            setUser(json.user);
          } else
            setAuth(false);
        });
    } catch {
      console.log('something went wrong !!!');
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      // Use the navigate function to navigate to the search results page
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark fixed-top mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Gabriola', fontSize: '35px', fontWeight: 'bold', color: '#C8E4B2' }}>
          <img src={image1} style={{ height: 50, width: 80 }} alt="Logo" className="logo-image mx-3" />
          Crave Crafters
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>My Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create" style={{ fontFamily: 'Comic Sans MS', fontSize: '18px', fontWeight: 'bold', color: '#A7ECEE' }}>Create Recipe</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <MDBInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <MDBBtn color="info" type="submit">
              Search
            </MDBBtn> */}
          </form>
          {
            !auth ?
              <div>
                <Link className='btn btn-warning mx-1' to="/login">Login</Link>
                <Link className='btn btn-warning mx-1' to="/signup">Signup</Link>
              </div>
              : <div className="user-info d-flex align-items-center justify-content-center ps-3">
                <div className="text-light me-2 fs-5">{user.firstName + ' ' + user.lastName}</div>
                <Link to='/login' onClick={handleLogout}>
                  <img src="https://icon-library.com/images/logout-icon-png/logout-icon-png-3.jpg" alt="" width={35} />
                </Link>
              </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
