import React from 'react';
import { NavLink } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, NavbarBrand } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import Logo from './pics/logowhite.png';
import Resume from './files/resume.pdf';

function Navigation () {

    const setNav = {

    }

    return (
    <Navbar style={setNav} fixed="top" bg="dark" variant="dark" expand="lg">
      <NavLink className="nav-link" to="/">
            <NavbarBrand href="#home"><img className="logo" src={Logo} alt="Logo"/></NavbarBrand> 
          </NavLink>
      
      <div class="container-fluid collapse navbar-collapse" id="navbarNav">
      <NavbarToggle className="ml-auto" aria-controls='responsive-navbar-nav' />
      <NavbarCollapse id='responsive-navbar-nav'>
      <Nav className="ml-auto">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
          <NavLink className="nav-link" to="/about">
                  About
                  <span className="sr-only">(current)</span>
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
                  Experience
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/studio">
                  Projects
                </NavLink>
            </li>
            <li>
                <a className="nav-item" href={Resume} download>
                  <button className="btn  btn-outline-secondary  my-2 my-sm-0">RESUME</button>
                  </a> 
               </li>
               
        </ul>
        </Nav>
        </NavbarCollapse>
        </div>
     </Navbar>
    )
    }

    export default Navigation;