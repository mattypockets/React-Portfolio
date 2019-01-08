import React from 'react';

import Projects from '../Projects';
import projectInfo from '../../projects.json';
import {Section, Columns} from 'bloomer';

class Project extends React.Component {

state = {
    projectInfo
  }

render () {
    return (
        <div>
          <Section className="projectSection" id="portfolio">
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
    )
}
}

export default Project