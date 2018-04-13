import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // state = {

  // }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    // const { name, email, subject, message } = this.state;

    // if (this.state.name && this.state.email) {
    axios.post("/api/post", {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    // .then(res => this.loadBooks())
    // .catch(err => console.log(err));
    // }
  }

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row animated bounceInLeft">
            <div className="col m10 offset-m1 s12">
              <h2 className="center-align">Contact Me</h2>
              <div className="row">
                <form
                  onSubmit={this.handleSubmit}
                  className="col m8 offset-m2 s12"
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        value={this.state.name}
                        id="name"
                        type="text"
                        onChange={this.handleChange} />
                      <label for="name">Name:</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        value={this.state.email}
                        id="email"
                        type="email"
                        className="form-input"
                        type="text"
                        onChange={this.handleChange} />
                      <label for="email">Email:</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        value={this.state.subject}
                        id="subject"
                        type="text"
                        onChange={this.handleChange} />
                      <label for="name">Subject:</label>
                    </div>
                    <div className="input-field col s12">
                      <textarea
                        value={this.state.message}
                        id="message"
                        className="materialize-textarea"
                        type="text"
                        onChange={this.handleChange}
                      ></textarea>
                      <label for="message">Message:</label>
                    </div>
                  </div>

                  {/* // <div className="divider"></div> */}
                  <div className="row">
                    <div className="col m12">
                      <p className="right-align">
                        <button
                          className="btn btn-large waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          Send Message
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;