import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './../../Components/Header/Header';
import Headroom from 'react-headroom';

const Root = () => {
    
    return (
        <div className='w-full min-h-full'>
            <main className='main xxs:pt-0 lg:pt-5'>
            <Headroom>
            <Header />
            </Headroom>
            <Outlet />
            </main>
        </div>
    );
};

export default Root;
