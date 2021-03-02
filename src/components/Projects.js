import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Tabs, Tab, Button} from 'react-bootstrap';
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
                        <Tabs defaultActiveKey="home" id="controlled-tab-example">
                            <Tab eventKey="home" title="Main">
                                <br />
                                <Card bg="secondary" text="white">
                                    <Card.Body>
                                        <Card.Header>SongSpots Song Location Tracker | Personal Project</Card.Header>
                                        <Card.Text>     - Full stack web application that uses Django, GraphQL, AWS RDS Postgres, React.js, and Google Maps API to allow users to 
                                            log songs and the locations they associate them with</Card.Text>
                                        <Card.Text>     - Developed a GraphQL API using Django and JWT user authentication to manipulate and query users’ individual data from Postgres 
                                            database hosted on AWS Cloud Relational Database Service</Card.Text>
                                        <Card.Text>     - Utilized React.js and URQL to query and manipulate data from the GraphQL API for the frontend, allowing users to see and add 
                                            data using a map that consumes the Google Maps API and is displayed in a user friendly React-Bootstrap UI</Card.Text>
                                        <Card.Footer>
                                            <Button href="https://github.com/pcassioppi/TopMusic" variant="light"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card bg="secondary" text="white">
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>Last.FM Spotify Data Scraper</Card.Title>
                                        
                                        </Card.Header>
                                        <Card.Text>     - Full stack web application using Django REST framework, MongoDB, and React.js</Card.Text>
                                        <Card.Text>     - Utilized BeautifulSoup python library and MongoDB change streams to dynamically crawl users' Last.FM data and retrieve track analysis data from Spotify’s API</Card.Text>
                                        <Card.Text>     - Implemented Bootstrap framework to display crawled data in an intuitive UI when user made request to the Django RESTFUL API from the React.js frontend</Card.Text>
                                        <Card.Footer> Github
                                            <Button href="https://github.com/pcassioppi/TopMusic" variant="light"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                
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
