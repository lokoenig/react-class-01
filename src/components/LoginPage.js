import React from "react";
import LoginForm from "./LoginForm";
import { UserStatus } from '../actions/firebase-auth';

const LoginPage = () => (
    <>
        <h2>LOG YOSELF in</h2>
        <LoginForm />
        <UserStatus />
    </>
);
export default LoginPage;