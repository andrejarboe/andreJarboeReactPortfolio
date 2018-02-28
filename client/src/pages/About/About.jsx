import React, { Component } from 'react';
import ProfilePic from '../profilePic.jpg';
import Styles from './About.css';

class About extends Component {
  render(){
    return(
      <section id="about">
        <h3 className="center">About Me</h3>
        <div className="container">
          
          <p>
          <img src={ProfilePic} alt="Andre Jarboe II"/>
          Hi, my name is Andre Jarboe II. I am a recent Georgia Tech Coding boot camp graduate. I am currently taking classes at Devry University in the field of Computer Information Systems with a specialization in Software programming. Right now I am looking for a job in web development. 
I am passionate about frontend and backend development. I love javascript and how I can use it on the frontend for React and the back end for Nodejs. 
My interest outside of work are working out, acting, traveling with family, and playing with my dog Samson.
          </p>
        </div>
      </section>
    );
  }
}

export default About;