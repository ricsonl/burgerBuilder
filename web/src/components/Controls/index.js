import React from 'react';

import Control from './Control';

import styles from './styles.module.css';

const Controls = () => {
  const controls = [
    {label: 'Meat', name: 'meat'},
    {label: 'Cheese', name: 'cheese'},
    {label: 'Salad', name: 'salad'},
    {label: 'Bacon', name: 'bacon'},
  ];
  return(
      <div className={styles.Controls}>
        {
          controls.map(ctrl => {
            return <Control key={ctrl.name} label={ctrl.label} name={ctrl.name} />
          })
        }
      </div>
  );
};

export default Controls;