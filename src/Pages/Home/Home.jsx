import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const data = useLoaderData();
    console.log(data.length);
    return (
        <div className={``}>
           <p>hello home data baby = {data.length}</p>
        </div>
    );
};

export default Home;