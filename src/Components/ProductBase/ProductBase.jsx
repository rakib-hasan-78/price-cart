import React, { useEffect, useState } from 'react';
import Card from './../Card/Card';
import { useLoaderData } from 'react-router-dom';

const ProductBase = ({categories, search}) => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [isLoading, setIsLoading] = useState(false);
    const allProducts = useLoaderData();
    // search Products ===>
    const searchedProducts = allProducts.filter(product=>product.product_title.toLowerCase().includes(search.toLowerCase()));

    //  category search ===> 
    const filteredProduct = categories === 'all' 
            ? searchedProducts 
            : searchedProducts?.filter(product=>product.category.toLowerCase() === categories.toLowerCase());

    useEffect(()=>{
        setVisibleProducts(8);
    }, [categories]);

    const displayProducts = filteredProduct.slice(0, visibleProducts);

    //  loadHandler ===> 
    const productLoadingHandler = ()=>{
        if (isLoading) return; 
        setIsLoading(true);
        setTimeout(() => {
            if 
            (visibleProducts < filteredProduct.length) {
                setVisibleProducts(prev=> prev + 8)
            } else {
                setVisibleProducts(8)
            }
            setIsLoading(false);
        }, 500);
    }

    return (
        <div className='w-10/12 py-3 '>
            <div className='w-auto grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-items-center'>
                {
                    displayProducts.map(product=>(
                        <Card key={product.product_id} product={product} />
                    ))
                }
            </div>
                {
                    isLoading && (
                        <div className='w-full py-2 flex items-center justify-center mt-5'>
                        <span className="loading loading-ring loading-xl"></span>
                        </div>
                    )
                }
            <div className="w-auto my-5  py-5 flex items-center justify-center">
                <div className='w-auto border-2 rounded-full p-0.5 border-purple-400'>
                <button
                className='btn btn-wide text-lg bg-purple-800 text-purple-100 uppercase  py-6 rounded-full '
                onClick={productLoadingHandler} 
                type="button"
                disabled={isLoading}
                >
                {
                  <>

                  {visibleProducts < filteredProduct.length ? 'load more' : 'load less'}

                  {isLoading && <span className="loading loading-spinner loading-sm"></span>}
                  </>  
                }
                </button>
                </div>
            </div>
        </div>
    );
};

export default ProductBase;

