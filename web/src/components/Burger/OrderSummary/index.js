import React, { useContext } from 'react';
import IngredientContext from '../../../context/IngredientsContext';

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
    </>
  );
}

export default OrderSummary;