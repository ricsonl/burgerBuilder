import React from 'react';

import logo from '../../../assets/images/logo.png';
import NavItems from '../NavItems';

const SideDrawer = (props) => {
  return(
      <div>
        <img src={logo} alt="Logo"/>
        <nav>
          <NavItems />
        </nav>
      </div>
  );
}

export default SideDrawer;