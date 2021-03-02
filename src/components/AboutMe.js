import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col} from 'react-bootstrap';
import '../App.css'

export default class AboutMe extends Component{

    
    

    render(){
        return (
            <Container bg="secondary">
                <Jumbotron className="text-center">
                        <h1>Portfolio Test - About Me</h1>
                </Jumbotron>
            
            </Container>
        );
    
    }
}
