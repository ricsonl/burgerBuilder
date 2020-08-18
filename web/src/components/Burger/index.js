import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientContext from '../../context/IngredientsContext';

import Ingredient from './Ingredient';

import styles from './styles.module.css';

const Burger = () => {

  const ingredientsContext = useContext(IngredientContext);

  let convertedIngredients = Object.keys(ingredientsContext.ingredients)
    .map(ingName => {
      return [...Array(ingredientsContext.ingredients[ingName])].map((_, i) => {
        return <Ingredient key={ingName + i} type={ingName}/>
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    
  if(convertedIngredients.length === 0){
    convertedIngredients = <p>Start adding ingredients!</p>
  }

  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      { convertedIngredients }
      <Ingredient type="bread-bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;