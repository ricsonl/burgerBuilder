import React, { Component } from "react";

import IngredientsContext from '../../context/IngredientsContext';

import Burger from '../../components/Burger';
import Controls from '../../components/Controls';

import styles from './styles.module.css';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
    max: {
      salad: 3,
      cheese: 5,
      meat: 4,
      bacon: 6,
    },
    prices: {
      salad: 0.5,
      cheese: 1.25,
      meat: 2.5,
      bacon: 1.25,
    },
    total: 4,
  };

  addIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if(newIng[ing] < this.state.max[ing]){
      newIng[ing]++;
      this.setState({
        ingredients: newIng,
        total: this.state.total + this.state.prices[ing],
      });
    }
  };

  removeIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if(newIng[ing] > 0){
      newIng[ing]--;
      this.setState({
        ingredients: newIng,
        total: this.state.total - this.state.prices[ing],
      });
    }
  };

  render() {
    return (
      <section className={styles.BurgerBuilder}>
        <IngredientsContext.Provider value={{
          ingredients: this.state.ingredients,
          max: this.state.max,
          add: this.addIngredient,
          remove: this.removeIngredient,
          total: this.state.total,
        }}>
          <Burger />
          <Controls />
        </IngredientsContext.Provider>
      </section>
    );
  }
};

export default BurgerBuilder;