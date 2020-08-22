import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo.png';
import NavItems from '../NavItems';
import Backdrop from '../../UI/Backdrop';

import styles from './styles.module.css';

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop visible={props.opened} clicked={props.close}/>
      <div className={`${styles.SideDrawer} ${props.opened ? styles.Open : styles.Close}`}>
        <img src={logo} alt="Logo" />
        <nav>
          <NavItems />
        </nav>
      </div>
    </>
  );
}

SideDrawer.propTypes = {
  opened: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default SideDrawer;