import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './../Card/Card';

const Products = () => {
    const products = useLoaderData();
    
    return (
        <div 
        className='w-full h-auto py-3 flex flex-col items-center justify-center border'
        >
            <div className="w-7/12 h-auto flex items-center justify-center pb-4">
                <h3 
                className='bg-gradient-to-r from-zinc-900/80 to-slate-800/50 text-transparent bg-clip-text font-semibold  xxs:text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1'
                >
                products
                </h3>
            </div>
            {/* products ' management division */}
            <div className='w-full h-auto flex flex-col lg:flex-row xxs:items-center  lg:items-start justify-center border border-red-600 py-3 gap-5'>
                <div className='w-2/12 border py-3'></div>
                <div 
                className='w-10/12 border border-green-500 py-3 grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center'
                >
                <Card />
                </div>
            </div>

        </div>
    );
};

export default Products;