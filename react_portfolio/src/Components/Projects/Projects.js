import React from 'react';
import { Column, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, Image, CardContent, Content, Title } from "bloomer";
import './Projects.css';

const Projects = props => (

    <Column className="project">
        <Card className="projectCard">
            <CardHeader>
                <CardHeaderTitle>
                    <Title><span className="header">{ props.title }</span></Title>
                </CardHeaderTitle>
                <CardHeaderIcon>
                    <a target="_blank" rel="noopener noreferrer" href={ props.deployed } className="projectLink"><Icon className="fas fa-link projectLink" /></a>
                </CardHeaderIcon>
                <CardHeaderIcon>
                    <a target="_blank" rel="noopener noreferrer" href={ props.github }className="projectLink"><Icon className="fab fa-github projectLink" /></a>
                </CardHeaderIcon>
            </CardHeader>

            <CardImage>
                <Image isRatio='4:3' src={ window.location.origin + props.image } />
            </CardImage>

            <CardContent>
                <Content>
                    <p>{ props.description }</p>
               </Content>
            </CardContent>
        </Card>
    </Column>

)

export default Projects;