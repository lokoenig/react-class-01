import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./LoginPage.scss";

import LoginForm from "./LoginForm";
import { UserStatus, LoggedInContext } from '../actions/firebase-auth';

const LoginPage = () => {
    const loggedIn = useContext(LoggedInContext);
    if (!loggedIn) {
    return(
    <div className="focus-layout with-background">
            <div className="on-dark focus-card">
        <h2>LOG YOSELF in</h2>
        <LoginForm />
        </div>
        <UserStatus />
    </div>
    );
    } else {
        return <Navigate replace to="/home" />
    }
};
export default LoginPage;