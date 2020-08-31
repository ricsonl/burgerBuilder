import React, { Component } from "react";
import axios from '../../axios-orders';

import IngredientsContext from '../../context/IngredientsContext';

import Burger from '../../components/Burger';
import Controls from '../../components/Burger/Controls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Button from '../../components/UI/Button';
import Spinner from '../../components/UI/Spinner';

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
    loading: false,
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

  handleContinue = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.total, // DO NOT DO THIS IN A REAL WORLD APP
      customer: {
        name: 'TestUser1',
        email: 'TestEmail1@gmail.com',
        address: {
          street: 'TestStreet1',
          zip: '11111',
          country: 'TestCountry1',
        }
      }
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false, finishing: false });
      })
      .catch(err => {
        this.setState({ loading: false, finishing: false });
      });
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
          <Controls toggleModal={this.handleToggleModal.bind(this, true)} />
          <Modal
            finishing={this.state.finishing}
            toggleModal={this.handleToggleModal.bind(this, false)}
          >

            {
              this.state.loading ? <Spinner /> :
                <>
                  <OrderSummary />
                  <div className={styles.Buttons}>
                    <Button type="Danger" clicked={this.handleToggleModal.bind(this, false)}>Cancelar</Button>
                    <Button type="Success" clicked={this.handleContinue.bind(this)}>Continuar</Button>
                  </div>
                </>
            }

          </Modal>
        </IngredientsContext.Provider>
      </section>
    );
  }
};

export default BurgerBuilder;