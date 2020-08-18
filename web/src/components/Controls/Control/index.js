import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientContext from '../../../context/IngredientsContext';

import styles from './styles.module.css';

const Control = ({ label, name }) => {

  const ingredientContext = useContext(IngredientContext);

  return (
    <div className={styles.Control}>
      <div className={styles.Buttons}>
        <button
          onClick={ingredientContext.remove.bind(this, name)}
        >
          <p className={ingredientContext.ingredients[name] === 0 ? styles.Grey : null}>
            -
          </p>
        </button>

        <button
          onClick={ingredientContext.add.bind(this, name)}
        >
          <p className={ingredientContext.ingredients[name] ===
                        ingredientContext.max[name] ?
                        styles.Grey : null}
          >
            +
          </p>
        </button>
      </div>
      <label
        className={ingredientContext.ingredients[name] ===
                   ingredientContext.max[name] ?
                   styles.Red : null}
      >
        {label}
      </label>
    </div>
  );
};

Control.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Control;