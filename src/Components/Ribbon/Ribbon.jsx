import React from 'react';
import filterImg from '../../assets/Frame.svg';
import { useProduct } from './../../Utilities/Hooks/CustomContext/CustomContext';
const Ribbon = ({tabs}) => {
    const {cart, wishList} = useProduct();

    return (
        <div className='w-full h-auto py-5 xxs:px-2 px-6 my-3  border flex xxs:flex-col lg:flex-row items-center justify-between'>
            <div className='xxs:w-full lg:w-auto border'>
                <h3 
                className='font-semibold text-2xl text-black/60 xxs:text-center lg:text-left'
                >
                {tabs === 'cart' ? 'Cart' :'Wish List'}
                </h3>
            </div>
            {
                tabs==='cart'&& cart.length===0 &&
                (
                <div className='w-auto flex items-center justify-around space-x-5'>
                <h4 className='font-semibold text-2xl text-black'>total cost: $ 999.99</h4>
                <div className='w-auto flex items-center space-x-3'>
                    <div className='btn-gradient'>
                        <div className='w-full body-default-bg rounded-full flex items-center justify-between px-4 py-4'>
                            <button 
                            className='btn btn-xs text-xl  border-none font-bold text-violet-500 bg-transparent ' type="button">
                                <span>
                                    Sort by Price
                                </span>
                                <span>
                                    <img src={filterImg} alt="filter-img" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <button 
                        className='py-3 px-5 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-300'
                        type='button'

                        >
                        purchase
                        </button>
                    </div>
                </div>
                </div>

                )
            }
        </div>
    );
};

export default Ribbon;