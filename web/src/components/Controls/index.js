import React from 'react';
import PropTypes from 'prop-types';

import Control from './Control';

import styles from './styles.module.css';

const Controls = (props) => {
  return(
      <div className={styles.Controls}>
        <Control label="Meat" name="meat"/>
        <Control label="Cheese" name="cheese"/>
        <Control label="Salad" name="salad"/>
        <Control label="Bacon" name="bacon"/>
      </div>
  );
};

export default Controls;