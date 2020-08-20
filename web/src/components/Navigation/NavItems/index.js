import React, { useContext, useState } from 'react';

import NavContext, { NavProvider } from '../../../context/NavContext';

import styles from './styles.module.css';

const NavItems = () => {

  const navContext = useContext(NavContext);
  const [active, setActive] = useState(navContext.active);

  return (
    <ul className={styles.NavItems}>
      <li className={styles.NavItem}>
        {
          Object.keys(navContext.labels).map(lab => {
            return <a href="/" className={navContext.active === lab && styles.active}>
              {navContext.labels[lab]}
            </a>
          })
        }
      </li>
    </ul>
  );
}

export default NavItems;