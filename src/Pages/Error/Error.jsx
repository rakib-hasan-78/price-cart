import React from 'react';
import ErrorElement from '../../Components/ErrorElement/ErrorElement';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    <Helmet>
        <title>Plug & Push | Error:404</title>
    </Helmet>
    return (
        <div className='w-screen h-screen'>
            <ErrorElement />
        </div>
    );
};

export default Error;