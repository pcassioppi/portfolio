import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Row, Tab, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css'
import Resume from './Resume'
import Projects from './Projects'

export default class HomePage extends Component{

    
    

    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                        <h1>Portfolio Test</h1>        
                </Jumbotron>
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Card>
                        <Nav variant="tabs" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Projects</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Projects" id="collasible-nav-dropdown">
                                {/* should link to samee page, but different spots */}
                                <NavDropdown.Item href="#action/3.1">Projects</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.1">SongSpots</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">TopMusic</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Card>
                        </Col>
                        <Col sm={9}>
                        <Card>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Resume />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Projects/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Card>
                        </Col>
                        
                    </Row>
                </Tab.Container>
            </Container>
        );
    
    }
}