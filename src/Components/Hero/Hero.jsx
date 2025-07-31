import React from 'react';

const Hero = ({children , className}) => {
    return (
        <div 
        className={`hero bg-hero custom-bg items-start relative ${className}`}>  
            {children}
        </div>
    );
};

export default Hero;

