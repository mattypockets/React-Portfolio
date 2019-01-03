import React from "react";
import { Section, Columns, Column, Heading, Content, Title } from "bloomer";
import "./About.css";

const About = () => (

            <div>
                <Section>
                    <Columns isCentered>
                        <Column isSize="3/4">
                                <Title isSize={3}>About</Title>
                                <hr></hr>
                                <p>Hi, I'm Matt! I am a Full Stack Web Developer with a passion for creating attractive,
                                functional sites for any purpose. I’m experienced in HTML, CSS, JavaScript, jQuery, MySQL, Node.js, React and more. I am also constantly
                                learning new technologies to help expand my knowledge base and flexibility in development.</p>
                                <br></br>
                                <p>In my previous job experience, I have trained and managed teams of 10-15 employees. With those teams I emphasized communication,
                                collaboration, and attention to detail. This experience has carried over into my development work where I prioritize clean,
                                workable code and communication with team members. Feel free to check out my GitHub page for examples of my code.</p>    
                        </Column>
                        <Column isSize="1/4">
                                <Title isSize={3}>Education</Title>
                                    <hr></hr>
                                    <Content>
                                        <Title isSize={5}>University of Minnesota</Title>
                                        <p>2018 - St. Paul, MN</p>
                                        <p>Coding Bootcamp, Full-Stack Web Development</p>
                                        <br></br>
                                        <Title isSize={5}>Wisconsin Lutheran College</Title>
                                        <p>2012 - Milwaukee, WI</p>
                                        <p>Bachelor of Science: Psychology</p>
                                    </Content>
                        </Column>
                    </Columns>

                        <Column>
                            <Title isSize={3}>Skills</Title>
                            <hr></hr>
                                <Content>
                                    <i class="skills devicon-html5-plain-wordmark"></i>
                                    <i class="skills devicon-css3-plain-wordmark"></i>
                                    <i class="skills devicon-bootstrap-plain-wordmark"></i>
                                    <i class="skills devicon-javascript-plain"></i>
                                    <i class="devicon-jquery-plain-wordmark"></i>
                                    <i class="skills devicon-express-original-wordmark"></i>
                                    <i class="skills devicon-nodejs-plain-wordmark"></i>                                        
                                    <i class="skills devicon-heroku-original-wordmark"></i>
                                    <i class="skills devicon-mysql-plain-wordmark"></i>
                                    <i class="skills devicon-sequelize-plain-wordmark"></i>
                                    <i class="skills devicon-mongodb-plain-wordmark"></i>
                                    <i class="skills devicon-git-plain-wordmark"></i>
                                    <i class="skills devicon-github-plain-wordmark"></i>
                                    <i class="skills devicon-react-original-wordmark"></i>                                        
                                </Content>
                        </Column>
                </Section>
            </div>
)


export default About;