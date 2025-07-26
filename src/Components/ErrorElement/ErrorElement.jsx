import React from 'react';
import errorImg from '../../assets/404-gif-2.gif'
import ErrorHandle from '../../Utilities/ErrorHandle/ErrorHandle';
import useReturn from './../../Utilities/Hooks/Return/Return';

const ErrorElement = () => {
    const returnHandler = useReturn();
    return (
        <div className='w-full min-h-auto flex flex-col items-center justify-start flex-wrap'>
            <div className=''>
                <img src={errorImg} alt="error-image" />
            </div>
           <div className='w-full flex items-center justify-center'>
            <ErrorHandle />
           </div>
           <div className='w-full mt-3.5 flex  justify-center items-center'>
            <button
            onClick={returnHandler} 
            className='btn-error-handle' type="button">return</button>
           </div>
        </div>
    );
};

export default ErrorElement;