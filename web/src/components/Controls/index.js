import React, { useContext } from 'react';
import IngredientsContext from '../../context/IngredientsContext';

import Control from './Control';

import styles from './styles.module.css';

const Controls = () => {

  const ingredientsContext = useContext(IngredientsContext)

  const controls = [
    { label: 'Meat', name: 'meat' },
    { label: 'Cheese', name: 'cheese' },
    { label: 'Salad', name: 'salad' },
    { label: 'Bacon', name: 'bacon' },
  ];
  return (
    <div className={styles.Controls}>
      {
        controls.map(ctrl => {
          return <Control key={ctrl.name} label={ctrl.label} name={ctrl.name} />
        })
      }
      <h1>R$ {ingredientsContext.total.toFixed(2).toString().split('.').join(',')}</h1>
    </div>
  );
};

export default Controls;