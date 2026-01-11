import React from 'react';
import Hero from './../Hero/Hero';
import DetailCard from './../DetailCard/DetailCard';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {product_id} = useParams();
    const userData = useLoaderData();
    const data = userData.find(usrDta=>usrDta.product_id=== product_id);
    const {product_title, product_image} = data;
    return (
        <section className='w-full h-auto flex flex-col'>
            <Helmet>
                <title>{product_title}</title>

            </Helmet>
            <Hero className={`h-[380px]`}>
            {
               <div className='bg-hero'>

                <div className='w-full xl:px-20 2xl:px-40 '>
                    <h1 className='text-bg hero-title'> Product Details </h1>
                    
                    <p className="hero-brief">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                </div>  
            }
            </Hero>
            <DetailCard />
        </section>
    );
};

export default ProductDetails;