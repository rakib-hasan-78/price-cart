import React from 'react';
import Card from './../Card/Card';

const ProductBase = () => {
    return (
        <div className='w-10/12 py-3 grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center'>
            <Card />
        </div>
    );
};

export default ProductBase;