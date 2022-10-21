import React from "react";
import './nav.css';

const Nav = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="d-flex justify-content-center">
        <h1 className="text-info m-2">Anthony's Portfolio</h1>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link text-warning text-opacity-75">About</a>
              <a className="nav-link text-warning text-opacity-75">Contact</a>
              <a className="nav-link text-warning text-opacity-75">Portfolio</a>
              <a className="nav-link text-warning text-opacity-75">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
