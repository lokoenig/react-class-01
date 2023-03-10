import React, { useContext } from "react";
import { Navigate, Link} from "react-router-dom";

import { UserStatus, LoggedInContext } from '../actions/firebase-auth';
import './SplashPage.scss';

const SplashPage = () => {
    const loggedIn = useContext(LoggedInContext);
    if (!loggedIn) {
        return (
            <div className="focus-layout with-background">
            <div className="on-dark focus-card">
                <h2>HEEEEELLLOOOO</h2>
                    <p><a href="#">Learn more</a> about our wonderful tools.</p>
                    <div>
                    <Link
                        to='login'
                        className="button">
                        Log in to your account
                    </Link>
                    </div>
                 
                    <a href="#" className="signup-link">Sign up for an account</a>
            </div>
                <UserStatus />
            </div>
        );
    } else {
        return <Navigate to="/home" />
    }
};
export default SplashPage;