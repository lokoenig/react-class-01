import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import NaviLinks  from "./components/navLinks";
import PageHeader from "./components/Header";
import { UserStatus } from './actions/firebase-auth';


function App() {
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

export default App;
