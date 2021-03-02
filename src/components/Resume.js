import React, {Component} from 'react';
import {Card, Container, Jumbotron, Image, Col} from 'react-bootstrap';

export default class Resume extends Component{

    
    

    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                        <h1>Portfolio Test - RESUME</h1>
                        <Image src="https://raw.githubusercontent.com/pcassioppi/pages_files/gh-pages/resume/ResumeJPEG.jpg"/>
                        
                        
                </Jumbotron>
            
            </Container>
        );
    
    }
}