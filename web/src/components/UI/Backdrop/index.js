import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Backdrop = (props) => (
  <div
    className={`${styles.Backdrop} ${props.visible && styles.Visible} ${props.mobileOnly && styles.Invisible}`}
    onClick={props.clicked}
  ></div>
);

Backdrop.propTypes = {
  visible: PropTypes.bool.isRequired,
  clicked: PropTypes.func,
  mobileOnly: PropTypes.bool,
};

export default Backdrop;