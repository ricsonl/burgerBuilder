import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import styles from './styles.module.css';

const Burger = (props) => {
  let convertedIngredients = Object.keys(props.ingredients)
    .map(ingName => {
      return [...Array(props.ingredients[ingName])].map((_, i) => {
        return <Ingredient key={ingName + i} type={ingName}/>
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    
  if(convertedIngredients.length == 0){
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