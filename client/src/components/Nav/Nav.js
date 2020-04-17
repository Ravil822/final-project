import React from "react";
import {
   Link
 } from "react-router-dom";

function Nav() {
  return (

<div>

 <nav id="menu" className="navbar navbar-default navbar-fixed-top menu-top">
    <div className="container">
       <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
          <Link className="navbar-brand page-scroll" to="#page-top">Construction Helper</Link>
       </div>
       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
             <li><Link to="/" className="page-scroll">Home</Link></li>
             <li><Link to="/about" className="page-scroll">About Us</Link></li>
             <li><Link to="/projects" className="page-scroll">Projects</Link></li>
             <li><Link to="/logIn" className="page-scroll">Login</Link></li>
             <li><Link to="/signUp" className="page-scroll">Sign Up</Link></li>
          </ul>
       </div>
    </div>
 </nav>
 </div>
  );
}

export default Nav;
