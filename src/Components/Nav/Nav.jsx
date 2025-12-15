import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import NavLinks from '../NavLinks/NavLinks';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import NavProduct from './../NavProduct/NavProduct';


const Nav = ({isScroll}) => {
    const location = useLocation();
    const preferenceBG = location.pathname==='/';
    const {cart, wishList, totals} = useProduct();
    

    const [drawer, setDrawer] = useState(null);
    const [isOpen, setIsOpen] = useState(true);

    const navHandler = (e, type)=>{
        e.preventDefault();
         setDrawer(prev => (prev === type ? null : type));
         setIsOpen(true);
    }
    
    return (
        <div 
        className={`navbar ${isScroll ? 'rounded-t-none shadow-2xl':'lg:rounded-t-xl' }  border-none shadow-none mb-0 ${location.pathname==='/'?'custom-bg':'secondary-bg-gradient-nav'} relative`}>
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
                    <div className="dropdown dropdown-end z-10">
                        <div tabIndex={0} role="button" className={`btn ${preferenceBG ? 'bg-[radial-gradient(circle,theme(colors.red.100)_40%,theme(colors.zinc.200))]':'bg-[radial-gradient(circle_farthest-corner_at_-5.6%_-6.8%,_theme(colors.purple.800)_37.3%,_theme(colors.indigo.900)_73.5%)] bg-blend-color  text-white backdrop-blur-md bg-white/10'} btn-circle`}>
                            <div className={`indicator z-10`}>
                            <BsCart3 className='text-xl'/>
                            {
                                cart.length>0 && (
                                <span className="badge badge-sm indicator-item bg-red-400 text-red-50">{cart.length}</span>
                                )
                            }
                            </div>
                        </div>
                            {
                                isOpen && (
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content mt-3 w-52 border border-violet-50 shadow-md shadow-violet-600/30 rounded-2xl backdrop-blur-3xl nav-card-gradient">
                                    <div className="card-body">
                                    <span className="text-lg font-bold text-black">{cart.length} Items</span>
                                    <span className="text-info font-black">Subtotal: $ {totals.subTotal.toFixed(2)}</span>
                                    <div className="card-actions">
                                        <button
                                        onClick={(e)=>navHandler(e, 'cart')} 
                                        className="btn btn-primary btn-block">
                                        View cart
                                        </button>
                                    </div>
                                    </div>
                                </div>

                                )
                            }
                    </div>
                    <div className="dropdown dropdown-end z-10">
                        <div tabIndex={0} role="button" className={`btn ${preferenceBG ? 'bg-[radial-gradient(circle,theme(colors.red.100)_40%,theme(colors.zinc.200))]':'bg-[radial-gradient(circle_farthest-corner_at_-5.6%_-6.8%,_theme(colors.purple.800)_37.3%,_theme(colors.indigo.900)_73.5%)] bg-blend-color  text-white backdrop-blur-2xl bg-white/10'} btn-circle`}>
                            <div className="indicator">
                            <CiHeart className='text-2xl' />
                            {
                                wishList.length>0 &&(
                                <span className="badge badge-sm indicator-item bg-red-400 text-red-100">{wishList.length}</span>
                                )
                            }
                            </div>
                        </div>
                        {
                            isOpen && (
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content z-1 mt-3 w-52 border border-violet-50 shadow-md shadow-violet-600/30 rounded-2xl backdrop-blur-3xl nav-card-gradient">
                                    <div className="card-body">
                                    <span className="text-lg font-bold text-black">{wishList.length} Items</span>
                                
                                    <div className="card-actions">
                                        <button
                                        onClick={(e)=>navHandler(e, 'wishlist')} 
                                        className="btn btn-primary btn-block">
                                        View wishlist
                                        </button>
                                    </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
                
            </div>
            {
                drawer && (
                <NavProduct 
                drawer={drawer}
                setDrawer={setDrawer}
                setIsOpen = {setIsOpen}

                />

                )
            }
        </div>
    );
};

export default Nav;

