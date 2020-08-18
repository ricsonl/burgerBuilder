import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Control = (props) => {
  return (
    <div className={styles.Control}>
      <label>{props.label}</label>
      <div className={styles.Buttons}>
        <button><p>-</p></button>
        <button><p>+</p></button>
      </div>
    </div>
  );
};

Control.propTypes = {
  label: PropTypes.string,
};

export default Control;