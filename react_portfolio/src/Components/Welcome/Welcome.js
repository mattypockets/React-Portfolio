import React from "react";
import { Hero, HeroBody, Container, Title, Subtitle } from "bloomer";
import "./Welcome.css";
import Particles from 'react-particles-js';
import ParticlesConfig from '../../particlesjs-config.json'

class Welcome extends React.Component {
    

    render() {
        return(
            <Hero className="banner" isColor='dark' isSize='large' id="home">
                <HeroBody>
                    <Particles params={ParticlesConfig} />
                    <Container hasTextAlign='centered'>
                        <Title><span className="title">Matthew Gasper</span></Title>
                        <Subtitle>Full-Stack Web Developer</Subtitle>
                        
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}
export default Welcome;