import React from 'react';
import Lottie from 'lottie-react';
import cartJSON from '../../assets/empty.json';

const NavProductAnimation = ({ drawer }) => {
  const result = drawer === 'cart' ? 'cart' : drawer === 'wishlist' ? 'wishlist' : '';

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl font-black text-orange-600">
        No Product in {result}
      </h3>
      <div className="w-40 h-40">
        <Lottie animationData={cartJSON} loop={true} />
      </div>
    </div>
  );
};

export default NavProductAnimation;
