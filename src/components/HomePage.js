import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Row, Tab, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css'
import Resume from './Resume'
import Projects from './Projects'
import AboutMe from './AboutMe'

export default class HomePage extends Component{

    
    

    render(){
        return (
            <Container className="p-4">
                {/* <Jumbotron className="text-center">
                        <h1>Welcome to My Website!</h1>
                        <div>~please enjoy your stay~</div>        
                </Jumbotron> */}
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Card border="primary">
                            <Card.Header> Menu </Card.Header>
                            <Card.Body>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">About Me</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Projects</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                            <Nav.Link eventKey="third">Full Resume</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={9}>
                        <Card bg="dark">
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <AboutMe />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Projects/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Resume/>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                        </Col>
                        
                    </Row>
                </Tab.Container>
            </Container>
        );
    
    }
}