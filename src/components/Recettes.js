import React from 'react';
import { useState, useEffect } from "react";
import Card from './Card';
import Filter from './Filter';
import axios from 'axios';
import './Recettes.css';

const Recettes = () => {

  const [recettes, setRecettes] = useState([]);
  const [origineFilter, setOrigineFilter] = useState([]);
  const [recherche, setRecherche] = useState('');
  const [filteredRecettes, setFilteredRecettes] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + recherche)
      .then(res => {
        if (res.data.meals != null) {
          setRecettes(res.data.meals);
          for (let meal of recettes) {
            let check = false;
            for (let savedOrigine of origineFilter) {
              if (meal['strArea'] == savedOrigine) {
                check = true;
              }
            }

            if (!check) {
              let tempOrigineFilter = origineFilter;
              tempOrigineFilter.push(meal['strArea']);
              setOrigineFilter(tempOrigineFilter)
            }
          }
          console.log(recettes)
          console.log(origineFilter)
        } else {
          setRecettes([]);
        }
      })
  }, [recherche]);

  function handleEvent(event) {
    let temp = [];

    for (let meal of recettes) {
      if (meal['strArea'] == event.target.value) {
        temp.push(meal);
      }
    }

    setFilteredRecettes(temp);
    console.log(filteredRecettes)
  }

  return (
    <div className='baseContainer'>
      <h1>Appli Recettes de cuisine</h1>
      <input type='text' placeholder="Tapez le nom d'un aliment (en anglais)" style={{width: 50 + '%'}} onChange={(event) => setRecherche(event.target.value)}/>
      
      <select onClick={handleEvent}>
        {origineFilter.map(prop =>
          <option>{prop}</option>
        )}
      </select>

      <div className='cardsContainer'>
        {recettes.map(recette =>
          <div id="container">
            <Card props={recette} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Recettes;