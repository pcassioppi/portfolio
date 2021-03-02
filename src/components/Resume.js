import React, {Component} from 'react';
import {Card, Container, Jumbotron, Image, Col} from 'react-bootstrap';
import '../App.css'

export default class Resume extends Component{

    
    

    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                    {/* will want to reduce the size of the resume image eventually */}
                        <Card>
                            <Card.Img src="https://raw.githubusercontent.com/pcassioppi/pages_files/gh-pages/resume/ResumeJPEG.jpg" fluid/>
                        </Card>
                        
                </Jumbotron>
            
            </Container>
        );
    
    }
}