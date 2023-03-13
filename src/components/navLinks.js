import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import LogOutLink from "./LogOutLink";
import { LoggedInContext } from '../actions/firebase-auth';
import logo from "../images/logo.svg";

import './navLinks.scss';

console.log(logo);
const NaviLinks = ()=> (
        <div className='navlink'>
        <div><img src={logo} alt="Logo" className="logo" /></div>
        <NavLink to={`create`}>Create</NavLink>
        <NavLink to={`edit`}>Edit</NavLink>
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