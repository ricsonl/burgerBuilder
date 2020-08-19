import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientsContext from '../../../context/IngredientsContext';

import Control from './Control';

import styles from './styles.module.css';

const Controls = (props) => {

  const ingredientsContext = useContext(IngredientsContext);

  return (
    <div className={styles.Controls}>
      {
        Object.keys(ingredientsContext.labels).map(ctrl => {
          return <Control key={ctrl} label={ingredientsContext.labels[ctrl]} name={ctrl} />
        })
      }
      <div className={styles.PriceAndCheckout}>
        <h1>
          R$ {
            ingredientsContext.purchasable ?
            ingredientsContext.total.toFixed(2).toString().split('.').join(',') :
            '-,--'
          }
        </h1>
        <button disabled={!ingredientsContext.purchasable} onClick={props.toggleModal.bind(this, true)}>
          <p>Continuar</p>
          <svg><use xlinkHref="#icon-arrow_back"></use></svg>
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Controls;