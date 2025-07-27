import React from 'react';

const Hero = ({children}) => {
    return (
        <div 
        className={`hero bg-hero xxs:h-[300px] lg:h-[600px] custom-bg items-start`}>  
            {children}
        </div>
    );
};

export default Hero;

