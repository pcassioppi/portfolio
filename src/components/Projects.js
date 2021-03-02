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
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                        <div>Test1</div>
                    </Tab>
                    <Tab eventKey="profile" title="SongSpots">
                        <div>Test2</div>
                    </Tab>
                    <Tab eventKey="contact" title="TopMusic">
                        <div>Test3</div>
                    </Tab>
                </Tabs>
            
            </Container>
        );
    
    }
}
