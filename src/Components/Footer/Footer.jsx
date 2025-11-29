import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const homeLocation = location.pathname === '/';

    return (
        <footer className={`footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ${homeLocation ? 'custom-bg' : 'secondary-bg-gradient-nav'}`}>
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Plug & Play</p>
        </aside>
        </footer>
    );
};

export default Footer;


