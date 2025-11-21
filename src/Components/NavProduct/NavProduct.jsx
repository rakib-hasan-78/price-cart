import React from 'react';
import { LuX } from 'react-icons/lu';
import { useProduct } from '../../Utilities/Hooks/CustomContext/CustomContext';
import NavProductAnimation from '../NavProductAnimation/NavProductAnimation';
import Item from '../Item/Item';
import Invoice from '../Invoice/Invoice';

const NavProduct = ({ drawer, setDrawer, setIsOpen }) => {
  const { cart, wishList } = useProduct();

  const cancelHandler = (e) => {
    e.preventDefault();
    setDrawer(null);
    setIsOpen(true);
  };

  return (
    <div
      className='absolute secondary-bg-gradient-nav backdrop-blur-lg bg-blend-color-dodge z-50 right-0 top-16 xxs:w-full lg:w-5/12 flex flex-col items-center justify-center space-y-3 rounded-xl blur-glass'
    >
      {/* Close Button */}
      <div className='w-full p-1.5 flex items-center justify-end'>
        <span
          onClick={cancelHandler}
          className='text-3xl cursor-pointer font-black transition-all duration-150 ease-in-out text-pink-400 hover:text-pink-600 hover:rotate-180'
        >
          <LuX />
        </span>
      </div>

      {/* Scrollable Items Container */}
      <div
        className='w-full h-64 py-3 flex flex-col items-center justify-start space-y-2 overflow-y-auto rounded-lg px-2'
      >
        {drawer === 'cart' && (
          cart.length > 0 ? (
            cart.map((item) => (
              <Item key={item.product_id} item={item} drawer={drawer} />
            ))
          ) : (
            <NavProductAnimation drawer={drawer} />
          )
        )}

        {drawer === 'wishlist' && (
          wishList.length > 0 ? (
            wishList.map((item) => (
              <Item key={item.product_id} item={item} drawer={drawer} />
            ))
          ) : (
            <NavProductAnimation drawer={drawer} />
          )
        )}
      </div>
        {
          drawer==='cart' && cart.length>0 &&(
            <Invoice setDrawer={setDrawer} />
          )
        }
    </div>
  );
};

export default NavProduct;
