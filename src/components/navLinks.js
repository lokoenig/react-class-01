import React from "react";
import {NavLink} from "react-router-dom";
import LogOutLink from "./LogOutLink";
import './navLinks.scss';


const NaviLinks = ()=> (
        <div className='navlink'>
        <NavLink to={`home`}>Home</NavLink>
        <NavLink to={`create`}>Create</NavLink>
        <NavLink to={`edit`}>Edit</NavLink>
        <NavLink to={`help`}>Help</NavLink>
        <LogOutLink />
        </div>
    );


export default NaviLinks;