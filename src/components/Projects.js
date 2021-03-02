import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Tabs, Tab} from 'react-bootstrap';
import '../App.css'

export default class Projects extends Component{
    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                        <div>Here are some brief summaries of a couple of personal projects I've done, and some of the technologies I've used.</div>
                        <div>If you want to see more about a certain project, you can click their corresponding tabs below.</div>
                </Jumbotron>
                <Card >
                    <Card.Body>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Main"  className="p-4">
                                {/* <Container> */}
                                <Card bg="secondary" text="white">
                                    <Card.Body>
                                        <Card.Header>SongSpots Song Location Tracker | Personal Project</Card.Header>
                                        <Card.Text>- Built full stack web application using Django, GraphQL, AWS RDS Postgres, React.js, and Google Maps API that allows users to 
                                            log songs and the locations they associate them with</Card.Text>
                                        <Card.Text>- Developed a GraphQL API using Django and JWT user authentication to manipulate and query users’ individual data from Postgres 
                                            database hosted on AWS Cloud Relational Database Service</Card.Text>
                                        <Card.Text>- Utilized React.js and URQL to query and manipulate data from the GraphQL API for the frontend, allowing users to see and add 
                                            data using a map that consumes the Google Maps API and is displayed in a user friendly React-Bootstrap UI</Card.Text>
                                        <Card.Footer className="text-muted">https://github.com/pcassioppi/SongSpots</Card.Footer>
                                    </Card.Body>
                                </Card>
                                {/* </Container> */}
                            </Tab>
                            <Tab eventKey="SongSpots" title="SongSpots">
                                <div>Test2</div>
                            </Tab>
                            <Tab eventKey="TopMusic" title="TopMusic">
                                <div>Test3</div>
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </Container>
        );
    
    }
}
