import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <Navbar bg="primary" variant="dark" >
            
            <Link to={""} className="navbar-brand">
                
                    Home

            </Link>
            <Nav className="mr-auto">
                <Link to={"/resume"} replace className="nav-link">Resume</Link>
                <Link to={"/projects"}  replace className="nav-link">Projects</Link>
            </Nav>
            
        </Navbar>
    )
}