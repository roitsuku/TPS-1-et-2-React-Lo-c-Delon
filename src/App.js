import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from './components/menu/Menu';
import Recettes from './components/Recettes.js';
import Home from './App.js';
import Blog from './components/Blog.js';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div style={{
            display: "flex",
            background: 'black',
            padding: '5px 0 5px 5px',
            fontSize: '20px'
          }}>
          <Menu/>
        </div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/recettes" element={<Recettes />} />
            <Route exact path="/blog" element={<Blog />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;