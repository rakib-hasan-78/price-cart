import React, { useEffect, useRef, useState } from 'react';
import Hero from './../../Components/Hero/Hero';
import DisplayProduct from './../../Components/DisplayProduct/DisplayProduct';
import Search from './../../Components/Search/Search';
import Products from './../../Components/Products/Products';
import { useLoaderData } from 'react-router-dom';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import { getLS } from '../../Utilities/LS/LS';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const [search, setSearch]= useState('');
    const [data, setData] = useState('');
    const productSection = useRef(null);

    const userdata = useLoaderData();
    const {setCart, setWishList} = useProduct();

    useEffect(() => {
    // products for cart==> ----

    const storedCart = getLS('cart-item'); // fetch saved cart
    if (storedCart.length > 0) {
        const storedData = storedCart.map(({product_id, quantity})=>{
            const retrievedData = userdata.find(data=>data.product_id === product_id)
            if(!retrievedData) return null;
            return {...retrievedData , quantity}
        }).filter(Boolean)
        setCart(storedData)
    }

    // products for wishlist ==> 
    
    const storedWishlist = getLS('wish-list-items');
    if (storedWishlist.length>0) {
        const checkingWishlistData = storedWishlist.map(({product_id})=>{
            const retrievedData = userdata.find(data=> data.product_id === product_id);
            if (!retrievedData) return null;
            return {...retrievedData}
        }).filter(Boolean)
        setWishList(checkingWishlistData)
    }
    

    }, [userdata, setCart, setWishList]);

    const shopProductHandler = e=>{
        e.preventDefault();
        if (productSection.current) {

            productSection.current.scrollIntoView({behavior:'smooth', block:'start'});
        }
    }

    return (
        <div className={`w-full min-h-full flex flex-col items-center`}>
            <Helmet>
                <title>Plug & Push | Home</title>
            </Helmet>
           <Hero className={`xxs:h-[360px] lg:h-[600px]`}>
            {
               <div className='bg-hero'>

                <div className='w-full xs:px-4 xl:px-20 2xl:px-40 xxs:pt-8  lg:pt-0 '>
                    <h1 className='text-bg hero-title'> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
                    
                    <p className="hero-brief">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>

                </div>
                    <div className='xxs:w-11/12 lg:w-2/12 flex items-center justify-center xxs:border-1 xl:border-2 rounded-full xxs:my-3 md:my-2 lg:my-3 p-1.5'>
                    <button
                    onClick={shopProductHandler}
                     className='btn-hero'
                      type="button"
                      >
                      shop now
                      </button>
                    </div>
                </div>  
            }
           </Hero>
           <DisplayProduct />
           <Search search={search} setSearch={setSearch} data={data} />
           <div ref={productSection}>
            <Products search={search}  setSearch={setSearch} setData={setData} />
           </div>
        </div>   
    );
};

export default Home;

