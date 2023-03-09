import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import { UserStatus, LoggedInContext } from '../actions/firebase-auth';

const LoginPage = () => {
    const loggedIn = useContext(LoggedInContext);
    if (!loggedIn) {
    return(
    <>
        <h2>LOG YOSELF in</h2>
        <LoginForm />
        <UserStatus />
    </>
    );
    } else {
        return <Navigate replace to="/home" />
    }
};
export default LoginPage;