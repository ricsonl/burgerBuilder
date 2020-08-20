import React from 'react';

import logo from '../../../assets/images/logo.png';
import styles from './styles.module.css';

const Toolbar = () => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <img src={logo} alt=""/>
    <nav>
      ...
    </nav>
  </header>
);

export default Toolbar;