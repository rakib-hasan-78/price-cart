import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './../../Components/Hero/Hero';



const Home = () => {
    const data = useLoaderData();
    console.log(data.length);
    return (
        <div className={`w-full min-h-full`}>
           <Hero>
            {
               <div className='bg-hero'>

                <div className='w-full xl:px-40'>
                    <h1 className='text-bg hero-title'> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
                    
                    <p className="hero-brief">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>

                </div>
                    <div className='xxs:w-11/12 lg:w-2/12 flex items-center justify-center xxs:border-1 xl:border-2 rounded-full my-3 p-1.5'>
                    <button className='btn-hero' type="button">shop now</button>
                    </div>
                </div>  
            }
           </Hero>

        </div>   
    );
};

export default Home;