import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import axios from "axios";

import Styles from './Blog.css';
import data from '../../db/blogPost.json';

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
  let blogs = [];
  for(let i = 0; i<4; i++){
    blogs.push(data[i]);
  }
  console.log(blogs);
    this.setState({
      blogPost: blogs
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
            <h4 className='center'>Blogs</h4>
             {/* mini blogs */}
             <div>
              {this.state.blogPost.length ?(
                <div>
                  {this.state.blogPost.map(blog => (
                    <div key={blog.id} className="col s12">
                      <div class="card small horizontal">
                        <div class="card-image">
                          <img src={require("../../images/"+blog.img)} />
                        </div>
                        <div class="card-stacked">
                          <div class="card-content">
                          <span className="card-title">{blog.title}</span>
                            <p>{blog.body.substring(0,200)+"..."}</p>
                          </div>
                          <div class="card-action">
                            <a href={"blog/"+blog.id}>Read more</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ): (
              <h3>No Results to Display</h3>
              )}
            </div>
          </div>
        </div>
      </section>
    );

  }
}


export default Blog;