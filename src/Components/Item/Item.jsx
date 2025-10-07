import React from 'react';
import useToggle from '../../Utilities/Hooks/useToggle/useToggle';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdMoveUp } from 'react-icons/md';
import { VscTrash } from 'react-icons/vsc';


const Item = ({item, drawer}) => {
    const [toggle, setToggle] = useToggle();
    return (
        <div 
        className='xxs:w-full lg:w-11/12 xxs:py-0.5 lg:py-1.5 rounded-xl bg-gradient-to-r from-purple-600/90 via-violet-700/90 to-pink-400/90 border border-pink-100 backdrop-blur-2xl bg-blend-color-dodge flex items-center justify-start xxs:space-x-1.5 lg:space-x-4'>
            <div className=' flex items-center justify-start xxs:space-x-1 lg:space-x-2 p-2 xxs:w-36 lg:w-60'>
                <div className='xxs:w-14 lg:w-12 xxs:h-7 lg:h-12 rounded-xl'>
                    <img
                    className='rounded-md' 
                    src={item.product_image} alt={item.product_title} />
                </div>
                <div className='flex items-start justify-start flex-col text-violet-100'>
                    <h3
                    onClick={setToggle}
                     className={`text-[13px] ${toggle ? 'line-clamp-none':'line-clamp-1'} cursor-pointer font-bold`}
                     >
                     {item.product_title}
                     </h3>
                     <p className='text-[9px]'>price: $ {item.price}</p>
                     <p className='text-[9px]'>shipping coast: $ {item.shipping_charge}</p>
                </div>
            </div>
            {/* if it shows cart */}

            {
                drawer === 'cart' && (
                    <div 
                    className='flex items-center justify-center self-center space-x-2'
                    >
                        
                            <button 
                                className='btn btn-xs btn-circle text-xl min-h-0 xxs:h-2 lg:h-4 xxs:w-2 lg:w-4  border-none font-bold text-violet-500 '
                                type="button">
                                <AiOutlineMinus />
                                </button>
                                <span 
                                className='font-semibold xxs:text-[10px] md:text-xs text-white'>01</span>
                                <button 
                                className='btn btn-xs btn-circle text-xl min-h-0 xxs:h-2 sm:h-4 xxs:w-2 sm:w-4  border-none font-bold text-violet-500 '
                                type="button"
                                >
                                <AiOutlinePlus />
                                </button>
                        
                    </div>
                )
            }
            {/* purchase price including shipping charge ===> */}
            {
                drawer === 'cart' && (
                    <div className='flex items-center justify-center'>   
                        <span className='xxs:text-[10px] sm:text-xs lg:text-sm text-white font-bold'> $ 1234.54 </span>
                    </div>
                )
            }
            {/* interaction button */}

            <div className='flex items-center justify-end space-x-2 border ml-auto'>
                <button
                title={drawer === 'cart' ? 'transfer to wishlist':'transfer to cart'} 
                className="btn btn-circle xxs:w-4 lg:w-8 xxs:h-4 lg:h-8 xxs:p-0.5 lg:p-0 ">
                <MdMoveUp />
                </button>
                <button className="btn btn-circle xxs:w-4 lg:w-8 xxs:h-4 lg:h-8 xxs:p-0.5 lg:p-0">
                <VscTrash />
                </button>
            </div>
        </div>
    );
};

export default Item;