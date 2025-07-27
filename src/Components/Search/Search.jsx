import React, { useState } from 'react';
import { LuX } from "react-icons/lu";
const Search = () => {
    const [search, setSearch] = useState('')
    return (
        <div className='w-6/12 h-auto flex flex-col items-center justify-center  mx-auto py-5'>
            <h3 className='bg-gradient-to-r from-zinc-900/80 to-slate-800/50 text-transparent bg-clip-text font-semibold text-4xl py-1'>search products</h3>
            <div className='w-7/12 relative'>
                <input
                value={search}
                onChange={(e)=>setSearch(e.target.value)} 
                type="text" placeholder="Type here" className="w-full py-4 my-2 px-3 rounded-2xl border border-white outline-0 bg-gradient-to-r from-purple-300 via-violet-200/50 to-pink-400/40 bg-blend-color-burn backdrop-blur-lg shadow-2xl text-black/40 font-medium font-sans" />
                {
                    search && (
                        <span
                        onClick={()=>setSearch('')} 
                        className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 text-2xl cursor-pointer text-purple-500'> <LuX /> </span>
                    )
                }
            </div>
        </div>
    );
};

export default Search;

