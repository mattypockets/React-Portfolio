import React from "react";
import { Hero, HeroBody, Container, Title, Subtitle } from "bloomer";
import "./Welcome.css";

class Welcome extends React.Component {
    state={

    }

    render() {
        return(
            <Hero className="banner" isColor='info' isSize='large'>
                <HeroBody>
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