import React from "react";
import gear from "../images/Gear-0.2s-200px.svg";
import "./LoadingPage.scss";


export const LoadingPage = () =>
(
    <div className="loading-message">
    <div>
        <img src={gear} />
        <p>Please Wait</p>
        </div>
    </div>
);

export default LoadingPage;