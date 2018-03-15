import React from "react";
// import {Row, Col} from 'react-materialize';
import './Home.css';
import andreJarboeResume from './andreJarboeResume.pdf';
import ProfilePic from './profilePic.jpg';
// import Timeline  from "../components/Timeline/Timeline";



const Home = () =>
<section id='Home' className=''>
  <div className='container'>
    <div className='row center'>
        <h4 className='center-align'>Andre' Jarboe II</h4>
    <h5 className='center-align'>Full Stack Web Developer</h5>
    <img id='profilePic' className='center img responsive circle' alt='Andre' src={ProfilePic} />
    </div>

    <div className='card'>
      <p id='bio' className="flow-text">
        Ever since I was a young boy I have been fascinated with outer space and the technology used to get there. I hope I get to experience space travel before my time is up. I also love to solve riddles and puzzles. This skill has helped me when the going gets tough in programming. I know there is always a solution to the problem I just might have to look at it from a different angle. I love learning web development and tutoring my classmates. I find that I have a more positive attitude than most people. The way I see it “You can complain and be nothing, or work and be something...” 
      </p>
        <section id="resume" className="text-center">
          <a href="./andreJarboeResume.pdf" download={andreJarboeResume} class="waves-effect waves-light btn ">Resume</a>
          <a href="/contact" class="waves-effect waves-light btn">Contact</a>   
        </section>     
    </div>
  </div>

  {/* Experience  */}
  {/* <Timeline /> */}

  {/* Sample Portfolio */}
  <section id="portfolio" className='row'>
    <div className='container'>
    <div className='col s12'>
      <h5 className='center'>Portfolio</h5>
    </div>
      <div className='col s12 m6 l3'>
        <div className='card'>
          <div className="card-image">
            <img className="activator" src={ProfilePic} />
          </div>
          <div class="card-content">
            <span class="card-title">Card Title</span>          
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">Github</a>
            <a href="#">Demo</a>            
          </div>
        </div>
      </div>

      <div className='col s12 m6 l3'>
        <div className='card'>
          <div className="card-image">
            <img className="activator" src={ProfilePic} />
          </div>
          <div class="card-content">
            <span class="card-title">Card Title</span>          
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">Github</a>
            <a href="#">Demo</a>            
          </div>
        </div>
      </div>

      <div className='col s12 m6 l3'>
        <div className='card'>
          <div className="card-image">
            <img className="activator" src={ProfilePic} />
          </div>
          <div class="card-content">
            <span class="card-title">Card Title</span>          
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">Github</a>
            <a href="#">Demo</a>            
          </div>
        </div>
      </div>

      <div className='col s12 m6 l3'>
        <div className='card'>
          <div className="card-image">
            <img className="activator" src={ProfilePic} />
          </div>
          <div class="card-content">
            <span class="card-title">Card Title</span>          
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">Github</a>
            <a href="#">Demo</a>            
          </div>
        </div>
      </div>
      <div className=' center col s12'>
        <a href="/projects" class="waves-effect waves-light btn">View More</a>
    </div>
    </div>
  </section>

  {/* From the blog */}
  <section id='blog' className='row'>
    <div className='Container'>
      <h5 className='center'> From The Blog</h5>
    </div>
  </section>

    {/* My Skills */}
    <section id='skills' className='row'>
    <div className='Container center'>
      <h5 className='center'>My Skills</h5>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          Node.js
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          MongoDB
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          React.js
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          Express.js
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          JavaScript
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          MySQL
        </div>
        <div class="chip">
          <img src="images/yuna.jpg" alt="" />
          Node.js
        </div>
    </div>
  </section>
</section>



export default Home;