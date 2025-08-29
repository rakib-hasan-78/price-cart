import React from 'react';
import { useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import NavLinks from '../NavLinks/NavLinks';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';


const Nav = ({isScroll}) => {
    const location = useLocation();
    const preferenceBG = location.pathname==='/';
    const {cart, wishList} = useProduct();
    return (
        <div 
        className={`navbar ${isScroll ? 'rounded-t-none shadow-2xl':'lg:rounded-t-xl' }  border-none shadow-none mb-0 ${location.pathname==='/'?'custom-bg':'secondary-bg-gradient-nav'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {NavLinks()}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Plug & Play</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center space-x-5">
                {NavLinks()}
                </ul>
            </div>
            <div className='navbar-end'>
                <div className="flex items-center justify-end space-x-3">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={`btn ${preferenceBG ? 'bg-[radial-gradient(circle,theme(colors.red.100)_40%,theme(colors.zinc.200))]':'bg-[radial-gradient(circle_farthest-corner_at_-5.6%_-6.8%,_theme(colors.purple.800)_37.3%,_theme(colors.indigo.900)_73.5%)] bg-blend-color  text-white backdrop-blur-md bg-white/10'} btn-circle`}>
                            <div className={`indicator`}>
                            <BsCart3 className='text-xl'/>
                            {
                                cart.length>0 && (
                                <span className="badge badge-sm indicator-item bg-red-400 text-red-50">{cart.length}</span>
                                )
                            }
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                            <span className="text-lg font-bold text-black">{cart.length} Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={`btn ${preferenceBG ? 'bg-[radial-gradient(circle,theme(colors.red.100)_40%,theme(colors.zinc.200))]':'bg-[radial-gradient(circle_farthest-corner_at_-5.6%_-6.8%,_theme(colors.purple.800)_37.3%,_theme(colors.indigo.900)_73.5%)] bg-blend-color  text-white backdrop-blur-md bg-white/10'} btn-circle`}>
                            <div className="indicator">
                            <CiHeart className='text-2xl' />
                            {
                                wishList.length>0 &&(
                                <span className="badge badge-sm indicator-item bg-red-400 text-red-100">{wishList.length}</span>
                                )
                            }
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                            <span className="text-lg font-bold text-black">{wishList.length} Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;

