import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import Ribbon from './../../Components/Ribbon/Ribbon';
import SelectedProduct from './../../Components/SelectedProduct/SelectedProduct';

const Dashboard = () => {
    const [tabs, setTabs] = useState('cart');

    const tabHandler = (e, value) =>{
        e.preventDefault();
        setTabs(value)
    }

    return (
        <>
          <Hero className={`xxs:h-[300px] lg:h-[360px]`}>
            {
                <div className='bg-hero'>
                    <div className='w-full xs:px-4 xl:px-20 2xl:px-40 xxs:pt-8  lg:pt-0'>
                        <h1 className='text-bg hero-title'> 
                        dashboard 
                        </h1>
                    
                        <p className="hero-brief">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                    <div className='xxs:w-11/12 lg:w-6/12 flex items-center justify-center rounded-full xxs:my-3 md:my-2 lg:my-3 p-1.5'>
                        <div role="tablist" className="tabs tabs-border flex flex-row items-center justify-center w-full space-x-3">

                            <button role="tab"
                            onClick={(e)=>tabHandler(e, 'cart')} 
                            className={`w-3/12 btn xxs:btn-sm lg:btn-xl rounded-full capitalize ease-in-out transition-all border-fuchsia-400 ${tabs==='cart' ? 'bg-fuchsia-400 text-fuchsia-100':'btn-outline border  text-fuchsia-400 hover:bg-transparent'}`}
                            >
                            cart
                            </button>

                            <button role="tab"
                            onClick={(e)=>tabHandler(e, 'wishlist')} 
                            className={`w-3/12 rounded-full btn xxs:btn-sm lg:btn-xl capitalize ease-in-out transition-all border-fuchsia-400 ${tabs==='wishlist' ? 'bg-fuchsia-400 text-fuchsia-100':'btn-outline border  text-fuchsia-400 hover:bg-transparent'}`}
                            >
                            wishlist
                            </button>
                        </div>
                    </div>
                </div>
            }
          </Hero>
          <Ribbon tabs={tabs} />
          <SelectedProduct />  
        </>
    );
};

export default Dashboard;
