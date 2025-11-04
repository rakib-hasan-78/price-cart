import React from 'react';
import filterImg from '../../assets/Frame.svg';
import { useProduct } from './../../Utilities/Hooks/CustomContext/CustomContext';
import Modal from './../Modal/Modal';
const Ribbon = ({tabs}) => {
    const {cart, wishList, totals, priceFilterHandler} = useProduct();

    return (
        <div className='w-full h-auto py-5 xxs:px-2 px-6 my-3 flex xxs:flex-col lg:flex-row items-center justify-between'>
            <div className='xxs:w-full lg:w-auto'>
                <h3 
                className='font-semibold text-2xl text-black/60 xxs:text-center lg:text-left text-bg'
                >
                {tabs === 'cart' && cart.length >0 && 'Cart'}
                {tabs === 'wishlist' && wishList.length >0 && 'Wishlist'}
                </h3>
            </div>
            {
                tabs==='cart'&& cart.length>0 &&
                (
                <div className='w-auto flex  flex-col lg:flex-row flex-wrap items-center justify-around xxs:space-y-5 lg:space-y-0 xxs:space-x-0 lg:space-x-5'>
                <h4 className='font-semibold xxs:text-lg lg:text-2xl text-bg'>total cost: $ {(totals.subTotal + totals.totalShipmentCharge).toFixed(2)}</h4>
                <div className='w-auto flex xxs:flex-col md:flex-row items-center xxs:space-y-3 md:space-y-0 md:space-x-3'>
                    <div className='btn-gradient xxs:w-11/12'>
                        <div className='w-full body-default-bg rounded-full flex items-center xxs:justify-center lg:justify-between xxs:px-4 lg:px-4 xxs:py-3 lg:py-4'>
                            <button 
                            className='btn btn-xs text-xl  border-none font-bold text-violet-500 bg-transparent ' type="button"
                            onClick={priceFilterHandler}
                            >
                                <span>
                                    Sort by Price
                                </span>
                                <span>
                                    <img src={filterImg} alt="filter-img" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='xxs:w-full md:w-auto'>
                        <Modal cName={`py-7 px-6 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 w-full`} />
                    </div>
                </div>
                </div>

                )
            }
        </div>
    );
};

export default Ribbon;


