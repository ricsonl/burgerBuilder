import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import styles from './styles.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  handleCloseSideDrawer = () => {
    this.setState({ showSideDrawer: false});
  };

  render(){
    return (
      <> 
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.handleCloseSideDrawer}/>
        <main className={styles.main}>
          {this.props.children}
        </main>
      </>
    );
  }
};

export default Layout;
