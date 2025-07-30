import React from 'react';

const CtBtn = ({name , isActive, OnClick}) => {
    // btn handler for selecting a category==>
    const categoryHandler = e=>{
        e.preventDefault();
        OnClick();
    }
    return (
        <button
        onClick={categoryHandler} 
        className={`btn xxs:btn-sm lg:btn-wide rounded-full ${isActive ? `bg-radial-[at_50%_75%] from-violet-200  via-purple-400 via-5% to-violet-900 to-90% text-purple-100 font-bold`:` bg-transparent border-slate-700 text-slate-800`} capitalize font-sans`}>
            {name}
        </button>
    );
};

export default CtBtn;