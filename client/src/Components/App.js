import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Routes>
            <Route path = '/'></Route>
            <Route path = '/Shop'></Route>
            <Route path = '/Shop/Cigars'></Route>
            <Route path = '/Shop/Bundles'></Route>
            <Route path = '/Shop/Accessories'></Route>
            <Route path = '/Shop/Merch'></Route>
            <Route path = '/About'></Route>
            <Route path = '/Contact'></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
