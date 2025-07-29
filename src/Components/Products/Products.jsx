import React, { useState } from 'react';
import Categories from './../Categories/Categories';
import ProductBase from './../ProductBase/ProductBase';

const Products = () => {

    const [categories, setCategories] = useState('all');

    return (
        <div 
        className='w-full h-auto py-3 flex flex-col items-center justify-center'
        >
            <div className="w-7/12 h-auto flex items-center justify-center pb-4">
                <h3 
                className='bg-gradient-to-r from-zinc-900/80 to-slate-800/50 text-transparent bg-clip-text font-semibold  xxs:text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1'
                >
                products
                </h3>
            </div>
            {/* products ' management division */}
            <div className='w-full h-auto flex flex-col lg:flex-row xxs:items-center  lg:items-start justify-center py-3 gap-5'>
                {/* categories management */}
                <Categories categories={categories} setCategories={setCategories} />
                {/* product base */}
                <ProductBase categories={categories} />
            </div>

        </div>
    );
};

export default Products;