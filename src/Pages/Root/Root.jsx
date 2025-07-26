import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './../../Components/Header/Header';


const Root = () => {
    
    return (
        <div>
            <main className='main'>
            <Header />
            <Outlet />
            </main>
        </div>
    );
};

export default Root;
