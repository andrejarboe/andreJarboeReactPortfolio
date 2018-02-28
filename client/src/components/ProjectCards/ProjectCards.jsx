import React, { Component } from 'react';
import projects from '../../db/projects.json';

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
              <div key={project.id} className="col s4 m4 l6">
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
                  <a href={project.github}>Github</a>
                  <a href={project.liveSite}>Demo</a>            
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