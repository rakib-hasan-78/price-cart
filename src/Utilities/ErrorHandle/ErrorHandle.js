import { isRouteErrorResponse, useLocation, useRouteError } from "react-router-dom"

 const ErrorHandle =()=>{
    const location = useLocation();
    const searchRoute = Array.from(location.pathname).slice(1).join('');
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return(
            <div>
                <h1>Oops!</h1>
                <h2>{error.status}</h2>
                <p><strong> {searchRoute} </strong> - {error.statusText || `Error!`}!</p>
                {error.data?.message && <p>{error.data.message}</p>}
            </div>
        )
    } else {
        return (
            <div>
                <h1>unknown error occurred!</h1>
            </div>
        )
    }

}

export default ErrorHandle;