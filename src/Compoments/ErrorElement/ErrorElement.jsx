import React from 'react';
import errorImg from '../../assets/404-gif-2.gif'
import ErrorHandle from './../../Utilities/ErrorHandle/ErrorHandle';
const ErrorElement = () => {
    
    return (
        <div className='w-screen h-screen flex items-center justify-center flex-wrap'>
            <div>
                <img src={errorImg} alt="error-image" />
            </div>
           <div w-full h-auto></div>
        </div>
    );
};

export default ErrorElement;