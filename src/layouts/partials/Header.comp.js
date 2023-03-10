import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/logo.png';

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
    <Navbar.Brand>
      <img src={logo} alt="/" width="30px" height="30px" />
    </Navbar.Brand>
    <Navbar.Toggle 
        aria-controls='basic-navbar-nav'
    />

    <Navbar.Collapse id='basic-Navbar-nav'>
        <Nav className='ml-auto'>
        <Nav.Link href="/Dashboard" >
        Dashboard
        </Nav.Link>
        <Nav.Link href="/Dashboard" >
        Leads 
        </Nav.Link>
        <Nav.Link href="/Dashboard" >
        Logout
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
        
 
   </Navbar>
  )
}
