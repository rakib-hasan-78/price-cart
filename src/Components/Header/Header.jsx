import React from 'react';
import Nav from './../Nav/Nav';

const Header = () => {
    return (
        <header className={`w-full rounded-t-xl border-none mb-0 -mt-0.5`}>
            <Nav />
        </header>
    );
};

export default Header;