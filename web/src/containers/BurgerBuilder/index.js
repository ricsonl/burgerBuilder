import React, { Component } from "react";

import Burger from '../../components/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 0,
      cheese: 2,
      meat: 1,
    },
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <div>Controls</div>
      </>
    );
  }
};

export default BurgerBuilder;