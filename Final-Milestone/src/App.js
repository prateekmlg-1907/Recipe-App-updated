import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Search from "./Components/Search";
import Menu from "./Components/Menu";
import Create from "./Components/Create";
import Pasta from "./Components/Pasta";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home name={'Prateek'} />} />
            <Route path="/contact" element={<About />} />
            <Route path="/" element={<NavBar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/create" element={<Create />} />
            <Route path="/pasta/:id" element={<Pasta />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
