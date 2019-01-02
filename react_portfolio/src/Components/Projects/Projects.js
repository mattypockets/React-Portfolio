import React from 'react';
import { Section, Columns, Column, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, Icon, CardImage, Image, CardContent, Content, Tag, Title } from "bloomer";
import './Projects.css';

const Projects =() => (

<Footer id='footer'>
    <Container>
            <Content isSize='small'>
                <Columns>
                <Column isSize="1/4" hasTextAlign="centered">
                    <p><Icon className='fas fa-chevron-left'/><strong>/MG</strong><Icon className='fas fa-chevron-right' /></p>
                </Column>

                <Column isSize="1/2" hasTextAlign="centered">
                    <p><Icon className='far fa-copyright'/>Matthew Gasper 2018</p>
                </Column>

                <Column isSize="1/4" hasTextAlign="centered">
                <a href="https://github.com/mattypockets" target="_blank"><Icon className='fab fa-github' /></a>
                <a href="https://linkedin.com/in/matthew-gasper" target="_blank"><Icon className='fab fa-linkedin' /></a>
                </Column>
                </Columns>
            </Content>
    </Container>
</Footer>

)

export default Foot;