import React from 'react';
import SelectedCart from './../SelectedCart/SelectedCart';
import CartAnimation from './../CartAnimation/CartAnimation';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import Invoice from '../Invoice/Invoice';

const SelectedProduct = ({tabs}) => {
    const {cart, wishList} =useProduct();
    return (
        <div className='w-full p-5 h-auto flex flex-wrap xxs:flex-col sm:flex-row lg:flex-col items-center justify-center sm:space-x-3 xxs:space-y-4'>
        {
            tabs === 'cart'&&(
                cart.length > 0 ? 
                cart?.map(item=>(
                    <SelectedCart 
                    key={item.product_id}
                     item={item}
                      tabs={tabs} />
                )) :
            <CartAnimation tabs={tabs} />

            )
        }
        {
            tabs==='cart' && (
                cart.length > 0 && (
                    <Invoice />
                )
            )
        }
        {
            tabs === 'wishlist' && (
                wishList.length > 0 ?
                wishList?.map(item=>(
                    <SelectedCart
                    key={item.product_id}
                    item={item}
                    tabs={tabs}
                     />
                )) :
                <CartAnimation tabs={tabs} />
            )
        }
        </div>
    );
};

export default SelectedProduct;