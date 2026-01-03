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


