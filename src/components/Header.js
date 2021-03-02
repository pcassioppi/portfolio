import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            
            <Navbar.Brand className="text-center">Peter Cassioppi</Navbar.Brand>
            {/* <Link to={"/portfolio"} className="navbar-brand">
                
                    Home

            </Link>
            <Nav className="mr-auto">
                
                <Link to={"/projects"}  replace className="nav-link">Projects</Link>
                <NavDropdown title="Use this to nav to different projects" id="collasible-nav-dropdown">
                    
                    <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">SongSpots</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">TopMusic</NavDropdown.Item>
                </NavDropdown>
                <Link to={"/resume"} replace className="nav-link">Full Resume</Link>
            </Nav> */}
            
        </Navbar>
    )
}