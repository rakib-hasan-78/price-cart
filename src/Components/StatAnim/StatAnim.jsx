import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const StatAnim = ({styleData}) => {
    return (
      <div className={`${styleData}`}>

        <DotLottieReact
        src="https://lottie.host/33924bce-572d-4fa9-bd65-d26ff7587a6c/rIjvfWDNEp.lottie"
        loop
        autoplay
        />
      </div>
    );
};

export default StatAnim;