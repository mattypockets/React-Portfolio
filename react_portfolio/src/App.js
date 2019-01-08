import React, {Component} from 'react';
import Nav from './Components/Navbar';
import Foot from './Components/Footer';
import Project from './Components/Project';
import About from './Components/About';
import Welcome from './Components/Welcome';
import Contact from './Components/Contact';
import {BrowserRouter as Router } from "react-router-dom";

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <Nav />
        <Welcome />
        <About />
        <Project />
        <Contact />
        <Foot />
      </div>
    </Router>
  )
}
  

}

export default App;
