import React, { Component } from 'react';
import projects from '../../db/projects.json';
import './Project.css';

class ProjectCards extends Component {
  state = {
    projects: [],
    img: "",
    title: "", 
    description:"",
    github: "",
    liveSite:""
  };

  componentWillMount(){
    this.loadProjects();
  }

  loadProjects(){
    this.setState({
      projects: projects
    });
  }

  render(){
    return(
      <div>
        {this.state.projects.length ?(
          <div className="row">
            {this.state.projects.map(project => (
              <div key={project.id} className="col s12 m12 l6">
              <div className="card">
                <div className="card-image">
                  <img className="activator" src={require("../../images/"+project.img)} alt=""/>
                </div>
                <div class="card-content">
                  <span class="card-title">{project.title}</span>          
                  <p>
                    {project.description}
                  </p>
                </div>
                <div class="card-action">
                  <a href={project.github} target="_blank">Github</a>
                  <a href={project.liveSite} target="_blank">Demo</a>        
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <h3>No results to display...</h3>
        )}
      </div>
    );
  }
}

export default ProjectCards;