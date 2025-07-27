import React, { useEffect, useState } from 'react';
import Nav from './../Nav/Nav';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const stickHandler = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 50); // Stick after 50px scroll
    };

    window.addEventListener('scroll', stickHandler);
    return () => window.removeEventListener('scroll', stickHandler);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ease-in-out z-40 ${
        isScroll ? 'fixed top-0 left-0 rounded-t-none' : 'relative'
      }`}
    >
      <Nav />
    </header>
  );
};

export default Header;
