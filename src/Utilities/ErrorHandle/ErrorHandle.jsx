import { isRouteErrorResponse, useLocation, useRouteError } from "react-router-dom"

import React from 'react';

const ErrorHandle = () => {

    const location = useLocation();
    const searchRoute = Array.from(location.pathname).slice(1).join('');
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return(
            <div className="w-full items-center justify-center">
                <h1 className="text-5xl font-black font-serif text-bg text-center">Oops...!</h1>
                <p className="text-center text-bg font-semibold text-base"><strong className="italic lowercase"> {searchRoute} </strong> - {error.statusText || `Error!`}!</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        )
    } else {
        return (
            <div className="w-full items-center justify-center mt-5">
                <h4 className="text-lg font-black font-serif text-bg text-center">unknown error occurred!</h4>
            </div>
        )
    }
};

export default ErrorHandle;