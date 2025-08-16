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
    const value = {cart, wishList, cartHandler};
    return (
        <ProductManagement.Provider value={value}>
            {children}
        </ProductManagement.Provider>
    );
};

export default CustomContext;