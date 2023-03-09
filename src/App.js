import React, { useContext } from 'react';
import './App.css';
import { Outlet, Navigate } from "react-router-dom";
import NaviLinks  from "./components/navLinks";
import PageHeader from "./components/Header";
import { UserStatus, LoggedInContext } from './actions/firebase-auth';


function App() {
  const loggedIn = useContext(LoggedInContext);
  if (!loggedIn){
    return <Navigate replace to="/login" />
  } else {
  return (
    <div className="App">
      <PageHeader />
      <div className='sidebar' >
        <NaviLinks />
      </div>
      <div id="page-main">
        <Outlet />
        <UserStatus />
      </div>
     
    </div>
  );
  }
}

export default App;
