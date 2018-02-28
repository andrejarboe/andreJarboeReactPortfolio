import React, { Component } from 'react';
import Styles from './Projects.css';
import ProjectCards from '../../components/ProjectCards/ProjectCards';

class Projects extends Component {
  render(){
    return(
      <section id="projects">
        <h3 className="center">Projects</h3>
        <div className="container">
          <ProjectCards />
        </div>
      </section>
    );
  }
}

export default Projects;