import React from 'react';
import css from './Menu.module.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Recettes from '../Recettes.js';
import Home from '../../App.js';
import Blog from '../Blog.js';

const Menu = () => {
    
    let activeStyle = {
        textDecoration: "underline",
    };
    
    let activeClassName = "underline";
    
    return (
        <nav>
            <div style={{ margin: '10px' }}>
                <NavLink to="/" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Accueil
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/recettes" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Recettes
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/blog" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Blog
                </NavLink>
            </div>
        </nav>
    );
};

export default Menu;