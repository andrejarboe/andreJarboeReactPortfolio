import React from "react";
// import {Row, Col} from 'react-materialize';
import styles from './Home.css';
import ProfilePic from './profilePic.jpg';



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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis et
        tortor ac tincidunt. In euismod iaculis lobortis. Vestibulum posuere molestie
        ipsum vel sollicitudin. Vestibulum venenatis pharetra mi, ut vestibulum elit
        ultricies a. Vestibulum at mollis ex, ac consectetur massa. Donec nunc dui,
        laoreet a nibh et, semper tincidunt nunc. Donec ac posuere tellus. Pellentesque
        tempus suscipit velit sit amet bibendum.
      </p>
    </div>
  </div>
  {/* Sample Portfolio */}
</section>

export default Home;