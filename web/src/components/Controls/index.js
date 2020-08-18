import React from 'react';

import Control from './Control';

import styles from './styles.module.css';

const Controls = (props) => {
  return(
      <div className={styles.Controls}>
        <Control label="Meat"/>
        <Control label="Cheese"/>
        <Control label="Salad"/>
        <Control label="Bacon"/>
      </div>
  );
};

export default Controls;