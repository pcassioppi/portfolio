import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header(){
    return (
        <Navbar bg="dark" variant="dark" >
            
            <Link to={"/portfolio"} className="navbar-brand">
                
                    Home

            </Link>
            <Nav className="mr-auto">
                <Link to={"/portfolio/resume"} replace className="nav-link">Full Resume</Link>
                <Link to={"/portfolio/projects"}  replace className="nav-link">Projects</Link>
                <NavDropdown title="Use this to nav to different projects" id="collasible-nav-dropdown">
                    {/* should link to samee page, but different spots */}
                    <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">SongSpots</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">TopMusic</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
        </Navbar>
    )
}