import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/products/:id" element={<SingleProduct/>} />
        <Route exact path="/Login" element={<Login/>} />   
        <Route exact path="/Register" element={<Register/>} />  
        <Route exact path="/Cart" element={<Cart/>} />   
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/About" element={<About/>}/>
         
        
      </Routes>
      
      
      
      
    </>
  );
};

export default App;
