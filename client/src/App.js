import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Navbar from './components/Navbar/Navbar'; 


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
         <Navbar />
      </MuiThemeProvider>
    );
  }
}


export default App;
