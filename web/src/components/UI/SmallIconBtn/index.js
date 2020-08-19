import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const SmallIconBtn = (props) => {
  return (
    <button onClick={props.clicked} className={`${styles.Button} ${props.iconClass}`}>
      <svg><use xlinkHref={`#${props.icon}`}></use></svg>
    </button>
  );
}

SmallIconBtn.propTypes = {
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  clicked: PropTypes.func,
}

export default SmallIconBtn;