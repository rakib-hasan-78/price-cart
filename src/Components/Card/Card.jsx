import React, { useState } from 'react';
import cdr from '../../assets/hero.png';
import { CiHeart } from "react-icons/ci";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Card = () => {
    const [expand, setExpand] = useState(false);

    const expandHandler = ()=>{
        setExpand(!expand);
    }

    return (
        <div 
        className='w-full h-auto flex flex-col items-start justify-center border border-violet-50/30 shadow-md shadow-violet-600/30 rounded-2xl card-gradient p-4'>
            {/* product image ===> */}
            <div className='w-full h-40 rounded-2xl'>
                <img className='rounded-2xl' src={cdr} alt="xyz" />
            </div>
            {/* product details ===> */}
            <div className='w-full h-60 flex flex-col justify-start items-start'>
                {/* product title */}
                <div className='w-full'>
                    <h3
                    onClick={expandHandler}
                     className={`font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer mt-3 text-left text-black`}>
                        { <span className={`${expand ? 'line-clamp-none':'line-clamp-1'}`}>dell inspiron 5xue amtbt 53oimn refelnb gyfg</span> }
                     </h3>
                </div>
                {/* product price */}
                <div className='w-full'>
                    <h5 
                    className='font-semibold text-gray-900/60 mt-2 flex items-center justify-between'>
                    <span>
                        <span>price : $</span>
                        <span> 459.00</span>
                    </span>
                    <span>
                        <button 
                        className='btn size-10 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700 btn-circle text-2xl font-bold border border-pink-100 text-pink-100 inset-0'
                        title='save to wishlist' 
                        type="button"
                        >
                        <CiHeart />
                        </button>
                    </span> 
                     </h5>
                </div>
                {/* detail handler */}
                <div className='w-full mt-4'>
                    <div className='btn-gradient'>
                    <button 
                    className='btn btn-wide rounded-full w-full text-base capitalize font-bold px-16 !font-sans text-violet-500 bg-slate-100' 
                    type="button"
                    >
                    view details
                    </button>
                    </div>
                </div>
                {/* cart handle button */}
                <div 
                className='w-full mt-4'
                >
                    <div 
                    className='btn-gradient'
                    >
                        <div 
                        className='w-full bg-white rounded-full flex items-center justify-between px-4 py-1'
                         >
                            {/* increment button */}
                            <button
                            className='btn btn-xs btn-circle text-xl min-h-0 h-6 w-6  border-none font-bold text-violet-500 '
                             type="button"
                             >
                            <AiOutlinePlus />
            
                             </button>
                            {/* cart icon */}
                            <span
                             className='text-xl px-16 py-2'
                             >
                                <small
                                  className='text-violet-500'
                                  >
                                    <BsCart3 />
                                </small>
                            </span>
                            {/* decrement button */}
                            <button
                            className='btn btn-circle text-xl h-6 w-6 border-none font-bold text-violet-500'
                             type="button"
                             >
                            <AiOutlineMinus />
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;