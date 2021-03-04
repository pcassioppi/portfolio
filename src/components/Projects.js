import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col, Tabs, Tab, ListGroup, ListGroupItem} from 'react-bootstrap';
import '../App.css'

export default class Projects extends Component{
    render(){
        return (
            <Container>
                
                <Card >
                    <Card.Body>
                        
                        
                        <Tabs defaultActiveKey="home" id="controlled-tab-example"   bg="info" text="white">
                            <Tab eventKey="home" title="Main">
                            <br/>
                            <Card >
                                <Card.Body>
                                    <div>Here are some brief summaries of a couple of personal projects I've done, and some of the technologies I've used.</div>
                                    <div>If you want to see more about a certain project, you can click its tab above.</div>
                                </Card.Body>
                            </Card>
                                <br />
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>SongSpots Song Location Tracker</Card.Title>
                                        </Card.Header>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem> Full stack web application that uses Django, GraphQL, AWS RDS Postgres, React.js, and Google Maps API to allow users to 
                                            log songs and the locations they associate them with</ListGroupItem>
                                            <ListGroupItem> Developed a GraphQL API using Django and JWT user authentication to manipulate and query users’ individual data from Postgres 
                                            database hosted on AWS RDS</ListGroupItem>
                                            <ListGroupItem> Used React.js and URQL to query and manipulate data from the GraphQL API for the frontend, allowing users to see and add 
                                            data using a map from the Google Maps API, which is displayed in a user friendly React-Bootstrap UI</ListGroupItem>
                                        </ListGroup>
                                        
                                        <Card.Footer>
                                            <Card.Link href="https://github.com/pcassioppi/SongSpots"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Card.Link>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                <br />
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>Last.FM Spotify Data Scraper</Card.Title>
                                        </Card.Header>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem> Full stack web application using Django REST framework, MongoDB, and React.js</ListGroupItem>
                                            <ListGroupItem> Utilized BeautifulSoup python library and MongoDB change streams to dynamically crawl users' Last.FM data and retrieve track analysis data from Spotify’s API</ListGroupItem>
                                            <ListGroupItem> Implemented Bootstrap framework to display crawled data in an intuitive UI when user made request to the Django RESTFUL API from the React.js frontend</ListGroupItem>
                                        </ListGroup>
                                        {/* <Card.Text>     - Full stack web application using Django REST framework, MongoDB, and React.js</Card.Text>
                                        <Card.Text>     - Utilized BeautifulSoup python library and MongoDB change streams to dynamically crawl users' Last.FM data and retrieve track analysis data from Spotify’s API</Card.Text>
                                        <Card.Text>     - Implemented Bootstrap framework to display crawled data in an intuitive UI when user made request to the Django RESTFUL API from the React.js frontend</Card.Text> */}
                                        <Card.Footer>
                                            <Card.Link href="https://github.com/pcassioppi/TopMusic"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Card.Link>
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                                
                            </Tab>
                            <Tab eventKey="SongSpots" title="SongSpots">
                                <br />
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>SongSpots: Song Location Loggin Application</Card.Title>
                                            <Card.Subtitle>Technologies Used: <br/> Python, JavaScript, Django, React.js, GraphQL (Graphene & URQL), Postgres, JWT Authentication, AWS RDS, React Google Maps</Card.Subtitle>
                                            <br/>
                                            <Card.Link href="https://github.com/pcassioppi/SongSpots"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Card.Link>
                                        </Card.Header>
                                        {/* <Card.Text> */}
                                <br />
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                    
                                <h4>Why?</h4>
                                <div>
                                    This Web app was something I built because I wished something like it existed. I love listening to music, and when I listen to some songs, they take me back to a certain memory from my life. These memories
                                     are associated with the place I was in when they happened, so I wanted to be able to pinpoint the exact (or rough) location I was at when I heard a certain song, and I wanted to be able to describe the
                                      memory and what was so memorable about that song at that place and time.
                                </div>
                                <div>
                                This project also helped me bring together new technologies that I have been teaching myself, and gave me great hands on experience with them. I plan to make this my more "long-term" project, so I will be 
                                updating it with different features over time.
                                </div>
                                {/* <br/> */}
                                </ListGroupItem>
                                <ListGroupItem>
                                <h4>Overview</h4>
                                <div>
                                The application allows a user to create a profile and login. After that, they can add songs to their list, by clicking the location on the Google Maps interface and entering the songs title, artist, the date 
                                the memory is from, and a description of the memory. The information is then sent to the database, and they can see their information displayed either by refreshing the page, or by navigating to their page of
                                 existing songs. The songs are displayed as points on the map, and the user can hover over them to read their details. The users songs are also displayed in a list (without coordinates) on the side of the page.
                                </div>

                                {/* <br/> */}
                                </ListGroupItem>
                                <ListGroupItem>
                                <h4>The Deets (Technical Details)</h4>
                                <div>
                                The app was made using an AWS RDS Postgres database instance that was made accessible through a Django API using GraphQL to query the data. The frontend was made using React to display the queried data, as
                                 well as display the Google Maps API component. The application security was done using Django/GraphQL JWT authentication.
                                </div>

                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>Database: AWS RDS PostgreSQL</h5>
                                <div>
                                I chose to use a relational database for this program because there was no need for a document based system. The data is pretty uniform, as all songs will have mostly the same info, so they could all stick to
                                 a relational format. The data and API also rely heavily on relations between tables, so a relational database made the most sense (duh). Using Postgres was an easy choice, since it is becoming the industry
                                  standard for relational databases. Hosting the database on AWS was an easy choice to make, as I have experience with it and it's much easier than spinning up a database everytime I turn my computer on. 
                                  Having the database already on AWS also makes it easier to host the app online in the future.
                                </div>

                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>Backend: Django, GraphQL, JWT Authentication</h5>
                                <div>
                                Since I've already made a couple of REST APIs in my programming days (Django/Spring Boot), I wanted to expand my knowledge, and see what other type of APIs were out there. This naturally led me to GraphQL, 
                                which I had heard about before but I hadn't really looked at it. Once I did, I realized how rad GraphQL is. Having the data available, at a single endpoint, to be queried makes the API much mkore efficient,
                                 as there is not any unnecessary data fetched, and it also results in less requests having to be sent. For the frontend, it makes things a ton easier, as the queries are more adaptable and can be made to
                                  perfectly suit the needs of the frontend, getting exactly the data needed with one request. I think GraphQL will be my go to API now instead of REST.
                                </div>
                                <br/>
                                <div>
                                 I used Django and the Graphene library to create the API, since I already had experience with Django. This made it easier to learn and implement a GraphQL API, as everything else was mostly familiar to me. 
                                 Django also has a very robustUser model with authentication, and I wanted to get some experience usiing it to create an application that uses JWT authentication.
                                </div>

                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>Frontend: React, urql, JWT Authentication, Google Maps API</h5>
                                <div>
                                For the fronted of the application I chose to use React, since it offers a great way to create a dynamic webpage with multiple parts. I also have experience with it, so it made it easier to work with and
                                 learn GraphQl as I made the project. To query the data from the GraphQL API, I used the urql library. Urql makes it very easy to query data, and send mutations to the API. Doing the frontend, I saw some 
                                 of the of the advantages of GraphQL, which make queries very adaptable and efficient. The way I was able to query exactly the data I needed, in the format I needed, from one endpoint, was excellent.
                                </div>

                                <br/>
                
                                <div>
                                This project required the use of JSOn Web Tokens for authentication, since I wanted to be able to show users their specific data. When the data requests were sent, the users token was sent as a header,
                                 and the API returned only that users data, or would return the sent data with a relation to mark the user that submitted it.
                                </div>
                                <br/>
                                <div>
                                A key part of this project was the ability to pinpoint on a map where the user had listened to the song they are logging. To achieve this, I used the Google Maps Javascript API, which allows for many
                                 (awesome) customizations by the user. The power to have a satellite map in a project is good enough, but the ability to work with the map as a developer really impressed me. The users can see markers
                                  where there songs are logged (saved using latitude/longitude), and can interact with the map fully. The users can also click on the map to log the coordinates of the click, which are then sent to the
                                   API with the information of the song they are recording, allowing for precise locations.
                                </div>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <h5>Images</h5>
                                    <h6>Coming soon....</h6>

                                </ListGroupItem>
                                </ListGroup>
                                        {/* </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Tab>
                            <Tab eventKey="TopMusic" title="TopMusic">
                            <br />
                                <Card>
                                    <Card.Body>
                                        <Card.Header>
                                            <Card.Title>TopMusic: Last.FM/Spotify Data Scraping Site</Card.Title>
                                            <Card.Subtitle>Technologies Used: <br/> Python, JavaScript, Django, React.js, MongoDB, Spotify API, Axios</Card.Subtitle>
                                            <br/>
                                            <Card.Link href="https://github.com/pcassioppi/SongSpots"><img src="https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png" width="60" height="35" alt=''/></Card.Link>
                                        </Card.Header>
                                        {/* <Card.Text> */}
                                <br />
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                    
                                <h4>Why?</h4>
                                <div>
                                I made this project to get better with Python and Javascript, as well as gain experience with new (to me) technologies, including Django, MongoDB, and React. I wanted to answer the question I've always had
                                 "How are complex websites really structured?", and I gained a lot of understanding of what goes into constructing a dynamic website. This included creating the NoSQL MongoDB database to store the information,
                                  the Django REST API to host the info, and the React frontend to display the information.
                                </div>
                                <div>
                                I started out wanting to find a way to connect my last.fm data with the spotify data for each track, and I thought it would be a good project to create a web app out of what I was doing.
                                </div>
                                {/* <br/> */}
                                </ListGroupItem>
                                <ListGroupItem>
                                <h4>Overview</h4>
                                <div>
                                The project takes a user entered last.fm username, and scrapes their last.fm library information to present their top 50 artists/albums/tracks, as well as retrieve the spotify audio data for the tracks in 
                                their library. (The top 50 number is arbitrary and the program could be expanded to cover their whole library, but this would increase latency significantly)
                               </div>

                                {/* <br/> */}
                                </ListGroupItem>
                                <ListGroupItem>
                                <h4>The Deets (Technical Details)</h4>
                                <div>
                                The app uses a MongoDB NoSQL Database to store the data, which is accessed through a Django REST API. The frontend was made using React.js and Axios to call and send data through the api
                                 underneath a React-Bootstrap interface. The program also has a script that scrapes a users data when they enter their username through the frontend to the API. This is done using
                                 MongoDB Change Streams as a trigger, so when a username is entered into the database, the BeautifulSoup scraping function runs and stores the users data in the database. Then, the program finds the 
                                 Spotify data for the tracks that have them available, and added those to the database.
                                </div>

                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>Database: MongoDB Database</h5>
                                <h6>Tools: Replica Set, Change Streams</h6>
                                <div>
                                The data for this project was stored in a MongoDB NoSQL database. I wanted to use a NoSQL/document database to store the information, because a) I wanted experience with it and b) I was unsure of
                                 the structure of the data, and I wanted the adaptability of a document database to adjust to any changes in the schemas. The schemaless design did come in handy when storing the Spotify data, as
                                  some of the tracks didn't have the data available. The schema-less database allowed the inforrmation to not be stored reulting in no wasted space being used to store NULL values for the
                                   unretrievable data.
                                </div>
                                <br/>
                                <div>
                                In order to have the scraping functionality I wanted to use, I ended up using MongoDB's Change Streams as a trigger to scrape the users data and the Spotify info. Change Streams is a function that
                                 is provided by MongoDB that allows admins to see what changes are happening in their database, in real time. You can see details of each change made, including what data was just entered (like a
                                  username). I used this function to watch the "User" collection in the database and run the scraping script once a user POST-ed their username to the collection through the front end. This was done
                                   because I wanted to be able to scrape individual users in order to save space on the database.
                                </div>
                                <br/>
                                <div>
                                A Replica Set is required in order to run the Change Streams function in MongoDB, since you want to be able to read and write to the database at the same time. In my case, the Change Stream is reading
                                 the database to see if any changes are occurring, and the API is also using the database to read/write any information it needs.
                                </div>


                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>Change Streams Scraper</h5>
                                <h6>Tools: BeautifulSoup, PyMongo, Spotify API</h6>
                                <div>
                                Once the users entered their username and POST-ed it to thje database through the frontend, the Change Stream would trigger a script to scrape the data for that user from Last.FM. The script scraped
                                 the users page and parsed their information using the BeautifulSoup library. The data for the users tracks, artists, and albums were all entered into the collections for their respective data in the
                                  MongoDB database using PyMongo.
                                </div>
                                <br/>
                                <div>
                                Once the information for the user was entered into the database, the script would move on and retrieve the Spotify data for the tracks. These two were seperated so the user could see their Last.FM
                                 information on the frontend first, before the lengthy process of getting the Spotify data occurred (which was the slowest part of the program). First, the program checked if the track already had
                                  its spotify data present in the database, if it didn't, the track was saved into an array to be entered into the Spotify scraper. The script would go to each tracks individual last.fm page and see
                                   if there was a Spotify link present, if there was, the Spotify ID was taken and used to retrieve the track data from Spotify's Developer API. This data was then stored on the database
                                    spotifyTrackData collection with the songs (slightly altered) last.fm link as it's id (this was chosen as the ID because it was also present in the users information, making it simple for the 
                                    users track page to find it).
                                </div>
                                
                                

                                </ListGroupItem>
                                <ListGroupItem variant="secondary">
                                <h5>LastFMDjango REST API</h5>
                                <h6>Tools: Django REST Framework, Djongo</h6>
                                <div>
                                The REST API was created to act as an interface between the MongoDB and the React frontend. Views were created for tracks, albums, artists, users, and the spotify data.
                                </div>
                                <br/>
                                <div>
                                The API framework I chose to use for this project was Django's REST Framework. I used Django both because I wanted experience with a major Python framework, and it had the support I needed to use
                                 the NoSQL MongoDB database I wanted to use. Though Django is made for a relational database, I was able to use the Djongo engine to make the framework mesh with MongoDB. Djongo translates the SQL
                                  queries made to the API as MongoDB queries, allowing the fromework and database to work together as if it were a relational database.
                                </div>

                                </ListGroupItem>

                                <ListGroupItem variant="secondary">
                                <h5>React Frontend</h5>
                                <h6>Tools: React-Bootstrap, Axios, HTML</h6>
                                <div>
                                Components: Home/Form page, Artist Page, Track Page, Album Page, Track Spotify Data Page, Navigation bar
                                </div>
                                <br/>
                                <div>
                                For the front end of the application I decided to use React because of its large usage in industry, and its ability to create dynamic web applications. Axios was the library used to make requests
                                 to the REST API. The front end allows users to POST their username, and GET their last.fm and Spotify track data. React-Bootstrap was used for many of the elements becauyse I think it looks nice
                                  :^) , and it is commonly used. This gave me good experience in what it is like to design a website so it is intuitive and looks good (and works lol, my focus for this project was function over form).
                                </div>

                                </ListGroupItem>

                                <ListGroupItem>
                                    <h5>Images</h5>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Home/Form Page:
                                            </Card.Text>
                                        </Card.Body>
                                    <Card.Img variant="bottom" src="https://raw.githubusercontent.com/pcassioppi/TopMusic/master/Screenshots/form.png" fluid/>
                                    </Card>
                                    <br/>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Track Page (at the top right the username is saved after it is entered):
                                            </Card.Text>
                                        </Card.Body>
                                    <Card.Img variant="bottom" src="https://raw.githubusercontent.com/pcassioppi/TopMusic/master/Screenshots/trackPage.png" fluid/>
                                    </Card>
                                    <br/>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Track Spotify Data Page:
                                            </Card.Text>
                                        </Card.Body>
                                    <Card.Img variant="bottom" src="https://raw.githubusercontent.com/pcassioppi/TopMusic/master/Screenshots/SpotDataPage.png" fluid/>
                                    </Card>
                                    <br/>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Artist Page:
                                            </Card.Text>
                                        </Card.Body>
                                    <Card.Img variant="bottom" src="https://raw.githubusercontent.com/pcassioppi/TopMusic/master/Screenshots/artistPage.png" fluid/>
                                    </Card>
                                    <br/>
                                    <Card>
                                        <Card.Body>
                                            <Card.Text>
                                                Album Page:
                                            </Card.Text>
                                        </Card.Body>
                                    <Card.Img variant="bottom" src="https://raw.githubusercontent.com/pcassioppi/TopMusic/master/Screenshots/albumPage.png" fluid/>
                                    </Card>

                                </ListGroupItem>
                                </ListGroup>
                                        {/* </Card.Text> */}
                                    </Card.Body>
                                </Card>
                            </Tab>
                            
                            
                            
                        </Tabs>
                    </Card.Body>
                </Card>
            </Container>
        );
    
    }
}
