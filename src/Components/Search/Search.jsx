import React from 'react';
import { LuX } from "react-icons/lu";
const Search = ({search, setSearch}) => {
    
    return (
        <div className='xxs:w-10/11 lg:w-6/12 h-36 flex flex-col items-center justify-center  mx-auto py-5 relative xxs:-translate-y-1/3 lg:-translate-y-3/3 space-y-2'>
            <h3 className='bg-gradient-to-r from-zinc-900/80 to-slate-800/50 text-transparent bg-clip-text font-semibold  xxs:text-xl sm:text-2xl md:text-3xl lg:text-4xl py-1'>search products</h3>

            <div className='xxs:w-full lg:w-7/12  relative'>
                <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)} 
                type="text" placeholder="Type here" className="w-full py-4 my-2 px-3 rounded-2xl border border-white outline-0 bg-gradient-to-r from-purple-300 via-violet-200/50 to-pink-400/40 bg-blend-color-burn backdrop-blur-lg shadow-2xl text-black/40 font-medium font-sans"
                 />
                {
                    search && (
                        <span
                        onClick={()=>setSearch('')} 
                        className='absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 text-2xl cursor-pointer text-purple-500'> <LuX /> </span>
                    )
                }
            </div>
            <span>{search.length}</span>
        </div>
    );
};

export default Search;

