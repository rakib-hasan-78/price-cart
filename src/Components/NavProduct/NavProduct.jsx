import React from 'react';

const NavProduct = ({drawer}) => {
    return (
        <div 
        className='border-2 secondary-bg-gradient-nav absolute z-30 right-0 top-6/6 xxs:w-full lg:w-5/12 flex flex-col items-center justify-center space-y-3 rounded-xl'>
            <div 
            className='w-full h-auto p-1.5 flex items-center justify-end border'
            >
            X
            </div>
            <div 
            className='w-full py-2 flex flex-col items-center justify-center space-y-2'>
                {
                    drawer === 'cart' && 'hello' 
                                    


                }
            </div>
        </div>
    );
};

export default NavProduct;