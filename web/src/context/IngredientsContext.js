import React from 'react';

const IngredientsContext = React.createContext({

  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },

  max: {
    salad: 99,
    cheese: 99,
    meat: 99,
    bacon: 99,
  },

  add: undefined,

  remove: undefined,
});

export default IngredientsContext;