import React from 'react';
import { Section, Columns, Column, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, Image, CardContent, Content, Tag, Title } from "bloomer";
import './Projects.css';

const Projects = props => (

    <Column>
        <Card>
            <CardHeader>
                <CardHeaderTitle>
                    <Title><span className="header">{ props.title }</span></Title>
                </CardHeaderTitle>
                <CardHeaderIcon>
                    <a target="_blank" rel="noopener noreferrer" href={ props.deployed }><Icon className="fas fa-link" /></a>
                </CardHeaderIcon>
                <CardHeaderIcon>
                    <a target="_blank" rel="noopener noreferrer" href={ props.github }><Icon className="fas fa-github" /></a>
                </CardHeaderIcon>
            </CardHeader>

            <CardImage>
                <Image isRatio='4:3' src={ props.image } />
            </CardImage>

            <CardContent>
                <Content>
                    <p>{ props.description }</p>
               </Content>
            </CardContent>
        </Card>
    </Column>

)

export default Foot;