import React from "react";
import './errorMessage.css';

import img from './imgerr.jpg'

const ErrorMessage = () => {

    return(
        <div className="errorMessage">
            <img src={img} alt={`error`}></img>
            <span>Sorry, something goes wrong</span>
        </div>
        
    )
}
export default ErrorMessage