import React, { Component } from "react";

import IngredientsContext from '../../context/IngredientsContext';

import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

import styles from './styles.module.css';

class BurgerBuilder extends Component {

  static contextType = IngredientsContext;

  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },

    total: 4,
    purchasable: false,

    finishing: false,
  };

  addIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if (newIng[ing] < this.context.max[ing]) {
      newIng[ing]++;
      this.setState({
        ingredients: newIng,
        total: this.state.total + this.context.prices[ing],
        purchasable: Object.values(newIng).reduce((sum, val) => sum + val, 0) > 0
      });
    }
  };

  removeIngredient = (ing) => {
    const newIng = { ...this.state.ingredients }
    if (newIng[ing] > 0) {
      newIng[ing]--;
      this.setState({
        ingredients: newIng,
        total: this.state.total - this.context.prices[ing],
        purchasable: Object.values(newIng).reduce((sum, val) => sum + val, 0) > 0
      });
    }
  };

  handleToggleModal = (vis) => {
    this.setState({ finishing: vis })
  }

  render() {
    return (
      <section className={styles.BurgerBuilder}>
        <IngredientsContext.Provider value={{
          max: this.context.max,
          prices: this.context.prices,
          labels: this.context.labels,

          ingredients: this.state.ingredients,
          add: this.addIngredient,
          remove: this.removeIngredient,
          total: this.state.total,
          purchasable: this.state.purchasable,
        }}>
          <Burger />
          <Controls toggleModal={this.handleToggleModal}/>
          <Modal
            finishing={this.state.finishing}
            toggleModal={this.handleToggleModal}
          >
            <OrderSummary />
          </Modal>
        </IngredientsContext.Provider>
      </section>
    );
  }
};

export default BurgerBuilder;