import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from './../../Components/Header/Header';
import CustomContext from '../../Utilities/Hooks/CustomContext/CustomContext';
import { ToastContainer } from 'react-toastify';
import Footer from './../../Components/Footer/Footer';



const Root = () => {

    return (
        <div className='w-full min-h-full'>
            <main className='xxs:pt-0 lg:pt-5'>
            <Header />       
            <Outlet />
            <ToastContainer />
            </main>
            <Footer />
        </div>
    );
};
export default Root;