import React from 'react';

import Toolbar from '../Navigation/Toolbar'

import styles from './styles.module.css';

const Layout = (props) => {
  return (
    <> 
      <Toolbar />
      <main className={styles.main}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
