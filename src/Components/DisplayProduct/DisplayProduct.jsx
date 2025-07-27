import React from 'react';
import displayImg from '../../assets/hero.png';

const DisplayProduct = () => {
    return (
        <div className='w-full xxs:h-60 sm:h-[500px] md:h-[620px] lg:h-80 py-4 relative flex items-center justify-center'>
            <div className='xxs:w-10/12 md:w-8/12  lg:w-6/12 bg-violet-50/7 p-4 rounded-2xl absolute top-1/3 left-1/2 transform -translate-y-2/3 -translate-x-1/2'>
                <img className='rounded-2xl' src={displayImg} alt="#" />
            </div>
        </div>
    );
};

export default DisplayProduct;  