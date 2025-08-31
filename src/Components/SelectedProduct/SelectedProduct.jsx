import React from 'react';
import SelectedCart from './../SelectedCart/SelectedCart';

const SelectedProduct = ({tabs}) => {
    return (
        <div className='w-full p-5 h-auto flex flex-wrap flex-col items-center content-center'>
            <SelectedCart tabs={tabs} />
        </div>
    );
};

export default SelectedProduct;