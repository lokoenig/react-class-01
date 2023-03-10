import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserStatus, LoggedInContext } from '../actions/firebase-auth';
import './SplashPage.scss';

const SplashPage = () => {
    const loggedIn = useContext(LoggedInContext);
    if (!loggedIn) {
        return (
            <div className="on-dark">
                <h2>HEEEEELLLOOOO</h2>
                <UserStatus />
            </div>
        );
    } else {
        return <Navigate to="/home" />
    }
};
export default SplashPage;