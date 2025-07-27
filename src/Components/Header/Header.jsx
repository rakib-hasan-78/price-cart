 import React, { useEffect, useState } from 'react';
import Nav from './../Nav/Nav';

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(()=>{
        const header =document.getElementById('header');
        if(!header) return;
        const headerPosition = header.offsetTop;

        const stickHandler = ()=>{

            const stickPosition = window.scrollY;
            stickPosition > headerPosition ? setIsScroll(true)  : setIsScroll(false);
        }

        window.addEventListener('scroll', stickHandler);
        return ()=> window.removeEventListener('scroll', stickHandler)

    }, [])
    return (
        <header
        id='header' 
        className={`w-full rounded-t-xl border-none mb-0 -mt-0.5 ${isScroll ? 'fixed top-0 z-50 left-0':' relative z-30'}`}>
            <Nav isScroll={isScroll} />
        </header>
    );
};

export default Header; 