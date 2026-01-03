import React, { useState } from 'react';
import Categories from './../Categories/Categories';
import ProductBase from './../ProductBase/ProductBase';

const Products = ({ search , setSearch, setData }) => {
  const [categories, setCategories] = useState('all');

  return (
    <div className="w-full h-auto py-3 flex flex-col items-center justify-center">
      {/* Section title */}
      <div className="w-7/12 h-auto flex items-center justify-center pb-4">
        <h3 className="bg-gradient-to-r from-zinc-900/80 to-slate-800/50 text-transparent bg-clip-text font-semibold xxs:text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1">
          Products
        </h3>
      </div>

      {/* Products layout */}
      <div className="w-full h-auto flex flex-col lg:flex-row xxs:items-center lg:items-start justify-center py-3 gap-5">
        {/* Categories sidebar */}
        
          <Categories categories={categories} setCategories={setCategories} />

        {/* Product grid */}
          <ProductBase categories={categories} search={search} setSearch={setSearch} setData={setData} />
      </div>
    </div>
  );
};

export default Products;
