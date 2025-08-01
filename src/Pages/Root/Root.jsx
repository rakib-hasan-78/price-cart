import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './../../Components/Header/Header';



const Root = () => {

    return (
        <div className='w-full min-h-full'>
            <main className='xxs:pt-0 lg:pt-5'>
            <Header />       
            <Outlet />
            </main>
        </div>
    );
};

export default Root;
