import React from "react";
import logo from './logo.svg';
import './App.css';
import { Outlet } from "react-router-dom";
import NaviLinks  from "./components/navLinks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='sidebar' >
        <NaviLinks />
      </div>
      <div id="page-main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
