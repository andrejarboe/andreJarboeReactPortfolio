import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import axios from "axios";

import Styles from './Blog.css';
import data from './blogPost.json';

import {Carousel,
        Card,
        CardTitle,
        Collection,
        CollectionItem} 
        from 'react-materialize';


class Blog extends Component {

  state = {
    blogPost:[],
    title: "",
    body: ""
  };

  constructor(props) {
    super(props);
    this.state = {width: window.innerWidth};
    console.log('Window size: ' + this.state.width);
  }

  handleResize() {
    this.state = {width: window.innerWidth};
    if(this.state.width <= 720){
      console.log('Window size on change: ' + this.state.width);
    }
    
  }

componentWillMount(){
    console.log('this is working');
    window.addEventListener('resize', this.handleResize);
    this.loadBlogs();
  }

loadBlogs = () => {
console.log(data);
  this.setState({
    blogPost: data,
    title: "",
    body: ""
  });

  // console.log(this.state.blogPost);
}


// componentWillUnmount(){
//     window.removeEventListener('resize', this.handleResize);
// }

  render(){
    return(
      <section id='blog'>
        <div className="row">
          <div className="container">
            <h4 className='center'>Blog</h4>
            <div className=" ">
              <div className="col s12 m8 l8">
                <Carousel
                  fixedItem={<button className='btn'>MORE</button>}
                  options={{ fullWidth: true }}

                >
                  <div className='red'>
                    <h2>First Panel</h2>
                    <p className='white-text'>This is your second panel</p>
                  </div>
                  <div className='amber'>
                    <h2>Second Panel</h2>
                    <p className='white-text'>This is your second panel</p>
                  </div>
                </Carousel>

                {/* mini blogs */}
                {this.state.blogPost.length ?(
                  <div>
                    {this.state.blogPost.map(blog => (
                      <div key={blog.id} className="col s12 m6">
                        <div className="card">
                          <div className="card-image">
                            <img src="images/sample-1.jpg" />
                            <span className="card-title">{blog.title}</span>
                          </div>
                          <div className="card-content">
                            <p>{blog.body}</p>
                          </div>
                          <div className="card-action">
                            <a href="#">This is a link</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ): (
                <h3>No Results to Display</h3>
                )}
              </div>

              {/* Side bar */}
              <div className="col s12 m4 l4 mobileHide">
                <div className="card">
                  <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab"><a href="#test4">Social Links</a></li>
                    </ul>
                  </div>
                  <div className="card-content grey lighten-4">
                    <div id="test4">Test 1</div>
                    <div id="test4">Test 2</div>
                    <div id="test4">Test 3</div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab"><a href="#popular">Popular</a></li>
                      <li className="tab"><a className="active" href="#archive">Archive</a></li>
                    </ul>
                  </div>
                  <div className="card-content grey lighten-4">
                    <div id="popular">Test 1</div>
                    <div id="archive">Test 2</div>
                  </div>
                </div> 

                <div className="card">
                  <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                      <li className="tab"><a href="#categories">Categories</a></li>
                    </ul>
                  </div>
                  <div className="card-content grey lighten-4">
                    <div id="categories">Test 1</div>
                    <div id="categories">Test 1</div>
                    <div id="categories">Test 1</div>
                    <div id="categories">Test 1</div>
                    <div id="categories">Test 1</div>                    
                  </div>
                </div> 

              </div>
          </div>
        </div>
        </div>

      </section>
    );

  }
}


export default Blog;