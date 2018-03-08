import React from "react";
import {Footer} from 'react-materialize';
import styles from './Footer.css';



const MyFooter = () =>  
  <Footer copyrights="© 2018 Andre Jarboe II"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    }
    links={
      <ul>
        {/* <p>Site Map</p>         */}
        <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
        <li><a className="grey-text text-lighten-3" href="/projects">Projects</a></li>
        <li><a className="grey-text text-lighten-3" href="/blog">Blog</a></li>
        <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
        <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>        
      </ul>
    }
    className='example'
  >
		<h5 className="white-text">Andre' Jarboe II</h5>
		<p className="grey-text text-lighten-4">“You can complain and be nothing, or work and be something...”</p>
</Footer>;

export default MyFooter;