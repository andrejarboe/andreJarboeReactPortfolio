import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from './App.css'
import Nav from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'
import Home from "./pages/Home";
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';


class App extends Component {
  componentDidMount(){
    console.log('this is working')
  }

  render(){
    return(
      <div className="App Site">
				<div className="Site-content">
          <Router>
            <div>
            <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />                            
              <Route exact path="/blog" component={Blog} />              
            </div>
          </Router>
				</div>
				<Footer />
			</div>
    );
  }
}

export default App;
