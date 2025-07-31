import React from 'react';
import im from '../../assets/hero.png';
import useToggle from '../../Utilities/Hooks/useToggle/useToggle';
const DetailCard = () => {
    const [detail, setDetail] = useToggle();
    return (
        <div className='w-9/12 h-auto p-2 flex items-center justify-center border relative mx-auto rounded-2xl'>
            <div className='w-full py-1 border border-red-400 flex xxs:flex-col md:flex-row items-start justify-start space-x-2'>
                <div className='w-5/12 h-full'>
                    <img src={im} alt="xxx" />
                </div>

                <div className='w-7/12'>
                    <div className='w-full h-auto flex flex-col space-y-2'>
                        <h3
                        onClick={setDetail} 
                        className={`font-semibold xxs:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer  text-left text-black ${detail ? 'line-clamp-none' :'line-clamp-1'}`}>apple apple dell dell  3245 dell coca-cola smartwatch smart pen and some jam & jelly</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;