import React, { Component } from 'react';

import styles from './styles.module.css';

class NavItems extends Component {

  state = {
    labels: {
      burgerBuilder: 'Burger Builder',
      checkout: 'Checkout',
    },

    active: 'burgerBuilder',
  }

  handleChangeActive = (name) => {
    this.setState({ active: name });
  }

  render() {
    return (
      <ul className={styles.NavItems}>
        {
          Object.keys(this.state.labels).map(name => {
            return <li className={styles.NavItem} key={name}>
              <a href="/"
                className={this.state.active === name ? styles.active : null}
                onClick={this.handleChangeActive.bind(this, name)}
              >
                {this.state.labels[name]}
              </a>
            </li>
          })
        }
      </ul>
    );
  }
}

export default NavItems;