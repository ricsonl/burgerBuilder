import React from 'react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';

import styles from './styles.module.css';

const Burger = (props) => {
  const convertedIngredients = Object.keys(props.ingredients)
    .map(ingName => {
      return [...Array(props.ingredients[ingName])].map((_, i) => {
        return <Ingredient key={ingName + i} type={ingName}/>
      });
    });
    
  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      { convertedIngredients }
      <Ingredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;