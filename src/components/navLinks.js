import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import LogOutLink from "./LogOutLink";
import { LoggedInContext } from '../actions/firebase-auth';
import { ReactComponent as ReactLogo } from "../images/logo.svg";

import './navLinks.scss';

const NaviLinks = ()=> (
        <div className='navlink'>
        <NavLink to={`home`}><ReactLogo className="logo" /></NavLink>
        <NavLink to={`create`}>Create</NavLink>
        <NavLink to={`help`}>Help</NavLink>
        {
        (!useContext(LoggedInContext)) ?
        <NavLink to={'/'}>Log In</NavLink>
        :
        <LogOutLink />
        }
        </div>
    );


export default NaviLinks;