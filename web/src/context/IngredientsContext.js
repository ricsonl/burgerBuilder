import React from 'react';

const IngredientsContext = React.createContext({

  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },

  max: {
    salad: 4,
    cheese: 5,
    meat: 4,
    bacon: 6,
  },

  prices: {
    salad: 0.3,
    cheese: 1.25,
    meat: 2.5,
    bacon: 1.25,
  },

  labels: {
    salad: 'Alface',
    cheese: 'Queijo',
    meat: 'Carne',
    bacon: 'Bacon',
  },

  add: undefined,

  remove: undefined,

  total: 0,

  purchasable: false,
});

export default IngredientsContext;