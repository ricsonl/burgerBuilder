import React from 'react';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import styles from './styles.module.css';

const Layout = (props) => {
  return (
    <> 
      <Toolbar />
      <SideDrawer />
      <main className={styles.main}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
