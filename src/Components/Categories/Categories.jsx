import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CtBtn from '../CtBtn/CtBtn';

const Categories = ({categories, setCategories}) => {
    const products = useLoaderData();
    const [itemCategory, setItemCategory] = useState([])

    useEffect(()=>{

        const categoryList = ['all', ...new Set(products.map(product=>product.category))];
        setItemCategory(categoryList);
        
    }, [products , setItemCategory])

    const categoryHandler = (category)=>{
        setCategories(category)
    }

    
    return (
        <div 
            className='xxs:w-full lg:w-2/12 border py-3 secondary-bg-gradient flex flex-wrap xxs:flex-row lg:flex-col items-center justify-center space-y-3 mt-3.5'
            >
            <h4 
            className='bg-gradient-to-r from-zinc-900/80 to-slate-800/text-transparent bg-clip-text font-semibold  xxs:text-sm:text-base md:text-lg lg:text-xl py-1'
            >
            categories
            </h4>
            <div className='w-full h-auto flex xxs:flex-row flex-wrap  lg:flex-col space-y-2 xxs:space-x-1 lg:space-x-0 lg:px-4 '>
            {
                itemCategory?.map(category=>{
                  return  <CtBtn key={category} name={category} isActive={categories === category} OnClick={()=>categoryHandler(category)} />
                })
            }
            </div>
        </div>

    );
};

export default Categories;


