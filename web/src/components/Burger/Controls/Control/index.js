import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import IngredientContext from '../../../../context/IngredientsContext';

import SmallIconBtn from '../../../UI/SmallIconBtn';

import styles from './styles.module.css';

const Control = ({ label, name }) => {

  const ingredientContext = useContext(IngredientContext);

  return (
    <div className={styles.Control}>
      <div className={styles.Buttons}>
        <SmallIconBtn icon="icon-minus" clicked={ingredientContext.remove.bind(this, name)} />
        <SmallIconBtn icon="icon-plus" clicked={ingredientContext.add.bind(this, name)} />
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