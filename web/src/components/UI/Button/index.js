import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Button = (props) => {
  return (
    <button onClick={props.clicked} className={[styles.Button, styles[props.type]].join(' ')}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  clicked: PropTypes.func,
}

export default Button;