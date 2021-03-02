import React, {Component} from 'react';
import {Card, Container, Jumbotron, Col} from 'react-bootstrap';
import {Document} from 'react-pdf'

export default class Resume extends Component{

    
    

    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                        <h1>Portfolio Test - RESUME</h1>
                        <Document file = "https://github.com/pcassioppi/pages_files/blob/gh-pages/resume/Peter%20Cassioppi%20Resume.pdf"/>
                        
                        
                </Jumbotron>
            
            </Container>
        );
    
    }
}