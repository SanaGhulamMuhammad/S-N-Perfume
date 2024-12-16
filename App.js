import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar"; // Correct path to Navbar component
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'; // Import the Product component
import Cart from './Pages/Cart'; // Import the Cart component
import LoginSignup from './Pages/LoginSignup'; // Import the LoginSignup component


function App () {
  console.log("App Rendered");
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory category="men"/>}/>
  <Route path='/womens' element={<ShopCategory category="women"/>}/>
  <Route path='/kids' element={<ShopCategory category="kids"/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path=':productId' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>

        </BrowserRouter>
        </div>
      
  );
}
export default App;



