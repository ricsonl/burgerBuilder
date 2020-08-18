import React, { Component } from "react";

import Burger from '../../components/Burger';
import Controls from '../../components/Controls';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 5,
      cheese: 5,
      meat: 5,
      bacon: 5,
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <Controls />
      </>
    );
  }
};

export default BurgerBuilder;