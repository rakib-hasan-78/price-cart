import React from 'react';
import { CiHeart } from "react-icons/ci";
import { BsCart3, BsBookmark  } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";

import useToggle from '../../Utilities/Hooks/useToggle/useToggle';
import Rating from './../Rating/Rating';
import { useLoaderData,  useParams } from 'react-router-dom';
import useReturn from '../../Utilities/Hooks/Return/Return';
const DetailCard = () => {
    const [detail, setDetail] = useToggle();
    const [brief, setBrief] = useToggle();
    const returnHandler = useReturn();
    const detailData = useLoaderData();
    const {product_id} = useParams();
    const product = detailData.find(data=>data.product_id === product_id);
    const 
    {
        product_title,
        product_image ,
        price,
        availability,
        description, 
        specification, 
        rating
     } = product;

    return (
        <div className='xxs:w-full lg:w-7/12 h-auto p-2 flex items-center justify-center border-2 border-white/40 shadow-2xs relative mx-auto rounded-2xl px-5 bg-white -translate-y-1/5'>
            <div className='w-full py-1 flex xxs:flex-col md:flex-row items-start justify-start space-x-4'>
                <div className='xxs:w-full lg:w-5/12 xxs:min-h-64 lg:min-h-[420px] rounded-xl'>
                    <img className='rounded-xl object-fill w-full min-h-full' src={product_image} alt={`image of : ${product_title}`} />
                </div>

                <div className='w-7/12'>
                    <div className='w-full h-auto flex flex-col space-y-3'>
                        <h3
                        onClick={setDetail} 
                        className={`font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer  text-left text-black pr-10 ${detail ? 'line-clamp-none' :'line-clamp-1'}`}>{product_title}</h3>
                        <span 
                        className='text-black/60 font-medium text-xl'
                        >
                        price : $
                        <span 
                        className='font-normal'
                        >
                        {price}
                        </span>
                        </span>
                        {/* stock information */}
                        <span className='w-full'>

                            { 
                                availability ? 
                                <span 
                                aria-disabled={true}
                                className='border border-purple-400 text-purple-400 bg-purple-200/25 px-3  flex items-center justify-between w-28 rounded-full cursor-pointer'>
                                in stock
                                <div className='relative flex size-4 -translate-y-4 translate-x-3'>
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                                    <span class="relative inline-flex size-4 rounded-full bg-purple-500"></span>
                                </div>
                                </span>
                                :
                                <span className='border border-red-400 text-red-400 bg-red-200/25 cursor-pointer px-2 py-0.5 flex items-center justify-between w-3/12 rounded-full text-[12px]'>
                                out of stock
                                <div className='relative flex size-3 -translate-y-3 translate-x-3'>
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75">
                                    </span>
                                    <span class="relative inline-flex size-3 rounded-full bg-rose-500">
                                    </span>
                                </div>
                                </span>

                            }
                            
                        
                        </span>
                    </div>
                    {/* description box  */}
                    <div className='w-auto'>
                        <p
                        onClick={setBrief}
                        className={`text-lg my-2 ${brief ? 'line-clamp-none':'line-clamp-1'} cursor-pointer transition-all font-light decoration-1 delay-75 ease-in text-black/50`}>
                        {description}
                        </p>
                    </div>
                    {/* specification */}
                    <div className='w-full h-auto flex flex-col items-start justify-start flex-wrap'>
                        <h5 className='font-semibold'>specifications:</h5>
                        <div>
                            <ul>
                                {
                                    specification.map((value , idx)=>(

                                     <li key={idx+1} className='text-black/60 font-light text-lg'> {idx<10 && `0${idx+1} . `} {value}</li>
                                    )) 
                                }
                            </ul>
                        </div>
                    </div>
                    {/* product rating */}
                    <div className='w-auto h-auto flex items-start justify-start space-x-3'>
                        <h5>rating</h5>
                        <div className='w-auto flex items-center space-x-2'>
                            <Rating rating={rating} />
                            <div className='w-12 bg-pink-400 flex items-center justify-center rounded-full text-pink-100 font-medium'>{rating}</div>
                        </div>
                    </div>
                    {/* action button blocks ===> */}
                    <div className='w-auto h-auto flex flex-row items-center justify-start space-x-3 my-2'>
                        {/* cart button */}
                        <div className='flex items-center justify-start border border-purple-400 space-x-3 my-3 rounded-full'>
                        <button className="btn btn-square bg-transparent border-none">
                        <AiOutlinePlus className='text-purple-400' />
                        </button>
                        <BsCart3 className='text-purple-400' />
                        <button className="btn btn-square bg-transparent border-none">
                        <AiOutlineMinus className='text-purple-400' />
                        </button>
                        </div>
                        {/* wishlist button  & return button*/}
                        <div className='w-auto h-auto flex items-center justify-start space-x-3 '>
                        {/* wishlist button */}
                        <button title='wishlist' className='btn btn-circle bg-purple-400 text-lg text-purple-100 shadow-none border border-purple-500'>
                        <BsBookmark />
                        </button>
                        <button
                        onClick={returnHandler}
                         title='return page' className='btn btn-circle bg-rose-400 text-lg text-rose-100 shadow-none border border-rose-500'>
                        <GiReturnArrow />
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;