import React from 'react';

import NavItems from '../NavItems';

import logo from '../../../assets/images/logo.png';
import styles from './styles.module.css';

const Toolbar = () => (
  <header className={`${styles.Toolbar} ${styles.DesktopOnly}`}>
    <div>MENU</div>
    <img src={logo} alt=""/>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default Toolbar;