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
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>SongSpots Song Location Tracker</Card.Title>
                                        </Card.Header>
                                        <Card.Text>     - Full stack web application that uses Django, GraphQL, AWS RDS Postgres, React.js, and Google Maps API to allow users to 
                                            log songs and the locations they associate them with</Card.Text>
                                        <Card.Text>     - Developed a GraphQL API using Django and JWT user authentication to manipulate and query users’ individual data from Postgres 
                                            database hosted on AWS RDS</Card.Text>
                                        <Card.Text>     - Used React.js and URQL to query and manipulate data from the GraphQL API for the frontend, allowing users to see and add 
                                            data using a map from the Google Maps API, which is displayed in a user friendly React-Bootstrap UI</Card.Text>
                                        <Card.Footer>
                                            <Button href="https://github.com/pcassioppi/SongSpots" variant="light"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>Last.FM Spotify Data Scraper</Card.Title>
                                        </Card.Header>
                                        <Card.Text>     - Full stack web application using Django REST framework, MongoDB, and React.js</Card.Text>
                                        <Card.Text>     - Utilized BeautifulSoup python library and MongoDB change streams to dynamically crawl users' Last.FM data and retrieve track analysis data from Spotify’s API</Card.Text>
                                        <Card.Text>     - Implemented Bootstrap framework to display crawled data in an intuitive UI when user made request to the Django RESTFUL API from the React.js frontend</Card.Text>
                                        <Card.Footer>
                                            <Button href="https://github.com/pcassioppi/TopMusic" variant="light"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Button>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                
                            </Tab>
                            <Tab eventKey="SongSpots" title="SongSpots">
                                
                                <h1>SongSpots: Song Location Tracker</h1>
                                <h2>Technologies used: Python, JavaScript, Django, React.js, GraphQL (Graphene & URQL), Postgres, JWT Authentication, AWS RDS, Google Maps API</h2>
                                <br />
                                <h3>Why?</h3>
                                <div>
                                    This Web app was something I built because I wished something like it existed. I love listening to music, and when I listen to some songs, they take me back to a certain memory from my life. These memories
                                     are associated with the place I was in when they happened, so I wanted to be able to pinpoint the exact (or rough) location I was at when I heard a certain song, and I wanted to be able to describe the
                                      memory and what was so memorable about that song at that place and time.
                                </div>
                                <div>
                                This project also helped me bring together new technologies that I have been teaching myself, and gave me great hands on experience with them. I plan to make this my more "long-term" project, so I will be 
                                updating it with different features over time.
                                </div>
                                <h3>Overview</h3>
                                <div>
                                The application allows a user to create a profile and login. After that, they can add songs to their list, by clicking the location on the Google Maps interface and entering the songs title, artist, the date 
                                the memory is from, and a description of the memory. The information is then sent to the database, and they can see their information displayed either by refreshing the page, or by navigating to their page of
                                 existing songs. The songs are displayed as points on the map, and the user can hover over them to read their details. The users songs are also displayed in a list (without coordinates) on the side of the page.
                                </div>
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
