import React, { useContext } from 'react';
import IngredientContext from '../../../context/IngredientsContext';

import Button from '../../UI/Button';

import styles from './styles.module.css';

const OrderSummary = () => {

  const ingredientContext = useContext(IngredientContext);

  const ingSummary = Object.keys(ingredientContext.ingredients)
    .map(ing => {
      return ingredientContext.ingredients[ing] > 0 ?
        <li key={ing}>
          {ingredientContext.labels[ing]} :
          <strong> {ingredientContext.ingredients[ing]}</strong>
        </li> : null
    });

  return (
    <>
      <h3>Seu pedido</h3>
      <p>Seu sanduíche possui os seguintes ingredientes:</p>
      <ul>
        {ingSummary}
      </ul>
      <p className={styles.Price}>Preço: <strong>R$ {ingredientContext.total.toFixed(2).toString().split('.').join(',')}</strong></p>
      <div className={styles.Buttons}>
        <Button type="Danger">Cancelar</Button>
        <Button type="Success">Continuar</Button>
      </div>
    </>
  );
}

export default OrderSummary;