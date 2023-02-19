import React from 'react';
import { useState, useEffect } from "react";
import './Card.css';

const Card = (props) => {
    
    return (
        <div className='cardContainer'>
          <h1>{props.props['strMeal']}</h1>
          <h3>{props.props['strArea']}</h3>
          <img style={{width: 15 + 'rem'}} src={props.props['strMealThumb']}></img>
          <p>{props.props['strInstructions']}</p>  
        </div>
    );
};

export default Card;