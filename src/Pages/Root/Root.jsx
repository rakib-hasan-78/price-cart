import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './../../Components/Header/Header';
import Headroom from 'react-headroom';

const Root = () => {
    
    return (
        <div>
            <main className='main'>
            <Headroom>
            <Header />
            </Headroom>
            <Outlet />
            </main>
        </div>
    );
};

export default Root;
