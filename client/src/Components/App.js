import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Routes>
            <Route path = '/'></Route>
            <Route path = '/shop'></Route>
            <Route path = '/shop/cigars'></Route>
            <Route path = '/shop/bundles'></Route>
            <Route path = '/shop/accessories'></Route>
            <Route path = '/shop/merch'></Route>
            <Route path = '/about'></Route>
            <Route path = '/contact'></Route>
            <Route path = '/account/login'></Route>
            <Route path = '/account/register'></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
