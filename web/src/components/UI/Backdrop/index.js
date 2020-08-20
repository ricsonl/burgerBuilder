import React from 'react';
import PropTypes, { bool } from 'prop-types';

import styles from './styles.module.css';

const Backdrop = (props) => (
  <div
    className={`${styles.Backdrop} ${props.visible && styles.Visible}`}
    onClick={props.clicked}
  ></div>
);

Backdrop.propTypes = {
  visible: PropTypes.bool.isRequired,
  clicked: PropTypes.func,
};

export default Backdrop;