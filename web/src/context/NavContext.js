import React from 'react';

const NavContext = React.createContext({

  labels: {
    burgerBuilder: 'Burger Builder',
    checkout: 'Checkout',
  },

  active: 'burgerBuilder',

});

export const NavProvider = NavContext.Provider;
export default NavContext;