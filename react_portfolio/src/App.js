import React, {Component} from 'react';
import Nav from './Components/Navbar';
import Foot from './Components/Footer';
import Projects from './Components/Projects';
import projectInfo from './projects.json';
import {Section, Columns} from 'bloomer';
import About from './Components/About';
import Welcome from './Components/Welcome';

class App extends Component {

state = {
  projectInfo
}

render() {
  return (
    <div>
      <Nav />
      <Welcome />
      <About />
      <div>
        <Section className="projectSection">
            <Columns isCentered>
              {this.state.projectInfo.map(project => (
                <Projects
                  title = {project.title}
                  image = {project.image}
                  github = {project.github}
                  deployed = {project.deployed}
                  description = {project.description}
                /> 
              ))}
          </Columns>
        </Section>
      </div>

      <Foot />
    </div>
  )
}
  

}

export default App;
