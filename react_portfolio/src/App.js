import React from 'react';
import Nav from './Components/Navbar';
import Foot from './Components/Footer';
import Projects from './Components/Projects';
import projectInfo from './projects.json';

class App extends Component {

state = {
  projectInfo
}

render() {
  return (
    <div>
      <Nav />
      {this.state.projectInfo.map(project => (
        <Projects
          title = {project.title}
          image = {project.image}
          github = {project.github}
          deployed = {project.deployed}
          description = {project.description}
        /> 
      ))}
      <Foot />
    </div>
  )
}
  

}

export default App;
