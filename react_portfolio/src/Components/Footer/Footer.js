import React from 'react';
import {Footer, Container, Content, Icon, Column, Columns} from 'bloomer';
import './Footer.css';

const Foot =() => (

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
                <a href="https://github.com/mattypockets" target="_blank" rel="noopener noreferrer"><Icon className='fab fa-github link' /></a>
                <a href="https://linkedin.com/in/matthew-gasper" target="_blank" rel="noopener noreferrer"><Icon className='fab fa-linkedin link' /></a>
                </Column>
                </Columns>
            </Content>
    </Container>
</Footer>

)

export default Foot;