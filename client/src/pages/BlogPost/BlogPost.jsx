import React, { Component } from 'react';
import data from '../../db/blogPost.json';
import './BlogPost.css';

class BlogPost extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body:  "",
      img: "",
      post: []
    }
  }

  componentDidMount(){
    this.loadBlogPost();
    console.log(this.state.img);
  }

  loadBlogPost = () => {
    const blogId = this.props.match.params.id - 1;
    const blog = [data[blogId]];
    this.setState({
      title:data[blogId].title,
      img: "../../images/" + data[blogId].img,
      body: blog.body,
      post: blog
    });
  }

  render(){

    return(
      <section id="blogPost">
        <div className="row">
          <div className="container">
            {/* <h4 className="center">{this.state.post}</h4> */}
            <div>
              {this.state.post.length ?(
                <div>
                  {this.state.post.map(blog => (
                    <div key={blog.id} className="col s12">
                      <div class="card">
                        <div class="card-image">
                          <img src={require("../../images/"+blog.img)} />
                        </div>
                        <div class="card-stacked">
                          <div class="card-content">
                          <span className="card-title">{blog.title}</span>
                            <p>{blog.body}</p>
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
              <h3>No Blog Data</h3>
              )}
            </div> 
          </div>
        </div>
			</section>
    );
  }
}

export default BlogPost;
