import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const ProductManagement = createContext();
export const useProduct = ()=> useContext(ProductManagement);

const CustomContext = ({children}) => {
    const [cart, setCart] =  useState([]);
    const [wishList , setWishList] = useState([]);

    const cartHandler = (e,product) =>{
        e.preventDefault();
        const isWishList = wishList.find(wishlist=>wishlist.product_id === product.product_id);
        const isCartList = cart.find((cartValue, _)=>cartValue.product_id === product.product_id);
        // if product on the wishList===>
        if (isWishList) {
            toast.error(`${product.product_title} already in the wishList!`,{
                position:'top-center',
            });
            return;
        }
        // if product on the cart items ===>
        else if (isCartList) {

            toast.success(`${product.product_title} Added to Cart List`, {
                position:'top-center'
            });

            const matchedProduct =
             cart.map((cartItem, _)=> cartItem.product_id === product.product_id ? {...cartItem, quantity: cartItem.quantity + 1}: cartItem);

             setCart(matchedProduct);
             return;
        }
        else{
            // if product not available ===>
            if (!product.availability) {
                toast.error(`${product.product_title} Not Available!`, {
                    position:'top-center',
                })
                return;
            }
            // if available product added first time to the cart ===> 
            else{
                toast.success(`${product.product_title} Added to Cart!`, {
                    position:'top-center',
                });
                setCart([...cart, {...product, quantity:1}]);
                return;
            }
        }
        
    }
    const wishListHandler =(e, product)=>{
        e.preventDefault();
        const cartProduct = cart.find(item=> item.product_id === product.product_id);
        const wishListProduct = wishList.find(item=> item.product_id === product.product_id);
        // if product on the cart products ===>
        if (cartProduct) {
            toast.error(`${product.product_title} Already on Cart List!`,{
                position:'top-center',
            })
            return;
        }
        else if (wishListProduct) {
            toast.info(`${product.product_title} Already On The Wish List!`, {
                position:'top-center',
            });
            return;
        }
        else {
            toast.success(`${product.product_title } Added To Wish List!`, {
                position:'top-center',
            });
            setWishList([...wishList, product]);
            return;
        }

    }
    // decrement handler ===> 
    const decrementHandler =(e,product) => {
        e.preventDefault();
        const found = cart.find(item=> item.product_id === product.product_id);
        if (!found) {
            toast.error(`${product.product_title} Not in Cart List!`, {
                position:'top-center',
            });
            return;
        } else {
            const updatedItem = cart.map(item=>{
                if (item.product_id === product.product_id) {
                    if (item.quantity>1) {
                        toast.info(`${product.product_title} Remains ${item.quantity - 1} Units.`, {
                            position:'top-center',
                        });
                        return {...item , quantity:item.quantity-1}
                    } else {
                        toast.info(`${product.product_title} Removed From The List!`, {
                            position:'top-center',
                        });
                        return null;
                    }

                }
                return item;
            }).filter(Boolean);

            setCart(updatedItem);
        }
    }
    const moveHandler = (e, product)=>{
        e.preventDefault();
        const targetedWishList = wishList.find(item=> item.product_id === product.product_id);
        const targetedCartList = cart.find(item=>item.product_id === product.product_id);
        if (targetedWishList) {
            if (product.availability) {
                toast.success(`${product.product_title} Moved To Cart List`, {
                position:'top-center',
            });
            setCart([...cart, {...product , quantity:1}]);
            const movedProduct = wishList.filter(item =>item.product_id !== product.product_id);
            setWishList(movedProduct);
            return;
            }
            else {
                toast.error(`${product.product_title} Is Out Of The Stock!`, {
                    position:'top-center',
                });
                return;
            }
        }
        if (targetedCartList) {
            setWishList([...wishList, product]);
            const removedItem = cart.filter(item => item.product_id !== product.product_id);
            setCart(removedItem);
            toast.info(`${product.product_title} Moved To Wish List !`, {
                position:'top-center',
            });
            return;
        }
    }
    const removeHandler =(e, product)=>{
        e.preventDefault();
        const cartProduct = cart.some(item=>item.product_id===product.product_id);
        const wishListProduct = wishList.some(item=> item.product_id===product.product_id);
        if (cartProduct) {
            const removedProduct = cart.filter(item=>item.product_id !== product.product_id);
            setCart(removedProduct);
            return;
        }

        if (wishListProduct) {
            const removedProduct = wishList.filter(item=> item.product_id !== product.product_id);
            setWishList(removedProduct);
            return;
        }

    }
    const value = {cart, wishList, cartHandler, wishListHandler, removeHandler, decrementHandler, moveHandler};
    return (
        <ProductManagement.Provider value={value}>
            {children}
        </ProductManagement.Provider>
    );
};

export default CustomContext;