import React from 'react';
import SelectedCart from './../SelectedCart/SelectedCart';
import CartAnimation from './../CartAnimation/CartAnimation';

const SelectedProduct = ({tabs}) => {

    return (
        <div className='w-full p-5 h-auto flex flex-wrap xxs:flex-col sm:flex-row lg:flex-col items-center justify-center sm:space-x-3 xxs:space-y-4'>
            <CartAnimation />
            {/* <SelectedCart tabs={tabs} /> */}
        </div>
    );
};

export default SelectedProduct;