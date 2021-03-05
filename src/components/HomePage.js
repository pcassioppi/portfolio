import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Row, Tab, Nav, Image, Button, ButtonGroup} from 'react-bootstrap';
import '../App.css'
import Resume from './Resume'
import Projects from './Projects'
import AboutMe from './AboutMe'

export default class HomePage extends Component{
    render(){
        return (
            <Container className="p-4">
                {/* <Card bg="dark"> */}
                {/* <Jumbotron className="text-center">
                        <h1>Welcome to My Website!</h1>
                        <div>~please enjoy your stay~</div>        
                </Jumbotron> */}
                {/* <Card.Body> */}
                <Tab.Container defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Card bg="dark">
                            <Card bg="dark" text="white" className="text-center">
                                <Card.Header>
                                    <Image src="https://avatars.githubusercontent.com/u/47647586?s=460&u=77191a3f8ed3628f3074e1f373ea47a40aa6b9f9&v=4" roundedCircle fluid/>
                                    <Card.Text>
                                        <br/>
                                        <h3>Peter Cassioppi</h3>
                                    </Card.Text>
                                </Card.Header>
                                <Card.Body className="text-center">
                                    
                                   
                                    {/* <Row>
                                        <Col>

                                        </Col>
                                    </Row> */}
                                    {/* <ButtonGroup aria-label="Basic example"> */}
                                    <Row >
                                        <Col>
                                            {/* <Button variant="primary" href="https://www.linkedin.com/in/pcassioppi/" block>LinkedIn</Button>{' '} */}
                                            <Card.Link href="https://www.linkedin.com/in/pcassioppi/"><Image src="https://golflifenavigators.com/wp-content/uploads/2018/09/linkedin-logo.png" rounded fluid/></Card.Link>
                                        </Col>
                                        <Col>
                                            {/* <Button variant="secondary" href="https://github.com/pcassioppi/" block><Image src="https://opensheetmusicdisplay.org/wp-content/uploads/2020/08/pinpng.com-github-logo-png-945585.png" rounded fluid/></Button> */}
                                            <Card.Link href="https://www.github.com/pcassioppi/"><Image src="https://github.blog/wp-content/uploads/2013/04/fffdd290-a5e2-11e2-8099-e1b5d8286da3.jpg" rounded fluid/></Card.Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        
                                        <Col>
                                        <Card.Text>                                          
                                        </Card.Text>
                                        
                                        <Button variant="info" block disabled>Email: pjc@iastate.edu</Button>
                                        </Col>
                                    </Row>
                                    {/* </ButtonGroup> */}

                                </Card.Body>
                            </Card>
                        
                            <Card border="primary" bg="secondary" text="white">
                                <Card.Header> Menu </Card.Header>
                                <Card.Body>
                                    <Card bg="light">
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
                                </Card.Body>
                            </Card>
                        </Card>
                        </Col>
                        <Col sm={9}>
                        <Card bg="secondary">
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
                {/* </Card.Body> */}
                {/* </Card> */}
            </Container>
        );
    
    }
}