import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Row, Tab, Nav} from 'react-bootstrap';
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
                <Card>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Resume</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Resume />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Projects/>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </Card>
            </Container>
        );
    
    }
}