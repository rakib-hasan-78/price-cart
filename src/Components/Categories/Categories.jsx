import React from 'react';

const Categories = () => {
    return (
        <div 
            className='w-2/12 border py-3 secondary-bg-gradient flex flex-wrap xxs:flex-row lg:flex-col items-center justify-center space-y-3 mt-3.5'
            >
            <h4 
            className='bg-gradient-to-r from-zinc-900/80 to-slate-800/text-transparent bg-clip-text font-semibold  xxs:text-sm:text-base md:text-lg lg:text-xl py-1'
            >
            categories
            </h4>
            <div className='w-full h-auto flex xxs:flex-row lg:flex-col space-y-2 px-4'>
                <button className='btn btn-wide rounded-full bg-radial-[at_50%_75%] from-violet-200  via-purple-400 via-35% to-violet-900 to-90% text-violet-100 capitalize'
                >
                    all   
                </button>

            </div>
        </div>

    );
};

export default Categories;


