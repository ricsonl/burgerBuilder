import React, { Component } from "react";

import IngredientsContext from '../../context/IngredientsContext';

import Burger from '../../components/Burger';
import Controls from '../../components/Controls';

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
  };

  addIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if(newIng[ing] < this.state.max[ing]){
      newIng[ing]++;
      this.setState({
        ingredients: newIng,
      });
    }
  };

  removeIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if(newIng[ing] > 0){
      newIng[ing]--;
      this.setState({
        ingredients: newIng,
      });
    }
  };

  render() {
    return (
      <>
        <IngredientsContext.Provider value={{
          ingredients: this.state.ingredients,
          max: this.state.max,
          add: this.addIngredient,
          remove: this.removeIngredient
        }}>
          <Burger />
          <Controls />
        </IngredientsContext.Provider>
      </>
    );
  }
};

export default BurgerBuilder;