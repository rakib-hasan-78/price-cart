import React from 'react';
import Chart from './../../Components/Chart/Chart';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import StatAnim from '../../Components/StatAnim/StatAnim';
import { useNavigate } from 'react-router-dom';



const Statistics = () => {
    const {cart} = useProduct()
    const navigation = useNavigate();
    return (
        <div className={`w-full min-h-[600px] flex flex-col my-4`}>
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
            <div
            className='w-full h-auto flex items-center justify-center'
            >
                {
                    cart.length<1 && (
                    <button
                    onClick={()=>navigation(`/`)}
                    className='btn xxs:btn-block lg:btn-lg xl:btn-xl md:w-3/5 lg:w-2/5 2xl:w-1/5 capitalize rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-300'
                    >
                        add products
                    </button>
                    )
                   
                }

            </div>
        </div>
    );
};

export default Statistics;