import React from 'react';
import displayImg from '../../assets/hero.png';

const DisplayProduct = () => {
    return (
        <div className='w-full xxs:h-[280px] sm:h-[400px] lg:h-[420px] xl:h-[380px] flex items-start justify-center relative  lg:top-2/4 xxs:-translate-y-1/4 sm:-translate-y-1/9 md:-translate-y-1/11 lg:-translate-y-2/4 z-10'>
            <div className='xxs:w-10/12 md:w-8/12  lg:w-9/12 xl:w-6/12 xxs:h-60 sm:h-[400px] lg:h-[420px] xl:h-[380px]  bg-violet-50/7 p-4 rounded-2xl'>
                <img className='rounded-2xl' src={displayImg} alt="#" />
            </div>
        </div>
    );
};

export default DisplayProduct;  


``
// xxs:w-10/12 md:w-8/12  lg:w-6/12 bg-violet-50/7 p-4 rounded-2xl absolute top-1/3 left-1/2 transform -translate-y-2/3 -translate-x-1/2


// w-full xxs:h-60 sm:h-[500px] md:h-[620px] lg:h-80 py-4 flex items-center justify-center relative top-1/3 -translate-y-1/3 z-40