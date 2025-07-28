import React from 'react';
import cdr from '../../assets/hero.png';
const Card = () => {
    return (
        <div 
        className='w-full h-auto flex flex-col items-start justify-center border border-slate-50/80 shadow-md shadow-violet-600/30 rounded-2xl bg-radial from-slate-500/8 from-40% to-stone-700/9 backdrop-blur-lg bg-blend-color p-4'>
            {/* product image ===> */}
            <div className='w-full h-40 rounded-2xl'>
                <img className='rounded-2xl' src={cdr} alt="xyz" />
            </div>
            {/* product details ===> */}
            <div className='w-full h-44 flex flex-col border justify-start items-start'>
                <div>
                    <h3>dell inspiron 5xue amtbt 53oimn refelnb gyfg</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;