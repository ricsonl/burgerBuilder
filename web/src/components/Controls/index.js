import React, { useContext } from 'react';
import IngredientsContext from '../../context/IngredientsContext';

import Control from './Control';

import styles from './styles.module.css';

const Controls = () => {

  const ingredientsContext = useContext(IngredientsContext);
  const purchasable = Object.values(ingredientsContext.ingredients).reduce((sum, val) => sum + val, 0) > 0;

  const controls = [
    { label: 'Carne', name: 'meat' },
    { label: 'Queijo', name: 'cheese' },
    { label: 'Alface', name: 'salad' },
    { label: 'Bacon', name: 'bacon' },
  ];

  return (
    <div className={styles.Controls}>
      {
        controls.map(ctrl => {
          return <Control key={ctrl.name} label={ctrl.label} name={ctrl.name} />
        })
      }
      <div className={styles.PriceAndCheckout}>
        <h1>
          R$ {
            purchasable ?
            ingredientsContext.total.toFixed(2).toString().split('.').join(',') :
            '-,--'
          }
        </h1>
        <button disabled={!purchasable} onClick={()=>console.log('aaa')}>
          <p>Continuar</p>
          <svg><use xlinkHref="#icon-arrow_back"></use></svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;