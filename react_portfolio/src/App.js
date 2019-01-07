import React, {Component} from 'react';
import Nav from './Components/Navbar';
import Foot from './Components/Footer';
import Project from './Components/Project';
import About from './Components/About';
import Welcome from './Components/Welcome';
import {BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

render() {
  return (
    <Router>
      <div>
        <Nav />
        <Welcome />
        <About />
        <Route path='projects/'><Project /></Route>
        <Foot />
      </div>
    </Router>
  )
}
  

}

export default App;
