import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';

const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default Body;
