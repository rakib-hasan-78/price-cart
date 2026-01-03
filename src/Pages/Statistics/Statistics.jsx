import React from 'react';
import Chart from './../../Components/Chart/Chart';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import StatAnim from '../../Components/StatAnim/StatAnim';
import { useNavigate } from 'react-router-dom';
import Hero from './../../Components/Hero/Hero';



const Statistics = () => {
    const {cart} = useProduct()
    const navigation = useNavigate();

    const navigationHandler = (page)=>{
        navigation(page);
    }
    
    return (
        <>
            <Hero className={`xxs:h-[300px] lg:h-[360px]`}>
                <div className="bg-hero">
                    <div className='w-full xs:px-4 xl:px-20 2xl:px-40 xxs:pt-8  lg:pt-0'>
                        <h1 className='text-bg hero-title'> 
                            Cart items statistics 
                        </h1>
                    {/* dynamic text for hero section ===> */}
                        <p className="hero-brief">
                        {
                            cart.length>0 ?
                            <span> amazing !!! you've purchased {cart.length} {cart.length>1 ? 'items': 'item'}
                            </span> :

                            <span>
                                awesome products : 10000+ amazing gadgets. bet you can not buy less!
                            </span>
                        }
                        </p>
                    </div>
                    {/* dynamic action button ===> */}
                    <div
                    className='w-full h-auto flex items-center justify-center'
                    >
                        {
                            cart.length<1 && (
                            <div role="tablist" className="tabs tabs-border flex flex-row items-center justify-center w-full space-x-3">

                                <button role="tab"
                                onClick={()=>navigationHandler(`/`)}
                                className={`w-2/12 btn xxs:btn-sm lg:btn-xl rounded-full capitalize ease-in-out transition-all border-fuchsia-400 bg-fuchsia-400 text-fuchsia-100`}
                                >
                                shop now
                                </button>

                                <button role="tab"
                                onClick={()=>navigationHandler(`/dashboard`)}
                                className={`w-2/12 rounded-full btn xxs:btn-sm lg:btn-xl capitalize ease-in-out transition-all border-fuchsia-400 btn-outline hover:bg-transparent border  text-fuchsia-400`}
                                >
                                dashboard
                                </button>
                            </div>
                            )
                        
                        }
                </div>

                    </div>
            </Hero>
            <div className={`w-full min-h-[600px] flex flex-col my-4`}>
            {/* dynamic contents based on data ===> */}
                <div
                className='w-full h-[500px] flex items-center justify-center'
                >
                    {
                        cart.length>0 ?
                        <Chart /> :
                        <StatAnim
                        styleData={`xxs:w-full xl:w-3/5`}
                        />
                    }

                </div>
                {/* dynamic action button if no data ===> */}
                    {
                        cart.length<1 && (
                            <div className='w-full flex items-center justify-center'>
                            <button 
                            className='btn btn-block xxs:btn-sm md:btn-lg md:w-6/12 lg:w-3/12 lg:btn-xl 2xl:w-2/12 capitalize rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-300'
                            onClick={()=>navigationHandler(`/`)}
                            >
                                add products
                            </button> 

                            </div>
                        )
                    }
            </div>
        </>
    );
};

export default Statistics;