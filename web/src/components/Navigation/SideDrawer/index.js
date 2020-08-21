import React from 'react';

import logo from '../../../assets/images/logo.png';
import NavItems from '../NavItems';
import Backdrop from '../../UI/Backdrop';

import styles from './styles.module.css';

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop visible={props.open} clicked={props.closed}/>
      <div className={`${styles.SideDrawer} ${props.open ? styles.Open : styles.Close}`}>
        <img src={logo} alt="Logo" />
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
}

export default SideDrawer;