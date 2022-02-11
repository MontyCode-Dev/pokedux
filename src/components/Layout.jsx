import React from 'react';
import { Outlet } from "react-router-dom";
import { Menu } from '../components';

const Layout = () => {
    return (
        <div>
          <Menu />
          <div className='Layout-content'><Outlet /></div>
        </div>
    );
};

export default Layout;
