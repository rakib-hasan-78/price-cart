import React from 'react';
import tiger from '../../assets/tiger.jpg';
import useToggle from '../../Utilities/Hooks/useToggle/useToggle';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { VscTrash } from "react-icons/vsc";
import { MdMoveUp } from "react-icons/md";
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';

const SelectedCart = ({tabs, item}) => {
    const [asset, setAsset] = useToggle();
    const {
        getCartAmountHandler, 
        cartHandler,
        decrementHandler,
        totals,
        } = useProduct();
    const {quantity,
           product_image,
           product_title,
           price,
           shipping_charge
          } = item
    const [subTotal] = getCartAmountHandler(item);

    return (
        <div className='w-full sm:w-7/12 md:w-5/12 lg:w-8/12 py-4 px-4 h-auto flex flex-col lg:flex-row items-start justify-between border border-violet-50 shadow-md shadow-violet-600/30 rounded-2xl card-gradient'>
            <div className='xxs:w-full lg:w-6/12 flex flex-col lg:flex-row items-start justify-start xxs:space-x-0 lg:space-x-2.5 xxs:space-y-3 lg:space-y-0'>
                <div className='xxs:w-full lg:w-30 xxs:h-56 lg:h-30 rounded-lg'>
                    <img className='rounded-lg object-cover align-middle' src={product_image} />
                </div>
                <div className='flex flex-col items-start xxs:space-y-0 lg:space-y-2'>
                    <h3
                    onClick={setAsset}
                    className={`font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-base cursor-pointer text-left text-black leading-6`}
                    >
                    {
                        <span
                        className={`${asset ? 'line-clamp-none':'line-clamp-1'}`}
                        >
                          {product_title}   
                        </span>
                    }
                    </h3>
                    <h4 className='xxs:text-sm md:text-base'>price : $ {price}</h4>
                    <h5 className='xxs:text-xs md:text-sm lg:text-base'>shipping cost: $ {shipping_charge}</h5>
                </div>
            </div>
            {
                tabs==='cart' && (
                    <div className='xxs:w-full lg:w-auto flex flex-col xxs:items-start lg:items-center xxs:justify-start lg:justify-center xxs:space-y-3 lg:space-y-6 xxs:my-2 lg:my-0'>
                        <h3 className='font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-base cursor-pointer text-left text-black'>quantity</h3>
                        <div className='btn-gradient w-full'>
                            <div className='w-full bg-white rounded-full flex items-center justify-between px-4 py-1'>

                                <button
                                onClick={(e)=>decrementHandler(e, item)} 
                                className='btn btn-xs btn-circle text-xl min-h-0 h-6 w-6  border-none font-bold text-violet-500 '
                                type="button">
                                <AiOutlineMinus />
                                </button>
                                <span className='font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-base'>{quantity}</span>
                                <button
                                onClick={(e)=>cartHandler(e, item)} 
                                className='btn btn-xs btn-circle text-xl min-h-0 h-6 w-6  border-none font-bold text-violet-500 '
                                type="button"
                                >
                                <AiOutlinePlus />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                tabs=== 'cart' && (
                    <div className='w-auto flex flex-col lg:items-center xxs:justify-start lg:justify-center  xxs:space-y-3 lg:space-y-6'>
                        <h3 className='font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-base cursor-pointer text-left text-black'>price incl' shipping cost</h3>
                        <span className='xxs:text-sm md:text-base lg:text-lg xl:text-base'>${subTotal}</span>
                    </div>
                )
            }
            <div className='xxs:w-full lg:w-auto flex space-x-2 items-center justify-center'>

                {
                    tabs === 'wishlist' ? (
                        <div className='w-auto xxs:min-h-auto lg:min-h-[120px] flex items-center justify-center flex-wrap'>
                            <button
                            className='btn btn-circle' 
                            type="button"
                            title='Transfer to Cart List'
                            >
                            <MdMoveUp />
                            </button>
                        </div>
                    ) :
                    (
                        <div className='w-auto xxs:min-h-auto lg:min-h-[120px] inline-flex lg:flex items-center justify-center flex-wrap'>
                            <button
                            className='btn btn-circle' 
                            type="button"
                            title='Move to Wish List!'
                            >
                            <MdMoveUp />
                            </button>
                        </div>
                    )
                }
                <div className='w-auto xxs:min-h-auto lg:min-h-[120px] flex items-center justify-center flex-wrap'>
                    <button
                    className='btn btn-circle'
                    type="button"
                    >
                        <VscTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectedCart;