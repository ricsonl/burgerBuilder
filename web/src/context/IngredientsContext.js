import React from 'react';

const IngredientsContext = React.createContext({

  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },

  add: undefined,

  remove: undefined,

  total: 0,
});

export default IngredientsContext;