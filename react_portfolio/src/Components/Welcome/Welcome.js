import React from "react";
import { Hero, HeroBody, Container, Title, Subtitle } from "bloomer";
import "./Welcome.css";
import Particles from 'react-particles-js';
import ParticlesConfig from '../../particlesjs-config.json';
import Typed from 'typed.js';

class Welcome extends React.Component {
    
   componentDidMount() {
       const strings = ["Full-Stack Web Developer",
                        "Graduate of the University of Minnesota Coding Bootcamp",
                        "Skills include......",
                        "EIGHT-FOOT VERTICAL LEAP",
                        "Also HTML5, CSS, JS, node.js, MYSQL, MongoDB, React, and more!",
                        "Always learning",
                        "I enjoy cooking, Pokemon GO, podcasts, and anime",
                        "Feel free to scroll down any time",
                        "Or just hang out here, I'm not your boss",
                        "I'm going to start over now...^4000"];
       const options = {
           strings: strings,
           typeSpeed: 50,
           backSpeed: 30,
           backDelay: 1000,
           loop: true
       };
       this.typed = new Typed(this.el, options);
   }

   componentWillUnmount(){
       this.typed.destroy();
   }

    render() {
        return(
            <Hero className="banner" isColor='dark' isSize='large' id="home">
                <HeroBody>
                    <Particles params={ParticlesConfig} />
                    <Container hasTextAlign='centered'>
                        <Title><span className="title">Matthew Gasper</span></Title>
                        <Subtitle><span ref={(el) => {this.el = el;}} /></Subtitle>
                        
                    </Container>
                </HeroBody>
            </Hero>
        )
    }
}
export default Welcome;