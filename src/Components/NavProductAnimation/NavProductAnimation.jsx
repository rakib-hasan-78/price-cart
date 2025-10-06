import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lottie from 'lottie-react';
import cartJSON from '../../assets/empty.json'
const NavProductAnimation = ({drawer}) => {
    const result = drawer === 'cart' ?
     'cart': 
     drawer=== 'wishlist' && 'wishlist';
    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-2xl font-black  text-orange-600'> No Product in {result}</h3>
            <div className='w-40 h-40'>
                {/* <DotLottieReact
                src='https://lottie.host/fea3b89a-07cb-444c-bda1-c825cac4690a/PX7UPqmx1S.lottie'
                autoplay
                loop
                /> */}
                <Lottie animationData={cartJSON} loop autoplay />

            </div>

        </div>
    );
};

export default NavProductAnimation;