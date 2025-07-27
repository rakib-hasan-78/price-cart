import React from 'react';

const Hero = ({children}) => {
    return (
        <div 
        className={`hero bg-hero h-[600px] custom-bg items-start`}>  
            {children}
        </div>
    );
};

export default Hero;

