import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';

const CartAnimation = () => {
    const navigate = useNavigate();

    const productHubHandler = ()=>{
        navigate('/');
    }

    return (
    <>
        <div className='w-full flex items-center justify-center'>
            <h2 className='text-bg hero-title'>empty product !</h2>
        </div>
        <DotLottieReact
        src="https://lottie.host/fea3b89a-07cb-444c-bda1-c825cac4690a/PX7UPqmx1S.lottie"
        loop
        autoplay
        />
        <div className='w-auto'>
            <button
            onClick={productHubHandler}
            className='btn btn-block capitalize rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-300'
            >
            add product
            </button>
        </div>
    </>
  );
};

export default CartAnimation;