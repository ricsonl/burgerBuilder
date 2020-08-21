import React from 'react';

import logo from '../../../assets/images/logo.png';
import NavItems from '../NavItems';
import Backdrop from '../../UI/Backdrop';

import styles from './styles.module.css';

const SideDrawer = () => {
  return (
    <>
      <Backdrop visible/>
      <div className={styles.SideDrawer}>
        <img src={logo} alt="Logo" />
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;