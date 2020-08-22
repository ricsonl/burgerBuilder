import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import styles from './styles.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  handleCloseSideDrawer = () => {
    this.setState({ showSideDrawer: false});
  };
  handleOpenSideDrawer = () => {
    this.setState({ showSideDrawer: true});
  };

  render(){
    return (
      <> 
        <Toolbar openSideDrawer={this.handleOpenSideDrawer} />
        <SideDrawer opened={this.state.showSideDrawer} close={this.handleCloseSideDrawer} />
        <main className={styles.main}>
          {this.props.children}
        </main>
      </>
    );
  }
};

export default Layout;
