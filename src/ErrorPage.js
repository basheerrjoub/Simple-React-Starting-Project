import React from "react";
import errorPng from "./img/404.png" 

const ErrorPage = () => {
    return (
        <img src={errorPng} alt="404 Not Found" className="not-found" />
    );
}
 
export default ErrorPage;