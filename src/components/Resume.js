import React, {Component} from 'react';
import {Card, Container, Jumbotron, Image, Col} from 'react-bootstrap';

export default class Resume extends Component{

    
    

    render(){
        return (
            <Container>
                <Jumbotron className="text-center">
                        <Card>
                            <Image src="https://raw.githubusercontent.com/pcassioppi/pages_files/gh-pages/resume/ResumeJPEG.jpg" fluid/>
                        </Card>
                        
                </Jumbotron>
            
            </Container>
        );
    
    }
}