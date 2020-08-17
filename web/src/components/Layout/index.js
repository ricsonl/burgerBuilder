import React from 'react';

import styles from './styles.module.css';

const Layout = (props) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.main}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
