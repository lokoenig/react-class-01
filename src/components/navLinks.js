import React from "react";
import {Link} from "react-router-dom";
import './navLinks.scss';


const NaviLinks = ()=> (
        <div className='navlink'>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/help">Help</Link>
        </div>
    );


export default NaviLinks;