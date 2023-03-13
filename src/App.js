import React, { useContext } from 'react';
import './App.css';
import { Outlet, Navigate, useLocation } from "react-router-dom";
import NaviLinks  from "./components/navLinks";
import { UserStatus, LoggedInContext } from './actions/firebase-auth';


function App() {
  const loggedIn = useContext(LoggedInContext);
  const location = useLocation();
  if (!loggedIn){
    return <Navigate replace to="/" />
  } else {
    if ('/' === location.pathname) {
      return <Navigate replace to="/home" />

    } else {
      return (
    <div className="App">
      <div className='sidebar' >
        <NaviLinks />
      </div>
      <div id="page-main">
        <Outlet />
      </div>
          <UserStatus />
    </div>
  );
  }
}
}

export default App;
