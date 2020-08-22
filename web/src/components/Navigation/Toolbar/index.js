import React from 'react';
import PropTypes from 'prop-types';

import NavItems from '../NavItems';

import logo from '../../../assets/images/logo.png';
import styles from './styles.module.css';

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <button onClick={props.openSideDrawer}>
      <svg className={styles.MenuIcon}><use xlinkHref="#icon-menu"></use></svg>
    </button>
    <img src={logo} alt="" />
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header >
);

Toolbar.propTypes = {
  openSideDrawer: PropTypes.func.isRequired,
};

export default Toolbar;