import React from 'react';
import { LuX } from 'react-icons/lu';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import NavProductAnimation from '../NavProductAnimation/NavProductAnimation';

const NavProduct = ({drawer, setDrawer, setIsOpen}) => {
    const {cart} = useProduct()
    const cancelHandler =(e)=>{
        e.preventDefault();
        setDrawer(null);
        setIsOpen(true)
    }

    return (
        <div 
        className='absolute z-30 right-0 top-16 xxs:w-full lg:w-5/12 flex flex-col items-center justify-center space-y-3 rounded-xl secondary-bg-gradient-nav'>
            <div 
            className='w-full h-auto p-1.5 flex items-center justify-end'
            >
            <span
            onClick={cancelHandler}
            className='text-3xl cursor-pointer font-black transition-all delay-150 ease-in-out text-pink-400 hover:text-pink-600 rotate-0 hover:rotate-180'
            >
                <LuX />
            </span>
            </div>
            <div 
            className='w-full py-2 flex flex-col items-center justify-center space-y-2'>
                {
                    drawer === 'cart' && (
                        cart.length>0 ? 
                            'mmm'
                        
                         : 
                        
                        <NavProductAnimation drawer={drawer} />
                        
                    ) 

                }
                {
                    drawer === 'wishlist' && 'hello:wishlist' 

                }
            </div>
        </div>
    );
};

export default NavProduct;

