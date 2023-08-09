import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Home from './Components/Home';
import Shop from './Components/Shop';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import User from './Components/User';
import About from './Components/About';
import Header from './Components/Header';
import Cigars from './Components/Cigars';
import Bundles from './Components/Bundles';

export const Context = React.createContext();

function App() {

  const [ user, setUser ] = useState(null)

  return (
    <Context.Provider value={[ user, setUser ]}>
      <div className="App">
        <header className="header-root">
          <Header/>
          <div>
            <Routes>
              <Route path = '/' element={<Home/>}></Route>
              <Route path = '/shop' element={<Shop/>}></Route>
              <Route path = '/shop/cigars' element={<Cigars/>}></Route>
              <Route path = '/shop/bundles'element={<Bundles/>}></Route>
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
    </Context.Provider>
  );
}

export default App;
