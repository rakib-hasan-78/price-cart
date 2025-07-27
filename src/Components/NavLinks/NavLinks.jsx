import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavLinks = () => {
    const location = useLocation();
    const links =({isActive})=>{
        return `${location.pathname==='/'? `${isActive?'underline underline-offset-8 text-violet-50 font-medium':'font-light text-violet-50/70'}`: `${isActive?'text-violet-100/60 font-semibold underline underline-offset-8 custom-bg px-2 py-1.5 rounded-md':'text-gray-800/70'}`} font-serif text-base`
    }
    return (
        <>
            <NavLink className={links} to={'/'}>home</NavLink>
            <NavLink className={links} to={'/statistics'}>statistics</NavLink>
            <NavLink className={links} to={'/dashboard'}>dashboard</NavLink>
            
        </>
    );
};

export default NavLinks;
