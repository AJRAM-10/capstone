import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import User from './Components/User';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <Routes>
            <Route path = '/' element={<Home/>}></Route>
            <Route path = '/shop' element={<Shop/>}></Route>
            <Route path = '/shop/cigars'></Route>
            <Route path = '/shop/bundles'></Route>
            <Route path = '/shop/accessories'></Route>
            <Route path = '/shop/merch'></Route>
            <Route path = '/about' element={<About/>}></Route>
            <Route path = '/contact'></Route>
            <Route path = '/account' element={<User/>}></Route>
            <Route path = '/account/login' element={<Login/>}></Route>
            <Route path = '/account/register' element={<SignUp/>}></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
